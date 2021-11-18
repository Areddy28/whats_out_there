// park list would already be set closest to furthest based on zipcode entered on homepage. (pass zipcode as props)
// this page would include another zipcode search so the user can look up more than one location.
// use case (example): if you live in detroit but plan on taking a trip to Arizona.
// list and define dark park designations (maybe put sources here too)
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import WeatherRoute from "../routes/WeatherRoute";
import DarkParkSearch from "./DarkParkSearch";
import DarkPark from "../models/DarkPark";
import getParkList from "../services/GetParkList";
import darkpark1 from "../images/darkpark1.jpg";
import darkpark2 from "../images/darkpark2.jpg";
import darkpark3 from "../images/darkpark3.jpg";
import darkpark4 from "../images/darkpark4.jpg";
import Carousel from "./Carousel";




export default function DarkParkList(): any {

  const [darkParkList, setDarkParkList] = useState<DarkPark[]>([]);
  useEffect(() => {

    loadParkList();
  }, [])
  function loadParkList() {
    getParkList().then(res => {
      setDarkParkList(res);
    })
  }

  // function imgScroll () {
  //     return (
  //       <div className="parkScrollDiv">
  //         <div className="imgContainer">
  //           <div className="darkpark1"></div>
  //           <div className="darkpark2"></div>
  //           <div className="darkpark3"></div>
  //           <div className="darkpark4"></div>
  //         </div>
  //         <a className="next" onClick={scroll.bind(null, 1)}>&#10095;</a>
  //       </div>
  //     )
  //   }

  return (
    <div>

      <DarkParkSearch />
      <h2 aria-label="addH2" role="H2" className="park-list-headline">Full Dark Park List</h2>
      <div className="full-park-list" >
        {/* <h2 aria-label="addH2" role="H2" className="park-list-headline">Full Dark Park List</h2> */}

        {darkParkList.map((data, index) => {
          console.log(data);
          return (
            <div key={index} className="info-card dark-park-list-card">
              {/* <p>{data._id}</p> */}
              <p className="park-list-name"><a href={data.url} target="_blank">{data.name}</a></p>
              <p>{data.state}</p>
              <p><strong>Light Pollution:</strong> {data.lightPollution}</p>
              <p><strong>Is Camping Available?:</strong> {data.camping}</p>
              <p><strong>Fee:</strong> {data.fee}</p>
              <p>{data.description}</p>
              <details>
                <summary>Click for Full Address</summary>
                <p><strong>Address:</strong> {data.address}</p>
                <a href={`https://www.google.com/maps/search/?api=1&query=${data.latlong[0]}%2C${data.latlong[1]}`} target={"_blank"}>Click here for Google Map directions</a>

                {/* https://maps.google.com/?ll=latitude,longitude */}
                {/* <Link to={{ pathname: `https://maps.google.com/?ll=${data.latlong[0]}${data.latlong[1]}` }} target="_blank" /> */}
                {/* <p>{data.latlong}</p> */}
              </details>
            </div>
          )
        })}

      </div>

    // </div >
  )


}
