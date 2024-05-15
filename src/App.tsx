import { useState, useEffect } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import { getImages } from "../src/apiService/getImages";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import ImageGallery from "./components/imageGallery/ImageGallery";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/imageModal/ImageModal";
import "./App.css";

export interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
  description: string;
  likes: number;
}

function App() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [alt, setAlt] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [likes, setLikes] = useState<number>(0);

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { results, total_pages } = await getImages(query, page);
        if (!results.length) {
          setIsEmpty(true);
          return;
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const onHandleSubmit = (value: string): void => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setIsEmpty(false);
    setError(false);
    setIsVisible(false);
  };

  const onLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (obj: Image): void => {
    setShowModal(true);
    setUrl(obj.urls.regular);
    setAlt(obj.alt_description);
    setDescription(obj.description);
    setLikes(obj.likes);
  };

  const closeModal = (): void => {
    setShowModal(false);
    setUrl("");
    setAlt("");
    setDescription("");
    setLikes(0);
  };

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isVisible && (
        <LoadMoreBtn onClick={onLoadMore} disabled={isLoading}>
          {isLoading ? "Loading" : "Load more"}
        </LoadMoreBtn>
      )}
      {isLoading && <Loader />}
      {!images.length && isEmpty && <p>Sorry, there is no images...</p>}
      {error && <ErrorMessage />}
      <ImageModal
        url={url}
        alt={alt}
        modalIsOpen={showModal}
        closeModal={closeModal}
        description={description}
        likes={likes}
      />
    </>
  );
}

export default App;