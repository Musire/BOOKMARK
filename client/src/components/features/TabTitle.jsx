import { useContext } from "react";
import { TabContext } from "../../context/TabContext"
import { featureSection as Text } from "../../constants/Text";

const TabTitle = ({ tab }) => {
    const { current, changeTab } = useContext(TabContext)
    const isActive = tab === current

    return ( 
        <button className='w-full pt-4 xs:border-t-2 md:border-t-0 centered text-grayBlue'  onClick={() => changeTab(tab)}>
            <h4 className={` text-xl font-medium w-52 pb-6 border-b-4 easy-transition hover:text-softRed ${ isActive ? ' border-softRed text-darkBlue' : 'border-transparent' }`} >{Text[tab].heading}</h4>
        </button>
     );
}
 
export default TabTitle;