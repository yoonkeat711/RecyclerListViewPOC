import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
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
    size: Number,
    containerStyle: ?StyleProp,

    shadowLevel: ?SHADOW_LEVEL,

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

const SquareButton = ({
    size,
    containerStyle,
    ...props
}: Props) => {

    const renderSquareShape = () => {
        if (!size) {
            return;
        }
        return {
            width: size,
            height: size,
        }
    }

    return (
        <BaseButton
            containerStyle={{ ...containerStyle, ...renderSquareShape() }}
            {...props}
        />
    )
}

export default SquareButton;
