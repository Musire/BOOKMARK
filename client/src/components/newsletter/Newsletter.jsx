import { newsletterSection as Text } from "../../constants/Text";
import { Form } from "./"

const Newsletter = () => {

    return ( 
        <section className="py-8 section-container bg-softBlue">
            <div className="block-container md:w-[50%] centered-col gap-y-8">
                <article className="text-center text-white centered-col gap-y-4">
                    <h3 className="uppercase md:text-sm xs:text-base tracking-superwide">{Text.title}</h3>
                    <h2 className="text-3xl font-regular">{Text.content}</h2>
                </article>
                <Form />
            </div>
        </section>
     );
}
 
export default Newsletter;