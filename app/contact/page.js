'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Home() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    return (
       <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Get in touch">
            <div>
                {/* Feature Section */}
                <section className="feature-style-three p_relative centred">
                    <div className="pattern-layer" style={{ backgroundImage: 'url(/assets/images/shape/shape-31.png)' }}></div>
                    <div className="auto-container">
                        <div className="sec-title mb_100">
                            <span className="sub-title">Contact Info</span>
                            <h2>We’d Love To Help You</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                                <div className="feature-block-three wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="block-shape" style={{ backgroundImage: 'url(/assets/images/shape/shape-32.png)' }}></div>
                                        <div className="icon-box"><i className="icon-48"></i></div>
                                        <h3>USA</h3>
                                        <p>345 PLAINFIELD AVE, SUITE # 303 <br />
                                            EDISON, NJ 08817,<br />
                                            USA.<br />
                                            TEL: (848)-459-5944 <br />{""}<br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                                <div className="feature-block-three wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms" >
                                    <div className="inner-box" style={{ padding: "0px 5px 20px 5px" }}>
                                        <div className="icon-box"><i className="icon-48"></i></div>
                                        {/* <div className="icon-box"><i className="icon-49"></i></div> */}
                                        <h3>INDIA</h3>
                                        <p>704, MANJEERA MAJESTIC COMMERCIAL,
                                            JNTU-HITECH CITY ROAD,
                                            HYDERABAD-500085.<br />
                                            INDIA</p>
                                        {/* <p><Link href="mailto:contact@example.com">contact@example.com</Link><br /><Link href="mailto:support@example.com">support@example.com</Link></p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                                <div className="feature-block-three wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="block-shape" style={{ backgroundImage: 'url(/assets/images/shape/shape-33.png)' }}></div>
                                        <div className="icon-box"><i className="icon-48"></i></div>
                                        {/* <div className="icon-box"><i className="icon-50"></i></div> */}
                                        <h3>CANADA</h3>
                                        <p>
                                            2416 MAIN ST., SUITE 398,
                                            VANCOUVER,
                                            BC. V5T 3E2
                                            CANADA
                                        </p>
                                        {/* <p>Emergency Cases <br /><Link href="tel:2085550112">+(208) 555-0112</Link> (24/7)</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Feature Section End */}

                {/* Contact Form Section */}
                <section className="contact-style-two sec-pad">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                                <div className="content-box mr_70">
                                    <div className="sec-title mb_35">
                                        <span className="sub-title">Message</span>
                                        <h2>Feel Free to Contact with us</h2>
                                        <p className="mt_20">Please use the contact form below to send
                                            us any information we may need. It is required you place an
                                            e-mail, although if you do not need us to respond feel free to
                                            input info@rayvenit.solutions
                                        </p>
                                    </div>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/contact"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/contact"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/contact"><i className="fab fa-pinterest-p"></i></Link></li>
                                        <li><Link href="/contact"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                                <div className="form-inner">
                                    <form method="post" action="sendemail.php" id="contact-form" className="default-form">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="username"  placeholder="Your Name" required />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="company" placeholder="Company Name" required />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Your email" required />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="regards" required placeholder="Regarding" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="country" required placeholder="Country" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="phone" required placeholder="Mobile Number" />
                                            </div>
                                            {/* <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="subject" required placeholder="Subject" />
                                                </div> */}
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <textarea name="message" placeholder="Type message"></textarea>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                <button className="theme-btn theme-btn-one" type="submit" name="submit-form">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Form Section End */}

                {/* Google Map Section */}
                <section className="map-section-two">
                    {/*Map Outer*/}
                    <div className="map-outer">
                        {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1JZNKjmxLK5f2QLqImPFKb5uXLDMcv1o&ehbc=2E312F&noprof=1" width="640" height="480"></iframe> */}
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1JZNKjmxLK5f2QLqImPFKb5uXLDMcv1o&ehbc=2E312F&noprof=1" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </section>
                {/* Google Map Section End */}
            </div>

        </Layout>
        </>
    )
}