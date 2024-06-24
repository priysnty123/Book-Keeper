import SearchBox from "./components/SearchBox"
import { useEffect, useContext } from "react";
import Card from "./components/Card";
import { BooksContext } from "./context/BookProvider";

function App() {

  const { books, setBooks, loading, data, setData, show, setShow, debouncedInput, setDebouncedInput } = useContext(BooksContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(data);
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, [data, setDebouncedInput]);


  function handleOnChange(data) {
    setShow(false);
    setData(data);
    if (!data)
      setBooks([]);
  }


  return (
    <>
      <div className="h-screen w-full bg-blue-800">

        <div className="flex flex-col justify-center relative top-20">
          <SearchBox OnChange={(data) => handleOnChange(data)} data={data} books={books} OnClick={() => setShow(true)} show={show} />
        </div>



        {show ?
          <div className="absolute top-40 z-0 w-full">
            <div className=" flex justify-center font-bold text-2xl text-white">Search Results for: <span className="text-red-600 underline">{`${debouncedInput}`}</span> </div>
            {loading ?
              <div className="flex justify-center text-xl">Loading...</div>
              :
              <div className="grid grid-cols-3 gap-4 mt-3 mx-10 max-[426px]:grid-cols-1 max-[769px]:grid-cols-2">
                {
                  books?.map(book => <Card book={book} key={book.key} searchResult />)
                }
              </div>}

          </div>
          :
          null}
      </div>
    </>
  )
}

export default App
