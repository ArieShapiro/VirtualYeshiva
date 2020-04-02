import React, { createContext, useReducer } from 'react'
import { shiurimReducer } from '../reducers/shiurimReducer'

export const ShiurimContext = createContext()

const ShiurimContextProvider = (props) => {
    const [shiurim, dispatch] = useReducer(shiurimReducer, initShiurim())
    return (
        <ShiurimContext.Provider value={{ shiurim, dispatch }}>
            {props.children}
        </ShiurimContext.Provider>
    );
}

export default ShiurimContextProvider;

const initShiurim = () => {
    return [
        { date: new Date(), rabbi: 'Rav Catorza', subject: 'Hagalat Kelim', zoomLink: 'https://zoom.us/j/621516973', time: '13:00' },
        { date: new Date(), rabbi: 'Rav Niazov', subject: 'The aspect of Simcha', zoomLink: 'https://zoom.us/j/621516973', time: '13:00' },
        { date: new Date((new Date()).setDate((new Date()).getDate()+1)), rabbi: 'Rav Boas', subject: 'Hachono for Pesach', zoomLink: 'https://zoom.us/j/621516973', time: '13:00' },
        
    ]
}
