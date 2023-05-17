import BannerImage from "../../assets/illustrations/illustration-hero.svg"
import { heroSection as Text } from "../../constants/Text"

const Hero = () => {
    return ( 
        <section className="bg-white section-container pt-32 flex-col overflow-hidden">
            <div className="block-container pb-10 md:flex md:flex-row-reverse">
                <div className="relative md:w-1/2 xs:h-96 md:h-144 ">
                    <div className="w-128 md:w-176 xs:h-56 md:h-80 rounded-full bg-softBlue absolute bottom-20 right-0 z-10 xs:translate-x-48 md:translate-x-72" />
                    <img src={BannerImage} alt="tablet-icon" className="absolute xs:w-full md:w-[150%] top-10 md:left-[5%] z-20" />
                </div>
                <article className="centered-col text-darkBlue xs:text-center gap-y-8 md:text-left md:items-start md:w-1/2">
                    <h2 className="text-4xl font-medium">{Text.title}</h2>
                    <h4 className="text-grayBlue/70">{Text.content}</h4>
                    <div className="centered text-white gap-x-4 font-medium">
                        <button className="blue-button">{Text.CTA1}</button>
                        <button className="white-button">{Text.CTA2}</button>
                    </div>
                </article>
            </div>
        </section>
     );
}
 
export default Hero;