import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer">
                <div className="widget-section">
                    <div className="pattern-layer">
                        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-20.png)' }}></div>
                        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-21.png)' }}></div>
                    </div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="logo-widget footer-widget">
                                    <figure className="footer-logo">
                                        <Link href="#">
                                            <img src="assets/images/rayven_logo.png" alt="" />
                                            {/* <img src="assets/images/footer-logo.png" alt="" /> */}
                                        </Link>
                                    </figure>
                                    <div className="links-widget footer-widget ml_50">
                                        <div className="widget-title">
                                            <h3>Quick Link</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="links-list clearfix">
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/mission">About Us</Link></li>
                                                <li><Link href="/career">Career</Link></li>
                                                <li><Link href="/client-partners">Clients & Partners</Link></li>
                                                <li><Link href="/contact">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="text">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elitsollicit udin netus quis ornare. Massa pharetra in nec sed nunc.
                                        </p>
                                        <p>nisl viverra massa imperdiet. Dui mattis quis congue fames.</p>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="links-widget footer-widget ml_50">
                                    <div className="widget-title">
                                        <h3>Application Services</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/application-development">Application Development</Link></li>
                                            <li><Link href="/outsourcing-manages-services">Outsoursing and Managed Services</Link></li>
                                            <li><Link href="/strategic-consulting">Strategic Consulting</Link></li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="links-widget footer-widget ml_50 mt_20">
                                    <div className="widget-title">
                                        <h3 className="links-list"><li><Link href="/flex-support">Flex Support</Link></li></h3>
                                    </div>
                                    <div className="widget-title">
                                        <h3>Security,Risk and Compliance</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/sap-grc">SAP GRC</Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="links-widget footer-widget ml_30">
                                    <div className="widget-title">
                                        <h3> By Solutions</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/bigdata">Analytics and Big Data</Link></li>
                                            <li><Link href="/sap-hana">SAP Hana</Link></li>
                                            <li><Link href="/it-infra">IT Infrastructure </Link></li>
                                            <li><Link href="/mobility">Mobility</Link></li>
                                            <li><Link href="/sap">SAP</Link></li>
                                            <li><Link href="/success-factor">Success Factors</Link></li>
                                            <li><Link href="/sap-mii">SAP MII</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="contact-widget footer-widget">
                                    <div className="widget-title">
                                        <h3>Contact</h3>
                                    </div>
                                    <div className="widget-content">
                                        {/* <p>Tincidunt neque pretium lectus donec risus.</p> */}
                                        <ul className="info-list clearfix">
                                            <li><i className="icon-23"></i>345 PLAINFIELD AVE, SUITE # 303
                                                EDISON, NJ 08817 USA.</li>
                                            <li><i className="icon-3"></i><Link href="info@rayvenit.solutions">info@rayvenit.solutions</Link></li>
                                            <li><i className="icon-2"></i><Link href="tel:#">(848)-459-5944</Link></li>
                                            <li><i className="icon-2"></i><Link href="tel:#">(732)-749-8384  Extn: 111</Link></li>
                                            <li><i className="icon-2"></i><Link href="tel:#">(732)-862-8384</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                <div className="footer-bottom centred">
                    <div className="auto-container">
                        <div className="copyright">
                            <p>
                                Copyright {new Date().getFullYear()} by <Link href="#">RAYVEN IT </Link>  All Right Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
