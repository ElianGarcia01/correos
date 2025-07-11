import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import SliderGoogle from "../components/SliderGoogle";
import { FaAnglesRight } from "react-icons/fa6";
import Correo from "../assets/logo_correo.png";
import Slider1 from "../assets/slider-01.webp";
import Slider2 from "../assets/slider-02.webp";


const accesos = [
  {
    titulo: "Correo Trabajadores",
    ruta: "/trabajadores",
  },
  {
    titulo: "Correo Estudiantes",
    ruta: "/estudiantes",
  },
];

export default function Inicio() {
  return (
    <div className="w-full bg-[#f8fafc] text-gray-800 font-sans">
      {/* Carousel */}
      <section className="relative">
        {/* Logo centrado */}
        <img
          src={Correo}
          alt="Logo UAGro"
          className="absolute top-1/2 left-1/2 z-10 w-40 sm:w-52 md:w-72 lg:w-1/3 h-14 sm:h-20 md:h-28 lg:h-40 -translate-x-1/2 -translate-y-1/2"
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop
          className="h-[220px] sm:h-[350px] md:h-[450px] lg:h-[550px]"
        >
          <SwiperSlide>
            <img
              src={Slider1}
              alt="Banner 1"
              className="w-full h-full object-cover rounded-b-3xl"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Slider2}
              alt="Banner 2"
              className="w-full h-full object-cover rounded-b-3xl"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Información */}
      <section className="max-w-5xl mx-auto text-center py-5 px-6 sm:px-10 lg:px-0">
        <h1 className="text-[#192a48] text-3xl sm:text-4xl font-extrabold mb-5 leading-tight">
          Correo Electrónico Institucional UAGro
        </h1>
        <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          La Dirección General de Tecnologías, Innovación y Digitalización de la
          UAGro, como parte de sus servicios digitales a la comunidad
          universitaria, pone a su disposición la plataforma de Correo
          Electrónico Institucional basada en Google for Education.
        </p>
      </section>

      {/* Botones de acceso (trabajadores/estudiantes) */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-12 py-2">
        {accesos.map(({ titulo, ruta }) => (
          <div
            key={ruta}
            className="bg-white shadow-xl rounded-xl p-8 flex flex-col items-center transition"
          >
            <h3 className="text-xl sm:text-2xl text-gray-700 font-semibold mb-6">
              {titulo}
            </h3>
            <Link to={ruta} className="w-full">
              <button className="w-full py-3 bg-[#e53935] hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition cursor-pointer">
                Instrucciones para activar
                <FaAnglesRight className="text-lg inline-block ms-2 animate-pulse" />
              </button>
            </Link>
          </div>
        ))}
      </section>

      {/* Slider de logos */}
      <section className="max-w-6xl mx-auto px-2 sm:px-12 md:px-24 lg:px-48 py-12">
        <SliderGoogle />
      </section>
    </div>
  );
}
