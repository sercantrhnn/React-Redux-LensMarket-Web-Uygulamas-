import React from "react";
import { Stack } from "@mui/material";
import Foto1 from "../img/foto1.jpg";
import Foto2 from "../img/foto2.jpg";
import Foto3 from "../img/foto3.jpg";

function Carousel() {
  return (
    <>
      <Stack margin={15} marginTop={8} height="400px">
        {" "}
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" style={{ marginTop: "15px" }}>
            <div className="carousel-item active">
              <img src={Foto1} className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={Foto2} className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={Foto3} className="d-block w-100" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Stack>
    </>
  );
}

export default Carousel;
