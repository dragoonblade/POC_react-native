import { actions } from './actions';

const initialState = {
    members: [],
    favorites: []
};

const AvengersList = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_AVENGERS:
        return { ...state, members: action.data.avengers };
       
        case actions.SET_FAVORITES:
        const isMemberExists = state.favorites.find((ITEM)=> ITEM.Name===action.item.Name);
        console.log("reducing", action.item.isFavorite)
        action.item.isFavorite = !action.item.isFavorite
        console.log("reduced", action.item.isFavorite)
        return {...state, favorites: [...state.favorites, action.item]}

        default:
        return state
    }
};

export  {
    AvengersList
};