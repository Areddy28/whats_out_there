// current weather conditions bar goes here.
// maybe logo goes here as well?
// TO DO: make route to weather api
import telescope from "../images/telescope_image.png";
import WeatherRoute from "../routes/WeatherRoute";
// import {searchInputs, loadWeatherByLocation} from "../context/SearchProvider";
import fence from "../images/fence.png";
import GoogleAuth from "./GoogleAuth";

export default function Header() {
    return (
        <header aria-label="addheader" role="header">
            {/* <div className="logo_pic">
                <img alt="What's Out There Logo" src={telescope}/>
            </div>

           <WeatherRoute /> */}

            {/* <GoogleAuth /> */}

            <img aria-label="addedImage" role="Image" src={fence} alt="fence with night sky in the background." className="fence_pic" />
            <h1 aria-label="addedTitle" role="Title" className="homepage_h1">What's Out There?</h1>

        </header>
    )
}