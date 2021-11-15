// import axios from "axios";
// import NewsInterface, { ArticlesEntity } from "../models/NewsInterface";

// const newsKey = process.env.REACT_APP_NEWS_KEY || '';

// export function getNews(): Promise<NewsInterface[]> {
//     return axios
//         .get<NewsInterface[]>
//         (`https://newsapi.org/v2/everything?domains=nasa.gov&language=en&pageSize=10&apiKey=${newsKey}`)
//         .then(res => res.data);
// }

import axios from "axios";
import NewsInterface, { ArticlesEntity } from "../models/NewsInterface";

const newsKey = process.env.REACT_APP_NEWS_KEY || "";

// export function getNews(): Promise<NewsInterface> {
//     return axios.get<NewsInterface>(`https://newsapi.org/v2/everything?domains=nasa.gov&language=en&pageSize=10&apiKey=${newsKey}`)
//         .then(res => res.data)
// }

export function getNews(): Promise<NewsInterface> {
    return axios.get<NewsInterface>(`https://gnews.io/api/v4/top-headlines?q=nasa&topic=science&token=${newsKey}&lang=en`)
    .then(res => res.data)
}
