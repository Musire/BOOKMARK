import Logo from "../../assets/logo/logo-white.svg"
import { navbarSection as Text } from "../../constants/Text";
import {ReactComponent as Facebook} from "../../assets/icons/icon-facebook.svg"
import {ReactComponent as Twitter} from "../../assets/icons/icon-twitter.svg"

const Footer = () => {
    const linkArray = ['features', 'pricing', 'contact']
    const links = linkArray.map((item, index) => <li key={item} className=" md:text-base easy-transition hover:text-softRed">{Text[index]}</li>)

    return ( 
        <section className="w-screen py-10 centered min-h-24 md:h-24 bg-darkBlue">
            <div className="block-container centered-col md:flex-row xs:gap-y-4 md:gap-x-4">
                <img src={Logo} alt="" className="w-48" />
                <ul className="uppercase md:w-3/5 lg:w-1/3 xs:h-56 md:h-full evenly-col md:flex-row">
                    {links}
                </ul>
                <ul className="spaced w-[28%] md:w-1/2 md:justify-end md:gap-x-8">
                    <Facebook className="text-white fill-current easy-transition hover:text-softRed"/>
                    <Twitter className="text-white fill-current easy-transition hover:text-softRed"/>
                </ul>
            </div>
        </section>
     );
}
 
export default Footer;