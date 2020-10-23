import React from 'react';
import { TYPE, ICON_POSITION, MODE, SHADOW_LEVEL, BADGE_POSITION, BADGE_CORNER_SHAPE } from './../../constants/ButtonEnums';
import Touchable from './Touchable';
import { TextStyle, StyleProp, StyleSheet } from 'react-native';
import ButtonIcon from './ButtonIcon';
import ButtonText from './ButtonText';
import Badge from './Badge';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableWithoutEffect from './../components/TouchableWithoutEffect';

type Props = {
    mode: ?MODE,
    type: ?TYPE,
    floatingPosition: ?{ top: ?Number, bottom: ?Number, right: ?Number, left: ?Number },
    onPress: () => void,
    hasTouchableEffect: ?Boolean,
    isDisabled: ?Boolean,

    color: ?String,
    cornerRadius: ?Number,
    borderColor: ?String,
    containerStyle: ?StyleProp,

    shadowLevel: ?SHADOW_LEVEL,

    icon: ?any,
    iconPosition: ?ICON_POSITION,
    iconColor: ?String,
    iconSize: ?Number,
    iconStyle: ?StyleProp,

    text: ?String,
    textColor: ?String,
    numberOfLines: ?Number,
    textStyle: ?StyleProp,

    badgePosition: ?BADGE_POSITION,
    badgeCornerShape: ?BADGE_CORNER_SHAPE,
    badgeNumber: ?String,
    badgeColor: ?String,
    badgeStyle: ?StyleProp,
    badgeNumberStyle: ?TextStyle,

    children: ?React.ReactNode,
}

const BaseButton = ({
    mode = MODE.CONTAINED,
    type = TYPE.NORMAL,
    floatingPosition,
    onPress,
    hasTouchableEffect = true,
    isDisabled,
    color,
    cornerRadius,
    borderColor,
    containerStyle,
    shadowLevel,
    icon,
    iconPosition = ICON_POSITION.LEFT,
    iconColor,
    iconSize,
    iconStyle,
    text,
    textColor,
    numberOfLines,
    textStyle,
    badgePosition,
    badgeCornerShape,
    badgeNumber,
    badgeColor,
    badgeStyle,
    badgeNumberStyle,
    children,
}: Props) => {
    const TouchableArea = hasTouchableEffect ? Touchable : TouchableWithoutEffect;
    const DISABLED_COLOR = 'grey';
    const DISABLED_BACKGROUND_COLOR = 'gainsboro';
    const ADJUST_BADGE_POSITION = 0;
    const insets = useSafeAreaInsets();

    const showShadowStyle = () => {
        if (!shadowLevel) {
            return;
        }

        let opacity;
        switch (shadowLevel) {
            case SHADOW_LEVEL.LIGHT:
                opacity = {
                    shadowOpacity: 0.3,
                    elevation: 6,
                }
                break;
            case SHADOW_LEVEL.MODERATE:
                opacity = {
                    shadowOpacity: 0.6,
                    elevation: 9,
                }
                break;
            case SHADOW_LEVEL.HEAVY:
                opacity = {
                    shadowOpacity: 0.9,
                    elevation: 12,
                }
                break;
            default:
                console.log('should not reached here');
                break;
        }

        return {
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowRadius: 6,
            ...opacity,
        }
    }

    const renderTypeStyle = () => {
        switch (type) {
            case TYPE.STICKY_BOTTOM:
                return {
                    bottom: insets.bottom,
                    position: 'absolute',
                }
            case TYPE.STICKY_TOP:
                return {
                    top: insets.top,
                    position: 'absolute',
                }
            case TYPE.FLOATING:
                const renderFloatingPosition = (() => {
                    if (!floatingPosition) {
                        return;
                    }

                    return {
                        top: floatingPosition.top ? insets.top + floatingPosition.top : null,
                        bottom: floatingPosition.bottom ? insets.bottom + floatingPosition.bottom : null,
                        right: floatingPosition.right ? insets.right + floatingPosition.right : null,
                        left: floatingPosition.left ? insets.left + floatingPosition.left : null,
                    }
                })();

                return {
                    position: 'absolute',
                    ...renderFloatingPosition,
                }
            case TYPE.NORMAL:
            default:
                return;
        }
    }

    const displayContainerStyle = () => {
        let containerModeStyle;
        let containerDisabledStyle;
        switch (mode) {
            case MODE.PLAIN:
                containerModeStyle = {
                    backgroundColor: 'white',
                };
                containerDisabledStyle = null;
                break;
            case MODE.OUTLINED:
                containerModeStyle = {
                    borderWidth: 1,
                    borderColor: color,
                    backgroundColor: 'white',
                }
                containerDisabledStyle = {
                    borderWidth: 1,
                    borderColor: DISABLED_COLOR,
                }
                break;
            case MODE.CONTAINED:
                containerModeStyle = {
                    backgroundColor: color,
                }
                containerDisabledStyle = {
                    backgroundColor: DISABLED_BACKGROUND_COLOR,
                }
                break;
            default:
                break;
        }

        const displayDisabledStyle = (() => {
            return isDisabled ? containerDisabledStyle : null;
        })();

        const customBorderColor = (() => {
            if (borderColor) {
                return {
                    borderColor: borderColor,
                    borderWidth: 1,
                }
            }
        })();

        const displayBorderRadius = (() => {
            return cornerRadius ? { borderRadius: cornerRadius } : null;
        })();


        const displayBadgeFlexDirection = (() => {
            if (!badgePosition) {
                return;
            }

            switch (badgePosition) {
                case BADGE_POSITION.INNER_TOP:
                case BADGE_POSITION.INNER_BOTTOM:
                    return {
                        flexDirection: 'column',
                    }
                case BADGE_POSITION.INNER_LEFT:
                case BADGE_POSITION.INNER_RIGHT:
                    return {
                        flexDirection: 'row',
                    }
                default:
                    return;
            }
        })();

        return {
            ...styles.container,
            ...containerModeStyle,
            ...containerStyle,
            ...showShadowStyle(),
            ...displayBorderRadius,
            ...customBorderColor,
            ...renderTypeStyle(),
            ...displayBadgeFlexDirection,
            ...displayDisabledStyle,
        }
    }

    const displayIconStyle = () => {
        let iconModeStyle;
        let iconDisabledStyle;
        switch (mode) {
            case MODE.PLAIN:
            case MODE.OUTLINED:
                iconModeStyle = {
                    tintColor: color,
                }
                iconDisabledStyle = {
                    tintColor: DISABLED_COLOR,
                }
                break;
            case MODE.CONTAINED:
                iconModeStyle = {
                    tintColor: 'white',
                }
                iconDisabledStyle = {
                    tintColor: DISABLED_COLOR,
                }
                break;
            default:
                console.log('should not reached here');
                break;
        }

        const displayDisabledStyle = (() => {
            return isDisabled ? iconDisabledStyle : null;
        })();

        return {
            ...iconModeStyle,
            ...iconStyle,
            ...displayDisabledStyle,
        }
    }

    const displayTextStyle = () => {
        let textModeStyle;
        let textDisabledStyle;
        switch (mode) {
            case MODE.PLAIN:
            case MODE.OUTLINED:
                textModeStyle = {
                    color: color,
                }
                textDisabledStyle = {
                    color: DISABLED_COLOR,
                }
                break;
            case MODE.CONTAINED:
                textModeStyle = {
                    color: 'white',
                }
                textDisabledStyle = {
                    color: DISABLED_COLOR,
                }
                break;
            default:
                console.log('should not reached here');
                break;
        }

        const displayDisabledStyle = (() => {
            return isDisabled ? textDisabledStyle : null;
        })();

        return {
            ...textModeStyle,
            ...textStyle,
            ...displayDisabledStyle,
        };
    }

    const displayBadgeStyle = () => {
        let badgeDisabledStyle = {
            backgroundColor: DISABLED_BACKGROUND_COLOR,
        }

        const displayDisabledStyle = (() => {
            return isDisabled ? badgeDisabledStyle : null;
        })();

        const renderPosition = (() => {
            if (!badgePosition) {
                return;
            }

            switch (badgePosition) {
                case BADGE_POSITION.INNER_BOTTOM:
                case BADGE_POSITION.INNER_LEFT:
                case BADGE_POSITION.INNER_RIGHT:
                case BADGE_POSITION.INNER_TOP:
                    return {
                        position: 'relative',
                    }
                case BADGE_POSITION.OUTER_TOP_RIGHT:
                case BADGE_POSITION.OUTER_TOP_LEFT:
                case BADGE_POSITION.OUTER_BOTTOM_LEFT:
                case BADGE_POSITION.OUTER_BOTTOM_RIGHT:
                    return {
                        position: 'absolute',
                    }
                default:
                    return;
            }
        })();

        const renderOuterBadgePosition = (() => {
            if (!badgePosition) {
                return;
            }

            switch (badgePosition) {
                case BADGE_POSITION.OUTER_BOTTOM_LEFT:
                    return {
                        alignSelf: 'flex-start',
                        bottom: ADJUST_BADGE_POSITION,
                        left: -4,
                    }
                case BADGE_POSITION.OUTER_BOTTOM_RIGHT:
                    return {
                        alignSelf: 'flex-end',
                        bottom: ADJUST_BADGE_POSITION,
                        right: -4,
                    }
                case BADGE_POSITION.OUTER_TOP_LEFT:
                    return {
                        top: ADJUST_BADGE_POSITION,
                        alignSelf: 'flex-start',
                        left: -4,
                    }
                case BADGE_POSITION.OUTER_TOP_RIGHT:
                    return {
                        top: ADJUST_BADGE_POSITION,
                        alignSelf: 'flex-end',
                        right: -4,
                    }
                default:
                    return;
            }
        })();

        return {
            ...renderPosition,
            ...renderOuterBadgePosition,
            ...badgeStyle,
            ...displayDisabledStyle,
        }
    }

    const renderContent = () => {
        const Content = () => {
            if (children) {
                return children;
            }
            return (
                <>
                    <ButtonIcon icon={icon} position={iconPosition} color={iconColor} size={iconSize} style={displayIconStyle()}>
                        <ButtonText text={text} numberOfLines={numberOfLines} textColor={textColor} style={displayTextStyle()} />
                    </ButtonIcon>
                </>
            )
        }

        const BadgeContent = () => {
            if (!badgePosition) {
                return null;
            }

            return (
                <Badge
                    style={displayBadgeStyle()}
                    position={badgePosition}
                    color={badgeColor}
                    cornerShape={badgeCornerShape}
                    badgeNumber={badgeNumber}
                    badgeNumberStyle={badgeNumberStyle}
                />
            )
        }

        if (!badgePosition) {
            return (
                <Content />
            )
        }

        switch (badgePosition) {
            case BADGE_POSITION.INNER_BOTTOM:
            case BADGE_POSITION.INNER_RIGHT:
            case BADGE_POSITION.OUTER_BOTTOM_LEFT:
            case BADGE_POSITION.OUTER_BOTTOM_RIGHT:
                return (
                    <>
                        <Content />
                        <BadgeContent />
                    </>
                );
            case BADGE_POSITION.INNER_TOP:
            case BADGE_POSITION.INNER_LEFT:
            case BADGE_POSITION.OUTER_TOP_LEFT:
            case BADGE_POSITION.OUTER_TOP_RIGHT:
                return (
                    <>
                        <BadgeContent />
                        <Content />
                    </>
                );
            default:
                console.log('should not reached here');
                return;
        }
    }

    return (
        <TouchableArea
            onPress={onPress}
            disabled={isDisabled}
            style={displayContainerStyle()}
        >
            {renderContent()}
        </TouchableArea>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
    },
});

export default React.memo(BaseButton);
