import { useState, FormEvent, ChangeEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoSearch } from 'react-icons/io5';
import css from './SearchBar.module.css';

type InputProps = {
    onSubmit: (value: string) => void;
}

const SearchBar = ({ onSubmit }: InputProps) => {
    const [query, setQuery] = useState("")
    
    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setQuery(evt.target.value);
    };

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (!query.trim()) {
            return toast ("Please, enter search term!");
        }
        onSubmit(query);
        setQuery("");
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <button className={css.btnForm} type="submit"><IoSearch /></button>
            <input className={css.inputForm} type="text"
            name="query"
            value={query}
            autoFocus  
            placeholder="Search images and photos"
            onChange={handleChange} />
            <Toaster/>
        </form>
    );
}

export default SearchBar;