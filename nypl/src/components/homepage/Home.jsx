import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { FaShip, FaTrainTram, FaTruck } from "react-icons/fa6";
import './Home.css'
import Certificates from './Certificates';
import GlobalCustomer from './GlobalCustomer';
const Home = () => {
    return (
        <>
            <div className='ny-wrapper'>
                <div className='ny-home'>
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
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                        spaceBetween={40}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        effect={'fade'}
                        navigation={true}
                        speed={1000}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide className='swiper-slides' id='swiper-slides-1'>
                            <div className='ny-home-content'>
                                <h2>Leading the Charge in Innovation Across Services, Manufacturing, and Media & Entertainment"</h2>
                                <button>Explore More</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slides' id='swiper-slides-2'>
                            <div className='ny-home-content'>
                                <h2>Transforming Railway, Automotive, and Marine Sectors with Cutting-Edge Innovation</h2>
                                <button>Explore More</button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='ny-card-section'>
                    <div className='container'>
                        <div className='row ny-card-wrapper'>
                            <div className='col-lg-3 ny-card'>
                                <span><FaTrainTram /></span>
                                <img src='/images/railway.jpg'></img>
                                <h2>Railway</h2>
                            </div>
                            <div className='col-lg-3 ny-card'>
                                <span><FaTruck /></span>

                                <img src='/images/automotive.jpg'></img>
                                <h2>Automotive</h2>
                            </div>
                            <div className='col-lg-3 ny-card'>
                                <span><FaShip /></span>

                                <img src='/images/marine.jpg'></img>
                                <h2>Marine</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ny-card-about'>
                    <span2>About</span2>
                    <div className='container'>
                        <div className='row ny-about-row'>
                            <div className='col-lg-6 ny-about-col'>
                                <h2 className='section-heading'>About Us</h2>
                                <h3>Driving Innovation Across Services, Manufacturing, and Media & Entertainment</h3>
                                <p className='justify'>Neetu Yoshi Private Limited (NYPL), a company of Neetu’s group which has a vision to be the leading business conglomerate having diverse business presence across service, manufacturing, Media & Entertainment sector.</p>
                                <p className='justify'>NYPL strive to bring the latest innovations and the best value offerings to all clients in quest to deliver the best in class. "Faith in innovative and organized growth" works as the guiding principle behind every business at NYPL and keeps it committed to enhancing operational excellence through greater focus on innovation and efficient resource utilization.</p>
                                <button className='btn-read-more'>Read More</button>
                            </div>
                            <div className='col-lg-6 ny-about-img'>
                                <img src='/images/nyabout.jpg' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='our-products'>
                <span2>Products</span2>

                    <div className='container'>
                        <div className='product-header'>
                        <h2 className='section-heading'>Our Products</h2>
                        <p className='justify'>At Neetu Yoshi Private Limited (NYPL), we specialize in delivering advanced solutions across railway, automotive, and marine sectors with our comprehensive range of services including fettling, heat treatment, lab machining, and foundry fettling. Whether it’s optimizing the performance of rail components through precise heat treatment, enhancing automotive parts with expert fettling, or ensuring the durability of marine equipment with meticulous foundry processes, NYPL stands at the forefront of technological advancement</p>
                        </div>
                        <Swiper
                            breakpoints={{
                                1400: {

                                    slidesPerView: 3,
                                },
                                768: {

                                    slidesPerView: 3,
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
                            navigation={true}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            loop={true}
                        >
                            <SwiperSlide className='swiper-products'>
                                <ProductCard img='/images/painting.jpeg' title='Painting'/>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-products'>
                                <ProductCard img='/images/fettling.jpeg' title='Fettling'/>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-products'>
                                <ProductCard img='/images/foundry.jpeg' title='Foundry'/>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-products'>
                                <ProductCard img='/images/heattreatment.jpeg' title='Heat Treatment' />
                            </SwiperSlide>
                            <SwiperSlide className='swiper-products'>
                                <ProductCard img='/images/lab.jpeg' title='Lab'/>
                            </SwiperSlide>
                        </Swiper>
                      </div>
                </div>
                <Certificates/>
                <GlobalCustomer/>
            </div>



        </>


    )
}

function ProductCard({img , title}) {
    return (
        <>
            <div className='product-card'>
                <img src={img} />
                <p>{title}</p>

            </div>

        </>
    )

}
export default Home