import { FAQSection as Text } from "../../constants/Text";
import { Acordian } from "."

const Frequent = () => {
    const questionArray = ['Q1', 'Q2', 'Q3', 'Q4']
    const questions = questionArray.map((item, index) => <Acordian key={item} answer={index} />)

    return ( 
        <section className="py-10 bg-white section-container">
            <div className="block-container centered-col md:w-3/5 lg:w-7/12 xs:gap-y-16 md:gap-y-8">
                <article className="pb-10 text-center centered-col gap-y-6 text-darkBlue">
                    <h2 className="w-4/5 font-bold title-size">{Text.title}</h2>
                    <h4 className="text-grayBlue/70 content-size md:w-[90%]">{Text.content}</h4>
                </article>
                <div className="w-full h-full centered-col gap-y-4">
                    {questions}
                </div>
                <button className="px-6 py-3 text-xl text-white rounded-lg bg-softBlue">{Text.CTA}</button>
            </div>
        </section>
     );
}
 
export default Frequent;