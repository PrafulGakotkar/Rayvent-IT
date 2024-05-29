import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Application Development">
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
                                                    <Link href="/application-development" className="current">Application Development</Link>
                                                </li>
                                                <li>
                                                    <Link href="/data-science" >
                                                        Data Science & Analytics Consulting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/outsourcing-manages-services">Outstanding & Managed Services</Link>
                                                </li>
                                                <li>
                                                    <Link href="/strategic-consulting">Strategic Consulting</Link>
                                                </li>
                                                <li>
                                                    <Link href="/flex-support">Flex Support</Link>
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
                                                        backgroundImage: 'url(assets/images/service/service-7.jpg)',
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
                                                <img src="assets/images/service/service-10.jpg" alt="" />
                                            </figure>
                                            <div className="text">
                                                <h3>We strives to provide our customers quality application development services
                                                </h3>
                                                <p style={{ textAlign: 'justify' }}>
                                                    As a software development service provider, RAYVEN IT strives to provide our customers quality application development services and web development services that help keep our customers ahead with their competitors. Our team follows one of two approaches to development. In full lifecycle application projects, we assume complete responsibility for analysis, design, implementation, testing and integration of systems. In cooperative development, we work with your IT professionals to jointly analyze, design, implement, test and integrate systems.
                                                </p>

                                            </div>
                                        </div>
                                        <div className="content-two mb_90">
                                            <div className="row clearfix">
                                                <h3>OFFERINGS</h3>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h4>Full Life Cycle Development</h4>
                                                        <p style={{ textAlign: 'justify' }}>
                                                            Our Team uses Agile application development methodology to enable faster development, improve developer productivity and reduces time to market. Most popular areas we areas our team worked on:
                                                        </p>
                                                        <ul className="list-style-one clearfix">
                                                            <li>Enterprise application development</li>
                                                            <li>Application Integrations</li>
                                                            <li>Rapid business prototyping</li>
                                                            <li>Web Application development</li>
                                                            <li>Product training, consulting, support and customization</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h4>Cooperative Development</h4>
                                                        <p style={{ textAlign: 'justify' }}>
                                                            Specialists across our global delivery network work with you to provide the skills you need, when you need them, for streamlining, managing and maximizing all systems, applications and enterprise platforms including:
                                                        </p>
                                                        <ul className="list-style-one clearfix">
                                                            <li>SAP</li>
                                                            <li>Java/J2EE</li>
                                                            <li>Microsoft .NET</li>
                                                            <li>Portals and content management</li>
                                                            <li>SOA</li>
                                                            <li>Messaging and integration</li>
                                                            <li>Oracle</li>
                                                            <li>Hadoop</li>
                                                            <li>Neo4j</li>
                                                            <li>Enterprise Application Servers</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                    <figure className="image-box">
                                    <img src="assets/images/service/service-9.jpg" alt="" />
                                    </figure>
                                </div> */}
                                            </div>
                                        </div>
                                        {/* <div className="content-three mb_85">
                                <div className="text mb_100">
                                <h3>Our Solutions</h3>
                                <p>
                                    Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                                    venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                                    amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                                    at egestas amet feugiat laoreet sed potenti integer.
                                </p>
                                </div>
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                    <div className="icon-box">
                                        <i className="icon-8"></i>
                                    </div>
                                    <h3>Tax Strategy</h3>
                                    <p>Cras varius proin amet vehicula magna tricies gravida vel volutpat.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                    <div className="icon-box">
                                        <i className="icon-13"></i>
                                    </div>
                                    <h3>Investment Policy</h3>
                                    <p>Cras varius proin amet vehicula magna tricies gravida vel volutpat.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="text mt_50">
                                <p>
                                    Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                                    venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                                    amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                                    at egestas amet feugiat laoreet sed potenti integer.
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