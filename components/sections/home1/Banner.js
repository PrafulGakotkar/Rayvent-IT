
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>
            <section className="banner-section style-one p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">
                    <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: 'url(assets/images/banner/index_hana-02.jpeg)' }}></div>
                        <div className="starshine">
                            <div className="shine shine-1"></div>
                            <div className="shine shine-2"></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="content-inner">
                                    {/* <span>Change The World</span>  */}
                                    <h2>SAP HANA</h2>
                                    <p>Faster Performance <br /> Less Complexity & Greater Insight <br /></p>
                                    <Link href="/sap-hana" className="theme-btn-one">Discover More</Link>
                                </div>
                            </div> 
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: 'url(assets/images/banner/index_sec3_globe_02.png)' }}></div>
                        <div className="starshine">
                            <div className="shine shine-1"></div>
                            <div className="shine shine-2"></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="content-inner">
                                   <span>Change The World</span> 
                                    <h2>We Make It Happen</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis ridiculus tellus.</p>
                                    <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: 'url(assets/images/banner/Ecc_banner_v6.jpeg)' }}></div>
                        <div className="starshine">
                            <div className="shine shine-1"></div>
                            <div className="shine shine-2"></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="content-inner">
                                    {/* <span>Change T  he World</span> */}
                                    <h2>SAP</h2>
                                    <p>Connecting People, Processes, <br/>and Technology</p>
                                    <Link href="/sap" className="theme-btn-one">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: 'url(assets/images/banner/slide-SAP_Fiori.jpeg)' }}></div>
                        <div className="starshine">
                            <div className="shine shine-1"></div>
                            <div className="shine shine-2"></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="content-inner">
                                    {/* <span>Change The World</span> */}
                                    <h2>SAP Fiori</h2>
                                    <p>Modern, User-Centric Interface for<br/> SAP Solutions</p>
                                    <Link href="/mobility" className="theme-btn-one">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: 'url(assets/images/banner/slide-bigdata-01.png)' }}></div>
                        <div className="starshine">
                            <div className="shine shine-1"></div>
                            <div className="shine shine-2"></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="content-inner">
                                    {/* <span>Change The World</span> */}
                                    <h2>BIG DATA</h2>
                                    <p>Empowering Decision-Making with<br/> Big Data Solutions</p>
                                    <Link href="/bigdata" className="theme-btn-one">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: 'url(assets/images/banner/banner-2.jpg)' }}></div>
                        <div className="starshine">
                            <div className="shine shine-1"></div>
                            <div className="shine shine-2"></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="content-inner">
                                    <span>Change The World</span>
                                    <h2>Build & Grow Your Business</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis ridiculus tellus.</p>
                                    <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span>‹</span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span>›</span>
                        </button>
                    </div>
                </Swiper>

            </section>
        </>
    )
}
