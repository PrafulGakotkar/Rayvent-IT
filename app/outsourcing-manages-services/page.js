
import ServiceTabs1 from "@/components/elements/ServiceTabs1"
import Layout from "@/components/layout/Layout"
import AuditSlider1 from "@/components/slider/AuditSlider1"
import ServiceSlider1 from "@/components/slider/ServiceSlider1"
import Link from "next/link"
export default function Home() {

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Outsourcing and Managed Services">
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
                          <Link href="/outsourcing-manages-services" className="current">Outstanding & Managed Services</Link>
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
                        <img src="assets/images/service/service-8.jpg" alt="" />
                      </figure>
                      <div className="text">
                        <h2>RAYVEN IT's SAP implementation services includes all the variants such as...</h2>
                        <ul className="list-style-one clearfix mb_30">
                          <li>New Implementations</li>
                          <li>Migrating from Legacy Enterprise Systems</li>
                          <li>Consolidating Distributed Systems</li>
                          <li>Implementing Incremental SAP modules to an existing SAP Enterprise System
                          </li>
                        </ul>

                        <p>
                          RAYVEN IT uses its proprietary Implementation Delivery Methodology framework which has pre-built processes, templates, checklists etc. for this purpose
                        </p>
                      </div>
                    </div>
                    <div className="content-two mb_90">
                      <div className="row clearfix">
                        <div className="text-box mb_20">
                          <h3>APPLICATION MAINTENANCE SUPPORT (AMS)</h3>
                          <p style={{ textAlign: 'justify' }}>
                            RAYVEN IT has a comprehensive offering to ensure operational excellence for its installed base of SAP customers. We look beyond Value Sustenance, to provide our clients with a set of options to enhance the value of business, leveraging their SAP investment. Beyond Application Management, RAYVEN IT also has an extensive partner network, through which it offers a comprehensive set of infrastructure and system management services. This ensures that as a customer, you have the option of holding one company accountable for all your support needs in key transactional and analytical applications. Thus, our deep expertise in the SAP software portfolio, our global partner network, our offshore capabilities, and the depth of our SAP expertise and bench strength ensure that can provide optimal operational support to our customers.
                          </p>

                        </div>
                        <h3>COMPETITIVE DIFFERENTIATORS</h3>
                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                          <div className="text-box">
                            <p style={{ textAlign: 'justify' }}>
                              RAYVEN IT Solutions has experienced rapid growth for the last 4 consecutive years. Some of the reasons why our customers continue to vote for us with their loyalty and which differentiate us from our competitors are listed below:
                            </p>
                            <ul className="list-style-one clearfix" style={{ textAlign: 'justify' }} >
                              <li>We focus on the user experience. We realize that our processes, the tools we provide and the software we use need to be easy to learn and use so that they can help our users increase their productivity. Hence, we look for opportunities to create value to new or existing software used by the client by simplifying the support process.</li>
                              <li>Our mission, “helping customers with a very strong SAP team which can integrate with the client team and provide the knowledge, expertise and be quick to respond to end user requests to ensure that the SAP system adoption is enhanced and the user productivity is optimized thereby providing greatest benefits to our customers. Combining our expertise in business process, ERP, Business Intelligence, application development and integration technologies, we are able to agile, responsive and cost effective within an enterprise, as well as across the enterprise value chain to the organization’s business partners and impede organizational efficiency.</li>
                              <li>We customize and deliver onsite onshore and offshore Services in ERP, CRM, BI, HCM and other SAP applications.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                          {/* <figure className="image-box">
                            <img src="assets/images/service/service-9.jpg" alt="" />
                          </figure> */}
                          <div className="text-box">
                            <ul className="list-style-one clearfix mt_100" style={{ textAlign: 'justify' }} >
                              <li>Our flexible team structuring, ramp up and ramp down model provides customer with the flexibility to address key areas without having to commit to long term contracts and optimize the spend. Our willingness to partner with our customers and go the extra mile to ensure benefit realization is a key differentiator.</li>
                              <li>We maintain specialty skills in industry verticals who understand the SAP system configuration and business process as well as the SAP RDS (Rapid Deployment Solutions).</li>
                              <li>We have a very successful record of delivering multiple solutions in ERP, CRM, PLM, Net Weaver (BI and Portals), including use of our cost effective Onshore/Offshore model.
                              </li>
                              <li>RAYVEN IT Solutions has helped, and is currently helping, clients with SAP Application support and Development services.
                              </li>
                              <li>We employ only experienced and successful Program and Project Consulting Managers, and application team leads and consultants.
                              </li>
                              <li>Our application and infrastructure management services ensure that the customer can reap the benefit of continuous improvement and optimization.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="content-three mb_85">
                      <div className="text mb_50">
                        <h3>SOFTWARE UPGRADES</h3>
                        <p>
                          SAP continuously upgrades its existing modules in terms of new architecture, features, functionality etc., RAYVEN IT continuously maps the functionality and features between specific SAP versions to help its customers migrate to the new version in a meaningful manner. RAYVEN IT leverages its proprietary upgrade implementation framework for such engagements.
                        </p>
                      </div>
                      <div className="text mb_100">
                        <h3>CUSTOMIZATIONS</h3>
                        <p>
                          SAP solution is subject to varied level of customization for various clients based on specific end use business processes, flexibility in adoption, Usability convenience, integration, need to design specific bolt-on solutions etc., The customizations cover Reports, Interfaces, Forms, Extensions, Conversions/migration etc., RAYVEN IT leverages its deep knowledge of SAP architecture and suggested practices while providing SAP customization solutions.
                        </p>
                      </div>
                      {/* <div className="row clearfix">
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