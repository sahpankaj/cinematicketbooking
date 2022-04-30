import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Movie.css";
function Movie({ name, image, date, language, overview, img,key }) {
  const datee = new Date(date); // 2009-11-10
  const month = datee.toLocaleString("default", { month: "long" });
    let navigate = useNavigate();
  console.log(month);
  return (
    <div className="container">
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${img}")`,
        backgroundPosition: "center center",
      }}
    >
    
      <h3 className="banner_name">{name}</h3>
      <button
        onClick={() => navigate(`/bookings/${name}${img}/${date}/${overview}`)}
      >
        BOOK TICKETS
      </button>
    

      {month === "Invalid Date" ? null : (
        <h5 className="banner_date">
          {"Releasing in "}
          {month}
        </h5>
      )}
    
    </div>
    </div>
  );
}

export default Movie;
