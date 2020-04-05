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
        { isCanceled: false, date: new Date(), title: 'Chassidus', time: '9:00', description: 'Maamar from the Rebbe', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: true, date: new Date(), title: 'Chavruta', time: '13:30', description: 'Free choice', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: true, date: new Date(), title: 'Chavruta', time: '20:00', description: 'Hagalat Kelim', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: false, date: new Date((new Date()).setDate((new Date()).getDate()+1)), title: 'Chassidus', time: '9:00', description: 'Maamar from the Rebbe', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: true, date: new Date((new Date()).setDate((new Date()).getDate()+1)), title: 'Chavruta', time: '13:30', description: 'Free choice', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: true, date: new Date((new Date()).setDate((new Date()).getDate()+1)), title: 'Chavruta', time: '20:00', description: 'Hagalat Kelim', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: false, date: new Date((new Date()).setDate((new Date()).getDate()+2)), title: 'Chassidus', time: '9:00', description: 'Maamar from the Rebbe', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: false, date: new Date((new Date()).setDate((new Date()).getDate()+2)), title: 'Chavruta', time: '13:30', description: 'Free choice', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: false, date: new Date((new Date()).setDate((new Date()).getDate()+3)), title: 'Chavruta', time: '20:00', description: 'Hagalat Kelim', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: false, date: new Date((new Date()).setDate((new Date()).getDate()+3)), title: 'Chassidus', time: '9:00', description: 'Maamar from the Rebbe', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: false, date: new Date((new Date()).setDate((new Date()).getDate()+3)), title: 'Chavruta', time: '13:30', description: 'Free choice', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: false, date: new Date((new Date()).setDate((new Date()).getDate()+4)), title: 'Chavruta', time: '20:00', description: 'Hagalat Kelim', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: false, date: new Date((new Date()).setDate((new Date()).getDate()+4)), title: 'Chassidus', time: '9:00', description: 'Maamar from the Rebbe', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: false, date: new Date((new Date()).setDate((new Date()).getDate()+4)), title: 'Chavruta', time: '13:30', description: 'Free choice', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: false, date: new Date((new Date()).setDate((new Date()).getDate()+5)), title: 'Chavruta', time: '20:00', description: 'Hagalat Kelim', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: false, date: new Date((new Date()).setDate((new Date()).getDate()+6)), title: 'Chassidus', time: '9:00', description: 'Maamar from the Rebbe', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: false, date: new Date((new Date()).setDate((new Date()).getDate()+6)), title: 'Chavruta', time: '13:30', description: 'Free choice', zoomLink: 'https://zoom.us/j/621516973' },
        { isCanceled: false, date: new Date((new Date()).setDate((new Date()).getDate()+6)), title: 'Chavruta', time: '20:00', description: 'Hagalat Kelim', zoomLink: 'https://zoom.us/j/621516973' },
        
        
    ]
}
