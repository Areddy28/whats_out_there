// returns 10 news stories (optional: able to load more) based on set space-related criteria.
// uses the newsapi
// TO DO: make route to newsapi
import NewsInterface, { ArticlesEntity } from "../models/NewsInterface";
import { useEffect, useState, useContext } from "react";
import { getNews } from "../services/GetNews";
import { WeatherInterface } from "../models/WeatherInterface";
import telescope_Right from "../images/telescope_Right.svg";
import telescope_Left from "../images/telescope_Left.svg";
import NewsFeed from "./NewsFeed";
import NavbarWeather from "./NavbarWeather";
import { getSetWeather, getWeekForecast } from "../services/GetWeather";
import { SearchContext } from "../context/SearchProvider";

// used type "any" to avoid errors, but switch back to "ArticlesEntity" when retrieving all the data.
export default function NewsFeedAll() {
  const [news, setNews] = useState<NewsInterface>();
  const [articles, setArticles] = useState<ArticlesEntity[]>();
  const [weather, setWeather] = useState<WeatherInterface>();
  const [forecast, setForecast] = useState<WeatherInterface>();
  const { searchInputs } = useContext(SearchContext);
  
  
  useEffect(() => {
    loadNews();
    getSetWeather(searchInputs[0].searchLat, searchInputs[0].searchLon).then(res => setWeather(res));
    getWeekForecast(searchInputs[0].searchLat, searchInputs[0].searchLon).then((res) => setForecast(res));
  }, [])
  
  
  function loadNews() {
    getNews().then(res => {
      console.log(res)
      // setNews(res)
      setArticles(res.articles)
      console.log(news)
    })
  }

  
  return (
    <div aria-label = "addDiv1" role = "Div1">
     
      <NavbarWeather weather={weather} />

      <div>
        <h2 className="newsfeed-headline">Top 10 News Stories</h2>


        <div>
          {articles?.map((article, index) => {
            function assignImage(index: any) {
              if (index % 2 == 0) {
                let img = telescope_Right;
                return img;
              } else {
                let img = telescope_Left;
                return img;
              }
            }
            return (
              <div key={index} className="newsArticle_div_all">
                <img src={assignImage(index)} alt="telescope inside of a circle" className="telescope_img" />
                <NewsFeed title={article.title} source={article.source} description={article.description} url={article.url} image={article.image} publishedAt={article.publishedAt} content={article.content} />
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}
