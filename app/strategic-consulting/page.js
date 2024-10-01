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
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Strategic Consulting">
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
                                                    <Link href="/strategic-consulting" className="current">Strategic Consulting</Link>
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
                                                        backgroundImage: 'url(/assets/images/service/service-7.png)',
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
                                                <img src="/assets/images/service/strategic-consulting.png" alt="" />
                                            </figure>
                                            <div className="text">
                                                <h4 className="mb_10">RAYVEN IT is a certified SAP partner and it has over 10 year of experience SAP implementation and support services.</h4>
                                                <p>
                                                    Identifying and then developing new business opportunities are essential for sustained business success. Our consulting staff delivers a combination of the customer, business, and technology insights that are necessary for creating effective strategies that are prioritized and actionable.

                                                </p>

                                            </div>
                                        </div>
                                        <div className="content-two mb_90">
                                            <div className="row clearfix">
                                                <h3>OFFERINGS</h3>
                                                <p style={{ textAlign: 'justify' }}>RAYVEN IT's SAP practice includes consultants based onsite in RAYVEN IT offices globally as well as its global offshore development centers in India. RAYVEN’s SAP professionals have diverse skill-mix comprising a blend of Technical, Functional, and Domain skills.</p>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h4>SAP Solution Assessment</h4>
                                                        <p style={{ textAlign: 'justify' }}>
                                                            RAYVEN IT provides business assessment and diligence studies to help enterprises define their SAP business strategy and transformation roadmap. This covers mapping the key business processes with SAP business suite functionality; Defining scope including customization and integration; Implementation approach and (global design, distributed delivery etc.,) and implementation road map; and Transition to ‘Managed Services Support’ model.
                                                        </p>
                                                        {/* <ul className="list-style-one clearfix">
                                                            <li>Holiday Trash & Recycling</li>
                                                            <li>Things To Do In Govarnex</li>
                                                            <li>Rent a Picnic Shelter</li>
                                                        </ul> */}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h4>Application Management Assessment</h4>
                                                        <p style={{ textAlign: 'justify' }}>
                                                            As a part of the assessment, we look at Basis support, ABAP, application break/fix support, hosting, network support, Help Desk and methodology/process for application enhancements. We also look at Service Level Agreements, performance metrics/KPIs, and spending analysis to come up with a list of areas that need improvement. This assessment provides recommendations to promote performance and reduce costs.
                                                        </p>

                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h4>Software Optimization</h4>
                                                        <p style={{ textAlign: 'justify' }}>
                                                            Identifying configuration and/or execution-related improvements in core ERP areas – such as Financial Accounting & Controlling, Sales & Distribution, Materials Management, and Production Planning – helps to improve overall ERP performance and user satisfaction.
                                                        </p>
                                                        {/* <ul className="list-style-one clearfix">
                                                            <li>Holiday Trash & Recycling</li>
                                                            <li>Things To Do In Govarnex</li>
                                                            <li>Rent a Picnic Shelter</li>
                                                        </ul> */}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h4>IT Strategy and Road Map</h4>
                                                        <p style={{ textAlign: 'justify' }}>
                                                            Depending on the client's needs, an IT strategy can be developed to focus on business applications or on infrastructure (desktops, servers, network, high availability, storage, etc.). The goal is to understand the current state and the vision for the future, and identify gaps to create a prioritized roadmap for improvement.
                                                        </p>

                                                    </div>
                                                </div>





                                                {/* <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="assets/images/service/service-9.png" alt="" />
                                                    </figure>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="content-three mb_85">
                                            <div className="text mb_100">
                                                <h3>Strategic Management & Learning</h3>
                                                <p style={{ textAlign: 'justify' }}>
                                                    Whether your organization is a for-profit, not-for-profit or public sector agency, the operating landscape is more competitive, with increasing complexities that make strategy implementation more challenging. We have observed that many organizations find it difficult to cascade their strategic intentions and plans down to their divisions and individuals, to make strategy effective and achieve intended results.

                                                </p>
                                                <p style={{ textAlign: 'justify' }}>
                                                    Organizations that conduct their own annual strategic planning exercises often encounter challenges difficulties in analyzing their operating environments effectively, articulating their strategies coherently, and understanding how strategies can be cascaded to divisions and individuals so that everyone is aligned.
                                                </p>
                                                <p style={{ textAlign: 'justify' }}>
                                                    With the competitive global landscape, some organizations may require assistance in reviewing their organizational strategies, as well as articulating their strategies visually in the form of a strategy map (with the four perspectives using strategic objectives), so that the leadership team of the organization are of one mind as they articulate and implement their strategies.
                                                </p>
                                                <p style={{ textAlign: 'justify' }}>
                                                    We have a team of management consultants with extensive experience across the private sector, not-for-profit organizations and public sector agencies, who can facilitate the strategy review and articulation process, including the development of the balanced scorecard with strategic measures (KPIs) and aligned strategic initiatives (programs and projects). These experienced consultants can also serve as strategy guides to senior management teams during the deployment phase of strategy, to facilitate the analysis and interpretation of performance results, as well as help refine the strategy over time.

                                                </p>
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