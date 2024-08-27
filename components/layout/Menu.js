import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li className=""><Link href="/">Home</Link>
                    {/* <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home Page 01</Link></li>
                        <li><Link href="/index-2">Home Page 02</Link></li>
                        <li><Link href="/index-3">Home Page 03</Link></li>
                    </ul> */}
                </li>
                <li className="dropdown"><Link href="#">Services</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Application Services</Link>
                            <ul>
                                <li><Link href="/application-development">Application Development</Link></li>
                                <li><Link href="/data-science">Data Science and Analytics Consulting</Link></li>
                                <li><Link href="/outsourcing-manages-services">Outsourcing and Managed Services</Link></li>
                                <li><Link href="/strategic-consulting">Strategic Consulting</Link></li>
                                
                            </ul>
                        </li>
                         <li className="dropdown"><Link href="#">Security,Risk and Compliance</Link>
                            <ul>
                                <li><Link href="/sap-grc">SAP GRC </Link></li>
                               
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">By Solutions</Link>
                            <ul>
                                <li><Link href="/bigdata">Analytics and Big Data</Link></li>
                                <li><Link href="/sap-hana">SAP Hana</Link></li>
                                <li><Link href="/it-infra">IT Infrastructure</Link></li>
                                <li><Link href="/mobility">Mobility</Link></li>
                                <li><Link href="/sap">SAP</Link></li>
                                <li><Link href="/success-factor">Success Factors</Link></li>
                                <li><Link href="/sap-mii">SAP MII</Link></li>
                            </ul>
                        </li>
                        <li className=""><Link href="/flex-support">Flex Support</Link></li>


                        {/* <li><Link href="/services2">Our Services 2</Link></li>
                        <li><Link href="/outsourcing-manages-services">Tax Management</Link></li>
                        <li><Link href="/strategy-planning">Strategy & Planning</Link></li>
                        <li><Link href="/program-manager">Program Manager</Link></li>
                        <li><Link href="/investment-policy">Investment Policy</Link></li>
                        <li><Link href="/financial-advices">Financial Advices</Link></li>
                        <li><Link href="/insurance-strategy">Insurance Strategy</Link></li> */}
                    </ul>
                </li>
                {/* <li ><Link href="/flex-support">FLEX Support</Link> */}
                    {/* <ul>
                        <li className="dropdown"><Link href="#">Team</Link>
                            <ul>
                                <li><Link href="/team">Team Member</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/pricing-table">Pricing Table</Link></li>
                        <li><Link href="/career">Career</Link></li>
                        <li><Link href="/faq">Faq’s</Link></li>
                        <li><Link href="/testimonials">Testimonials</Link></li>
                        <li><Link href="/404">404</Link></li>
                    </ul> */}
                {/* </li> */}
                <li ><Link href="/career">Careers</Link>
                    {/* <ul>
                        <li><Link href="/shop">Products</Link></li>
                        <li><Link href="/product-details">Product Details</Link></li>
                        <li><Link href="/shopping-cart">Shopping Cart</Link></li>
                        <li><Link href="/checkout">Checkout</Link></li>
                    </ul> */}
                </li>
                <li className="dropdown"><Link href="#">About RAYVENT IT</Link>
                    <ul>
                        <li><Link href="/mission">Mission</Link></li>
                        <li><Link href="/client-partners">Client & Partners</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </li>
                {/* <li><Link href="/contact">Contact</Link></li> */}
            </ul>
        </>
    )
}
