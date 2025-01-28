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


const PlanesSeleccion: React.FC = () => {
 

  return (
    <section>
      <h2 style={{ fontSize: "55px" }}>
        <i>Conoce nuestros planes</i>
      </h2>
      <div className="card-container">
        <Swiper
          observer={true} // Permite que Swiper observe los cambios en el DOM
          observeParents={true} // Asegura que los cambios en los padres también sean observados
          spaceBetween={10}
          slidesPerView={1}
          loop={false}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={{
            // Configuración de navegación
            nextEl: ".swiper-button-next", // Botón para ir al siguiente slide
            prevEl: ".swiper-button-prev", // Botón para ir al slide anterior
          }}
          modules={[Navigation, Pagination]} // Asegúrate de que el módulo de navegación esté habilitado
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide>
            <Card img={planA} btnText="Seleccionar" planName="PLAN A" />
          </SwiperSlide>
          <SwiperSlide>
            <Card img={planB} btnText="Seleccionar" planName="PLAN B" />
          </SwiperSlide>
          <SwiperSlide>
            <Card img={planC} btnText="Seleccionar" planName="PLAN C" />
          </SwiperSlide>
          <SwiperSlide>
            <Card img={planCC} btnText="Seleccionar" planName="PLAN C+" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );

}

export default PlanesSeleccion;
