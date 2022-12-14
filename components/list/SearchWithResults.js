import { FlatList } from "native-base";

import { IMAGE_URL } from "../services/api_config";
import Card from "../listitems/Card";

const SearchWithResults = (props) => {
  const { searchType, searchList } = props;

  return (
    <>
      {searchType == "movie" ? (
        <FlatList
          data={searchList}
          renderItem={({ item }) => (
            <>
              <Card
                poster_path={`${IMAGE_URL}${item.poster_path}`}
                original_title={item.original_title}
                popularity={item.popularity}
                release_date={item.release_date}
                navigation={props.navigation}
                id={item.id}
                type="movie"
              />
            </>
          )}
        />
      ) : searchType == "tv" ? (
        <FlatList
          data={searchList}
          renderItem={({ item }) => (
            <Card
              poster_path={`${IMAGE_URL}${item.poster_path}`}
              original_title={item.original_name}
              popularity={item.popularity}
              release_date={item.first_air_date}
              navigation={props.navigation}
              id={item.id}
              type="tv"
            />
          )}
        />
      ) : (
        <FlatList
          data={searchList}
          renderItem={({ item }) => (
            <>
              {item.media_type === "movie" ? (
                <Card
                  poster_path={`${IMAGE_URL}${item.poster_path}`}
                  original_title={item.original_title}
                  popularity={item.popularity}
                  release_date={item.release_date}
                  navigation={props.navigation}
                  id={item.id}
                  type="movie"
                />
              ) : (
                <Card
                  poster_path={`${IMAGE_URL}${item.poster_path}`}
                  original_title={item.original_name}
                  popularity={item.popularity}
                  release_date={item.first_air_date}
                  navigation={props.navigation}
                  id={item.id}
                  type="tv"
                />
              )}
            </>
          )}
        />
      )}
    </>
  );
};

export default SearchWithResults;
