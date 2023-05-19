import BannerImage from "../../assets/illustrations/illustration-hero.svg"
import { heroSection as Text } from "../../constants/Text"

const Hero = () => {
    return ( 
        <section className="flex-col min-h-screen pt-32 overflow-hidden bg-white section-container xs:pb-8 md:pb-0">
            <div className="h-full pb-10 block-container lg:flex lg:flex-row-reverse xs:w-full">
                <div className="lg:w-1/2 bg-blue-right bg-img xs:bg-[right_-50px_bottom_0] xs:bg-[length:20rem_12rem] mobile:bg-[length:22rem_15rem] mini:bg-[length:30rem_20rem] centered">
                    <img src={BannerImage} alt="" className="" />
                </div>
                <article className="centered-col text-darkBlue xs:text-center gap-y-8 lg:text-left lg:items-start lg:w-2/5">
                    <h2 className="font-medium xs:pt-6 lg:pt-0 xs:text-4xl lg:text-6xl">{Text.title}</h2>
                    <h4 className="text-grayBlue/70 lg:text-xl w-[85%]">{Text.content}</h4>
                    <div className="font-medium text-white centered gap-x-4">
                        <button className="blue-button">{Text.CTA1}</button>
                        <button className="white-button">{Text.CTA2}</button>
                    </div>
                </article>
            </div>
        </section>
     );
}
 
export default Hero;