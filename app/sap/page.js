import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SAP ERP">
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
                                                    <Link href="/sap" className="current">SAP</Link>
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
                                        
                                        <div className="content-two mb_90">
                                            <div className="row clearfix mb_30">
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        {/* <h3>Overview</h3> */}
                                                        <p style={{ textAlign: 'justify' }}>
                                                            RAYVEN IT SAP practice life cycle services capabilities are primarily focused to provide solutions to it's clients leveraging the fully integrated SAP business suite of modules. RAYVEN IT has capability to provide and support complete life cycle services across the integrated SAP business suite. The solutions are focused around key set of integrated module sets.
                                                        </p>
                                                        {/* <ul className="list-style-one clearfix">
                                                            <li>Holiday Trash & Recycling</li>
                                                            <li>Things To Do In Govarnex</li>
                                                            <li>Rent a Picnic Shelter</li>
                                                        </ul> */}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column mb-30">
                                                    <figure className="image-box">
                                                        <img src="/assets/images/service/sap-erp.png" alt="" />
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="content-two mb_90">
                                            <div className="row clearfix mb_40">
                                                <h3>SAP HUMAN CAPITAL MANAGEMENT (HCM)</h3>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <p style={{ textAlign: 'justify' }}>
                                                            RAYVEN IT SAP Human Capital Management HCM) solution is built around the integrated SAP human capital set of HCM modules to help its clients manage their most important asset-People. The SAP HCM solution equips executives, HR professionals, and line managers to hire the best talent, train and cultivate skills of their workforce, design and administer Total Rewards program for its employees. The HCM solution also offers a web based employee interaction center with employee self-service capabilities across levels.
                                                        </p>

                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="/assets/images/service/human-capital.png" alt="" />
                                                    </figure>
                                                </div>
                                            </div>

                                            <div className="row clearfix mb_40">
                                                <h3>SAP CUSTOMER RELATIONSHIP MANAGEMENT (CRM)</h3>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="/assets/images/service/crm.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <p style={{ textAlign: 'justify' }}>
                                                            RAYVEN IT SAP CRM solution helps integrate the comprehensive set of CRM modules into a single, customer-centric operation. The SAP CRM solution helps manage customer requests, service, and repair processes more efficiently; optimize operational costs; enhance service-level compliance as well as after-sales services. It also offers a web based customer interaction center with self-service capabilities for service and claims management, field service and installed-base management.
                                                        </p>

                                                    </div>
                                                </div>

                                            </div>


                                            <div className="row clearfix mb_40">
                                                <h3>SAP FINANCIAL MANAGEMENT</h3>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <p style={{ textAlign: 'justify' }}>
                                                            RAYVEN IT SAP Financial Management solution is built around a comprehensive set of Financials modules to Improve efficiency by integrating general ledger and fixed assets, ensuring compliance with local accounting requirements, streamline configuration and execution of the entity close, facilitate corporate close by automating complex activities and Increase governance of financial master data.
                                                        </p>

                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="/assets/images/service/financial.png" alt="" />
                                                    </figure>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="content-two mb_10">
                                            <div className="row clearfix mb_30">
                                                <h3>SAP SUPPLY CHAIN MANAGEMENT (SCM)</h3>

                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column ">
                                                    <figure className="image-box">
                                                        <img src="/assets/images/service/supply-chain.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <p style={{ textAlign: 'justify' }}>
                                                            RAYVEN IT SAP solution is built around the integrated set of SAP SCM modules including collaborative demand supply planning, warehouse management, extended manufacturing network planning, transportation management and other modules. The SCM solution covers supply and demand planning capabilities, Improve integration of planning and order promising and Increase efficiency of the supply network.
                                                        </p>

                                                    </div>
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