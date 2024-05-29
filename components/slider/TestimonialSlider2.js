'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider2() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-block-three">
                        <div className="inner-box">
                            <div className="quote"><span className="flaticon-quote" /></div>
                            <ul className="rating " style={{ display: "flex" }}>
                                <li><i className="fas fa-star" style={{ color: '#FFC93D' }}></i></li>
                                <li><i className="fas fa-star" style={{ color: '#FFC93D' }}></i></li>
                                <li><i className="fas fa-star" style={{ color: '#FFC93D' }}></i></li>
                                <li><i className="fas fa-star" style={{ color: '#FFC93D' }}></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                            <div className="text" style={{textAlign:'justify'}}>RAYVEN IT's consultants are highly skilled in the most advanced tools we are using and we consider ourselves lucky to find persons like them in these days of acute shortage of skilled professionals. RAYVEN IT's services have greatly affected the current status of the project, and we would like to use their services in future as well.</div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-thumb-5.jpg" alt="" /></div>
                                <div className="author-title">Manufacturing Company, NJ</div>
                                {/* <div className="designation">Green Tech</div> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-three">
                      <div className="inner-box">
                            <div className="quote"><span className="flaticon-quote" /></div>
                            <ul className="rating " style={{ display: "flex" }}>
                                <li><i className="fas fa-star" style={{ color: '#FFC93D' }}></i></li>
                                <li><i className="fas fa-star" style={{ color: '#FFC93D' }}></i></li>
                                <li><i className="fas fa-star" style={{ color: '#FFC93D' }}></i></li>
                                <li><i className="fas fa-star" style={{ color: '#FFC93D' }}></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                            <div className="text" style={{textAlign:'justify'}}>The implementation expertise from RAYVEN IT enabled us to achieve a successful installation in very short period of time. From the initial sales cycle through the deployment, our engagement has been characterized by an ease of doing business and a win-win partnership with the clear commitment to our success.</div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-thumb-5.jpg" alt="" /></div>
                                <div className="author-title">Chemical Company, Chicago IL</div>
                                {/* <div className="designation">Green Tech</div> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-three">
                    <div className="inner-box">
                            <div className="quote"><span className="flaticon-quote" /></div>
                            <ul className="rating " style={{ display: "flex" }}>
                                <li><i className="fas fa-star" style={{ color: '#FFC93D' }}></i></li>
                                <li><i className="fas fa-star" style={{ color: '#FFC93D' }}></i></li>
                                <li><i className="fas fa-star" style={{ color: '#FFC93D' }}></i></li>
                                <li><i className="fas fa-star" style={{ color: '#FFC93D' }}></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                            <div className="text" style={{textAlign:'justify'}}>RAYVEN IT Solutions has provided us with complementary skills and our relationship has been extremely successful. We are particularly impressed by the quality of RAYVEN IT Solutions professionals and their customer orientation. Partnering with RAYVEN IT Solutions has provided an efficient, flexible, cost-effective solution to meet our IT needs. Their contribution to the various projects, which includes continuous production support for functional FICO, SD & MM modules, implementation of Web Sales, Catalogue Sales, Banking, Assets Management, customize Reporting etc, has proved invaluable in terms of achieving a faster time-to-market for our products and services. We've been happy with the consistently high rate of design success that the RAYVEN IT Solutions team has always assured us.
</div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-thumb-5.jpg" alt="" /></div>
                                <div className="author-title">Manufacturing Company,CT</div>
                                {/* <div className="designation">Green Tech</div> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
