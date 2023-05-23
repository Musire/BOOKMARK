import { newsletterSection as Text } from "../../constants/Text";

const Newsletter = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return ( 
        <section className="py-8 section-container bg-softBlue">
            <div className="block-container md:w-[50%] centered-col gap-y-8">
                <article className="text-center text-white centered-col gap-y-4">
                    <h3 className="uppercase md:text-sm xs:text-base tracking-superwide">{Text.title}</h3>
                    <h2 className="text-3xl font-regular">{Text.content}</h2>
                </article>
                <form onSubmit={handleSubmit} className="w-full xs:gap-y-4 md:gap-x-4 centered-col md:flex-row">
                    <label htmlFor="email" />
                    <input id="email" type="text" className="w-full p-4 rounded-lg text-grayBlue md:text-sm md:w-4/5 md:py-3" placeholder="Enter your email address"/>
                    <button type="submit" className="w-full py-4 text-lg text-white border-2 rounded-lg bg-softRed md:text-sm md:py-3 md:w-1/4 border-softRed hover:bg-white hover:text-softRed">{Text.CTA}</button>
                </form>
            </div>
        </section>
     );
}
 
export default Newsletter;