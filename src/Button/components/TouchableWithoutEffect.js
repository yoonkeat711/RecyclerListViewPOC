import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

type Props = {
    children: ?React.ReactNode,
    style: ?StyleProp,
}

const TouchableWithoutEffect = ({
    children,
    style,
    ...props
}: Props) => {

    return (
        <TouchableWithoutFeedback {...props}>
            <View style={style}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default TouchableWithoutEffect;
