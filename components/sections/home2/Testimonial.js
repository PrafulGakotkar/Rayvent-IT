import TestimonialSlider0 from '@/components/slider/TestimonialSlider0'
import TestimonialSlider2 from '@/components/slider/TestimonialSlider2'
import TestimonialSlider3 from '@/components/slider/TestimonialSlider3'
import TestimonialSlider4 from '@/components/slider/TestimonialSlider4'
import TestimonialSlider5 from '@/components/slider/TestimonialSlider5'

export default function Testimonial() {
    return (
        <>

            <section className="testimonial-style-two p_relative" style={{padding:'20px 0px 50px 0px'}}>
                <div className="auto-container">
                    <div className="sec-title mb_50 centred">
                        <span className="sub-title">Testimonials</span>
                        <h2>WHAT OUT CLENTS ARE SAYING</h2>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            {/*Theme Carousel*/}
                            <TestimonialSlider2 />                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
