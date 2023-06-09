import { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/icons/icon-arrow.svg"
import { FAQSection as Text } from "../../constants/Text"

const Acordian = ({ answer }) => {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(!open)
    }

    return ( 
        <button className={`w-full overflow-y-hidden easy-transition border-b-2 border-smoke/10 ${!open ? 'h-16' : 'h-auto'}`} onClick={toggleOpen}>
            <div className="w-full spaced group" >
                <h3 className="h-full font-medium text-left accordian-title text-darkBlue/70 group-hover:text-softRed easy-transition">{Text[answer].question}</h3>
                <div className={` ${open ? 'rotate-180 -translate-x-2' : ''}`} >
                    <Arrow viewBox="0 -5 25 25" width={35} height={35} className={`easy-transition text-softBlue stroke-current ${open ? 'text-softRed' : ''}`} />
                </div>
            </div>
            <p className={`text-lg text-left leading-8 font-medium text-grayBlue/90 py-8 slow-transition ${!open ? 'opacity-0' : 'opacity-100'}`} >{Text[answer].answer}</p>
        </button>
     );
}
 
export default Acordian;