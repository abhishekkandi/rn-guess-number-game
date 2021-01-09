import React from 'react';
import { 
    View,
    StyleSheet
} from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style }}>
            {props.children} 
        </View>
    )
}

/* props.children -> Components/Elements wrapped inside the Component 
    In below example, View & Text are the children of Card component..
    <Card>
        <View></View>
        <Text></Text>
    </Card>
*/
/* {{...styles.card, ...props.style }} - Merging the styles with spread operator, Any similar styles will be
overwritten by props.style
*/

const styles = StyleSheet.create({
    card : {
        shadowColor: 'black',//shadow propeties supported by iOS only
        shadowOffset: {
            width : 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,//For android devices
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;