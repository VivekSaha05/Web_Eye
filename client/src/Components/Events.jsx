/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Alert from "./Alert";
import "swiper/swiper.min.css";
import {Link} from "react-router-dom";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Events.css";

SwiperCore.use([EffectCoverflow, Pagination]);

const eventsData = [
  {
    title: "Mastering JavaScript",
    name: "By Ankit Chodhury || Vivek Saha",
    imageSrc: "https://i.imgur.com/z1GkN1D.jpg",
    date: "Date - 18th August",
    time: " Time - 6:30pm to 8:30pm",
    venue: "Venue - Smart Class Lab",
    description:
      "Join us for an immersive workshop on JavaScript, where we'll dive deep into the fundamentals and advanced concepts of the language.",
  },
  {
    title: "Web Applications with Node.js and Express.js",
    name: "By Naimish Sahu || Satyam Mohanty",
    imageSrc: "",
    description:
      "Discover the world of server-side JavaScript with Node.js and Express.js. This event will equip you with the knowledge and tools to create robust, scalable web applications.",
  },
  {
    title: "MongoDB & Mongoose",
    name: "By Naimish Sahu || Vivek Saha",
    imageSrc: "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png",
    description:
      "Get ready to explore the wonders of NoSQL databases with MongoDB and Mongoose. In this event, we'll delve into the world of document-based data storage and learn how to interact with MongoDB using Mongoose, a powerful ODM (Object Data Modeling) library",
  },
  {
    title: "MVC Architecture for Web Applications",
    name: "By Ayush Sharma || Naimish Sahu",
    imageSrc: "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png",
    description:
      "Are you curious about how modern web applications are structured? Join us for a comprehensive overview of the Model-View-Controller (MVC) architecture.",
  },
];

const Event = () => {
  return (
    <div className="event-container">
      <h1 className="event-title">Upcoming Events</h1>
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
              <span className="card_name">{event.date}</span>
              <span className="card_name">{event.venue}</span>
              <p className="card_text" style={{ color: "black" }}>
                {event.description}
              </p>
              {/* Use index to conditionally set the route */}
              {index === 0 ? (
                <Link to="/register" className="card_link">
                  <button className="card_btn">View More</button>
                </Link>
              ) : (
                <Link to="/alert" className="card_link">
                  <button className="card_btn">View More</button>
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Event;
