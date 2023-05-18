import { newsletterSection as Text } from "../../constants/Text";

const Newsletter = () => {
    return ( 
        <section className="py-8 section-container bg-softBlue">
            <div className="block-container md:w-[30%] centered-col gap-y-8">
                <article className="text-center text-white centered-col gap-y-4">
                    <h3 className="uppercase md:text-sm xs:text-base tracking-superwide">{Text.title}</h3>
                    <h2 className="text-3xl font-regular">{Text.content}</h2>
                </article>
                <form action="" className="w-full xs:gap-y-4 md:gap-x-4 centered-col md:flex-row">
                    <label htmlFor="" />
                    <input type="text" className="w-full p-4 rounded-lg md:text-sm md:w-4/5 md:py-3" placeholder="Enter your email address"/>
                    <button type="submit" className="w-full py-4 text-lg text-white rounded-lg bg-softRed md:text-sm md:py-3 md:w-1/4">{Text.CTA}</button>
                </form>
            </div>
        </section>
     );
}
 
export default Newsletter;