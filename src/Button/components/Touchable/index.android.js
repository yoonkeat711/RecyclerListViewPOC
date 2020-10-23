import React from 'react';
import { TouchableNativeFeedback, View, StyleProp } from 'react-native';

type Props = {
    children: ?React.ReactNode,
    style: ?StyleProp
}

const Touchable = ({ children, style, ...props }: Props) => {
    return (
        <TouchableNativeFeedback {...props}>
            <View style={style}>
                {children}
            </View>
        </TouchableNativeFeedback>
    )
}

export default Touchable;
