import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function FreeBook() {
  const [freeCourseData, setFreeCourseData] = useState([]);
  useEffect(() => {
    const getFreeCoursedata = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const freeCourseData = res.data.filter(
          (data) => data.category === "Free"
        );
        setFreeCourseData(freeCourseData);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    getFreeCoursedata();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-8 container">
        <div>
          <h1 className="text-xl font-bold pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, amet qui? Nisi odit porro est minus tempora maxime ut
            corporis Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {freeCourseData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
