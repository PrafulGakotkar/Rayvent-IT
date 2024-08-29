import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="IT Infrastructure">
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
                                                    <Link href="/it-infra" className="current">IT Infrastructure</Link>
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
                                            <div className="image-box">
                                                <img src="/assets/images/service/it-infra.png" alt="" />
                                            </div>

                                        </div>
                                        <div className="content-two mb_90">
                                            <div className="row clearfix mb_80 ">
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        {/* <h3>Overview</h3> */}
                                                        <p style={{ textAlign: 'justify' }}>
                                                            With the onset of big data, mobility and cloud, the needs of IT are changing. Meeting the challenge requires innovative ways to respond to business needs, greater flexibility, faster technology innovation and providing greater business value.
                                                        </p>
                                                        <p style={{ textAlign: 'justify' }}> Our consulting and managed services deliver the resources and capabilities required to assess, design, build and manage an agile, flexible IT environment.</p>
                                                        {/* <ul className="list-style-one clearfix">
                                        <li>Holiday Trash & Recycling</li>
                                        <li>Things To Do In Govarnex</li>
                                        <li>Rent a Picnic Shelter</li>
                                    </ul> */}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="/assets/images/service/it-infrastructure.png" alt="" />
                                                    </figure>
                                                </div>
                                            </div>

                                            <div className="row clearfix mb_80">
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="/assets/images/service/it-management.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h3>IT MANAGEMENT CONSULTING</h3>
                                                        <p style={{ textAlign: 'justify' }}>
                                                            As advancements in IT infrastructure accelerate, it is critical that your IT systems are aligned with your business needs. Our seasoned consulting team can help your organization gain greater returns on its investments in traditional and emerging technologies.
                                                        </p>


                                                    </div>
                                                </div>

                                            </div>

                                            <div className="row clearfix mb_80 ">
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h3>INFRASTRUCTURE SECURITY</h3>
                                                        <p style={{ textAlign: 'justify' }}>
                                                            Best practices and solutions that help reduce and manage IT risk, with a focus on planning, preparedness and resilient infrastructures. Our infrastructure security services help reduce and manage your IT risk. With a focus on planning, we apply industry best practices to protect your information from security breaches today and tomorrow
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="/assets/images/service/infra-security.png" alt="" />
                                                    </figure>
                                                </div>
                                            </div>

                                            <div className="row clearfix mb_80">
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="/assets/images/service/workplace-service.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h3>WORKPLACE SERVICES</h3>
                                                        <p style={{ textAlign: 'justify' }}>
                                                            Transform your organization into a more flexible, scalable and cost-effective computing environment. Let our team help you simplify and streamline your computing environment. We support a wide range of needs at the user level, including the upgrade of desktop and network infrastructures, support of new business practices such as collaboration, help desk services and more. By streamlining systems, we can help reduce support time, improve service and provide new levels of productivity.
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