import React from 'react';
import { ICON_POSITION } from './../../constants/ButtonEnums';
import { Image, View, StyleSheet } from 'react-native';

type Props = {
    icon: ?String,
    color: ?String,
    position: ?ICON_POSITION,
    size: ?Number,
    style: ?StyleProps,

    children: ?React.ReactNode,
}

const ButtonIcon = ({
    icon,
    color,
    position = ICON_POSITION.LEFT,
    size,
    style,
    children,
}: Props) => {

    const iconSource = (() => {
        //Note: check is url, append {uri: }
        const isUrl = (() => {
            var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
            return urlRegex.test(icon);
        })()

        return isUrl ? { uri: icon } : icon;
    })();


    const renderFlexDirection = () => {
        if (position === ICON_POSITION.TOP || position === ICON_POSITION.BOTTOM) {
            return { flexDirection: 'column' };
        } else {
            return { flexDirection: 'row' };
        }
    }

    const renderSequence = () => {
        const renderIconSize = (() => {
                if(size) {
                    return {
                        width: size,
                        height: size,
                    }
                }
        })();

        const renderColor = (() => {
            if (color) {
                return {
                    tintColor: color,
                }
            }
        })();

        if (position === ICON_POSITION.BOTTOM || position === ICON_POSITION.RIGHT) {
            return (
                <>
                    {children}
                    {icon && <Image 
                    style={{height: 50, width: 80}}
                    // style={{ ...styles.image, ...style, ...renderIconSize, ...renderColor }} 
                    source={iconSource} />}
                </>
            )
        }

        return (
            <>
                {icon && <Image style={{ ...styles.image, ...style, ...renderIconSize, ...renderColor }} source={iconSource} />}
                {children}
            </>
        )
    }

    return (
        <View style={{ ...renderFlexDirection() }}>
            {renderSequence()}
        </View>
    )
};


const styles = StyleSheet.create({
    image: {
        width: 22,
        height: 22,
        alignSelf: 'center',
    }
});

export default React.memo(ButtonIcon);
