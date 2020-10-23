import React from 'react';
import { StyleProp } from 'react-native';
import BaseButton from './components/BaseButton';
import { MODE, TYPE, SHADOW_LEVEL } from '../constants/ButtonEnums';

type Props = {
    mode: ?MODE,
    type: ?TYPE,

    onPress: () => void,
    hasTouchableEffect: ?Boolean,

    color: ?String,
    cornerRadius: ?String,
    size: ?Number,
    containerStyle: ?StyleProp,

    shadowLevel: ?SHADOW_LEVEL,

    children: ?React.ReactNode,
}
const CustomViewButton = ({
    children,
    ...props
}: Props) => {
    return (
        <BaseButton
            {...props}
        >
            {children}
        </BaseButton>
    )
}

export default CustomViewButton;
