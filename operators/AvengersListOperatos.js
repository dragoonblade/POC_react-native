import {
    getAvengersAbstractor
} from '../abstractors/AvengersListAbstractor';

export const getAvengersOperatos = (setAvengersToStore) => {
    return getAvengersAbstractor().then((res) => {
        return setAvengersToStore(res);
    });
}