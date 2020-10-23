/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

import addIcon from './src/assets/add.png';
import RoundButton from './src/Button/RoundButton';
import RectangleButton from './src/Button/RectangleButton';
import { MODE, TYPE, ICON_POSITION, SHADOW_LEVEL, BADGE_CORNER_SHAPE, BADGE_POSITION } from './src/constants/ButtonEnums';
import SquareButton from './src/Button/SquareButton';
import CustomViewButton from './src/Button/CustomViewButton';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App1 = () => {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <RectangleButton
            mode={MODE.OUTLINED}
            color={'green'}
            icon={addIcon}
            iconSize={22}
            iconPosition={ICON_POSITION.RIGHT}
            cornerRadius={20}
            text={'button'}
          />
          <RectangleButton
            mode={MODE.PLAIN}
            color={'green'}
            icon={addIcon}
            iconSize={22}
            iconPosition={ICON_POSITION.RIGHT}
            cornerRadius={20}
            text={'button'}
          />
          <RectangleButton
            mode={MODE.CONTAINED}
            color={'green'}
            icon={addIcon}
            iconSize={22}
            iconPosition={ICON_POSITION.RIGHT}
            cornerRadius={20}
            text={'button'}
          />
          <RectangleButton
            mode={MODE.CONTAINED}
            color={'blue'}
            icon={addIcon}
            iconSize={25}
          />
          <RectangleButton
            mode={MODE.OUTLINED}
            color={'red'}
            icon={addIcon}
            iconPosition={ICON_POSITION.RIGHT}
            text={'Button'}
            cornerRadius={5}
          />
          <RectangleButton
            mode={MODE.OUTLINED}
            color={'orange'}
            icon={addIcon}
            iconPosition={ICON_POSITION.TOP}
            text={'Button'}
            cornerRadius={5}
          />
          <RectangleButton
            mode={MODE.OUTLINED}
            color={'red'}
            icon={addIcon}
            iconPosition={ICON_POSITION.BOTTOM}
            text={'Button'}
            containerStyle={{ marginHorizontal: 10 }}
            cornerRadius={20}
            badgeNumber={'89+'}
            badgePosition={BADGE_POSITION.INNER_RIGHT}
          />

          <RectangleButton
            mode={MODE.OUTLINED}
            color={'red'}
            icon={addIcon}
            iconPosition={ICON_POSITION.BOTTOM}
            text={'Button'}
            containerStyle={{ marginHorizontal: 10 }}
            cornerRadius={20}
            badgeNumber={'89+'}
            badgePosition={BADGE_POSITION.INNER_LEFT}
          />

          <RectangleButton
            mode={MODE.OUTLINED}
            color={'green'}
            icon={addIcon}
            iconPosition={ICON_POSITION.BOTTOM}
            text={'Button'}
            containerStyle={{ marginHorizontal: 10 }}
            cornerRadius={20}
            badgeNumber={'89+'}
            badgePosition={BADGE_POSITION.INNER_TOP}
          />

          <RectangleButton
            mode={MODE.PLAIN}
            color={'green'}
            icon={addIcon}
            iconPosition={ICON_POSITION.TOP}
            text={'Button'}
            containerStyle={{ marginHorizontal: 10 }}
            cornerRadius={90}
            badgePosition={BADGE_POSITION.OUTER_TOP_RIGHT}
            containerStyle={{ width: 150 }}
            badgeStyle={{ right: 20 }}
          />

          <RectangleButton
            mode={MODE.CONTAINED}
            color={'green'}
            icon={addIcon}
            iconPosition={ICON_POSITION.BOTTOM}
            text={'Button'}
            containerStyle={{ marginHorizontal: 10 }}
            cornerRadius={90}
            badgeNumber={'89+'}
            badgePosition={BADGE_POSITION.OUTER_BOTTOM_RIGHT}
            containerStyle={{ width: 150 }}
          />

          <RectangleButton
            mode={MODE.OUTLINED}
            color={'green'}
            icon={addIcon}
            iconPosition={ICON_POSITION.BOTTOM}
            text={'Button'}
            containerStyle={{ marginHorizontal: 10 }}
            cornerRadius={20}
            badgeNumber={'89+'}
            badgePosition={BADGE_POSITION.OUTER_TOP_LEFT}
          />

          <RectangleButton
            mode={MODE.OUTLINED}
            color={'red'}
            icon={addIcon}
            iconPosition={ICON_POSITION.TOP}
            text={'Button'}
          />

          <RectangleButton
            mode={MODE.PLAIN}
            color={'green'}
            text={'Button'}
          />

          <RectangleButton
            mode={MODE.CONTAINED}
            color={'purple'}
            icon={addIcon}
            text={'Button'}
            isDisabled={true}
            cornerRadius={15}
          />

          <SquareButton
            mode={MODE.PLAIN}
            color={'red'}
            icon={addIcon}
            iconPosition={ICON_POSITION.TOP}
            text={"Button"}
            size={100}
            cornerRadius={8}
            shadowLevel={SHADOW_LEVEL.LIGHT}
            containerStyle={{ margin: 10 }}
          />

          <RoundButton
            mode={MODE.OUTLINED}
            icon={addIcon}
            iconPosition={ICON_POSITION.TOP}
            color={'orange'}
            size={80}
            text={'Button'}
            badgePosition={BADGE_POSITION.OUTER_TOP_RIGHT}
            badgeNumber={'1'}
          />

          <SquareButton
            mode={MODE.OUTLINED}
            color={'black'}
            icon={addIcon}
            size={60}
            badgeCornerShape={BADGE_CORNER_SHAPE.ROUND}
            badgePosition={BADGE_POSITION.INNER_TOP}
            badgeColor={'green'}
          />

          <RectangleButton
            mode={MODE.CONTAINED}
            color={'green'}
            icon={addIcon}
            text={'Add'}
          />

          <CustomViewButton
            mode={MODE.PLAIN}
            shadowLevel={SHADOW_LEVEL.HEAVY}
            containerStyle={{ margin: 10 }}
            badgePosition={BADGE_POSITION.OUTER_TOP_RIGHT}
          >
            <>
              <Text style={{ color: 'red', fontSize: 20 }}>{'TRY THIS AGAIN'}</Text>
              <Text>{'Please try this again!'}</Text>
            </>
          </CustomViewButton>
        </ScrollView>
        <RoundButton
          mode={MODE.OUTLINED}
          color={'red'}
          icon={addIcon}
          type={TYPE.STICKY_BOTTOM}
          shadowLevel={SHADOW_LEVEL.MODERATE}
          size={50}
          iconSize={22}
        />

        <RoundButton
          mode={MODE.OUTLINED}
          icon={addIcon}
          color={'green'}
          shadowLevel={SHADOW_LEVEL.MODERATE}
          size={50}
          type={TYPE.STICKY_TOP}
        />
        <RoundButton
          mode={MODE.CONTAINED}
          color={'orange'}
          size={60}
          type={TYPE.FLOATING}
          iconPosition={ICON_POSITION.TOP}
          floatingPosition={{ right: 10, bottom: 30 }}
          icon={addIcon}
          shadowLevel={SHADOW_LEVEL.LIGHT}
          text={'Add'}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  
});

export default App1;
