/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Events.css";

SwiperCore.use([EffectCoverflow, Pagination]);

const eventsData = [
  {
    title: "Node Js | Express Js Workshop",
    name: "Ayush Sharma",
    imageSrc: "https://i.ytimg.com/vi/wVo-UMit5Ig/maxresdefault.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus maiores tempore nulla accusamus quos non veritatis tempora ipsam eligendi? Mollitia?",
  },
  {
    title: "MongoDb Workshop",
    name: "By Sushant Bishoi",
    imageSrc: "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus maiores tempore nulla accusamus quos non veritatis tempora ipsam eligendi? Mollitia?",
  },
  {
    title: "Security and Auth Workshop",
    name: "By Sushant Bishoi",
    imageSrc: "https://www.indusface.com/wp-content/uploads/2020/07/why-authentication-alone-is-not-enough-web-app-security.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus maiores tempore nulla accusamus quos non veritatis tempora ipsam eligendi? Mollitia?",
  },
];

const Event = () => {
  return (
    <div className="event-container">
        <h1 className="event-tittle">Upcoming Events</h1>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
      >
        {eventsData.map((event, index) => (
          <SwiperSlide key={index} className="card">
            <div className="card_image">
              <img src={event.imageSrc} alt="card image" />
            </div>
            <div className="card_content">
              <span className="card_title">{event.title}</span>
              <span className="card_name">{event.name}</span>
              <p className="card_text" style={{ color: "black" }}>
                {event.description}
              </p>
              <button className="card_btn">View More</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Event;
