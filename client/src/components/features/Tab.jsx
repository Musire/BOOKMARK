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
    const isActive = current === tab

    return ( 
        <section className={`w-screen xs:flex-col h-[85vh] py-10 gap-x-8 ${isActive ? 'flex' : 'hidden'}`} >
            <div className="flex flex-row bg-img items-center justify-end md:w-1/2 bg-blue-left md:bg-[length:60rem_20rem] bg-left-bottom -translate-x-10">
                <img src={images[tab]} alt="" className="w-3/5 h-3/4" />
            </div>
            <article className="text-center centered-col gap-y-4 text-darkBlue md:items-start md:text-left md:w-[40%]">
                <h2 className="text-3xl font-bold">{Text[tab].title}</h2>
                <h4 className="text-xl text-grayBlue/70">{Text[tab].content}</h4>
                <button className="px-8 py-4 text-white rounded-lg xs:hidden md:block bg-softBlue">More Info</button>
            </article>
        </section>
     );
}
 
export default Tab;