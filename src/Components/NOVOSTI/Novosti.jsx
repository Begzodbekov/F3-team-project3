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
        <div className='container'>
            <div className="gl_header">
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

                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide> <img className='gl_img_11' src={img} alt="DOCTOR.D" /><div className='gl_karta1'><h1>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h1>
                        <h2>26.07.2021</h2>
                        <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
                            Научно-Практический Медицинский Центр Урологии) при поддержке компаний
                            Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services»
                            был проведен мастер-класс в исполнении...</p>
                            <button className='gl__button_1'>Подробнее</button>
                    </div></SwiperSlide>
                    <SwiperSlide> <img className='gl_img_11' src={img} alt="DOCTOR.D" /><div className='gl_karta2'>
                       
                        <h1>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h1>
                        <h2>26.07.2021</h2>
                        <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
                            Научно-Практический Медицинский Центр Урологии) при поддержке компаний
                            Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services»
                            был проведен мастер-класс в исполнении...</p>
                            <button className='gl__button_2'>Подробнее</button>
                    </div></SwiperSlide>
                    <SwiperSlide> <img className='gl_img_11' src={img} alt="DOCTOR.D" /><div className='gl_karta3'>
                       
                        <h1>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h1>
                        <h2>26.07.2021</h2>
                        <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
                            Научно-Практический Медицинский Центр Урологии) при поддержке компаний
                            Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services»
                            был проведен мастер-класс в исполнении...</p>
                            <button className='gl__button_1'>Подробнее</button>
                    </div></SwiperSlide>
                    <SwiperSlide> <img className='gl_img_11' src={img} alt="DOCTOR.D" /><div className='gl_karta1'>
                       
                        <h1>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h1>
                        <h2>26.07.2021</h2>
                        <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
                            Научно-Практический Медицинский Центр Урологии) при поддержке компаний
                            Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services»
                            был проведен мастер-класс в исполнении...</p>
                            <button className='gl__button_1'>Подробнее</button>
                    </div></SwiperSlide>
                    <SwiperSlide><img className='gl_img_11' src={img} alt="DOCTOR.D" /><div className='gl_karta2'>
                        
                        <h1>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h1>
                        <h2>26.07.2021</h2>
                        <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
                            Научно-Практический Медицинский Центр Урологии) при поддержке компаний
                            Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services»
                            был проведен мастер-класс в исполнении...</p>
                            <button className='gl__button_2'>Подробнее</button>
                    </div></SwiperSlide>
                    <SwiperSlide> <img className='gl_img_11' src={img} alt="DOCTOR.D" /><div className='gl_karta3'>
                       
                        <h1>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h1>
                        <h2>26.07.2021</h2>
                        <p>С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
                            Научно-Практический Медицинский Центр Урологии) при поддержке компаний
                            Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services»
                            был проведен мастер-класс в исполнении...</p>
                            <button className='gl__button_1'>Подробнее</button>
                    </div></SwiperSlide>

                </Swiper>

            </div>
            </div>

        </div>
    )
}

export default Novosti
