'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Head from 'next/head';

export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
        <Head>
        {/* <title>SAP Consulting & Implementation Services</title> */}
        <meta name="description" content="Provide expert SAP consulting, implementation, support, and staffing services to enhance business performance and customer satisfaction." />
        <meta name="keywords" content="SAP consulting services, SAP implementation services, SAP support, SAP staffing, SAP technology solutions, business performance, SAP customer satisfaction, SAP ERP solutions" />
      </Head>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Career">
                <div>

                    <section className="career-section p_relative">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-8 col-md-12 col-sm-12 content-side">

                                    <div className="content-box mr_110">
                                        <div className="sec-title mb_50">
                                            <span className="sub-title">Get Opportunities</span>
                                            <h2>Why RAYVEN IT</h2>
                                            <p className="mt_40 mb_20" style={{ textAlign: 'justify' }}>RAYVEN IT understands that in order to grow your business, especially in a challenging economic environment, your company has to do more than just continue to deliver. You must offer compelling products or services, present them through impactful customer experiences, and constantly improve internal efficiency.
                                                RAYVEN IT helps companies...</p>
                                            <ul className="list-style-one clearfix">
                                                <li>Find new ways to reach sales targets</li>
                                                <li>Capture new market opportunities</li>
                                                <li>Take advantage of the latest mobile, data and new software technologies</li>
                                                <li>Optimize internal efficiency</li>
                                                <li>Continually engage and excite customers</li>
                                            </ul>
                                            <p className="mt_10 mb_0" style={{ textAlign: 'justify' }}>By getting to know your core business goals inside and out, we internalize your needs so we can build software solutions that propel your company forward. RAYVEN IT specializes in complex, business-critical software and IT projects. Our customers include global leaders in the aerospace, finance, healthcare, manufacturing, software, telecommunications, and transportation and retail industries. Whether you are bringing software products to market or using software to drive your business, RAYVEN IT is passionate about your company's success.
                                            </p>
                                            <p className="mt_10 mb_20" style={{ textAlign: 'justify' }}>Whether you are bringing software products to market or using software to drive your business, RAYVEN IT is passionate about your company's success. Through our customized approach, RAYVEN IT helps companies identify and execute on their most strategic technology opportunities to gain meaningful competitive advantage.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                    <div className="career-sidebar ml_40">
                                        <h3>Quick Contact</h3>
                                        <div className="form-inner">
                                            {/* <form action="career.html" method="post"> */}
                                            <form action="" method="post">
                                                <div className="form-group">
                                                    <input type="text" name="name" placeholder="Name" required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name="email" placeholder="Email" required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="phone" placeholder="Phone" required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="subject" placeholder="Subject" required />
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="message" placeholder="Message"></textarea>
                                                </div>
                                                <div className="form-group message-btn">
                                                    <button type="submit" className="theme-btn-one">
                                                        Submit Now
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row clearfix">
                                <h2>GREAT WAY TO GROW!</h2>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-side">
                                    <div className="sec-title mb_20 mt_10">
                                        {/* <h5 className="sub-title ">Get Opportunities</h5> */}
                                        <p className="mt_0" style={{ textAlign: 'justify' }}><strong> Employee Benefits :</strong> Employees are unequivocally central to RAYVEN IT business success. RAYVEN IT shares the concerns and understands the needs of its employees for a conducive work environment. The organization offers attractive remuneration packages along with a host of benefit schemes and awards to motivate our employees.</p>
                                    </div>
                                    <div className="sec-title mb_30 ">
                                        {/* <h5 className="sub-title ">Get Opportunities</h5> */}
                                        <p className="mt_0" style={{ textAlign: 'justify' }}><strong> Medical and Insurance Benefits :</strong>  RAYVEN IT provides medical expense reimbursement for the employees and their dependents for general or specialist consultations, drugs, medicines and other medical services as prescribed by a medical practitioner.
                                        </p>
                                    </div>
                                    <div className="sec-title mb_30 ">
                                        {/* <h5 className="sub-title ">Get Opportunities</h5> */}
                                        <p className="mt_0" style={{ textAlign: 'justify' }}> Our Group Medical Insurance Policy extends financial benefits through insurance coverage to all our people. Besides this, we offer all our employees a comprehensive Personal Accident Insurance and Life Cover Insurance. We also have provision for �Parental Medical Insurance' and a �Cashless Hospitalization' scheme that involves a tie-up approximately a network of 2500 hospitals all across India. In addition, regular health check-ups are organized for all employees who are 35 years of age and above.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 content-side">
                                    <div className="sec-title mb_20 mt_10">
                                        {/* <h5 className="sub-title ">Get Opportunities</h5> */}
                                        <p className="mt_0" style={{ textAlign: 'justify' }}><strong> Compensation :</strong>  Apart from providing competitive remuneration and benefits to attract and retain talent in the organization, we have a variable based component in the salary structure. This is based on the performance of the employee and his contribution to the growth of the organization. Thus, high performers can grow their salary packages to a scale higher than the industry average.</p>
                                    </div>
                                    <div className="sec-title mb_30 ">
                                        {/* <h5 className="sub-title ">Get Opportunities</h5> */}
                                        <p className="mt_0" style={{ textAlign: 'justify' }}><strong> Housing Benefits : </strong>  RAYVEN IT offers Company Leased Accommodation for middle level and senior level managers. They are provided reimbursements for the furnishing of their homes. RayVEN IT compensation structure allows for maximum Tax Savings. Restricted Stock Unit Plan : At RAYVEN IT, performance is rewarded with ownership. The Restricted Stock Unit Plan aims at encouraging wealth sharing and ownership among the employees, based on their performance.
                                        </p>
                                    </div>
                                    <div className="sec-title mb_30 ">
                                        {/* <h5 className="sub-title ">Get Opportunities</h5> */}
                                        <p className="mt_0" style={{ textAlign: 'justify' }}> <strong>Other Benefits :</strong> Sometimes, due to stringent deadlines, work at RAYVEN IT extends beyond normal work hours. Committed employees stay focused and work late and put in extra hours to finish the job or task on time. RAYVEN IT appreciates this commitment and is also concerned about employee safety and welfare. Concerns related to safe conveyance are addressed through company organized cab shuttles.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="sec-title mb_50">
                                {/* <span className="sub-title">Get Opportunities</span> */}
                                <h2>OPEN JOBS</h2>
                                <p className="mt_40" style={{ textAlign: 'justify' }}>To apply, Please specify the position applying for and send resume to:
                                    info@rayvenit.solutions / resumes@rayvenit.solutions OR RAYVEN IT Solutions LLC, 345 Plainfield Ave., Ste. 303, Edison, NJ 08817.</p>
                            </div>

                            <ul className="accordion-box">
                                {/*Accordion Block*/}
                                <li className="accordion block">
                                    <div className='acc-btn'>
                                        <div className="icon-box"></div>
                                        <h3>JR. PROGRAMMER ANALYSTS</h3>
                                    </div>
                                    <div className="acc-content current">

                                        <div className="inner-box">

                                            <ul className="list-style-one clearfix">
                                                <li>UNDER SUPERVISION, DEVELOP AND WRITE COMPUTER PROGRAMS TO STORE, LOCATE, AND RETRIEVE SPECIFIC DOCUMENTS, DATA, AND INFORMATION</li>
                                                <li>CREATE TABLES, FLOW CHARTS, AND DIAGRAMS</li>
                                                <li>GATHER AND EVALUATE USER REQUIREMENTS AND PROCEDURES TO CUSTOMIZE EXISTING PROGRAMS AND CONVERT PROJECT SPECIFICATIONS</li>
                                                <li>UNDER SUPERVISION, CODE, TEST, AND DEBUG PROGRAMS</li>
                                                <li>ANALYZE, REVIEW AND WRITE SCRIPTS</li>
                                                <li>WORK WITH VARIOUS TECHNOLOGIES</li>
                                            </ul>

                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className='acc-btn'>
                                        <div className="icon-box"></div>
                                        <h3>PROGRAMMER ANALYSTS/JAVA</h3>
                                    </div>
                                    <div className="acc-content current">

                                        <div className="inner-box">

                                            <ul className="list-style-one clearfix">
                                                <li>DEVELOP AND WRITE COMPUTER PROGRAMS TO STORE, LOCATE, AND RETRIEVE SPECIFIC DOCUMENTS, DATA, AND INFORMATION</li>
                                                <li>CREATE TABLES, FLOW CHARTS, AND DIAGRAMS</li>
                                                <li>GATHER AND EVALUATE USER REQUIREMENTS AND PROCEDURES TO CUSTOMIZE EXISTING PROGRAMS AND CONVERT PROJECT SPECIFICATIONS</li>
                                                <li>CODE, TEST, AND DEBUG PROGRAMS</li>
                                                <li>ANALYZE, REVIEW AND WRITE SCRIPTS</li>
                                                <li>WORK WITH JAVA TOOLS</li>
                                            </ul>

                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className='acc-btn'>
                                        <div className="icon-box"></div>
                                        <h3>PROGRAMMER ANALYSTS/SAP ABAP/4</h3>
                                    </div>
                                    <div className="acc-content current">

                                        <div className="inner-box">

                                            <ul className="list-style-one clearfix">
                                                <li>DEVELOP AND WRITE COMPUTER PROGRAMS TO STORE, LOCATE, AND RETRIEVE SPECIFIC DOCUMENTS, DATA, AND INFORMATION</li>
                                                <li>CREATE TABLES, FLOW CHARTS, AND DIAGRAMS</li>
                                                <li>GATHER AND EVALUATE USER REQUIREMENTS AND PROCEDURES TO CUSTOMIZE EXISTING PROGRAMS AND CONVERT PROJECT SPECIFICATIONS</li>
                                                <li>CODE, TEST, AND DEBUG PROGRAMS</li>
                                                <li>ANALYZE, REVIEW AND WRITE SCRIPTS</li>
                                                <li>WORK WITH SAP ABAP/4 TOOLS</li>
                                            </ul>

                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className='acc-btn'>
                                        <div className="icon-box"></div>
                                        <h3>SR. BUSINESS ANALYSTS/SAP FUNCTIONAL CONSULTANTS</h3>
                                    </div>
                                    <div className="acc-content current">

                                        <div className="inner-box">

                                            <ul className="list-style-one clearfix">
                                                <li>GATHER REQUIREMENTS AND SPECIFICATIONS FROM THE END USERS FOR THE CUSTOMIZATION AND CONFIGURATION OF THE APPLICATION</li>
                                                <li>PERFORM GAP ANALYSIS FOR THE PROCESS AND SYSTEM FUNCTIONALITY</li>
                                                <li>ESTIMATE THE TIME/RESOURCE (SKILL AND FUND) REQUIREMENTS</li>
                                                <li>PERFORM CUSTOMIZATION FOR THE BASIC DATA USING SAP</li>
                                                <li>PROVIDE DECISION ON PLANNING STRATEGY AND CONFIGURATION, CUSTOMIZATION OF DEMAND MANAGEMENT</li>
                                                <li>PERFORM DATA TRANSFER BETWEEN SAP SYSTEMS TO NON-SAP SYSTEMS, PROTOTYPE AND TEST REQUIREMENTS</li>
                                                <li>PERFORM CUSTOMIZATION FOR PRODUCTION CONTROL</li>
                                            </ul>

                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className='acc-btn'>
                                        <div className="icon-box"></div>
                                        <h3>BUSINESS INTELLIGENCE SOLUTION ARCHITECTS/ SR CONSULTANTS</h3>
                                    </div>
                                    <div className="acc-content current">

                                        <div className="inner-box">

                                            <ul className="list-style-one clearfix">
                                                <li>LEADS ALL ASPECTS OF THE DELIVERY OF BUSINESS INTELLIGENCE SOLUTION & RELATED COMPONENTS, INTERFACES, CONVERSIONS, HW/SW OVERSIGHT</li>
                                                <li>PROVIDE ANALYTICS AND REPORTING STRATEGY & WORKS ACROSS BUSINESS/TECHNOLOGY TEAMS TO ENSURE ALIGNMENT BETWEEN BUSINESS SOLUTION DEFINITION & SYSTEMS ARCHITECTURE FOR THE ORGANIZATION
                                                </li>
                                                <li>DESIGN, DEVELOP AND IMPLEMENT COMPLEX BUSINESS INTELLIGENCE SOLUTIONS USING SAP AND OTHER TECHNOLOGIES</li>

                                            </ul>

                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className='acc-btn'>
                                        <div className="icon-box"></div>
                                        <h3>SR. MANAGEMENT CONSULTANTS</h3>
                                    </div>
                                    <div className="acc-content current">

                                        <div className="inner-box">

                                            <ul className="list-style-one clearfix">
                                                <li>ANALYZE BUSINESS NEEDS TO RECOMMEND IMPROVEMENTS AND ENHANCEMENTS IN ORGANIZATIONAL MANAGEMENT</li>
                                                <li>COMMUNICATE AND IMPLEMENT NEW IDEAS AND DIAGNOSTIC TOOLS FOR IMPROVING OPERATIONS INCLUDING BLUEPRINTING, CONCEPTUAL DESIGN, CONFIGURATION, AS-IS AND TO-BE PROCESSES</li>
                                                <li>COORDINATE AND MAINTAIN DOCUMENTATION OF WORK FLOW AND BUSINESS LOGIC FOR THE CURRENT SYSTEM TO IMPROVE PRODUCTIVITY</li>
                                                <li>WORK WITH SAP HCM, NW BASIC, SECURITY SOLMAN, ARCHIVING, PROCUREMENT, SRM, EWM, PROJECT MANG, TDMS, GRC, PANAYA AND ISM</li>
                                                <li>SUPERVISES SENIOR BUSINESS ANALYSTS AND SAP FUNCTIONAL CONSULTANTS</li>

                                            </ul>

                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className='acc-btn'>
                                        <div className="icon-box"></div>
                                        <h3>SAP FUNCTIONAL PROJECT MANAGER</h3>
                                    </div>
                                    <div className="acc-content current">

                                        <div className="inner-box">

                                            <ul className="list-style-one clearfix">
                                                <li>TECHNICAL ANALYSIS OF CLIENT’S REQUIREMENTS AND DEVELOP CUSTOM PROGRAMS BY PREPARING FUNCTIONAL, TECHNICAL SPECIFICATIONS AND ITS DEVELOPMENT. SAP IMPLEMENTATION WITH ASAP AND ACTIVATE METHODOLOGY IN SAP PS/IM, PS/CO, FICO WORK STREAM. STREAMLINE FUNCTIONS FOR THE IMPLEMENTATION, PERFORMANCE TROUBLESHOOTING, CONFIGURATION, AND MIGRATIONS OF SAP SYSTEMS</li>
                                                <li>WORK AS TECHNICAL SPECIALIST FOR SAP MODULES PS/IM, PS/CO & FI/CO, CONTRIBUTE TO STRATEGY DEFINITION, CONCEPTUAL PLANNING, AND THE REALIZATION OF THE BUSINESS AND TECHNICAL REQUIREMENTS AROUND THE DAY-TO-DAY OPERATION OF SAP LANDSCAPES INCLUDING SAP ECC, S/4 HANA, S/4 CLOUD IMPLEMENTATION EXPERIENCE IN PS/IM, PS/CO, FICO MODULES. SAP PUBLIC CLOUD IMPLEMENTATION USING SAAS, PAAS AND IAAS SERVICES
                                                </li>
                                                <li>GLOBAL ROLLOUTS, BIG-BANG PROJECT IMPLEMENTATIONS, AND CONFIGURATIONS FOR SAP PS/IM, PS/CO, FI/CO MODULES. PROVIDE EXPERTISE FOR GO-LIVE, HYPER CARE SUPPORT, POST GO-LIVE, AND PRODUCTION SUPPORT FOR PS/IM, PS/CO & FI/CO MODULES</li>
                                                <li>BLUE PRINTING AND SOLUTION OF ENGINEER TO ORDER (ETO), MAKE TO ORDER (MTO) AND MAKE TO STOCK (MTS), ASSEMBLY PROCESSING SCENARIOS IN SAP PROJECT SYSTEMS</li>
                                                <li>CONFIGURATION OF THE PROJECT DEFINITION, WORK BREAK DOWN STRUCTURE, NETWORKS, ACTIVITY, RESULT ANALYSIS, SETTLEMENT, REVENUE RECOGNITION IN SAP SYSTEMS</li>
                                                <li>PREPARATION OF TECHNICAL DOCUMENTS FOR FI/CO, SAP PS/IM, PS/CO WORK STREAMS. INVOLVE IN CUSTOMIZING, ENHANCEMENTS, CUSTOM REPORTING, AND SUPPORT FOR PS/IM AND PS/CO MODULES. DELIVER CROSS MODULE INTEGRATION FOR SAP PS WITH MODULES LIKE FI, MM, SD, PP, CO, IM, PM
                                                </li>
                                                <li>PREPARATION OF DOCUMENTS LIKE CONFIGURATION, FUNCTIONAL DESIGN DOCUMENTS (FDD), TECHNICAL DESIGN DOCUMENT (TDD), TEST CASES/SCRIPTS
                                                </li>
                                                <li>PREPARE MASTER DATA TEMPLATES FOR BDCS FOR MASTER DATA UPLOAD. WORKING KNOWLEDGE IN FUNCTION MODULES AND BAPI PROGRAMS</li>
                                                <li>DEVELOPMENT OF PROGRAMS, NEW OBJECTS FOR CUSTOMIZATION, DECOMMISSIONING AND CUSTOM PROGRAM/REPORTING BY RAISING CHANGE REQUESTS
                                                </li>
                                                <li>WORK WITH EXTERNAL SYSTEMS LIKE REPLICON, CONCUR, PROFINDA, KRONOS, PRIMAVERA, KANTATA PSA (FORMALLY MAVENLINK), REVSTREAM ETC., FOR TIME, EXPENSE, RESOURCE PROCESSING INTO SAP
                                                </li>
                                                <li>INTERACT WITH THE MIDDLEWARE TEAMS LIKE SAP PI/PO, SOA, WEB METHODS, AND TIBCO TO ESTABLISH THE CONNECTIVITY BETWEEN 3RD PARTY SYSTEMS AND SAP AND RESOLVE ANY INTERFACE ISSUES</li>
                                                <li>SYSTEM INTEGRATION, REGRESSION TESTS, SECURITY AUTHORIZATIONS. ASSIST THE CLIENT IN PREPARATION OF THE INTEGRATION AND UAT SCENARIOS. DEFECT RESOLUTION AND COORDINATION DURING SIT AND INTERFACE TESTING DURING REALIZATION</li>
                                                <li>PERFORMING DATA ANALYSIS, DATA VALIDATION, DATA CLEANING AND DATA TRANSFORMATION, MIGRATION COCKPIT AND CONVERSION TEMPLATES
                                                </li>
                                                <li>ITIL, ALM METHODOLOGIES FOR SUCCESSFUL IMPLEMENTATION OF SAP SOFTWARE</li>
                                                <li>DEVELOP STRATEGIES, STANDARDS, AND BEST PRACTICES FOR USING THE LATEST SAP PRODUCTS AND OTHER TECHNOLOGIES. STAY CURRENT ON THE FEATURES & FUNCTIONALITY OF SAP PRODUCTS, FOCUSING ON TECHNOLOGY TO IMPROVE PERFORMANCE, AVAILABILITY, STABILITY & WORK EFFICIENCIES
                                                </li>
                                                <li>BACHELOR’S DEGREE IN IN COMPUTER APPLICATIONS OR COMPUTER SCIENCE</li>
                                                <li>SHOULD BE OPEN TO RELOCATE AND OR TRAVEL ANYWHERE IN COUNTRY
                                                </li>

                                            </ul>

                                        </div>
                                    </div>
                                </li>
                            </ul>

                            {/* <ul className="accordion-box">
                                {/*Accordion Block*/}
                            {/*  <li className="accordion block">
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                        <div className="icon-box"></div>
                                        <h3>JR. PROGRAMMER ANALYSTS</h3>
                                    </div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>

                                        <div className="inner-box">
                                            {/* <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.</p> */}
                            {/* <h4>Duties and Responsibilities:</h4> */}
                            {/* <p>Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p> */}
                            {/*      <ul className="list-style-one clearfix">
                                                <li>UNDER SUPERVISION, DEVELOP AND WRITE COMPUTER PROGRAMS TO STORE, LOCATE, AND RETRIEVE SPECIFIC DOCUMENTS, DATA, AND INFORMATION</li>
                                                <li>CREATE TABLES, FLOW CHARTS, AND DIAGRAMS</li>
                                                <li>GATHER AND EVALUATE USER REQUIREMENTS AND PROCEDURES TO CUSTOMIZE EXISTING PROGRAMS AND CONVERT PROJECT SPECIFICATIONS</li>
                                                <li>UNDER SUPERVISION, CODE, TEST, AND DEBUG PROGRAMS</li>
                                                <li>ANALYZE, REVIEW AND WRITE SCRIPTS</li>
                                                <li>WORK WITH VARIOUS TECHNOLOGIES</li>
                                            </ul>
                                            {/* <h4>Qualifications:</h4> */}
                            {/* <p>Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p> */}
                            {/* <ul className="list-style-one clearfix">
                                                            <li>Holiday Trash & Recycling</li>
                                                            <li>Things To Do In Govarnex</li>
                                                        </ul> */}
                            {/* <div className="btn-box">
                                                            <Link href="/career" className="theme-btn-one">Apply Now</Link>
                                                        </div> */}
                            {/*  </div>
                                    </div>
                                </li>
                                {/*Accordion Block*/}
                            {/*  <li className="accordion block">
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                        <div className="icon-box"></div>
                                        <h3> PROGRAMMER ANALYSTS/JAVA</h3>
                                    </div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="inner-box">
                                            {/* <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.</p> */}
                            {/* <h4>Duties and Responsibilities:</h4> */}
                            {/* <p>Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p> */}
                            {/*           <ul className="list-style-one clearfix">
                                                <li>DEVELOP AND WRITE COMPUTER PROGRAMS TO STORE, LOCATE, AND RETRIEVE SPECIFIC DOCUMENTS, DATA, AND INFORMATION</li>
                                                <li>CREATE TABLES, FLOW CHARTS, AND DIAGRAMS</li>
                                                <li>GATHER AND EVALUATE USER REQUIREMENTS AND PROCEDURES TO CUSTOMIZE EXISTING PROGRAMS AND CONVERT PROJECT SPECIFICATIONS</li>
                                                <li>CODE, TEST, AND DEBUG PROGRAMS</li>
                                                <li>ANALYZE, REVIEW AND WRITE SCRIPTS</li>
                                                <li>WORK WITH JAVA TOOLS</li>
                                            </ul>
                                            {/* <h4>Qualifications:</h4> */}
                            {/* <p>Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p> */}
                            {/* <ul className="list-style-one clearfix">
                                                <li>Holiday Trash & Recycling</li>
                                                <li>Things To Do In Govarnex</li>
                                            </ul> */}
                            {/* <div className="btn-box">
                                                <Link href="/career" className="theme-btn-one">Apply Now</Link>
                                            </div> */}
                            {/*      </div>
                                    </div>
                                </li>
                                {/*Accordion Block*/}
                            {/* <li className="accordion block">
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                        <div className="icon-box"></div>
                                        <h3>PROGRAMMER ANALYSTS/SAP ABAP/4</h3>
                                    </div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="inner-box">
                                            {/* <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.</p> */}
                            {/* <h4>Duties and Responsibilities:</h4> */}
                            {/* <p>Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p> */}
                            {/*          <ul className="list-style-one clearfix">
                                                <li>DEVELOP AND WRITE COMPUTER PROGRAMS TO STORE, LOCATE, AND RETRIEVE SPECIFIC DOCUMENTS, DATA, AND INFORMATION</li>
                                                <li>CREATE TABLES, FLOW CHARTS, AND DIAGRAMS</li>
                                                <li>GATHER AND EVALUATE USER REQUIREMENTS AND PROCEDURES TO CUSTOMIZE EXISTING PROGRAMS AND CONVERT PROJECT SPECIFICATIONS</li>
                                                <li>CODE, TEST, AND DEBUG PROGRAMS</li>
                                                <li>ANALYZE, REVIEW AND WRITE SCRIPTS</li>
                                                <li>WORK WITH SAP ABAP/4 TOOLS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/*Accordion Block*/}
                            {/* <li className="accordion block">
                                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                        <div className="icon-box"></div>
                                        <h3> SR. BUSINESS ANALYSTS/SAP FUNCTIONAL CONSULTANTS</h3>
                                    </div>
                                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                        <div className="inner-box">
                                            <ul className="list-style-one clearfix">
                                                <li>GATHER REQUIREMENTS AND SPECIFICATIONS FROM THE END USERS FOR THE CUSTOMIZATION AND CONFIGURATION OF THE APPLICATION</li>
                                                <li>PERFORM GAP ANALYSIS FOR THE PROCESS AND SYSTEM FUNCTIONALITY</li>
                                                <li>ESTIMATE THE TIME/RESOURCE (SKILL AND FUND) REQUIREMENTS</li>
                                                <li>PERFORM CUSTOMIZATION FOR THE BASIC DATA USING SAP</li>
                                                <li>PROVIDE DECISION ON PLANNING STRATEGY AND CONFIGURATION, CUSTOMIZATION OF DEMAND MANAGEMENT</li>
                                                <li>PERFORM DATA TRANSFER BETWEEN SAP SYSTEMS TO NON-SAP SYSTEMS, PROTOTYPE AND TEST REQUIREMENTS</li>
                                                <li>PERFORM CUSTOMIZATION FOR PRODUCTION CONTROL</li>
                                            </ul>

                                        </div>
                                    </div>
                                </li>

                                {/*Accordion Block*/}
                            {/*   <li className="accordion block">
                                    <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                        <div className="icon-box"></div>
                                        <h3> BUSINESS INTELLIGENCE SOLUTION ARCHITECTS/ SR CONSULTANTS</h3>
                                    </div>
                                    <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                        <div className="inner-box">
                                            <ul className="list-style-one clearfix">
                                                <li>LEADS ALL ASPECTS OF THE DELIVERY OF BUSINESS INTELLIGENCE SOLUTION & RELATED COMPONENTS, INTERFACES, CONVERSIONS, HW/SW OVERSIGHT</li>
                                                <li>PROVIDE ANALYTICS AND REPORTING STRATEGY & WORKS ACROSS BUSINESS/TECHNOLOGY TEAMS TO ENSURE ALIGNMENT BETWEEN BUSINESS SOLUTION DEFINITION & SYSTEMS ARCHITECTURE FOR THE ORGANIZATION</li>
                                                <li>DESIGN, DEVELOP AND IMPLEMENT COMPLEX BUSINESS INTELLIGENCE SOLUTIONS USING SAP AND OTHER TECHNOLOGIES</li>

                                            </ul>

                                        </div>
                                    </div>
                                </li>

                                {/*Accordion Block*/}
                            {/*   <li className="accordion block">
                                    <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                                        <div className="icon-box"></div>
                                        <h3> SR. MANAGEMENT CONSULTANTS</h3>
                                    </div>
                                    <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                        <div className="inner-box">
                                            <ul className="list-style-one clearfix">
                                                <li>ANALYZE BUSINESS NEEDS TO RECOMMEND IMPROVEMENTS AND ENHANCEMENTS IN ORGANIZATIONAL MANAGEMENT</li>
                                                <li>COMMUNICATE AND IMPLEMENT NEW IDEAS AND DIAGNOSTIC TOOLS FOR IMPROVING OPERATIONS INCLUDING BLUEPRINTING, CONCEPTUAL DESIGN, CONFIGURATION, AS-IS AND TO-BE PROCESSES</li>
                                                <li>COORDINATE AND MAINTAIN DOCUMENTATION OF WORK FLOW AND BUSINESS LOGIC FOR THE CURRENT SYSTEM TO IMPROVE PRODUCTIVITY</li>
                                                <li>WORK WITH SAP HCM, NW BASIC, SECURITY SOLMAN, ARCHIVING, PROCUREMENT, SRM, EWM, PROJECT MANG, TDMS, GRC, PANAYA AND ISM</li>
                                                <li>SUPERVISES SENIOR BUSINESS ANALYSTS AND SAP FUNCTIONAL CONSULTANTS</li>

                                            </ul>

                                        </div>
                                    </div>
                                </li>

                                {/*Accordion Block*/}
                            {/*    <li className="accordion block">
                                    <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(7)}>
                                        <div className="icon-box"></div>
                                        <h3>SAP FUNCTIONAL PROJECT MANAGER</h3>
                                    </div>
                                    <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                                        <div className="inner-box">
                                            <ul className="list-style-one clearfix">
                                                <li>TECHNICAL ANALYSIS OF CLIENT’S REQUIREMENTS AND DEVELOP CUSTOM PROGRAMS BY PREPARING FUNCTIONAL, TECHNICAL SPECIFICATIONS AND ITS DEVELOPMENT. SAP IMPLEMENTATION WITH ASAP AND ACTIVATE METHODOLOGY IN SAP PS/IM, PS/CO, FICO WORK STREAM. STREAMLINE FUNCTIONS FOR THE IMPLEMENTATION, PERFORMANCE TROUBLESHOOTING, CONFIGURATION, AND MIGRATIONS OF SAP SYSTEMS</li>
                                                <li>WORK AS TECHNICAL SPECIALIST FOR SAP MODULES PS/IM, PS/CO & FI/CO, CONTRIBUTE TO STRATEGY DEFINITION, CONCEPTUAL PLANNING, AND THE REALIZATION OF THE BUSINESS AND TECHNICAL REQUIREMENTS AROUND THE DAY-TO-DAY OPERATION OF SAP LANDSCAPES INCLUDING SAP ECC, S/4 HANA, S/4 CLOUD IMPLEMENTATION EXPERIENCE IN PS/IM, PS/CO, FICO MODULES. SAP PUBLIC CLOUD IMPLEMENTATION USING SAAS, PAAS AND IAAS SERVICES</li>
                                                <li>GLOBAL ROLLOUTS, BIG-BANG PROJECT IMPLEMENTATIONS, AND CONFIGURATIONS FOR SAP PS/IM, PS/CO, FI/CO MODULES. PROVIDE EXPERTISE FOR GO-LIVE, HYPER CARE SUPPORT, POST GO-LIVE, AND PRODUCTION SUPPORT FOR PS/IM, PS/CO & FI/CO MODULES</li>
                                                <li>BLUE PRINTING AND SOLUTION OF ENGINEER TO ORDER (ETO), MAKE TO ORDER (MTO) AND MAKE TO STOCK (MTS), ASSEMBLY PROCESSING SCENARIOS IN SAP PROJECT SYSTEMS</li>
                                                <li>CONFIGURATION OF THE PROJECT DEFINITION, WORK BREAK DOWN STRUCTURE, NETWORKS, ACTIVITY, RESULT ANALYSIS, SETTLEMENT, REVENUE RECOGNITION IN SAP SYSTEMS</li>
                                                <li>PREPARATION OF TECHNICAL DOCUMENTS FOR FI/CO, SAP PS/IM, PS/CO WORK STREAMS. INVOLVE IN CUSTOMIZING, ENHANCEMENTS, CUSTOM REPORTING, AND SUPPORT FOR PS/IM AND PS/CO MODULES. DELIVER CROSS MODULE INTEGRATION FOR SAP PS WITH MODULES LIKE FI, MM, SD, PP, CO, IM, PM</li>
                                                <li>PREPARATION OF DOCUMENTS LIKE CONFIGURATION, FUNCTIONAL DESIGN DOCUMENTS (FDD), TECHNICAL DESIGN DOCUMENT (TDD), TEST CASES/SCRIPTS</li>
                                                <li>PREPARE MASTER DATA TEMPLATES FOR BDCS FOR MASTER DATA UPLOAD. WORKING KNOWLEDGE IN FUNCTION MODULES AND BAPI PROGRAMS</li>
                                                <li>DEVELOPMENT OF PROGRAMS, NEW OBJECTS FOR CUSTOMIZATION, DECOMMISSIONING AND CUSTOM PROGRAM/REPORTING BY RAISING CHANGE REQUESTS</li>
                                                <li>WORK WITH EXTERNAL SYSTEMS LIKE REPLICON, CONCUR, PROFINDA, KRONOS, PRIMAVERA, KANTATA PSA (FORMALLY MAVENLINK), REVSTREAM ETC., FOR TIME, EXPENSE, RESOURCE PROCESSING INTO SAP</li>
                                                <li>INTERACT WITH THE MIDDLEWARE TEAMS LIKE SAP PI/PO, SOA, WEB METHODS, AND TIBCO TO ESTABLISH THE CONNECTIVITY BETWEEN 3RD PARTY SYSTEMS AND SAP AND RESOLVE ANY INTERFACE ISSUES</li>
                                                <li>SYSTEM INTEGRATION, REGRESSION TESTS, SECURITY AUTHORIZATIONS. ASSIST THE CLIENT IN PREPARATION OF THE INTEGRATION AND UAT SCENARIOS. DEFECT RESOLUTION AND COORDINATION DURING SIT AND INTERFACE TESTING DURING REALIZATION</li>
                                                <li>PERFORMING DATA ANALYSIS, DATA VALIDATION, DATA CLEANING AND DATA TRANSFORMATION, MIGRATION COCKPIT AND CONVERSION TEMPLATES</li>
                                                <li>ITIL, ALM METHODOLOGIES FOR SUCCESSFUL IMPLEMENTATION OF SAP SOFTWARE</li>
                                                <li>DEVELOP STRATEGIES, STANDARDS, AND BEST PRACTICES FOR USING THE LATEST SAP PRODUCTS AND OTHER TECHNOLOGIES. STAY CURRENT ON THE FEATURES & FUNCTIONALITY OF SAP PRODUCTS, FOCUSING ON TECHNOLOGY TO IMPROVE PERFORMANCE, AVAILABILITY, STABILITY & WORK EFFICIENCIES</li>
                                                <li>BACHELOR’S DEGREE IN IN COMPUTER APPLICATIONS OR COMPUTER SCIENCE</li>
                                                <li>SHOULD BE OPEN TO RELOCATE AND OR TRAVEL ANYWHERE IN COUNTRY</li>
                                            </ul>

                                        </div>
                                    </div>
                                </li>
                            </ul> */}
                            <div className="sec-title mb_50">
                                {/* <span className="sub-title">Get Opportunities</span> */}
                                {/* <h2>OPEN JOBS</h2> */}
                                <p className="mt_40" style={{ textAlign: 'justify' }}>All positions require travel / relocation to various unanticipated locations throughout the USA to interact with clients and train end-users for different long and short term assignments.</p>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}