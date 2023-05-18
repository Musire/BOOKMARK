import Chrome from "../../assets/logo/logo-chrome.svg"
import Firefox from "../../assets/logo/logo-firefox.svg"
import Opera from "../../assets/logo/logo-opera.svg"
import { downloadSection as Text } from "../../constants/Text"

const images = {
    0: Chrome,
    1: Firefox,
    2: Opera
}

const distance = {
    0: 'md:translate-y-0',
    1: 'md:translate-y-8',
    2: 'md:translate-y-16'
}


const InfoCard = ({ card }) => {
    return ( 
        <div className={`xs:p-8 md:px-4 md:py-8 spaced-col gap-y-4 shadow-xl bg-dots bg-no-repeat bg-[right_0_bottom_7.5rem] bg-contain h-[28rem] xs:w-[90%] md:w-96 ${distance[card]}`} >
            <img src={images[card]} alt="card-logo" className="w-32" />
            <article className="pb-8 text-center centered-col gap-y-2">
                <h3 className="text-3xl font-medium md:text-2xl text-darkBlue">{Text[card].title}</h3>
                <h5 className="text-xl font-medium md:text-base text-grayBlue/70">{Text[card].content}</h5>
            </article>
            <button className="w-full py-4 text-lg font-medium text-white rounded-lg bg-softBlue place-self-end md:text-sm">{Text.CTA}</button>
        </div>
     );
}
 
export default InfoCard;