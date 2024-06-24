import { useEffect, useState } from "react";


/* eslint react/prop-types: 0 */
export default function Card({ book, searchResult, setItems, items }) {

    const docs = book;

    const [added, setAdded] = useState(false);

    useEffect(() => {
        const books = (JSON.parse(localStorage.getItem("myCollection"))) || [];
        books.forEach(book => {
            if (book.key === docs.key) {
                setAdded(true);
            }
        })
    }, [docs.key])


    function HandleClick(e, id) {
        if (e === "+") {
            const books = (JSON.parse(localStorage.getItem("myCollection"))) || [];
            localStorage.setItem("myCollection", JSON.stringify([...books, docs]));
            setAdded(true);
        } else {
            let newItems = [];
            items.forEach(item => {
                if (item.key !== id) newItems.push(item);
            });
            localStorage.setItem("myCollection", JSON.stringify([...newItems]));
            setItems(newItems);
        }
    }

    return (
        <div className="flex w-full mx-2 border border-red-500 p-2 rounded-md bg-black relative">
            <img src={`https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg`} alt={`${docs.title} avatar`} className=" w-40 h-40" />


            <div className=" flex flex-col text-white px-2">
                <span className=" text-md font-bold">{`${docs.title}`}</span>
                <span className=" font-serif text-sm">
                    {`by ${docs.author_name ? (docs.author_name.slice(0, 5).map(data => (' ' + data)) + (docs.author_name.length > 5 ? " ..." : null)) : "unknown"}`}
                </span>
                <span className=" text-sm"> {`Rating: ${(docs.ratings_average ? docs.ratings_average.toPrecision(2) : "??")}/5`} </span>
                <span className=" text-sm"> {`Publish Year: ${(docs.publish_year ? docs.publish_year[0] : "??")}`} </span>
            </div>

            <div className="absolute sign-btn">
                {
                    (searchResult ?
                        ((added == true) ?
                            <button className="text-2xl text-white font-bold active:text-red-600 mt-2" disabled={added}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                    <path fill="#c8e6c9" d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z"></path><polyline fill="none" stroke="#4caf50" strokeMiterlimit="10" strokeWidth="4" points="14,24 21,31 36,16"></polyline>
                                </svg>
                            </button>
                            :
                            <button className="text-2xl text-white font-bold active:text-red-600" onClick={(e) => HandleClick(e.target.innerText, docs.key)}>+</button>
                        )
                        :
                        <button className="text-xl text-white font-bold active:text-red-600" onClick={(e) => HandleClick(e.target.innerText, docs.key)}>x</button>
                    )
                }
            </div>

        </div>
    )
}
// return default Card;