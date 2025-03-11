import React, { useState, useEffect } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";
import Cards from '../component/Cards';


function FreeCourse() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get("https://iye.onrender.com/course");
        console.log(res.data);
        setCourse(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log("AxiosError", error);
      }
    };
    getCourse();
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <hr />
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-6'>
        <div className="flex justify-center items-center text-center">
          <div>
            <h1 className="font-semibold text-xl pb-2">
              Free Offered Services included with Courses
            </h1>
            <p>
              Explore a variety of courses offered for free to enhance your skills and knowledge.
            </p>
          </div>
        </div>




        <div>
          <Slider {...settings}>
            {course.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default FreeCourse
