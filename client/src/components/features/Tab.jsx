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
        <section className={`w-screen xs:flex-col md:flex-row h-[85vh] py-10 gap-8 xs:pb-10 md:pb-10 xs:items-center ${isActive ? 'flex' : 'hidden'}`} >
            <div className="self-start w-full img-holder">
                <img src={images[tab]} alt="" className="sm:w-auto md:w-9/12 h-3/4" />
            </div>
            <article className="text-center centered-col gap-y-4 text-darkBlue md:items-start md:text-left xs:w-5/6 md:w-[40%] ">
                <h2 className="font-bold title-size">{Text[tab].title}</h2>
                <h4 className="content-size text-grayBlue/70">{Text[tab].content}</h4>
                <button className="px-8 py-4 text-white rounded-lg xs:hidden md:block bg-softBlue">More Info</button>
            </article>
        </section>
     );
}
 
export default Tab;