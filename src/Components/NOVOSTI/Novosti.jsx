import React from 'react'
import "./Novosti.scss"
import img from "../../assets/img/НОВОСТИ.svg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation, Pagination } from 'swiper/modules';
function Novosti() {
    return (
        <div className='gl_header'>
            <div >
                <h1 className='gl_text__1'>Новости</h1>
            </div>
            <div className='gl_karta'>
                
                
            <Swiper
        slidesPerView={3}
        spaceBetween={20}
        
        pagination={{
          clickable: true,
        }}
        
        navigation={true}
       
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className='gl_karta1'>
                    <img src={img} alt="DOCTOR.D" />
                    <h1>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h1>
                    <h2>26.07.2021</h2>
                    <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
                        Научно-Практический Медицинский Центр Урологии) при поддержке компаний
                        Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services»
                        был проведен мастер-класс в исполнении...</p>
                </div></SwiperSlide>
        <SwiperSlide><div className='gl_karta2'>
                    <img src={img} alt="DOCTOR.D" />
                    <h1>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h1>
                    <h2>26.07.2021</h2>
                    <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
                        Научно-Практический Медицинский Центр Урологии) при поддержке компаний
                        Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services»
                        был проведен мастер-класс в исполнении...</p>
                </div></SwiperSlide>
        <SwiperSlide><div className='gl_karta3'>
                    <img src={img} alt="DOCTOR.D" />
                    <h1>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h1>
                    <h2>26.07.2021</h2>
                    <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
                        Научно-Практический Медицинский Центр Урологии) при поддержке компаний
                        Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services»
                        был проведен мастер-класс в исполнении...</p>
                </div></SwiperSlide>
                <SwiperSlide><div className='gl_karta1'>
                    <img src={img} alt="DOCTOR.D" />
                    <h1>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h1>
                    <h2>26.07.2021</h2>
                    <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
                        Научно-Практический Медицинский Центр Урологии) при поддержке компаний
                        Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services»
                        был проведен мастер-класс в исполнении...</p>
                </div></SwiperSlide>
        <SwiperSlide><div className='gl_karta2'>
                    <img src={img} alt="DOCTOR.D" />
                    <h1>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h1>
                    <h2>26.07.2021</h2>
                    <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
                        Научно-Практический Медицинский Центр Урологии) при поддержке компаний
                        Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services»
                        был проведен мастер-класс в исполнении...</p>
                </div></SwiperSlide>
        <SwiperSlide><div className='gl_karta3'>
                    <img src={img} alt="DOCTOR.D" />
                    <h1>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h1>
                    <h2>26.07.2021</h2>
                    <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
                        Научно-Практический Медицинский Центр Урологии) при поддержке компаний
                        Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services»
                        был проведен мастер-класс в исполнении...</p>
                </div></SwiperSlide>
        
      </Swiper>

            </div>
       
        </div>
    )
}

export default Novosti
