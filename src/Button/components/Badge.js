import React from 'react';
import { View, StyleProp, StyleSheet, Text } from 'react-native';
import { BADGE_POSITION, BADGE_CORNER_SHAPE } from './../../constants/ButtonEnums';

type Props = {
    // position: ?{ top: ?Number, bottom: ?Number, left: ?Number, right: ?Number },
    position: ?BADGE_POSITION,
    color: ?String,
    cornerShape: ?BADGE_CORNER_SHAPE,
    style: ?StyleProp,
    badgeNumber: ?String,
    badgeNumberStyle: ?StyleProp,
}

const Badge = ({
    position,
    color,
    cornerShape = BADGE_CORNER_SHAPE.ROUND,
    style,
    badgeNumber,
    badgeNumberStyle,
}: Props) => {
    const renderBadgeStyle = () => {
        const renderBaseStyle = (() => {
            return badgeNumber ? styles.containerWithContent : styles.containerWithoutContent;
        })();

        const renderBackgroundColor = (() => {
            return color ? { backgroundColor: color } : null;
        })();

        const renderCornerShape = (() => {
            switch (cornerShape) {
                case BADGE_CORNER_SHAPE.ROUND:
                    return {
                        borderRadius: 10,
                    };
                case BADGE_CORNER_SHAPE.SQUARE:
                    return {
                        borderRadius: 3,
                    };
                default:
                    return;
            }
        })();

        return {
            ...renderBaseStyle,
            ...style,
            ...renderCornerShape,
            ...renderBackgroundColor,
        }
    }

    return (
        <View style={renderBadgeStyle()}>
            {
                badgeNumber && <Text
                    numberOfLines={1}
                    style={{
                        ...styles.badgeText,
                        ...badgeNumberStyle
                    }}>
                    {badgeNumber}
                </Text>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    containerWithoutContent: {
        backgroundColor: 'red',
        width: 10,
        height: 10,
        borderRadius: 5,
        zIndex: 1,
        position: 'relative',
    },
    containerWithContent: {
        position: 'relative',
        padding: 2,
        zIndex: 1,
        minWidth: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '300',
    },

});

export default React.memo(Badge);
