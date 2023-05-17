import { newsletterSection as Text } from "../../constants/Text";

const Newsletter = () => {
    return ( 
        <section className="section-container bg-softBlue">
            <div className="block-container md:w-[30%] centered-col gap-y-8">
                <article className="centered-col gap-y-4 text-white text-center">
                    <h3 className="md:text-sm xs:text-base uppercase tracking-superwide">{Text.title}</h3>
                    <h2 className="text-3xl font-regular">{Text.content}</h2>
                </article>
                <form action="" className="w-full xs:gap-y-4 md:gap-x-4 centered-col md:flex-row">
                    <label htmlFor="" />
                    <input type="text" className="w-full md:text-sm md:w-4/5 p-4 md:py-3 rounded-lg" placeholder="Enter your email address"/>
                    <button type="submit" className="bg-softRed text-white text-lg md:text-sm rounded-lg w-full py-4 md:py-3 md:w-1/4">{Text.CTA}</button>
                </form>
            </div>
        </section>
     );
}
 
export default Newsletter;