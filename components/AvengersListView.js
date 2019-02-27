import React from 'react';
import {
    View,
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native';
import { AvengersListItemView } from "./AvengersListItemView";

export class AvengersListView extends React.Component {

    clicked = (target) => {
        const {
            avengersList: {
                members
            },
            setAvengerToFavorites,
            setFavorite
        } = this.props.data;
        const index = Math.floor((target-125)/50);
        console.log(members[index].Name)
        setFavorite(members[index], setAvengerToFavorites);
    } 

    data = (member, index) => {
        const {
            avengersList: {
                favorites
            }
        } = this.props.data;
        if (favorites[index] && favorites[index].Name && member.Name === favorites[index].Name) {
            return {
                ...member,
                isFavorite: favorites[index].isFavorite
            }
        }
        return member

    }

    render() {
        const {
            avengersList: {
                members
            }
        } = this.props.data;
        const data = members.map((member, index) => this.data(member, index))
        console.log(data)
        return(
            <TouchableWithoutFeedback onPress={(e) => this.clicked(e.target)}>
                <View>
                    <FlatList className="avenger-lits-wrapper"
                            data={data}
                            renderItem={AvengersListItemView}>
                    </FlatList>
                </View>
            </TouchableWithoutFeedback>
        );
    }
};