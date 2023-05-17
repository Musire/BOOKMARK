import { downloadSection as Text } from "../../constants/Text";
import InfoCard from "./InfoCard";

const Downloads = () => {
    const cardArray = ['chrome', 'firefox', 'opera']
    const cards = cardArray.map((item, index) => <InfoCard key={item} card={index} />)

    return ( 
        <section className="section-container bg-white pb-10 md:pb-28">
            <div className="block-container md:w-3/5 flex flex-col items-center gap-y-10">
                <article className="centered-col gap-y-4 text-darkBlue text-center">
                    <h2 className="text-3xl font-bold">{Text.title}</h2>
                    <h4 className="text-grayBlue/70 text-xl">{Text.content}</h4>
                </article>
                <div className="w-full centered-col gap-y-16 md:flex-row md:gap-x-8">{ cards }</div>
            </div>
        </section>
     );
}
 
export default Downloads;