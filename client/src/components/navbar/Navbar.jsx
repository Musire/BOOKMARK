import Logo from "../../assets/logo/logo-bookmark.svg"
import Menu from "../../assets/icons/icon-hamburger.svg"
import Close from "../../assets/icons/icon-close.svg"
import Facebook from "../../assets/icons/icon-facebook.svg"
import Twitter from "../../assets/icons/icon-twitter.svg"
import WhiteLogo from "../../assets/logo/logo-superwhite.svg"
import { navbarSection as Text } from "../../constants/Text";
import { useState } from "react";

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }

    const linkArray = ['features', 'pricing', 'contact']
    const links = linkArray.map((item, index) => <li key={item} className="sidebar-item">{Text[index]}</li>)

    return ( 
        <>
            <nav className="absolute top-0 left-0 w-screen h-20 bg-white centered">
                <div className="block-container spaced ">
                    <img src={Logo} alt="" className="w-40" />
                    <button className="centered md:hidden" onClick={toggleMenu} >
                        <img src={Menu} alt="" className="w-6" />
                    </button>
                    <ul className="uppercase xs:hidden md:flex evenly gap-x-8 text-grayBlue ">
                        <li className="easy-transition hover:text-softRed">{Text[0]}</li>
                        <li className="easy-transition hover:text-softRed">{Text[1]}</li>
                        <li className="easy-transition hover:text-softRed">{Text[1]}</li>
                        <button className="px-8 py-2 text-white uppercase border-2 rounded-lg shadow-lg bg-softRed easy-transition hover:bg-white hover:text-softRed border-softRed">{Text.CTA}</button>
                    </ul>
                </div>
            </nav>
            {menu && 
                <aside className="fixed top-0 left-0 z-40 w-screen h-screen px-10 py-6 text-white bg-darkBlue/90 spaced-col ">
                    <div className="w-full centered-col gap-y-10">
                        <ul className="w-full h-10 spaced ">
                            <img src={WhiteLogo} alt="" className="w-48" />
                            <button className="centered" onClick={toggleMenu} >
                                <img src={Close} alt="" className="w-6" />
                            </button>
                        </ul>
                        <ul className="w-full border-b-2 centered-col border-silver/30 ">{links}</ul>
                        <button className="w-full py-4 rounded-lg border-white border-[3px] text-2xl uppercase font-normal">login</button>
                    </div>
                    <ul className="spaced w-[28%] justify-self-end">
                        <img src={Facebook} alt="" className="w-8" />
                        <img src={Twitter} alt="" className="w-8" />
                    </ul>
                </aside>
            }
        </>
     );
}
 
export default Navbar;