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
                        <h3>Provide expert consulting, implementation, support, and staffing services, specializing in SAP and technology solutions to enhance business performance and customer satisfaction</h3>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/service/expertInSap.png" alt="" /></figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-7"></i></div>
                                            <h3><Link href="#">Consulting Services</Link></h3>
                                            <p style={{textAlign:"justify"}}>Expert SAP consultation on business strategy and process optimization for businesses at any stage</p><br/><br/><br/>
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
                                            <h3><Link href="#">Implementation Services</Link></h3>
                                            <p style={{textAlign:"justify"}}>Tailored SAP implementation and migration solutions across regions, specializing in emerging technologies, mobile solutions, e-commerce, and more.</p>
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
                                            <h3><Link href="#">Support and Maintenance</Link></h3>
                                            <p style={{textAlign:"justify"}}>Ongoing SAP Application Management Services (AMS), Basis & Security, and quality assurance services</p>    
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
                                            <h3><Link href="#">Staff Augmentation</Link></h3>
                                            <p style={{textAlign:"justify"}}>Supplying experienced professionals and consultants with specialized skills to enhance productivity and deliver successful projects </p>
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
                                            <h3><Link href="#">Innovative Solutions</Link></h3>
                                            <p style={{textAlign:"justify"}}>Delivering innovative SAP solutions, including SAP NetWeaver, Data Services, BI/BW, CRM, SCM, SuccessFactors, and other non-SAP technologies </p>
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
                                            <h3><Link href="#">24x7 Support</Link></h3>
                                            <p style={{textAlign:"justify"}}>Offering an innovative cost effective model with round-the-clock support <br/> <br/></p><br/>  
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
