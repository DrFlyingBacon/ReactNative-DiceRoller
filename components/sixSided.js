import React, { useState } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

import Dice1 from './images/dice1.png';
import Dice2 from './images/dice2.png';
import Dice3 from './images/dice3.png';
import Dice4 from './images/dice4.png';
import Dice5 from './images/dice5.png';
import Dice6 from './images/dice6.png';

const SixSided = () => {
    const [uri, setUri] = useState(Dice1);
    const [uri2, setUri2] = useState(Dice1);

    rollDice = () => {
        let roll = Math.floor(Math.random() * 6) + 1;

        switch (roll) {
            case 1:
                setUri(Dice1);
                break;
            case 2:
                setUri(Dice2);
                break;
            case 3:
                setUri(Dice3);
                break;
            case 4:
                setUri(Dice4);
                break;
            case 5:
                setUri(Dice5);
                break;
            case 6:
                setUri(Dice6);
                break;
            default:
                setUri(Dice1);
        }

        let roll2 = Math.floor(Math.random() * 6) + 1;

        switch (roll2) {
            case 1:
                setUri2(Dice1);
                break;
            case 2:
                setUri2(Dice2);
                break;
            case 3:
                setUri2(Dice3);
                break;
            case 4:
                setUri2(Dice4);
                break;
            case 5:
                setUri2(Dice5);
                break;
            case 6:
                setUri2(Dice6);
                break;
            default:
                setUri2(Dice1);
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={uri} />
            <Image style={styles.image} source={uri2} />
            <Button
                title="Roll"
                onPress={() => rollDice()}
                accessibilityLabel="Roll a six sided die"
            ></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#800000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200
    }
});

export default SixSided;
