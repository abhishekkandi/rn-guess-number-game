import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}}></Button>
                    <Button title="Confirm" onPress={() => {}}></Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen : {
        flex: 1, /* Flex 1 will ensure it(Root View) takes all the space that it can get. All width and the screen */
        padding: 10,
        alignItems: 'center'
    },
    title :{
        fontSize: 20,
        marginVertical: 10 /* Replaces margin-top & margin-bottom */
    },
    inputContainer : {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
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
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
});

export default StartGameScreen;