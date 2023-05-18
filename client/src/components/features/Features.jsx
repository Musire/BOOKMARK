import { featureSection as Text } from "../../constants/Text";
import { TabProvider } from "../../context/TabContext";
import { Tabs } from "./"

const Features = () => {
    return ( 
        <section className="bg-white section-container">
            <div className="block-container md:w-3/5 ">
                <article className="text-center centered-col gap-y-4 text-darkBlue ">
                    <h2 className="text-3xl font-bold">{Text.title}</h2>
                    <h4 className="text-grayBlue/70 text-xl md:w-[65%]">{Text.content}</h4>
                </article>
                <TabProvider >
                    <Tabs />
                </TabProvider>
            </div>
        </section>
     );
}
 
export default Features;