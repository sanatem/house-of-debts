import { React } from "react";

import { Text } from "react-native";

export default class Debt extends React.Component {

render () {
    return (
        <Text style={{ fontWeight: 'bold' }}>{'#' + this.props.hashtag + '  $' + this.props.balance}</Text>
    );
}

}