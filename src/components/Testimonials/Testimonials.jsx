import React from "react";
import "./testimonial.css";
import Avt1 from "../../assets/Shubham_removed_background.png";

import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avt1,
    name: "Shashwati Diware",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni essvelit voluptate illo molestiae iusto, a inventore explicabo rerum",
  },
  {
    avatar: Avt1,
    name: "Shashwati Diware",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni essvelit voluptate illo molestiae iusto, a inventore explicabo rerum",
  },
  {
    avatar: Avt1,
    name: "Shashwati Diware",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni essvelit voluptate illo molestiae iusto, a inventore explicabo rerum",
  },
  {
    avatar: Avt1,
    name: "Shashwati Diware",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni essvelit voluptate illo molestiae iusto, a inventore explicabo rerum",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
