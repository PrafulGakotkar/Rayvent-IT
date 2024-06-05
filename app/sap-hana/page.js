import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SAP HANA">
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
                                                    <Link href="/sap-hana" className="current">SAP HANA</Link>
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
                                                <img src="/assets/images/service/sap-hana.png" alt="" />
                                            </figure>
                                            <div className="text">
                                                {/* <h2>Strategy & Planning</h2> */}
                                                <p style={{ textAlign: 'justify' }}>
                                                    With the advent of SAP HANA, SAP is extending its reach beyond enterprise-class applications. It digs into the database engine/storage layer just below that supports data exploration and business analytics tasks as well as transactional applications.
                                                </p>
                                                <p style={{ textAlign: 'justify' }}>
                                                    We enable processes and technology in your enterprise to leverage these large amounts of data (Big Data) to drive Business Intelligence and Predictive Analytics.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="content-two mb_90">
                                            <div className="row clearfix">

                                                <div className="text-box">
                                                    <h3>WHAT IS THE HANA VALUE PROPOSITION TO CUSTOMERS?</h3>
                                                    <p>
                                                        Enterprises collect large volumes of structured data via legacy ERP, CRM, and other systems. Most struggle to make use of the data while spending large sums to store and protect it. One option to make use of this data is to extract, transform, and load subsets into a traditional enterprise data warehouse for analysis. This process is time-consuming and requires significant investment in related proprietary hardware. The result is often an expensive, bloated EDW that provides little more than backward-looking views of company data.
                                                    </p>
                                                    <p>
                                                        SAP HANA offers enterprises a new approach to harnessing the value of all that corporate data. As mentioned above, HANA runs on inexpensive commodity hardware from any of several SAP partners. Its data replication and integration capabilities vastly speed up the process of loading data into the database. And because it uses in-memory storage, applications on top of HANA can access data in near-real time, meaning end-users can gain meaningful insight while there is still time to take meaningful action. HANA can also perform predictive analytics to help organizations plan for future market developments.
                                                    </p>

                                                </div>

                                                {/* <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                    <figure className="image-box">
                                    <img src="/assets/images/service/service-9.png" alt="" />
                                    </figure>
                                </div> */}
                                            </div>
                                        </div>
                                        <div className="content-three mb_1">
                                            <div className="text mb_10">
                                                <h3>WHAT ARE COMPELLING SAP HANA USE CASES?</h3>
                                                <h4>
                                                    Real-time analytics as supported by SAP HANA have numerous potential use cases including:
                                                </h4>
                                                <ul className="list-style-one clearfix mt_20">
                                                    <li>Profitability reporting and forecasting</li>
                                                    <li>Retail merchandizing and supply-chain optimization</li>
                                                    <li>Security and fraud detection</li>
                                                    <li>Energy use monitoring and optimization</li>
                                                    <li>Telecommunications network monitoring and optimization</li>
                                                </ul>
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