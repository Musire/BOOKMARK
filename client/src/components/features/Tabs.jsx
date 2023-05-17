import { Tab, TabTitle } from "./"

const Tabs = () => {
    const titleArray = ['simple', 'speedy', 'easy']
    const titles = titleArray.map((item, index) => <TabTitle key={item} tab={index} />)
    return ( 
        <>  
            <div className="centered-col pt-10 border-b-2 md:flex-row">{ titles }</div>
            <div className="centered-col relative xs:h-176 md:h-[75vh] pb-20 md:w-screen md:-translate-x-[20%]">
                <Tab tab={0} />
                <Tab tab={1} />
                <Tab tab={2} />
            </div>
        </>
     );
}
 
export default Tabs;