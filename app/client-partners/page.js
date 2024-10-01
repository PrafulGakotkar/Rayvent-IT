'use client'
import Layout from "@/components/layout/Layout"
import Testimonial from "@/components/sections/home2/Testimonial"
import Link from "next/link"
import { useState } from "react"
import Head from 'next/head';
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Head>
                {/* <title>SAP Consulting & Implementation Services</title> */}
                <meta name="description" content="Provide expert SAP consulting, implementation, support, and staffing services to enhance business performance and customer satisfaction." />
                <meta name="keywords" content="SAP consulting services, SAP implementation services, SAP support, SAP staffing, SAP technology solutions, business performance, SAP customer satisfaction, SAP ERP solutions" />
            </Head>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Clients & Partners">
                <div>
                    <section className="about-section p_relative">
                        <div className="auto-container">
                            <div className="row clearfix">

                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content_block_one">
                                        <div className="content-box p_relative ml_30 mb_30">
                                            <div className="sec-title mb_25">
                                                {/* <span className="sub-title">About BizTech</span> */}
                                                {/* <h2>Success Factor</h2> */}
                                            </div>
                                            <div className="text mb_35">
                                                <p style={{ textAlign: 'justify' }}>The biggest pride of RAYVEN IT is our clients. Our driving force is our partners. We never stop looking for mutually beneficial relationships with companies active in various business sectors. We are immensely proud of having established strong connections with quite a few partners and customers around the globe. We are open for new ventures and expanding of our current partner & client base.</p>
                                                <p style={{ textAlign: 'justify' }}>We have been successfully working and partnering with well-know firms and prominent individuals. We have implemented projects in niche areas and the list of our loyal clientele is constantly growing.</p>
                                                <p style={{ textAlign: 'justify' }}>Companies from all over the world are looking at RAYVEN IT for the whole range of their development needs. We provide our experienced team to assist companies and individuals in building, managing and improving their presence in the USA, Canada, the UK, Continental Europe, South America, Australia and the Middle East region. We adapt ourselves to different cultures and business models. We know specific mentality and outlook of peoples in different parts of the world.</p>
                                                <p style={{ textAlign: 'justify' }}>Our partners are rather successful companies in their industries. We are working together to deliver the best services. We have been building our relationships over the years of prolific partnership, therefore we have no hesitation in recommending them to our customers.</p>
                                            </div>
                                            {/* <Link href="/about-us" className="theme-btn-one">Discover More</Link> */}
                                        </div>
                                        {/* <div className="content-box p_relative ml_30">
                                            <div className="text mb_35">
                                                <p style={{ textAlign: 'justify' }}>RAYVEN IT is a young enterprise established in 2009, is the leader in its field-known for its quality, highly efficient professionals and timely delivery of projects. We provide management and solution based professional services in SAP with headquarters in Edison, NJ (USA) and Offshore Development Center in Hyderabad, India. We have very well qualified and experienced professionals who always do their best to serve our clients. RAYVEN IT is showing consistent annualized growth for the last 3 years that is the result of its team work and adapting advanced technologies in the growing industry. RAYVEN IT is a financially stable, zero-debt company.</p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image_block_one">
                                        <div className="image-box p_relative pr_50 mr_30">
                                            <figure className="image image-1"><img src="/assets/images/resource/about-1.png" alt="" /></figure>
                                            {/* <figure className="image image-1"><img src="assets/images/resource/about-2.jpg" alt="" /></figure> */}
                                            {/* <div className="video-inner">
                                <div className="video-btn">
                                    <VideoPopup />
                                </div>
                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image_block_one">
                                        <div className="image-box p_relative pr_50 mr_30">
                                            {/* <figure className="image image-1"><img src="assets/images/resource/about-1.jpg" alt="" /></figure> */}
                                            <figure className="image image-1"><img src="/assets/images/resource/about-2.png" alt="" /></figure>
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
                                        <div className="content-box p_relative ml_30 mb_1">
                                            <div className="sec-title mb_25">
                                                {/* <span className="sub-title">About BizTech</span> */}
                                                <h2>CLIENTS</h2>
                                            </div>
                                            <div className="text mb_10">
                                                <p style={{ textAlign: 'justify' }}>CLIENTS
                                                    It does not matter whether you are a non-profit organization or an individual entrepreneur, a startup or a well established corporation, you are always welcome to approach us with your needs. We are happy to work with anyone who builds his business to change the world.</p>
                                            </div>
                                            <div className="text mb_30">
                                                <p>Some of Our Prestigious Clients</p>
                                                <ul className="list-style-one clearfix">
                                                    <li>Manufacturing Company in NJ</li>
                                                    <li>Chemical Company in Chicago IL</li>
                                                    <li>Manufacturing Company in CT</li>
                                                    <li>University in NC</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row clearfix">

                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content_block_one">
                                        <div className="content-box p_relative ml_30 mb_1">
                                            <div className="sec-title mb_25">
                                                {/* <span className="sub-title">About BizTech</span> */}
                                                <h2>PARTNERS</h2>
                                            </div>
                                            <div className="text mb_10">
                                                <p style={{ textAlign: 'justify' }}>Enabling Business-Technology Alignment through a robust partner network</p>
                                                <p>RAYVEN provides that crucial business-technology alignment for clients by continually scanning the technology horizon for newer, improved solutions. We partner selected Technology and Business Solutions companies and set up competency centers where new technologies are incubated, tested and nurtured.</p>
                                                <p><b>Navigating the future</b></p>
                                                <p>Our selected circle of technology and business-solutions partnerships makes us the trusted advisor for clients, while navigating the maze of technologies, products and suppliers.</p>
                                                <p><b>Nurturing Relationships with our Partners</b></p>
                                                <p>RAYVEN partnerships are aimed at delivering real business value to our clients. Each partnership helps our clients leverage our strong domain competency and delivery capabilities with the comprehensiveness and strengths of partner solutions and platforms
                                                </p>
                                                <p><b>For partner enquiries, please mail us at partners@rayvenit.solutions</b></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image_block_one">
                                        <div className="image-box p_relative pr_50 mr_30" style={{ padding: 20 }}>
                                            <figure className="image image-1"><img src="/assets/images/resource/about-3.png" alt="" /></figure>
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
                </div>
                <Testimonial />
            </Layout>
        </>
    )
}