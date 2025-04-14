import React from "react";

import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/navigation.scss';
import '../../node_modules/swiper/modules/pagination.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Card from '../components/Card';

import planA from "../assets/PLAN A.png";
import planB from "../assets/PLAN B.png";
import planC from "../assets/PLAN C.png";
import planCC from "../assets/PLAN CC.png";

const planesImg = [
  { 'img': planA, 'nombre':  'PLAN A' },
  { 'img': planB, 'nombre':  'PLAN B' },
  { 'img': planC, 'nombre':  'PLAN C' },
  { 'img': planCC, 'nombre': 'PLAN C+'},
];

const PlanesSeleccion: React.FC = () => {
 

  return (
    <section>
      <h2 style={{ fontSize: "55px" }}>
        <i>Conoce nuestros planes</i>
      </h2>
      <div className="card-container">
        <Swiper
          observer={true}
          observeParents={true}
          spaceBetween={10}
          slidesPerView={1}
          loop={false}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {planesImg.map((plan) => (
            <SwiperSlide>
              <Card img={plan.img} btnText="Seleccionar" planName={plan.nombre} />
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <Card img={planB} btnText="Seleccionar" planName="PLAN B" />
          </SwiperSlide>
          <SwiperSlide>
            <Card img={planC} btnText="Seleccionar" planName="PLAN C" />
          </SwiperSlide>
          <SwiperSlide>
            <Card img={planCC} btnText="Seleccionar" planName="PLAN C+" />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );

}

export default PlanesSeleccion;
