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
        { id: 1, isCanceled: false, date: new Date(2020, 5, 6), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 2, isCanceled: false, date: new Date(2020, 5, 7), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 3, isCanceled: false, date: new Date(2020, 5, 8), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 4, isCanceled: false, date: new Date(2020, 5, 9), title: 'Shabbes', time: '', description: "" },
        { id: 5, isCanceled: false, date: new Date(2020, 5, 10), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 6, isCanceled: false, date: new Date(2020, 5, 11), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 7, isCanceled: false, date: new Date(2020, 5, 12), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 8, isCanceled: false, date: new Date(2020, 5, 13), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 9, isCanceled: false, date: new Date(2020, 5, 14), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 10, isCanceled: false, date: new Date(2020, 5, 15), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 11, isCanceled: false, date: new Date(2020, 5, 16), title: 'Shabbes', time: '', description: "" },
        { id: 12, isCanceled: false, date: new Date(2020, 5, 17), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 13, isCanceled: false, date: new Date(2020, 5, 18), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 14, isCanceled: false, date: new Date(2020, 5, 19), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 15, isCanceled: false, date: new Date(2020, 5, 20), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 16, isCanceled: false, date: new Date(2020, 5, 21), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 17, isCanceled: false, date: new Date(2020, 5, 22), title: 'חסידות', time: '9:30', description: "מאמר לא תהיה משכלה" },
        { id: 18, isCanceled: false, date: new Date(2020, 5, 23), title: 'Shabbes', time: '', description: "" },
        
    ]
}
