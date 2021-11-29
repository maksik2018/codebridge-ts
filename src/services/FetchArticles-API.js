import axios from "axios";
import qs from "qs";
export const getArticles = async (value) => {
  const query = qs.stringify({
    _where: {
      _or: [{ title_contains: value }, { summary_contains: value }],
    },
  });
  if (value) {
    return await axios.get(
      `https://api.spaceflightnewsapi.net/v3/articles?${query}&_sort=title:ASC&_limit=10`
    );
  } else {
    return await axios.get(`https://api.spaceflightnewsapi.net/v3/articles`);
  }
};

// export const searchArticles = async () => {
//   return await axios.get(
//     // `https://api.spaceflightnewsapi.net/v3/articles/${query}`
//     `https://api.spaceflightnewsapi.net/v3/articles?_where[titlde]=china`
//   );
// };

export const getArticleDetails = async (id) => {
  return await axios.get(
    `https://api.spaceflightnewsapi.net/v3/articles/${id}`
  );
};
