import { useState, useEffect, useContext } from "react";
import NASAInterface from "../models/NASAInterface";
import GetNASAPic from "../services/GetNASA"
import "./LearnMore.css";
import { getSetWeather, getWeekForecast } from "../services/GetWeather";
import { SearchContext } from "../context/SearchProvider";
import { WeatherInterface } from "../models/WeatherInterface";
import NavbarWeather from "./NavbarWeather";


export default function LearnMore() {
    const [picURL, setPicURL] = useState<NASAInterface>();
    const [weather, setWeather] = useState<WeatherInterface>();
    const [forecast, setForecast] = useState<WeatherInterface>();
    const { searchInputs } = useContext(SearchContext);
    
    useEffect(() => {
        loadPicURL();
        getSetWeather(searchInputs[0].searchLat, searchInputs[0].searchLon).then(res => setWeather(res));
        getWeekForecast(searchInputs[0].searchLat, searchInputs[0].searchLon).then((res) => setForecast(res));
    }, [])

    function loadPicURL() {
        GetNASAPic().then(res => setPicURL(res));
    }

    return (
        <div>
            
           {/* This is the navbar and weather */}
            <NavbarWeather weather={weather} />


            {/* <div className="BackgroundImage"> */}
            <div className = "BackgroundImage" style={{backgroundImage: `url(${picURL?.url})`}}>
            {/* <div className = "BackgroundImage" style={{backgroundImage: `url(https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw2101a_0.jpg)`}}> */}
                <div className="info-card learn-more-card">
                    <h1 aria-label = "addh1" role = "h1">Learn More about our Parks</h1>
                    <h2>Below lists the definitions of designations from the International Dark-Sky Association</h2>
                    <h3>For our app we gathered a list of IDA recognized cities, parks, preserves and we also added in places recommended by astronomers and photographers where you can witness some spectacular star gazing</h3>
                
                    <blockquote cite="https://www.darksky.org/our-work/conservation/idsp/become-a-dark-sky-place/">
                    <p>Terms and Definitions for Eligibility for Dark Sky Park Level: </p>
                    
                    <p>"<strong>Eligibility:</strong> The eligibility of sites for participation in the International Dark Sky Places program depends on the category of the designation sought.</p>

                    <p><strong>Communities:</strong> Must have some type of legal organization that is officially recognized by outside groups. This can be in the form of a town, city, municipality or other legally organized community (such as an urban neighborhood or subdivisions). There is no night sky quality criterion associated with this category.</p>

                    <p><strong>Parks:</strong> Must be public or private land, accessible to the public in part or whole, that is legally protected for scientific, natural, educational, cultural, heritage and/or public enjoyment purposes. The core area must provide an exceptional dark sky resource, relative to the communities and cities that surround it, where the night sky brightness is routinely equal to or darker than 21.2 magnitudes per square arc second.</p>

                    <p><strong>Reserves:</strong>  Must be  public or private land of at least 700 km², accessible to the public in part or whole, that is legally protected for scientific, natural, educational, cultural, heritage and/or public enjoyment purposes. The core area must provide an exceptional dark sky resource, relative to the communities and cities that surround it, where the night sky brightness is routinely equal to or darker than 20 magnitudes per square arc second.</p>

                    <p><strong>Sanctuaries:</strong> Must be public or private land, accessible to the public in part or whole, that is legally protected for scientific, natural, educational, cultural, heritage and/or public enjoyment purposes. The site must provide an exceptional dark sky resource where the night sky brightness is routinely equal to or darker than 21.5 magnitudes per square arc second.</p>

                    <p><strong>Urban Night Sky Places:</strong> Must be a municipal park, open space, observing site, or other similar property, accessible to the public in part or whole,
                    located within the region enclosed by a perimeter extending 50 km beyond the edge of the continuously-built area of a municipality with a permanent population of 10,000 or more people within its territorial jurisdiction,
                    or 50,000 or more people if defined as a “metro area” of two or more adjoining municipalities. There is no night sky quality criterion associated with this category."</p>
                    </blockquote>
                </div>
                <div className="info-card learn-more-card">
                    <h2>Tips for Star Gazing</h2>
                    <ul>
                        <li>
                            Get up to a high point with less view obstructions. 
                        </li>
                        <li>
                            If you're first starting out, wait to buy a telescope, buy some binoculars first. 
                        </li>
                        <li>
                            Know when to look. You want the Moon to be in the waxing or waning phase to see the craters of the moon in detail. To see the stars, look when the moon is in a crescent (when the moon is barely there) and gibbous phase(When the moon is not present) and make sure skies are clear.
                        </li>
                    </ul>
                </div>
                <div className = "info-card learn-more-card">
                    <h3>Sources</h3>
                    <ul>
                        <li>
                            <a href="https://darksitefinder.com/dark-sites/list-of-dark-sites/">Source: dark site finder</a>
                        </li>
                        <li>
                            <a href=" https://www.darksky.org/our-work/conservation/idsp/parks/">Source: dark sky conservation</a>
                        </li>
                        <li>
                            <a href="https://gnews.io/">Source: gnews API</a>
                        </li>
                        <li>
                            <a href="https://openweathermap.org/api">Source: OpenWeather API</a>
                        </li>
                        <li>
                            <a href="https://apod.nasa.gov/apod/astropix.html">Source: NASA Astronomy Picture of the Day</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
             
        
    )
}


