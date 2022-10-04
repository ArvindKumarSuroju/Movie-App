import { Text } from "native-base";
import { useState, useEffect } from "react";
import SearchFilter from "../containers/SearchFilter";
import SearchWithoutResults from "../list/SearchListWithoutResults";
import SearchWithResults from "../list/SearchWithResults";
import { getSearch } from "../services/api";
import Loading from "../layout/Loading";

const SearchResults = ({ navigation }) => {
  const [searchField, setSearchField] = useState(null);
  const [searchType, setSearchType] = useState("movie");
  const [searchList, setSearchList] = useState("");

  const searchResultsList = async () => {
    // console.log(searchField);
    // console.log(searchType);
    const search = await getSearch(searchField, searchType);

    setSearchList(search.results);
  };

  return (
    <>
      <SearchFilter
        searchField={searchField}
        setSearchField={setSearchField}
        searchType={searchType}
        setSearchType={setSearchType}
        searchResultsList={searchResultsList}
      />
      {/* <Text>{searchScreen}</Text> */}

      {searchList.length > 0 ? (
        <SearchWithResults
          searchType={searchType}
          searchList={searchList}
          navigation={navigation}
        />
      ) : (
        <SearchWithoutResults />
      )}
    </>
  );
};

export default SearchResults;
