import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="SAP MII">
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
                                                    <Link href="/outsourcing-manages-services" >Outstanding & Managed Services</Link>
                                                </li>
                                                <li>
                                                    <Link href="/strategic-consulting" >Strategic Consulting</Link>
                                                </li>
                                                <li>
                                                    <Link href="/flex-support" >Flex Support</Link>
                                                </li>
                                                <li>
                                                    <Link href="/sap-grc" >SAP GRC</Link>
                                                </li>
                                                <li>
                                                    <Link href="/bigdata" >Analytics & Big Data</Link>
                                                </li>
                                                <li>
                                                    <Link href="/sap-hana" >SAP HANA</Link>
                                                </li>
                                                <li>
                                                    <Link href="/it-infra" >IT Infrastructure</Link>
                                                </li>
                                                <li>
                                                    <Link href="/mobility" >Mobility</Link>
                                                </li>
                                                <li>
                                                    <Link href="/sap" >SAP</Link>
                                                </li>
                                                <li>
                                                    <Link href="/sap-mii" className="current">SAP MII</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="sidebar-widget contact-widget centred">
                                            <div className="widget-content">
                                                <div
                                                    className="bg-layer"
                                                    style={{
                                                        backgroundImage: 'url(assets/images/service/service-7.png)',
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
                                                        <Link href="mailto:info@rayvenit.solutions">info@rayvenit.solutions</Link>
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
                                                <img src="/assets/images/service/sap-mii.png" alt="" />
                                            </figure>
                                            <div className="text">
                                                {/* <h2>Strategy & Planning</h2> */}
                                                <p style={{ textAlign: 'justify' }}>
                                                    SAP brings many innovations into the manufacturing business. Manufacturing Integration and Intelligence solutions from SAP allows companies to link their manufacturing process with business operations. This collaboration allows manufacturers to adapt and replenish supply networks while responding to dynamic changes.
                                                </p>

                                            </div>
                                        </div>
                                        <div className="content-two mb_90">
                                            <div className="row clearfix">
                                                <h3>Manufacturing Integration and Intelligence Solutions</h3>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <p style={{ textAlign: 'justify' }}>
                                                            SAP MII delivers computer-integrated manufacturing, IIoT and machine-to-machine (M2M) capabilities, real-time manufacturing intelligence, and more.
                                                        </p>
                                                        <p style={{ textAlign: 'justify' }}>
                                                            This means you can increase productivity by connecting the shop floor with ERP systems. Operators have real-time access to ERP data, and instantly access actionable information. Companies can monitor and measure their business processes to drive improvements and increased efficiency
                                                        </p>
                                                        <p style={{ textAlign: 'justify' }}>
                                                            The features available to SAP manufacturers help to boost productivity, have better control and innovation in critical processes, while minimizing the cost and complexities.
                                                        </p>
                                                        {/* <ul className="list-style-one clearfix">
                                                            <li>Holiday Trash & Recycling</li>
                                                            <li>Things To Do In Govarnex</li>
                                                            <li>Rent a Picnic Shelter</li>
                                                        </ul> */}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="/assets/images/service/manufacturing.png" alt="" />
                                                    </figure>
                                                </div>
                                            </div>
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