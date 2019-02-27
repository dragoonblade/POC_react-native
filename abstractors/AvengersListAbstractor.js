import { endpoints } from './endpoints';

export const getAvengersAbstractor = () => {
    return fetch(endpoints.getAvengers)
        .then((res)=> res.json())
        .then(
            (result)=> {
                return result
            },
            (error) => {
                console.log(error);
            }
        )
}