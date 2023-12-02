import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    StyleSheet,
} from 'react-native';

// const Shape = ({ backgroundColor }: { backgroundColor: string }) => (
//     <View style={[styles.shape, { backgroundColor }]} />
// );

const ChangeColor = (): JSX.Element => {
    const [colors, setColors] = useState({
        background: '#ffffff',
        square: '#264653',
        rectangle: '#dedede',
        circle: '#000000',
    });

    const generateColor = () => {
        const hexRange = '0123456789ABCDEF';

        const generateRandomColor = () => {
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += hexRange[Math.floor(Math.random() * 16)];
            }
            return color;
        };

        const newBackground = generateRandomColor();
        const newSquare = generateRandomColor();
        const newRectangle = generateRandomColor();
        const newCircle = generateRandomColor();

        setColors({
            background: newBackground,
            square: newSquare !== newBackground ? newSquare : generateRandomColor(),
            rectangle:
                newRectangle !== newBackground && newRectangle !== newSquare
                    ? newRectangle
                    : generateRandomColor(),
            circle:
                newCircle !== newBackground &&
                    newCircle !== newSquare &&
                    newCircle !== newRectangle
                    ? newCircle
                    : generateRandomColor(),
        });
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>


            <StatusBar backgroundColor={colors.background} />

            <View style={styles.shapesContainer}>
                <View style={[styles.square, { backgroundColor: colors.square }]}></View>
                <View style={[styles.circle, { backgroundColor: colors.circle }]}></View>
                <View style={[styles.rectangle, { backgroundColor: colors.rectangle }]}></View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={styles.actionBtn} onPress={generateColor}>
                    <Text style={styles.btnText}>Change BG</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    shapesContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        margin: 10,
        padding: 5,
    },

    square: {
        width: 150,
        height: 150,
        // backgroundColor:'red'
    },
    rectangle: {
        width: 250,
        height: 100,
        // backgroundColor:'blue'
    },
    circle: {
        width: 150,
        height: 150,
        // backgroundColor:'white',
        borderRadius: 150 / 2
    },
    actionBtn: {
        borderRadius: 10,
        backgroundColor: '#6a1b4d',
        width: 100,
        height: 50,
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    btnText: {
        color: '#fff',
        textTransform: 'uppercase'
    }

});

export default ChangeColor;
