import { FlatList } from "native-base";
import { IMAGE_URL } from "../services/api_config";
import Card from "../listitems/Card";

const TVList = (props) => {
  return (
    <FlatList
      data={props.tvList}
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
  );
};

export default TVList;
