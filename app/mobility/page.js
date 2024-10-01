import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from 'next/head';

export default function Home() {

    return (
        <>
            <Head>
                {/* <title>SAP Consulting & Implementation Services</title> */}
                <meta name="description" content="Provide expert SAP consulting, implementation, support, and staffing services to enhance business performance and customer satisfaction." />
                <meta name="keywords" content="SAP consulting services, SAP implementation services, SAP support, SAP staffing, SAP technology solutions, business performance, SAP customer satisfaction, SAP ERP solutions" />
            </Head>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Mobility">
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
                                                    <Link href="/mobility" className="current">Mobility</Link>
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
                                                <img src="/assets/images/service/mobility.png" alt="" />
                                            </figure>
                                            <div className="text">
                                                {/* <h2>Strategy & Planning</h2> */}
                                                <p style={{ textAlign: 'justify' }}>
                                                    Collaboration, connectivity and communication are the need of the hour for organizations. It is a constant endeavor to improve employee interactivity and create seamless experiences for customers while having real-time engagements with the field force. Mobility is redefining the rules of user experience with anytime, anywhere availability and is now a necessity for future-ready, borderless global enterprise.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="content-two mb_90">
                                            <div className="row clearfix">
                                                <h3>SAP FIORI</h3>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <p style={{ textAlign: 'justify' }}>
                                                            SAP Fiori is the new user experience (UX) for SAP software. It applies modern design principles for a completely reimagined user experience. SAP Fiori UX represents a personalized, responsive and simple user experience across devices and deployment options. RAYVEN IT has the skill and experience of working on the latest innovations in enterprise mobility and SAP solutions. We can renew your user experience in just two weeks with our express implementation services for SAP Fiori. Whether you’re looking to launch Fiori as a POC to give the app suite a test run, deploy into production, or enhance the suite to best fit your process, we have got you covered.

                                                        </p>
                                                        <ul className="list-style-one clearfix">
                                                            <li>Fiori Mobile Roadmaps</li>
                                                            <li>Fiori Proof of Concepts</li>
                                                            <li>Full Scale Deployments</li>
                                                            <li>Customizations and Enhancements</li>
                                                            <li>Back-end Synchronizations</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="/assets/images/service/sap-flori.png" alt="" />
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-three mb_1">
                                            <div className="text mb_10">
                                                <h3>MOBILITY CONSULTING</h3>
                                                <p style={{ textAlign: 'justify' }}>
                                                    The rapid spurt of mobile device adoption in the enterprise and the exponential growth of wireless networks have transformed business models incrementally. Implementing a mobile organization requires breaking organizational siloes to bring together people, technology and security. This calls for a robust enterprise mobile strategy and consulting partner, to build a roadmap for your future-ready mobile enterprise.
                                                </p>
                                                <p style={{ textAlign: 'justify' }}>RAYVEN IT helps you transform your business processes and become a future-ready mobile enterprise. Our consultants can devise the right mobility strategy and roadmap to help you realize business value through:</p>

                                                <ul className="list-style-one clearfix">
                                                    <li>Increased customer acquisition and revenue</li>
                                                    <li>Improved customer satisfaction and loyalty</li>
                                                    <li>Increased employee productivity and collaboration</li>
                                                    <li>Reduced operational cost</li>
                                                </ul>
                                            </div>

                                        </div>


                                        {/* <div className="content-four">
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