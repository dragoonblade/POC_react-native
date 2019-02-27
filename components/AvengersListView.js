import React from 'react';
import {
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native';
import { AvengersListItemView } from "./AvengersListItemView";

export const AvengersListView = ({data}) =>{
    const {
        avengersList: {
            members,
            favorites
        }
    } = data;

    const clicked = () => {console.log("clicked")} 
    return(
        <TouchableWithoutFeedback onPress={clicked}>
            <FlatList className="avenger-lits-wrapper"
                    data={members}
                    renderItem={AvengersListItemView}>
            </FlatList>
        </TouchableWithoutFeedback>
    );
};