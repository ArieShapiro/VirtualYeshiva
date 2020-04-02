import React, { createContext, useReducer } from "react"
import { dateReducer } from '../reducers/dateReducer'
import hebrewDate from 'hebrew-date'

export const DateContext = createContext()

const DateContextProvider = (props) => {
    const [date, dispatch] = useReducer(dateReducer, initDate())
    return (
        <DateContext.Provider value={{ date, dispatch }}>
            {props.children}
        </DateContext.Provider>
    );
}

export default DateContextProvider;

const initDate = () => {
    const d = new Date()
    const [year, month, day] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    return {
        hebrew: hebrewDate(year, month, day),
        greg: d
    }
}