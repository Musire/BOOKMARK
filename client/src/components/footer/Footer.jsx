import Logo from "../../assets/logo/logo-white.svg"
import { navbarSection as Text } from "../../constants/Text";
import Facebook from "../../assets/icons/icon-facebook.svg"
import Twitter from "../../assets/icons/icon-twitter.svg"

const Footer = () => {
    const linkArray = ['features', 'pricing', 'contact']
    const links = linkArray.map((item, index) => <li key={item} className="text-xl">{Text[index]}</li>)

    return ( 
        <section className="w-screen centered min-h-24 md:h-24 bg-darkBlue py-10">
            <div className="block-container centered-col md:flex-row xs:gap-y-4">
                <img src={Logo} alt="" className="w-48" />
                <ul className="uppercase xs:h-56 md:h-full evenly-col w-1/3 md:flex-row">
                    {links}
                </ul>
                <ul className="spaced w-[28%] md:w-1/2 md:justify-end md:gap-x-8">
                    <img src={Facebook} alt="" className="w-8" />
                    <img src={Twitter} alt="" className="w-8" />
                </ul>
            </div>
        </section>
     );
}
 
export default Footer;