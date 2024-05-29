'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import TestimonialSlider0 from '@/components/slider/TestimonialSlider0'
import AwardSlider1 from '@/components/slider/AwardSlider1'
import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
                {/* about-section */}
                <section className="about-section p_relative">
                    <div className="auto-container">
                        <div className="row clearfix mb_80">
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image_block_one">
                                    <div className="image-box p_relative pr_50 mr_30">
                                        <figure className="image image-1"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                                        <figure className="image image-2"><img src="assets/images/resource/about-2.jpg" alt="" /></figure>
                                        {/* <div className="video-inner">
                                    <div className="video-btn">
                                        <VideoPopup />
                                    </div>
                                </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_one">
                                    <div className="content-box p_relative ml_30">
                                        <div className="sec-title mb_25">
                                            <span className="sub-title">ABOUT US</span>
                                            {/* <h2>Dedicated And  <br/>Professional Consulting Services</h2> */}
                                        </div>
                                        <div className="text mb_35">
                                            <p className=" mb_10" style={{ textAlign: 'justify' }}>RAYVEN IT Consulting LLC., is a New Jersey based company dedicated to provide the best SAP Solutions and Consulting Services. Team RAYVEN is single-minded about achieving excellence. In our quest for excellence, we push beyond the boundaries of conventional thinking. Our think- out-of-the box culture helps us in coming up with fresh ideas that have the ability to inspire.</p>
                                            <p className=" mb_10" style={{ textAlign: 'justify' }}>At RAYVEN IT we are professional with impeccable pedigree and vast experience in implementing SAP projects and managing off-shore delivery services, who have led delivery teams at multi-national corporations and have an impressive record of delivering services with a strong value proposition. We it takes to develop and deliver SAP-based systems that address an organization's unique business needs. Our global delivery teams work on a number of SAP projects every year that help our clients exploit new technologies and drive delivery excellence. RAYVEN provides the best people and a long-standing alliance with SAP to help our clients get creative in driving business value from enterprise systems.
                                            </p>
                                            <p className=" mb_10" style={{ textAlign: 'justify' }}>RAYVEN IT approaches problem solving for its customers by taking a multi-dimensional approach when recommending solutions. By combining the business requirements with accurate technology mappings, forges an appropriate solution set to complex business needs. We collaborates with our clients to help them achieve high performance. Our professionals leverage leading-edge technologies and business experience to identify opportunities and drive business process improvement with deep industry and business process expertise, broad global resources, and a proven track record.</p>
                                            <p className=" mb_10" style={{ textAlign: 'justify' }}>With RAYVEN IT's partnership, many companies have successfully changed their business approach and have utilized ERP systems to provide broad backbone support and have adopted innovative strategies to meet the needs of the Internet.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row clearfix ">

                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_one">
                                    <div className="content-box p_relative ml_30">
                                        <div className="sec-title mb_25">
                                            <span className="sub-title">QUALITY POLICY</span>
                                            {/* <h2>Dedicated And  <br/>Professional Consulting Services</h2> */}
                                        </div>
                                        <div className="text mb_35">
                                            <p className=" mb_10" style={{ textAlign: 'justify' }}>
                                                "Deliver innovative software solutions and services, on time with quality, and as per customer expectations". RAYVEN IT resources attained vast experience in providing software services and solutions to its clients across the globe which reflects our versatility in servicing customer requirements.We strive to serve our clients better on every project and are always climbing one step on the ladder of customer service by delivering more than their expectation. Customer Delight is our true achievement; and this we achieve through our high quality services.We aim at delivering superior quality projects by imbibing these parameters in house through:</p>
                                        </div>

                                        <ul className="list-style-one clearfix">
                                        <li>Improvement of process</li>
                                        <li>High team spirit</li>
                                        <li>Smart working culture rather than over working.</li>
                                        <li>HR initiatives in improving employees overall quality of life</li>
                                        <li>Cost control measures for profit sustainability.</li>
                                        <li>Complying with work, health, safety and professional norms.</li>
                                    </ul>

                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image_block_one">
                                    <div className="image-box p_relative pr_50 mr_30">
                                        <figure className="image image-1"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                                        {/* <figure className="image image-2"><img src="assets/images/resource/about-2.jpg" alt="" /></figure> */}
                                        {/* <div className="video-inner">
                                    <div className="video-btn">
                                        <VideoPopup />
                                    </div>
                                </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about-section end */}

                <WhyChooseUs />


                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
            </Layout>
        </>
    )
}


