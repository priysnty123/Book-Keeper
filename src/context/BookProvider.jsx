import { createContext, useState, useCallback, useEffect } from 'react';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState("");
    const [show, setShow] = useState(false);
    const [debouncedInput, setDebouncedInput] = useState("");

    const makeAPIcall = useCallback(async (input) => {
        // Make an API call here
        try {
            setLoading(true);
            const response = await fetch(`https://openlibrary.org/search.json?q=${input.trim()}&limit=10&page=1`);
            const result = await response.json();
            setBooks(result.docs || []);
            setLoading(false);
            console.log(result.q); // Use result directly to log the response
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        if (debouncedInput)
            makeAPIcall(debouncedInput);
    }, [debouncedInput, makeAPIcall]);

    return (
        <BooksContext.Provider value={{ books, setBooks, loading, makeAPIcall, data, setData, show, setShow, debouncedInput, setDebouncedInput }}>
            {children}
        </BooksContext.Provider>
    );
};
