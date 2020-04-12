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
        { id: 1, isCanceled: false, date: new Date(2020, 3, 13), title: 'Chassidus', time: '9:00', description: 'Maamar from the Rebbe' },
        { id: 2, isCanceled: false, date: new Date(2020, 3, 14), title: 'Chassidus', time: '9:00', description: 'Maamar from the Rebbe'  },
        { id: 3, isCanceled: true, date: new Date(2020, 3, 19), title: 'Chavruta', time: '20:00', description: 'Hagalat Kelim' },
        
    ]
}
