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
        if(!isMemberExists) {
            return {...state, favorites: [...state.favorites, action.item]}
        } else {
            return state;
        }

        default:
        return state
    }
};

export  {
    AvengersList
};