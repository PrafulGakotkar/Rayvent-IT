import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SAP GRC">
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
                                                    <Link href="/sap-grc" className="current">SAP GRC</Link>
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
                                                {/* <h2>Strategy & Planning</h2> */}
                                                <p>
                                                    Times are evolving with Security, Risk management and Internal Compliance brought to forefront due to the Section 404 of Sarbanes-Oxley and changes in International Financial Reporting Standards. The focus of the IT Governance organization is to closely integrate key business risks and effective control configuration into design and implementation. Some of the critical challenges that IT organizations are working towards overcoming include...
                                                </p>

                                                <ul className="list-style-one clearfix">
                                                    <li>Gaining a better perspective on risk management or controls and how the functions of the software can be tailored to meet control objectives.</li>
                                                    <li>Proactively involving practitioners of internal audit, risk management and control specialists in ERP project activities.</li>
                                                    <li>Including risk management, internal control or compliance requirements in requests for proposals for project implementation.</li>
                                                </ul>

                                            </div>
                                        </div>
                                        <div className="content-two mb_90">
                                            <div className="row clearfix">
                                                <h3>RAYVENIT'S END-TO-END SECURITY, RISK AND COMPLIANCE MANAGEMENT SERVICES</h3>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">

                                                        <ul className="list-style-one clearfix">
                                                            <li>SAP GRC solution design, implementation and project management.</li>
                                                            <li>SAP Security assessments.</li>
                                                            <li>SAP GRC software implementations and assessments.</li>
                                                            <li>Delivering ERP audits and reducing testing time and costs.</li>
                                                            <li>Role Design/ Redesign/ Remediation.</li>
                                                            <li>Designing effective systems controls.</li>
                                                            <li>Maximizing configurable controls.</li>
                                                            <li>Optimizing control environment (automated versus manual controls).</li>
                                                            <li>Evaluating and designing effective segregation of duty frameworks and mitigating controls.</li>
                                                            <li>Implementing sustainable compliance processes.</li>
                                                            <li>Process Control, Fraud Management, Access Control.</li>
                                                            <li>Conducting effective front-end risk assessment.</li>
                                                            <li>Enhancing risk management capabilities.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="assets/images/service/service-9.jpg" alt="" />
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-three mb_85">
                                            <div className="text mb_100">
                                                <h3>WHY RAYVENIT FOR YOUR SECURITY, RISK AND COMPLIANCE MANAGEMENT NEEDS</h3>
                                                <p>
                                                    Our solutions are not only focused on SAP's GRC suite of products, but the entire process of Security, Risk, and Compliance in an SAP environment. We recognize that effective SAP Security is only one small part of GRC for organizations using SAP's products.</p>

                                                <ul className="list-style-one clearfix">
                                                    <li>More than 10 years of experience and one of the world's leading experts on SAP audit and GRC topics.</li>
                                                    <li>Creative use of transactions and functions already within your current SAP implementation.</li>
                                                    <li>SAP GRC software implementations and assessments.</li>
                                                    <li>Utilization of outside tools and 3rd party add-on to justify the case for additional investment.</li>
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