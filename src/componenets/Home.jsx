import React from "react";
import Carousel from "./Carousel";
import CardVeri from "./CardVeri";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [urun, setUrun] = useState([]);

  const fetchUrun = async () => {
    const response = await axios.get("http://localhost:3000/urunler");
    setUrun(response.data);
  };

  useEffect(() => {
    fetchUrun();
  }, []);
  return (
    <>
      <Carousel />
      <CardVeri veri={urun} />
    </>
  );
}

export default Home;
