
'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function WhyChooseUs() {
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

            {/* chooseus-style-two */}
            <section className="chooseus-style-two sec-pad">
                <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(/assets/images/background/whyChoose.png)' }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-xl-6 col-lg-12 offset-xl-6 content-column">
                            <div className="content_block_six">
                                <div className="content-box p_relative ml_30">
                                    <div className="sec-title mb_50">
                                        <span className="sub-title">Why Choose Rayvent IT</span>
                                        <h2>Reason For Choosing Our Consultancy</h2>
                                    </div>
                                    <ul className="accordion-box">
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                <div className="icon-box"></div>
                                                <h3>Expertise:</h3>
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Our team consists of SAP-certified consultants with extensive industry experience.</div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                <div className="icon-box"></div><h3>Tailored Solutions: </h3></div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">We understand that every business is unique, and we provide customized solutions to meet your specific needs.</div>
                                                </div>
                                            </div>
                                        </li>

                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-box"></div><h3>Proven Track Record:</h3></div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">We have a history of successful SAP implementations, migrations, and optimizations.</div>
                                                </div>
                                            </div>
                                        </li>

                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}><div className="icon-box"></div><h3>Customer-Centric Approach: </h3></div>
                                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Our clients are at the heart of everything we do, and we strive to build long-lasting relationships based on trust and excellence.</div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}><div className="icon-box"></div><h3>Innovation:</h3></div>
                                            <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"> We stay at the forefront of SAP advancements and industry trends to provide cutting-edge solutions.</div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}><div className="icon-box"></div><h3>Commitment to Quality: </h3></div>
                                            <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Our rigorous quality assurance processes ensure that we deliver the highest standards of service.

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* chooseus-style-two end */}

        </>
    )
}


