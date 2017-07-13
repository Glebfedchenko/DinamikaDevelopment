import dispatcher from '../dispatcher.js'

export function getStarted() {
    dispatcher.dispatch({ type: 'START'})
}
export function getClear() {
    dispatcher.dispatch({ type: 'CLEAR'})
}