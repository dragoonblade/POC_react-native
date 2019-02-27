import { actions } from './actions';

export const getSetAvengers = (data) => {
    return {
        data,
        type: actions.SET_AVENGERS
    }
}

export const getSetAvengerToFavorite = (item) => {
    return {
        item, 
        type: actions.SET_FAVORITES
    }
}