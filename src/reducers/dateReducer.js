import hebrewDate from 'hebrew-date'

export const dateReducer = (state, action) => {
    switch (action.type) {
        case 'GO_TO_DATE':
            return {
                hebrew: hebrewDate(
                    action.date.getFullYear(),
                    action.date.getMonth() + 1,
                    action.date.getDate()
                ),
                greg: action.date
            }
        default:
            return state
    }
}