import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"
export default function Solutions() {
    return (
        <>
            <section className="about-section p_relative">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_one">
                                <div className="image-box p_relative pr_50 mr_30">
                                    <figure className="image image-1"><img src="assets/images/resource/112.jpg" alt="" /></figure>
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
                                        {/* <h2>Success Factor</h2> */}
                                    </div>
                                    <div className="text mb_35">
                                        <p style={{textAlign:'justify'}}>RAYVEN IT Solutions LLC., is a Minority Women Owned Certified Business in New Jersey dedicated to providing the best SAP and QA Solutions and Professional Services. People in our team are highly experienced and dedicated professionals with years of experience in industry who strive to provide innovative, powerful, and strategic methodologies to enable organizations to build and deliver cost effective IT (Information Technology) solutions rapidly. RAYVEN IT approaches problem solving for its customers by taking a multi-dimensional approach when recommending solutions. By combining the business requirements with accurate technology mappings, forges an appropriate solution set to complex business needs</p>
                                    </div>
                                    {/* <Link href="/about-us" className="theme-btn-one">Discover More</Link> */}
                                </div>
                                <div className="content-box p_relative ml_30">
                                    <div className="sec-title mb_25">
                                        {/* <span className="sub-title">About BizTech</span> */}
                                        {/* <h2>Clients & Partners</h2> */}
                                    </div>
                                    <div className="text mb_35">
                                        <p style={{textAlign:'justify'}}>RAYVEN IT is a young enterprise established in 2009, is the leader in its field-known for its quality, highly efficient professionals and timely delivery of projects. We provide management and solution based professional services in SAP with headquarters in Edison, NJ (USA) and Offshore Development Center in Hyderabad, India. We have very well qualified and experienced professionals who always do their best to serve our clients. RAYVEN IT is showing consistent annualized growth for the last 3 years that is the result of its team work and adapting advanced technologies in the growing industry. RAYVEN IT is a financially stable, zero-debt company.</p>
                                    </div>
                                    {/* <Link href="/about-us" className="theme-btn-one">Discover More</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
