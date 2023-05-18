import { FAQSection as Text } from "../../constants/Text";
import { Acordian } from "."

const Frequent = () => {
    const questionArray = ['Q1', 'Q2', 'Q3', 'Q4']
    const questions = questionArray.map((item, index) => <Acordian key={item} answer={index} />)

    return ( 
        <section className="py-10 bg-white section-container">
            <div className="block-container centered-col md:w-2/5 xs:gap-y-16 md:gap-y-8">
                <article className="text-center centered-col gap-y-6 text-darkBlue">
                    <h2 className="w-4/5 text-3xl font-bold">{Text.title}</h2>
                    <h4 className="text-grayBlue/70 text-xl md:w-[90%]">{Text.content}</h4>
                </article>
                <div className="w-full h-full centered-col gap-y-4">
                    {questions}
                </div>
                <button className="px-8 py-4 text-xl text-white rounded-lg bg-softBlue">{Text.CTA}</button>
            </div>
        </section>
     );
}
 
export default Frequent;