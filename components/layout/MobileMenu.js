'use client'
import Link from "next/link"
import { useState } from "react"

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
        subKey: ""
    })

    const handleToggle = (key) => {
        setIsActive(prevState => ({
            ...prevState,
            status: prevState.key !== key || !prevState.status,
            key: prevState.key !== key ? key : "",
            subKey: ""
        }))
    }

    const handleSubToggle = (subKey) => {
        setIsActive(prevState => ({
            ...prevState,
            subKey: prevState.subKey !== subKey ? subKey : ""
        }))
    }


    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="/assets/images/rayven_logo.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li><Link href="/">Home</Link></li>
                                {/* <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li><Link href="/services1">Our Services 1</Link></li>
                                        <li><Link href="/services2">Our Services 2</Link></li>
                                        <li><Link href="/tax-management">Tax Management</Link></li>
                                        <li><Link href="/strategy-planning">Strategy & Planning</Link></li>
                                        <li><Link href="/program-manager">Program Manager</Link></li>
                                        <li><Link href="/investment-policy">Investment Policy</Link></li>
                                        <li><Link href="/financial-advices">Financial Advices</Link></li>
                                        <li><Link href="/insurance-strategy">Insurance Strategy</Link></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li> */}
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li className={isActive.subKey == 3 ? "dropdown current" : "dropdown"}>
                                            <Link href="/#">Application Services</Link>
                                            <ul style={{ display: `${isActive.subKey == 3 ? "block" : "none"}` }}>
                                                <li><Link href="/application-development">Application Development</Link></li>
                                                <li><Link href="/data-science">Data Science and Analytics Consulting</Link></li>
                                                <li><Link href="/outsourcing-manages-services">Outsoursing and Managed Services</Link></li>
                                                <li><Link href="/strategic-consulting">Strategic Consulting</Link></li>
                                                <li><Link href="/flex-support">Flex Support</Link></li>
                                            </ul>
                                            <div className={isActive.subKey == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(3)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subKey == 4 ? "dropdown current" : "dropdown"}>
                                            <Link href="/#">Security,Risk and Compliance</Link>
                                            <ul style={{ display: `${isActive.subKey == 4 ? "block" : "none"}` }}>
                                                <li><Link href="/sap-grc">SAP GRC</Link></li>
                                            </ul>
                                            <div className={isActive.subKey == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(4)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subKey == 5 ? "dropdown current" : "dropdown"}>
                                            <Link href="/#">By Solutions</Link>
                                            <ul style={{ display: `${isActive.subKey == 5 ? "block" : "none"}` }}>
                                                <li><Link href="/bigdata">Analytics and Big Data</Link></li>
                                                <li><Link href="/sap-hana">SAP Hana </Link></li>
                                                <li><Link href="/it-infra">IT Infrastructure</Link></li>
                                                <li><Link href="/mobility">Mobility</Link></li>
                                                <li><Link href="/sap">SAP </Link></li>
                                                <li><Link href="/success">Success Factors</Link></li>
                                                <li><Link href="/sap-mii">SAP MII</Link></li>
                                            </ul>
                                            <div className={isActive.subKey == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(5)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}>
                                    <Link href="/flex-support">FLEX Support</Link>
                                    {/* <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                        <li><Link href="/shop">Products</Link></li>
                                        <li><Link href="/product-details">Product Details</Link></li>
                                        <li><Link href="/shopping-cart">Shopping Cart</Link></li>
                                        <li><Link href="/checkout">Checkout</Link></li>
                                    </ul>
                                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div> */}
                                </li>
                                <li><Link href="/career">Careers</Link></li>

                                <li className={isActive.key == 6 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#">About RAYVENT IT</Link>
                                    <ul style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                        <li><Link href="/mission">Mission</Link></li>
                                        <li><Link href="/client-partners">Client & Partners</Link></li>
                                        <li><Link href="/contact">Contact Us</Link></li>
                                    </ul>
                                    <div className={isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(6)}><span className="fa fa-angle-right" /></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
        </>
    )
}

