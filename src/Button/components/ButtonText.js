import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';

type Props = {
    text: ?String,
    textColor: ?String,
    numberOfLines: ?Number,
    style: ?TextStyle,
}

const ButtonText = ({
    text,
    textColor,
    numberOfLines = 1,
    style,
}: Props) => {

    if (!text) {
        return null;
    }

    renderTextColor = (() => {
        if (textColor) {
            return {
                color: textColor,
            }
        }
    })();

    return (
        <Text style={{
            ...styles.text,
            ...style,
            ...renderTextColor
        }}
            // numberOfLines={numberOfLines}
            >
            {text}
        </Text>
    )
};

const styles = StyleSheet.create({
    text: {
        fontWeight: '500',
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        alignSelf: 'center',
    }
})

export default React.memo(ButtonText);
