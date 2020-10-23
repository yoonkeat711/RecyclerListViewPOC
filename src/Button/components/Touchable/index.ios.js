import React from 'react';
import { TouchableOpacity } from 'react-native';

type Props = {
    children: ?React.ReactNode,
}

const Touchable = ({ children, ...props }: Props) => {
    return (
        <TouchableOpacity {...props}>
            {children}
        </TouchableOpacity>
    )
}

export default Touchable;
