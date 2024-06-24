
/* eslint react/prop-types: 0 */
function SearchResults({ books }) {
    const docs = books;

    return (
        <div className="flex mx-2 w-full border border-red-500 p-1 rounded-sm">
            <div className=" block w-20 h-20">
                <img src={`https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg`} alt={`${docs.title} avatar`} className="  w-full h-full object-cover" />
            </div>


            <div className=" flex flex-col text-white px-2">
                <span className=" text-md font-bold">{`${docs.title}`}</span>
                <span className=" font-serif text-sm">
                    {`by ${docs.author_name ? docs.author_name.slice(0, 5).map(data => (' ' + data)) : "unknown"}`}
                </span>
                <span className=" text-sm"> {`Rating: ${(docs.ratings_average ? docs.ratings_average.toPrecision(2) : "??")}/5`} </span>
                <span className=" text-sm"> {`Publish Year: ${(docs.publish_year ? docs.publish_year[0] : "??")}`} </span>
            </div>

        </div>
    )
}

export default SearchResults;