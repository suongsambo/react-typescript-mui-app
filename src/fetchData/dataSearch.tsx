import axios from "axios";
import { Fragment, useEffect, useState } from "react";

export const SearchData = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("redux");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );

      setData(result.data);
    };

    fetchData();
  }, [query]);

  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>

      <ul>
        {data.hits.map((item: any) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
