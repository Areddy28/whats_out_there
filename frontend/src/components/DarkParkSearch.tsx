import { useEffect, useState, useContext } from "react";
import DarkPark from "../models/DarkPark";
import { LongLat } from "../models/LongLat";
import getParkList from "../services/GetParkList";
import {WeatherInterface} from "../models/WeatherInterface";
import { getSetWeather, getWeekForecast } from "../services/GetWeather";
// useContext stuff
import { SearchContext } from "../context/SearchProvider";
import NavbarWeather from "./NavbarWeather";



export default function DarkParkSearch() {
    // receive zip code from form
    // make sure it's on the list. If not return an err message
    // return lon/lat , 
    // useContext stuff. Object containing searchLat, searchLon etc.
    const {searchInputs } = useContext(SearchContext);
    const [zipLat, setZipLat] = useState(searchInputs[0].searchLat);
    const [zipLon, setZipLon] = useState(searchInputs[0].searchLon);
    const [darkParkList, setDarkParkList] = useState<DarkPark[]>([]);
    const [weather, setWeather] = useState<WeatherInterface>();
    const [forecast, setForecast] = useState<WeatherInterface>();
    const [numParks, setNumParks] = useState(0);


    useEffect(() => {
        getParkList().then(function (res) {
            {
                res.map((data) => {
                    let pLat = data.latlong[0];
                    let pLon = data.latlong[1];
                    let zLat = zipLat;
                    let zLon = zipLon;

                    function calcDistance(zLat: number, zLon: number, pLat: number, pLon: number) {
                        var R = 6371; // km
                        var dLat = toRad(pLat - zLat);
                        var dLon = toRad(pLon - zLon);
                        var lat1 = toRad(zLat);
                        var lat2 = toRad(pLat);

                        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
                        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                        var d = R * c;
                        // return Math.round(d * .621371); // convert the km to miles
                        var solution = Math.round(d * .621371); // convert the km to miles
                        // return solution;

                        return data.miles = solution;

                    }
                    // Converts numeric degrees to radians
                    function toRad(Value: number) {
                        return Value * Math.PI / 180;
                    }
                    calcDistance(zLat, zLon, pLat, pLon);
                })
            }
            setDarkParkList(res);
        });

        getSetWeather(zipLat, zipLon).then(res => setWeather(res));
        getWeekForecast(zipLat, zipLon).then((res) => setForecast(res));


    }, [zipLat])


    return (
        <>

            <NavbarWeather weather={weather} />

            <div className="dark-park-search">
            <h2 className="dark-park-search-headline">Enter your zip to find parks near you.</h2>
            <form className="dark-park-search-form" aria-label="addForm" role="Form" onSubmit={(e) => { console.log(searchInputs); }}>
           
                <label className="park-search-label" aria-label="addLabel" role="Label" htmlFor="search"></label>

                    <input className="dark-park-search-zip" name="search" id="search" type="text" placeholder="Enter Your Zip" onChange={(e) => {
                        if (e.target.value.length == 5) {
                            LongLat.forEach(array => {
                                setNumParks(10);
                                if (array[0] == e.target.value) {
                                    setZipLat(array[1]);
                                    setZipLon(array[2]);
                                }
                                searchInputs.unshift({ searchLat: zipLat, searchLon: zipLon, hasSearched: true });
                            })
                        }
                    }} />
                <button className="dark-park-search-button" aria-label="addButton" role="Button" type="submit" onClick={(e) => {
                    e.preventDefault();
                    console.log(zipLat);
                    console.log(zipLon);
                    let searchLatLon = { searchLat: zipLat, searchLon: zipLon, hasSearched: true };
                    searchInputs.unshift(searchLatLon);
                }
                }>Search</button>
            </form>
            </div>

            <div className="park-list">
                {darkParkList.sort((a, b) => a.miles - b.miles).map((data, index) => {
                    return (
                        <div key={index} className="info-card park-list-card">
                            <p className="park-list-name"><a href={data.url} target="_blank">{data.name}</a></p>
                            <p>{data.state}</p>
                            <p>{data.description}</p>
                            <p>{data.miles} miles from your location.</p>
                        </div>
                    )
                }).slice(0, numParks)}
            </div>
        </>
    )

}
