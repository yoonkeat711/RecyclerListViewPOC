import React from 'react';
import { TextStyle, StyleProp, Text, StyleSheet } from 'react-native';
import BaseButton from './components/BaseButton';
import { MODE, TYPE, ICON_POSITION, SHADOW_LEVEL, BADGE_POSITION, BADGE_CORNER_SHAPE } from './../constants/ButtonEnums';

type Props = {
    mode: ?MODE,
    type: ?TYPE,

    onPress: () => void,
    hasTouchableEffect: ?Boolean,
    isDisabled: ?Boolean,

    color: ?String,
    cornerRadius: ?Number,
    borderColor: ?String,
    containerStyle: ?StyleProp,

    shadowLevel: ?SHADOW_LEVEL,

    descriptionText: ?String,
    descriptionTextStyle: ?StyleProp,

    icon: ?any,
    iconColor: ?String,
    iconPosition: ?ICON_POSITION,
    iconSize: ?Number,
    iconStyle: ?StyleProp,

    text: ?String,
    textColor: ?String,
    numberOfLines: ?Number,
    textStyle: ?TextStyle,

    shouldShowBadge: ?Boolean,
    badgePosition: ?BADGE_POSITION,
    badgeCornerShape: ?BADGE_CORNER_SHAPE,
    // badgePosition: ?{ top: ?Number, bottom: ?Number, left: ?Number, right: ?Number },
    badgeNumber: ?String,
    badgeColor: ?String,
    badgeStyle: ?StyleProp,
    badgeNumberStyle: ?TextStyle,
}

const RectangleButton = ({
    descriptionText,
    descriptionTextStyle,
    ...props
}: Props) => {

    return (
        <>
            <Text style={{ ...styles.text, ...descriptionTextStyle }}>{descriptionText}</Text>
            <BaseButton
                {...props}
            />
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: '300',
        fontSize: 16,
        textAlign: 'center',
    }
});

export default React.memo(RectangleButton);
