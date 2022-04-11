import { useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [searchResults, setSearchResults] = useState([]);
  const searchYelpApi = async (searchTerm) => {
    try {
      const res = await yelp.get("businesses/search", {
        params: {
          limit: 20,
          term: searchTerm,
          location: "san jose",
        },
      });
      setSearchResults(res.data.businesses);
    } catch (err) {
      console.log(err);
    }
  };
  return [searchYelpApi, searchResults];
};
