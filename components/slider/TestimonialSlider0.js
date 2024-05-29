'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
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
export default function TestimonialSlider0() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                {/* <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        {/* <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.jpg" alt="" /></figure> 
                        <div className="inner-box">
                            <h3>Bessie Cooper</h3>
                            <span className="designation">Manager</span>
                            <p>“Dictum mauris facilisis tortor dictumst. Cursus mattis viera lobortis posuere molestie imperdiet diam scelerisque posuere magnis risus purus eu tempor. Odio iaculis tincidunt cras cursus id nunc nibh gravida.”</p>
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide> */}
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        {/* <figure className="thumb-box"><img src="assets/images/resource/testimonial-4.jpg" alt="" /></figure> */}
                        <div className="inner-box">
                            <h3>Manufacturing Company, NJ</h3>
                            {/* <span className="designation">Manager</span> */}
                            <p>RAYVEN IT's consultants are highly skilled in the most advanced tools we are using and we consider ourselves lucky to find persons like them in these days of acute shortage of skilled professionals. RAYVEN IT's services have greatly affected the current status of the project, and we would like to use their services in future as well.”</p>
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        {/* <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.jpg" alt="" /></figure> */}
                        <div className="inner-box">
                            <h3>Chemical Company, Chicago IL</h3>
                            {/* <span className="designation">Manager</span> */}
                            <p>
                                The implementation expertise from RAYVEN IT enabled us to achieve a successful installation in very short period of time. From the initial sales cycle through the deployment, our engagement has been characterized by an ease of doing business and a win-win partnership with the clear commitment to our success.”
                            </p>
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        {/* <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.jpg" alt="" /></figure> */}
                        <div className="inner-box">
                            <h3>Manufacturing Company,CT</h3>
                            {/* <span className="designation">Manager</span> */}
                            <p>RAYVEN IT Solutions has provided us with complementary skills and our relationship has been extremely successful. We are particularly impressed by the quality of RAYVEN IT Solutions professionals and their customer orientation. Partnering with RAYVEN IT Solutions has provided an efficient, flexible, cost-effective solution to meet our IT needs. Their contribution to the various projects, which includes continuous production support for functional FICO, SD & MM modules, implementation of Web Sales, Catalogue Sales, Banking, Assets Management, customize Reporting etc, has proved invaluable in terms of achieving a faster time-to-market for our products and services. We've been happy with the consistently high rate of design success that the RAYVEN IT Solutions team has always assured us.
”</p>
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-4.jpg" alt="" /></figure>
                        <div className="inner-box">
                            <h3>Brooklyn Simmons</h3>
                            <span className="designation">Manager</span>
                            <p>“Dictum mauris facilisis tortor dictumst. Cursus mattis viera lobortis posuere molestie imperdiet diam scelerisque posuere magnis risus purus eu tempor. Odio iaculis tincidunt cras cursus id nunc nibh gravida vel consectetur aliquam vitae pulvinar gravida at faucibus. Ridiculus mauris porttitor sit nulla.”</p>
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide> */}
                {/* <SwiperSlide className="slide">
                <div className="testimonial-block-two">
                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.jpg" alt="" /></figure>
                    <div className="inner-box">
                        <h3>Haris Gulati</h3>
                        <span className="designation">Manager</span>
                        <p>
                        “Dictum mauris facilisis tortor dictumst. Cursus mattis viera lobortis posuere molestie imperdiet diam scelerisque posuere magnis risus purus eu tempor. Odio iaculis tincidunt cras cursus id nunc nibh gravida vel consectetur aliquam vitae pulvina.”
                        </p>
                        <ul className="rating clearfix">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                        </ul>
                    </div>
                </div>
                </SwiperSlide> */}
            </Swiper>
        </>
    )
}
