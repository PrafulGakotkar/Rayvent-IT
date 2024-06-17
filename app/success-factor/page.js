'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Success Factor">
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
                                                <p style={{ textAlign: 'justify' }}>By transitioning to SuccessFactors, you have invested in a future for your human capital management and talent management systems that are more ambitious than just technology. As an authorized reseller, RAYVEN IT is your source for all things SuccessFactors. We have the ability to renew your current SuccessFactors Contract as well as provide you with the option to expand your suite with additional modules. These are the real goals and drivers we champion as your implementation partner.</p>
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
                                            {/* <figure className="image image-1"><img src="assets/images/resource/about-1.png" alt="" /></figure> */}
                                            <figure className="image image-1"><img src="/assets/images/resource/success-factor.png" alt="" /></figure>
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
                                            <figure className="image image-1"><img src="/assets/images/resource/experience.png" alt="" /></figure>
                                            {/* <figure className="image image-2"><img src="assets/images/resource/about-2.png" alt="" /></figure> */}
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
                                                <h2>OUR EXPERIENCE</h2>
                                            </div>
                                            <div className="text mb_10">
                                                <p style={{ textAlign: 'justify' }}>RAYVEN IT has extensive experience guiding organizations through implementation of multiple SuccessFactors modules. We help you determine phases and appropriate resources depending on your business requirements. We implement the entire SuccessFactors product suite, and understand the implications of large-scale, multi-module projects. Driving Human Resources efficiency throughout your entire employee population means connecting your people strategy to your business strategy and organizational results. SuccessFactors Business Execution (BizX) Suite HR software solution drives real business results by ensuring organizational alignment, optimizing people performance, and building competitive advantage with greater workforce insights. With cloud-based SuccessFactors for business execution, you can:</p>
                                            </div>
                                            <div className="text mb_30">
                                                <ul className="list-style-one clearfix">
                                                    <li>Align your workforce with your strategy and get your people working on the right tasks</li>
                                                    <li>Optimize performance across your organization as you find the right people and make them great</li>
                                                    <li>Accelerate business results with the insight you need to run your business better </li>

                                                </ul>
                                            </div>
                                            <div className="text mb_35">
                                                <p style={{ textAlign: 'justify' }}>SuccessFactors Suite includes: Employee Central, Workforce Planning & Analytics, SAP Jam, Recruiting, Onboarding, Learning, Performance & Goals Compensation, and Succession and Development.
                                                </p>
                                            </div>
                                            {/* <Link href="/about-us" className="theme-btn-one">Discover More</Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}