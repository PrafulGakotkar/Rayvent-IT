import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
// import Services from "@/components/sections/home1/Services"
import Services from "@/components/sections/home2/Services"
import Projects from "@/components/sections/home1/Projects"
import Features from "@/components/sections/home1/Features"
import Funfacts from "@/components/sections/home1/Funfacts"
import News from "@/components/sections/home1/News"
import Expertise from "@/components/sections/home1/Expertise"
import Process from "@/components/sections/home1/Process"
import Testimonial from "@/components/sections/home1/Testimonial"
// import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
import WhyChooseUs from "@/components/sections/home2/WhyChooseUs"
import Support from "@/components/sections/home1/Support"
import Solutions from "@/components/sections/home1/Solutions"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <Banner />
                {/* <About /> */}
                <Services />
                <Support />
                <WhyChooseUs />
                <Solutions />
                {/* <Features /> */}
                {/* <Projects /> */}
                {/* <Testimonial /> */}
                {/* <Process /> */}
                {/* <Funfacts /> */}
                {/* <Expertise /> */}
                {/* <News /> */}
            </Layout>
        </>
    )
}