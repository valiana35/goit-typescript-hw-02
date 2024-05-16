import axios from 'axios';

const API_KEY = "KHY_qjzNhH1UiRyRmWjLVIL4iaIIKfBINoOo9m-Q8J4";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.params = {
    orientation: "landscape",
    per_page: 12,
};

export const getImages = async <T>(query: string, page: number): Promise<T> => {
    const { data } = await axios.get<T>(`search/photos?client_id=${API_KEY}&query=${query}&page=${page}`);
    return data;
}