import { FAQSection as Text } from "../../constants/Text";
import { Acordian } from "."

const Frequent = () => {
    const questionArray = ['Q1', 'Q2', 'Q3', 'Q4']
    const questions = questionArray.map((item, index) => <Acordian key={item} answer={index} />)

    return ( 
        <section className="bg-white section-container py-10">
            <div className="block-container centered-col md:w-2/5 xs:gap-y-16 md:gap-y-8">
                <article className="centered-col gap-y-6 text-darkBlue text-center">
                    <h2 className="text-3xl font-bold w-4/5">{Text.title}</h2>
                    <h4 className="text-grayBlue/70 text-xl">{Text.content}</h4>
                </article>
                <div className="centered-col w-full h-full gap-y-4">
                    {questions}
                </div>
                <button className="bg-softBlue text-white rounded-lg text-xl px-8 py-4">{Text.CTA}</button>
            </div>
        </section>
     );
}
 
export default Frequent;