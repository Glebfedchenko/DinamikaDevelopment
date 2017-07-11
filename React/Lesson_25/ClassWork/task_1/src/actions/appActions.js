import dispatcher from '../dispatcher.js'

export function getStyles() {
    dispatcher.dispatch({ type: 'STYLES'})
}
