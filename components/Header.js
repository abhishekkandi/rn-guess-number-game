import React from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';

 import Colors from '../constants/colors';

 const Header = props => {
     return (
         <View style={styles.header}>
             <Text style={styles.headerTitle}>{props.title}</Text>
         </View>
     );
 };

 const styles = StyleSheet.create({
    header : {
        width: '100%',
        height: 90,
        paddingTop: 36,//To avoid top notch/Status bar 
        backgroundColor: Colors.primary,
        alignItems: 'center',//On Main axis, By default it is Column in RN as it's mobile display
        justifyContent: 'center'
    },
    headerTitle : {
        color: 'black',
        fontSize: 18
    }
 });

 export default Header;