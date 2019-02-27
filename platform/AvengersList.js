import React from 'react';
import { View } from 'react-native';

export class AvengerList extends React.Component {

    componentDidMount = () => {
        const { 
            getAvengers,
            setAvengersToStore
        } = this.props;
        getAvengers(setAvengersToStore);
    }

    render() {
        const {
            renderAvengersList,
            avengersList
        } = this.props;
        return(
            <View>
                {renderAvengersList(this.props)}
            </View>
        )
    }
}