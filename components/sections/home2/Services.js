'use client'
import Link from "next/link"
import { useState } from "react"


export default function Services() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            
            <section className="service-style-two p_relative bg-color-1">
                <div className="auto-container">
                    <div className="sec-title centred mb_50">
                        <span className="sub-title">What We Do</span>
                        <h2>Provide the Best Consulting <br />in SAP Industry</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/service/expertInSap.png" alt="" /></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-7"></i></div>
                                            <h3><Link href="#">Expert SAP Implementation</Link></h3>
                                            <p>Seamless SAP implementation tailored to your business needs, ensuring a smooth transition and minimal disruption.</p>
                                            {/* <div className="btn-box">
                                                <Link href="/strategy-planning" className="theme-btn-one">Read More</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/service/sapMigration.png" alt="" /></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-12"></i></div>
                                            <h3><Link href="#">Efficient SAP S/4HANA Migration</Link></h3>
                                            <p>Comprehensive migration services to SAP S/4HANA, including detailed assessments, planning, and execution.
                                            </p>
                                            {/* <div className="btn-box">
                                                <Link href="/program-manager" className="theme-btn-one">Read More</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/service/24by7.png" alt="" /></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-8"></i></div>
                                            <h3><Link href="#">24/7 Support and Maintenance</Link></h3>
                                            <p>Round-the-clock support and proactive maintenance to keep your SAP systems running efficiently and securely.
                                            </p>
                                            {/* <div className="btn-box">
                                                <Link href="/tax-management" className="theme-btn-one">Read More</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/service/sapTraining.png" alt="" /></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-13"></i></div>
                                            <h3><Link href="#">Custom SAP Training Programs</Link></h3>
                                            <p>Tailored training sessions and workshops to empower your team with the knowledge and skills they need to succeed.</p>
                                            {/* <div className="btn-box">
                                                <Link href="/investment-policy" className="theme-btn-one">Read More</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/service/businessProcess.png" alt="" /></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-14"></i></div>
                                            <h3><Link href="#">Business Process Optimization</Link></h3>
                                            <p>In-depth analysis and optimization of your business processes to enhance efficiency and performance.</p>
                                            {/* <div className="btn-box">
                                                <Link href="/financial-advices" className="theme-btn-one">Read More</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/service/innovativeSol.png" alt="" /></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-15"></i></div>
                                            <h3><Link href="#">Innovative and Tailored Solutions</Link></h3>
                                            <p>Customized SAP solutions that align with your specific business goals and leverage the latest industry advancements.</p>
                                            {/* <div className="btn-box">
                                                <Link href="/insurance-strategy" className="theme-btn-one">Read More</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
