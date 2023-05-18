import BannerImage from "../../assets/illustrations/illustration-hero.svg"
import { heroSection as Text } from "../../constants/Text"

const Hero = () => {
    return ( 
        <section className="flex-col pt-32 overflow-hidden bg-white section-container xs:pb-8 md:pb-0">
            <div className="pb-10 block-container md:flex md:flex-row-reverse">
                <div className="relative md:w-1/2 xs:h-96 md:h-144 ">
                    <div className="absolute z-10 rounded-full xs:-right-72 mobile:-right-56 w-128 md:w-176 xs:h-56 md:h-80 bg-softBlue bottom-10 md:translate-x-72" />
                    <img src={BannerImage} alt="tablet-icon" className="absolute xs:w-[120%] -left-6 mobile:-left-4 xs:max-w-md top-10  sm:left-[10%] md:left-[5%] z-20" />
                </div>
                <article className="centered-col text-darkBlue xs:text-center gap-y-8 md:text-left md:items-start md:w-1/2">
                    <h2 className="font-medium xs:text-4xl lg:text-6xl">{Text.title}</h2>
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