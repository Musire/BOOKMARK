import { downloadSection as Text } from "../../constants/Text";
import InfoCard from "./InfoCard";

const Downloads = () => {
    const cardArray = ['chrome', 'firefox', 'opera']
    const cards = cardArray.map((item, index) => <InfoCard key={item} card={index} />)

    return ( 
        <section className="pb-10 bg-white section-container md:pb-28">
            <div className="flex flex-col items-center block-container md:w-4/5 gap-y-10">
                <article className="text-center centered-col gap-y-4 text-darkBlue">
                    <h2 className="font-bold title-size ">{Text.title}</h2>
                    <h4 className="content-size text-grayBlue/70 md:w-[65%]">{Text.content}</h4>
                </article>
                <div className="w-full centered-col gap-y-16 md:flex-row md:gap-x-8">{ cards }</div>
            </div>
        </section>
     );
}
 
export default Downloads;