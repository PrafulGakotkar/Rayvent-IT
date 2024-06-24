import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Data Science And Analytics Consulting">
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
                                                    <Link href="/data-science" className="current">
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
                                                <img src="/assets/images/service/data-science.png" alt="" />
                                            </figure>
                                            <div className="text">
                                                <h2>Data & Analytics Consulting Services</h2>
                                                <p>
                                                    As a Consulting Partner, we leverage best practices, proven analytics methodologies and tools to define the right analytics solutions for you, that solve complex business challenges and reduce the time to actionable insights.
                                                </p>
                                                <p>
                                                    We blend Data Science/ Analytics with a business focused strategic outlook to ensure our clients achieve ROI from their various analytics initiatives
                                                </p>
                                            </div>
                                        </div>
                                        <div className="content-two mb_90">
                                            <div className="row clearfix">
                                                <h3>OUR DATA & ANALYTICS SERVICE OFFERINGS :</h3>
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column mb_30">
                                                    <div className="text-box">
                                                        <h3>Data Strategy & Governance</h3>

                                                        <ul className="list-style-one clearfix">
                                                            <li>Data Lake & EDW implementation</li>
                                                            <li>Data Governance & Quality</li>
                                                            <li>Data Architecture & Integration</li>
                                                            <li>Data Cleansing & Validation</li>
                                                            <li>Data Sourcing Strategy & Master Data Mgmt</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column mb_30">
                                                    <div className="text-box">
                                                        <h3>Data Usage Rights & Monetization</h3>

                                                        <ul className="list-style-one clearfix">
                                                            <li>Data Usage Rights Tracking
                                                            </li>
                                                            <li>Data Rights Compliance & Clearance
                                                            </li>
                                                            <li>Data Products & Monetization
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h3>Stack / Platform</h3>

                                                        <ul className="list-style-one clearfix">
                                                            <li>PowerCenter, Informatica DQ</li>
                                                            <li>Hadoop, MapR, Hive, Spark, SAP Hana</li>
                                                            <li>Tableau, PowerBI</li>

                                                        </ul>
                                                    </div>
                                                </div>


                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h3>BI & Analytics</h3>

                                                        <ul className="list-style-one clearfix">
                                                            <li>Data Mining</li>
                                                            <li>Prescriptive Analytics</li>
                                                            <li>AI / Machine Learning</li>

                                                        </ul>
                                                    </div>
                                                </div>



                                                {/* <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="assets/images/service/service-9.png" alt="" />
                                                    </figure>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="content-three mb_1">
                                            <h3>OUR VALUE PROPOSITION :</h3>
                                            <div className="text mb_10">
                                                <h5 className="mb_10">- RAYVEN IT has pool of consultants</h5>
                                                <ul className="list-style-one clearfix mb_20">
                                                    <li>With extensive experience in Master Data and Big Data Services across multiple Industries</li>
                                                    <li>Can work independently on project at any stage of the life cycle</li>
                                                    <li>Trained and experienced in multiple technologies and tools</li>
                                                </ul>

                                                <h5 className="mb_20">- Our Internal training mechanism keeps our consultants up to date with market trends</h5>
                                                <h5 className="mb_20">- Our highly skilled consultants help shorten Time to Market significantly when compared to Big Consulting Companies</h5>

                                                <h5 className="mb_10">- Experienced in Cloud Data Services and Application Programming Interfaces(APIs)</h5>
                                                <ul className="list-style-one clearfix mb_20">
                                                    <li>Experience in the Agile MDM and Data Services project lifecycle</li>
                                                    <li>MDM User Stories, Governance Functions</li>
                                                    <li>DQ & Architecture</li>
                                                    <li>Rapid Prototyping</li>
                                                </ul>

                                                <h5 className="mb_10">- Full-spectrum Data Services</h5>
                                                <ul className="list-style-one clearfix mb_20">
                                                    <li>Consulting</li>
                                                    <li>Roadmap</li>
                                                    <li>Domain sequencing</li>
                                                    <li>DQ & DG strategy</li>
                                                    <li>Data Architecture</li>
                                                    <li>Run and Scale operations</li>
                                                </ul>
                                            </div>

                                            {/* <div className="text mt_50">
                                                <p>
                                                    Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                                                    venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                                                    amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                                                    at egestas amet feugiat laoreet sed potenti integer.
                                                </p>
                                            </div> */}
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