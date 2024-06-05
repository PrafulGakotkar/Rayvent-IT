import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"
export default function About() {
    return (
        <>
            <section className="about-section p_relative">
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_one">
                        <div className="image-box p_relative pr_50 mr_30">
                            <figure className="image image-1"><img src="assets/images/resource/B__Gear-01.png" alt="" /></figure>
                            <figure className="image image-2"><img src="assets/images/resource/124.png" alt="" /></figure>
                            {/* <figure className="image image-2"><img src="assets/images/resource/about-2.jpg" alt="" /></figure> */}
                            {/* <div className="video-inner">
                                <div className="video-btn">
                                    <VideoPopup />
                                </div>
                            </div> */}
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_one">
                        <div className="content-box p_relative ml_30 mb_30">
                            <div className="sec-title mb_25">
                            {/* <span className="sub-title">About BizTech</span> */}
                            <h2>Success Factor</h2>
                            </div>
                            <div className="text mb_35">
                            <p style={{textAlign:'justify'}}>By transitioning to SuccessFactors, you have invested in a future for your human capital management and talent management systems that are more ambitious than just technology. As an authorized reseller, RAYVEN IT is your source for all things SuccessFactors. We have the ability to renew your current SuccessFactors Contract as well as provide you with the option to expand your suite with additional modules. These are the real goals and drivers we champion as your implementation partner.</p>
                            </div>
                            <Link href="/success-factor" className="theme-btn-one">Discover More</Link>
                            {/* <div className="inner-box mb_35">
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>Solution Focused</h3>
                                <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>99.99% Success</h3>
                                <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                            </div>
                            </div>
                            <figure className="signature"><img src="assets/images/icons/signature-1.png" alt="" /></figure> */}
                        </div>
                        <div className="content-box p_relative ml_30">
                            <div className="sec-title mb_25">
                            {/* <span className="sub-title">About BizTech</span> */}
                            <h2>Clients & Partners</h2>
                            </div>
                            <div className="text mb_35">
                            <p style={{textAlign:'justify'}}>The biggest pride of RAYVEN IT is our clients and our driving force is our partners. We never stop looking for mutually beneficial relationships with companies active in various business sectors. We are immensely proud of having established strong connections with quite a few partners and customers around the globe. We are open for new ventures and expanding of our current partner & client base.</p>
                            </div>
                            <Link href="/client-partners" className="theme-btn-one">Discover More</Link>
                            {/* <div className="inner-box mb_35">
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>Solution Focused</h3>
                                <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>99.99% Success</h3>
                                <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                            </div>
                            </div>
                            <figure className="signature"><img src="assets/images/icons/signature-1.png" alt="" /></figure> */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
