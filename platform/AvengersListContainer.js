import { connect } from 'react-redux';
import {
    getSetAvengers,
    getSetAvengerToFavorite,
} from '../store/actionsCreators';
import { getAvengersOperatos } from '../operators/AvengersListOperatos';
import { setFavorite } from '../operators/favoritesOperator';
import { AvengerList } from './AvengersList';

const mapStateToProps = (state) => {
    return {
        avengersList: state.AvengersList,
        getAvengers: (func) => getAvengersOperatos(func),
        setFavorite: (item, func) => { setFavorite(item, func) },
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAvengersToStore: data => {
            dispatch(getSetAvengers(data))
        },
        setAvengerToFavorites: item => {
            dispatch(getSetAvengerToFavorite(item))
        }
    }
};

const AvengersListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AvengerList);

export default AvengersListContainer;