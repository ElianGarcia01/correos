import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Importación de íconos
import admin from "../assets/admin.svg?url";
import assignments from "../assets/assignments.svg?url";
import calendar from "../assets/calendar.svg?url";
import chrome from "../assets/chrome.svg?url";
import classroom from "../assets/classroom.svg?url";
import docs from "../assets/docs.svg?url";
import drive from "../assets/drive.svg?url";
import editors from "../assets/editors.svg?url";
import gemini from "../assets/gemini.svg?url";
import gmail from "../assets/gmail.svg?url";
import googleCh from "../assets/google-chat-v2.svg?url";
import googleCl from "../assets/google-cloud.svg?url";
import meet from "../assets/meet.svg?url";
import sheets from "../assets/sheets.svg?url";
import slides from "../assets/slides.svg?url";
import tasks from "../assets/tasks-v2.svg?url";

const images = [
  admin,
  assignments,
  calendar,
  chrome,
  classroom,
  docs,
  drive,
  editors,
  gemini,
  gmail,
  googleCh,
  googleCl,
  meet,
  sheets,
  slides,
  tasks,
];

export default function ImageSlider() {
  return (
    <section className="py-5 px-4 sm:px-8 lg:px-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
        Google for Education
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        loop={true}
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 3 },
          480: { slidesPerView: 4 },
          640: { slidesPerView: 5 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 8 },
          1280: { slidesPerView: 9 },
        }}
        className="w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center">
            <img
              src={img}
              alt={`Google tool ${i}`}
              className="w-12 sm:w-16 lg:w-20 object-contain transition-transform duration-300 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
