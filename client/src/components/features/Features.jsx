import { featureSection as Text } from "../../constants/Text";
import { TabProvider } from "../../context/TabContext";
import { Tabs } from "./"

const Features = () => {
    return ( 
        <section className="bg-white section-container">
            <div className="block-container centered-col">
                <article className="py-4 text-center centered-col gap-y-4 text-darkBlue">
                    <h2 className="font-bold title-size">{Text.title}</h2>
                    <h4 className="text-grayBlue/70 content-size md:w-[65%]">{Text.content}</h4>
                </article>
                <TabProvider >
                    <Tabs />
                </TabProvider>
            </div>
        </section>
     );
}
 
export default Features;