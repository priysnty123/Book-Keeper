import Card from "./Card";
import { useState } from "react";


export default function Mycollection() {

    const [items, setItems] = useState((JSON.parse(localStorage.getItem("myCollection"))) || []);
    return (
        <div className="absolute top-20 z-0 w-full">
            <div className=" w-full flex justify-center text-3xl font- text-white underline">
                My Collection
            </div>

            <div className="grid grid-cols-3 gap-4 mt-3 mx-10 max-[426px]:grid-cols-1 max-[769px]:grid-cols-2 hidden-scrollbar">
                {
                    items?.map(book => <Card book={book} key={book.key} setItems={(e) => setItems(e)} items={items} />)
                }
            </div>

        </div>
    )
}