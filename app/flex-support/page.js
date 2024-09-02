import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Flex Support">
                <div>
                    <section className="service-details p_relative">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                    <div className="service-sidebar mr_40">
                                        <div className="sidebar-widget category-widget">
                                            <h3>All Services</h3>
                                            <ul className="category-list clearfix">
                                                <li>
                                                    <Link href="/application-development" >Application Development</Link>
                                                </li>
                                                <li>
                                                     <Link href="/data-science" >
                                                        Data Science & Analytics Consulting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/outsourcing-manages-services" >Outsourcing and Managed Services </Link>
                                                </li>
                                                <li>
                                                    <Link href="/strategic-consulting" >Strategic Consulting</Link>
                                                </li>
                                                <li>
                                                    <Link href="/flex-support" className="current">Flex Support</Link>
                                                </li>
                                                <li>
                                                    <Link href="/sap-grc">SAP GRC</Link>
                                                </li>
                                                <li>
                                                    <Link href="/bigdata">Analytics & Big Data</Link>
                                                </li>
                                                <li>
                                                    <Link href="/sap-hana">SAP HANA</Link>
                                                </li>
                                                <li>
                                                    <Link href="/it-infra">IT Infrastructure</Link>
                                                </li>
                                                <li>
                                                    <Link href="/mobility">Mobility</Link>
                                                </li>
                                                <li>
                                                    <Link href="/sap">SAP</Link>
                                                </li>
                                                <li>
                                                    <Link href="/sap-mii">SAP MII</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="sidebar-widget contact-widget centred">
                                            <div className="widget-content">
                                                <div
                                                    className="bg-layer"
                                                    style={{
                                                        backgroundImage: 'url(/assets/images/service/service-7png)',
                                                    }}
                                                ></div>
                                                <h3>
                                                    Do You Need <br />
                                                    Any <span>Help?</span>
                                                </h3>
                                                <div className="icon-box">
                                                    <i className="icon-29"></i>
                                                </div>
                                                <div className="inner-box">
                                                    <p>
                                                        <Link href="mailto:info@rayvenitsolutions">info@rayvenitsolutions</Link>
                                                    </p>
                                                    <h3>
                                                        <Link href="tel:(848)-459-5944">(848)-459-5944</Link>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                    <div className="service-details-content">

                                        <div className="content-one mb_90">
                                            <figure className="image-box">
                                                <img src="/assets/images/service/flex-supportpng" alt="" />
                                            </figure>
                                            <div className="text">
                                                <h2>RAYVEN IT's FLEX Support
                                                </h2>
                                                <p>
                                                    RAYVEN IT's innovative cost effective seasoned model for its customers and here are few highlights
                                                </p>

                                                <h3>Highlights</h3>
                                                <ul className="list-style-one clearfix">
                                                    <li>Pay-As-You-Go Pricing</li>
                                                    <li>Rapid Deployment, Up and Running Almost Immediately</li>
                                                    <li>FLEX Pricing Model that Aligns with Business Demands</li>
                                                    <li>Minimal Base Cost with Additional Charges Based on Actual Consumption</li>
                                                    <li>Access to a High-Quality Resource Pool</li>
                                                    <li>Dedicated FLEX Support Pool for Quick Turnaround</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content-two mb_90">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h3>Supporting Applications 24x7 Within Budget</h3>
                                                        <h3>FLEX Support Advantages</h3>

                                                        <ul className="list-style-one clearfix">
                                                            <li>FLEX offsite resources bring extensive experience</li>
                                                            <li>Support and future development run seamlessly under their guidance</li>
                                                            <li>Regular system health checks with actionable recommendations</li>
                                                            <li>Optimal solutions delivered promptly</li>
                                                            <li>Rapid ticket turnaround improves system uptime and reduces downtime</li>
                                                            <li>24/7 support provided by a combination of FLEX primary and offshore resources</li>
                                                        </ul>

                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="/assets/images/service/flex-support-advantagespng" alt="" />
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="content-three mb_85">
                                            <div className="text mb_100">
                                                <h3>Our Solutions</h3>
                                                <p>
                                                    Enim justo, in mauris posuere dolor Dolor felis sapien sit egestas Ut
                                                    venenatis faucibus non sed faucibus mauris ultricies Cras varius proin
                                                    amet vehicula magna Ultricies gravida vel volutpat sed Platea sed fames
                                                    at egestas amet feugiat laoreet sed potenti integer
                                                </p>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <div className="icon-box">
                                                            <i className="icon-8"></i>
                                                        </div>
                                                        <h3>Tax Strategy</h3>
                                                        <p>Cras varius proin amet vehicula magna tricies gravida vel volutpat</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <div className="icon-box">
                                                            <i className="icon-13"></i>
                                                        </div>
                                                        <h3>Investment Policy</h3>
                                                        <p>Cras varius proin amet vehicula magna tricies gravida vel volutpat</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text mt_50">
                                                <p>
                                                    Enim justo, in mauris posuere dolor Dolor felis sapien sit egestas Ut
                                                    venenatis faucibus non sed faucibus mauris ultricies Cras varius proin
                                                    amet vehicula magna Ultricies gravida vel volutpat sed Platea sed fames
                                                    at egestas amet feugiat laoreet sed potenti integer
                                                </p>
                                            </div>
                                        </div>
                                        <div className="content-four">
                                            <h3>Download Resources</h3>
                                            <ul className="download-list clearfix">
                                                <li>
                                                    <div className="icon-box">
                                                        <i className="icon-30"></i>
                                                    </div>
                                                    <h5>Company Briefing Update for the Year</h5>
                                                    <span>Pdf(160kb)</span>
                                                    <button type="button">Download</button>
                                                </li>
                                                <li>
                                                    <div className="icon-box">
                                                        <i className="icon-30"></i>
                                                    </div>
                                                    <h5>Cultural Centers and Event schedule</h5>
                                                    <span>Pdf(160kb)</span>
                                                    <button type="button">Download</button>
                                                </li>
                                            </ul>
                                        </div> */}
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