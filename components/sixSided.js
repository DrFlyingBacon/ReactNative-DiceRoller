import React, { Component } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

import Dice1 from './images/dice1.png';
import Dice2 from './images/dice2.png';
import Dice3 from './images/dice3.png';
import Dice4 from './images/dice4.png';
import Dice5 from './images/dice5.png';
import Dice6 from './images/dice6.png';

class SixSided extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uri: Dice1
        };
    }

    rollDice() {
        let roll = Math.floor(Math.random() * 6) + 1;

        console.log(roll);

        switch (roll) {
            case 1:
                this.state.uri = Dice1;
                break;
            case 2:
                this.state.uri = Dice2;
                break;
            case 3:
                this.state.uri = Dice3;
                break;
            case 4:
                this.state.uri = Dice4;
                break;
            case 5:
                this.state.uri = Dice5;
                break;
            case 6:
                this.state.uri = Dice6;
                break;
            default:
                this.state.uri = Dice1;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={uri} />
                <Button
                    title="Roll"
                    onPress={() => this.rollDice()}
                    style={styles.text}
                ></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200
    },
    text: {
        fontSize: 26,
        color: '#35BDD0',
        marginTop: 30,
        fontStyle: 'italic',
        paddingHorizontal: 10,
        borderColor: '#30475E',
        borderRadius: 5,
        borderWidth: 3,
        fontWeight: 'bold'
    }
});

export default SixSided;
