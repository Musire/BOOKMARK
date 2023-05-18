import { featureSection as Text } from "../../constants/Text";
import one from "../../assets/illustrations/illustration-features-tab-1.svg"
import two from "../../assets/illustrations/illustration-features-tab-2.svg"
import three from "../../assets/illustrations/illustration-features-tab-3.svg"
import { useContext } from "react";
import { TabContext } from "../../context/TabContext";

const images = {
    0: one,
    1: two,
    2: three
}

const Tab = ({ tab }) => {
    const { current } = useContext(TabContext)
    const isActive = tab === current

    return ( 
        <section className={`w-full md:w-screen centered-col xs:absolute top-0 left-0 opacity-0 md:flex md:flex-row md:justify-start md:gap-x-8 ${isActive ? 'opacity-100' : ''}`} >
            <div className="relative w-full h-96 md:w-1/2">
                <img src={images[tab]} alt="" className="absolute xs:left-0  md:left-[25%]  xs:top-16 md:top-12 z-20 xs:w-full md:w-[30rem]" />
                <div className="absolute right-0 z-10 rounded-full xs:w-128 xs:h-64 md:h-80 md:w-176 bg-softBlue xs:bottom-4 md:-bottom-4 xs:-translate-x-16 md:-translate-x-40 lg:-translate-x-64"></div>
            </div>
            <article className="centered-col gap-y-4 text-darkBlue text-center md:w-[35%] md:items-start md:text-left">
                <h2 className="text-3xl font-bold">{Text[tab].title}</h2>
                <h4 className="text-xl text-grayBlue/70">{Text[tab].content}</h4>
                <button className="px-8 py-4 text-white rounded-lg xs:hidden md:block bg-softBlue">More Info</button>
            </article>
        </section>
     );
}
 
export default Tab;