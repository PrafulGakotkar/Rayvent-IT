import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Analytics And Big Data">
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
                                                    <Link href="/bigdata" className="current">Analytics & Big Data</Link>
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

                                        <div className="content-two mb_90">
                                            <div className="row clearfix mb_70">
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        {/* <h3>Overview</h3> */}
                                                        <p style={{ textAlign: 'justify' }}>
                                                            Information, insights and foresights have tremendous implication in every aspect of business. Organizations which are leveraging analytics to differentiate themselves at the front with standardization at the core are able to create sustainable competitive advantage. Analytics is enabling organizations to predict customer behavior, meet their needs and cement long-term customer relationships.
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
                                                        <img src="/assets/images/service/big-data.png" alt="" />
                                                    </figure>
                                                </div>
                                            </div>

                                            <div className="row clearfix mb_70">
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="/assets/images/service/business-intellegence.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h3>BUSINESS INTELLIGENCE</h3>
                                                        <p style={{ textAlign: 'justify' }}>
                                                            We help your business generate dashboards, reporting, analytical processing, analytics, data mining, process mining, complex event processing, business performance management, benchmarking, text mining, predictive analytics and prescriptive analytics. BI can be used to support a wide range of business decisions ranging from operational to strategic. Basic operating decisions include product positioning or pricing. Strategic business decisions include priorities, goals and directions at the broadest level. In all cases, BI is most effective when it combines data derived from the market in which a company operates (external data) with data from company sources internal to the business such as financial and operations data (internal data). When combined, external and internal data can provide a more complete picture which, in effect, creates an "intelligence" that cannot be derived by any singular set of data.
                                                        </p>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="content-three mb_85">
                                            <div className="text mb_100">
                                                <h3>Enterprise Information Management</h3>
                                                <p style={{ textAlign: 'justify' }}>
                                                    We can help your Enterprise Content Management (ECM), Business Process Management (BPM) and Customer Experience Management (CEM), Master Data Management, Master Data Governance.
                                                </p>
                                                <p style={{ textAlign: 'justify' }}>
                                                    Enterprise information management takes these two approaches to managing information one step further, in that it approaches information management from an enterprise perspective. Where BI and ECM respectively manage structured and unstructured information, EIM does not make this "technical" distinction. It approaches the management of information from the perspective of enterprise information strategy, based on the needs of information workers. ECM and BI in a sense choose a denominationalized approach, since they only cover part of the information within an organization. This results in a lack of available information during decision-making processes, market analysis, or procedure definition.
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