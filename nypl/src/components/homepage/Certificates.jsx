import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

const Certificates = () => {
    const format = `jpg` || `jpeg`

    const certificates = Array.from({ length: 8 }, (_, index) => `/images/certificate${index + 1}.jpg`)
    return (
        <>
            <div className='certificates container'>
                <span3></span3>
                <span2>Certificates</span2>
                <div className='certificate-start-img row '>
                    <div className='col-lg-6  certificate-start-col'>
                        <Swiper
                            breakpoints={{
                                1400: {

                                    slidesPerView: 1,
                                },
                                768: {

                                    slidesPerView: 1,
                                },
                            }}
                            style={{
                                paddingBottom: "80px", "--swiper-pagination-color": "black",
                                "--swiper-pagination-bullet-inactive-color": "gray",
                                "--swiper-pagination-bullet-inactive-opacity": "1",
                                "--swiper-pagination-bullet-size": "15px",
                                "--swiper-pagination-bullet-horizontal-gap": "6px"
                            }}
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={40}
                            autoplay={{ delay: 5000 }}
                            // pagination={{ clickable: true }}
                            // effect={'fade'}
                            navigation={true}
                            // speed={1000}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            className='swiper-slides-certificates '
                        >
                            {
                                certificates.map((certificate, index) => {
                                    return (
                                        <>
                                            <SwiperSlide> <div className='certificate-card-wrapper'>
                                                <CertificateCard certificate={certificate} key={index} />

                                            </div></SwiperSlide>

                                        </>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                    <div className='col-lg-5 certificate-heading-col'>
                        <h2 className='section-heading'>Certificates</h2>
                        
                        <p> <FaQuoteLeft className='quote-left justify'/>Our certifications not only validate our ongoing efforts to meet and exceed industry standards but also reassure our clients and partners of our unwavering commitment to quality, safety, and environmental stewardship. These accolades are a testament to our team's hard work and our relentless pursuit of excellence in all that we do. <FaQuoteRight className='quote-right'/></p>

                    </div>
                </div>
            </div>
           <div className='view-all-certificates'>
              <button className='btn-read-more'> View All</button>
           </div>

        </>
    )
}

function CertificateCard({ certificate, index }) {
    return (<>

        <div className='certificate-card'>
            <img src={certificate} />

        </div>

    </>)
}

export default Certificates