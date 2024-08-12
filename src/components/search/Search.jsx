import { useContext, useEffect } from "react";
import { MyContext } from "../../context";
import SearchForm from "./SearchForm";

const Search = () => {
  const context = useContext(MyContext);
  const scrollDocumentToTop = context.scrollDocumentToTop;
  useEffect(() => {
    scrollDocumentToTop();
  }, []);

  return (
    <>
      <SearchForm />
    </>
  );
};

export default Search;
