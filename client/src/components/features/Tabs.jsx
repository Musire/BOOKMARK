import { Tab, TabTitle } from "./"

const Tabs = () => {
    const titleArray = ['simple', 'speedy', 'easy']
    const titles = titleArray.map((item, index) => <TabTitle key={item} tab={index} />)
    return ( 
        <>  
            <div className="w-5/6 pt-10 border-b-2 centered-col md:flex-row">{ titles }</div>
            <div className="relative h-auto pb-20 centered-col">
                <Tab tab={0} />
                <Tab tab={1} />
                <Tab tab={2} />
            </div>
        </>
     );
}
 
export default Tabs;