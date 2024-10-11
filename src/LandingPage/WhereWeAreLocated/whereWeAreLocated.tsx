import Iframe from "react-iframe";
import "./whereWeAreLocated.css";

interface NearByLocationsProps{
    locationName : string,
    time : string,
}

function WhereWeAreLocated() {
 
    const nearbyLocations : NearByLocationsProps[] = [
        {
            locationName : "Hyderabad",
            time : "10:00 am"
        },
        {
            locationName : "Bangalore",
            time : "11:00 am"
        },
        {
            locationName : "Mumbai",
            time : "12:00 pm"
        },
        {
            locationName : "Delhi",
            time : "01:00 pm"
        },
        {
            locationName : "Chennai",
            time : "02:00 pm"
        },
        {
            locationName : "Kolkata",
            time : "03:00 pm"
        }
    ];


  return (
    <div className="topMainCotainer">
      <h1 className="mainTextHeading">
        Where we are{" "}
        <span className="mainTextHeading mainTextSpan">located</span>
      </h1>
      <div className="mainSectionContainer">
      <div className="mainIframeSection">
        
          <Iframe
            url="https://maps.google.com/maps?q=hyderabad&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            position="absolute"
            width="800px"
            id="myId"
            className="iframeContainer"
            
            styles={{ height: "500px",}}
          />
      </div>
      <div className="nearbyLocations">
        
        {nearbyLocations.map((location, index) => (
           
                <div className="nearbyLocationButton" key={index}>
                    <h2 className="nearbyLocationHeading">{location.locationName}:</h2>
                    <p className="nearbyLocationTime">{location.time}</p>
                </div>
            
       ) )}
        </div>
        </div>
    </div>
  );
}

export default WhereWeAreLocated;
