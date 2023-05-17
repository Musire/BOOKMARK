import { createContext, useState } from "react";

export const TabContext = createContext()

export const TabProvider = ({ children }) => {
    const [current, setCurrent] = useState(0)

    const changeTab = (data) => {
        setCurrent(data)
    }

    const tabContext = { current, changeTab }

    return <TabContext.Provider value={tabContext} >{ children }</TabContext.Provider>
}
