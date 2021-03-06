
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import { LayoutProvider, DataProvider, RecyclerListView } from 'recyclerlistview';
import StickyContainer from 'recyclerlistview/sticky';
import RectangleButton from './../../Button/RectangleButton';
import mountain from './../../assets/mountain.jpeg';
import { MODE, ICON_POSITION } from './../../constants/ButtonEnums';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import mockData from './mockData';

const RecyclerListViewPagination = () => {

  let dataProviderObject = new DataProvider((r1, r2) => {
    return r1 !== r2;
  });

  //Note: workaround here, dataProvider seems need to have data once initial because of layoutProvider cant read
  const [dataProvider, setDataProvider] = useState(dataProviderObject.cloneWithRows([{body: null}].concat(mockData)));

  let layoutProvider = new LayoutProvider(index => {
    if (dataProvider.getSize() > 0) {
      return dataProvider.getDataForIndex(index);
    }
  }, (type, dim, index) => {
      if (index === 0 ) {
        dim.height = 50;
        dim.width = Dimensions.get('window').width;
      } else {
      dim.height = Dimensions.get('window').height / 12; // height have to set smaller if using forceNonDeterministicRendering otherwise, seems to default to this height if cell is lesses height
      dim.width = Dimensions.get('window').width;
      }
  });

  // recycler list view 
  const rowRender = (_, data, index) => {
    /* Note: since sticky header will render 2 header if pull down the list,
     thus, make an empty header here and render from overrrideRowRenderer */
    if (index === 0) {
      return (
        <View style={{ height: 50, flex: 1 }} />
      )
    }
    return (
      <RectangleButton
        icon={mountain}
        iconPosition={ICON_POSITION.RIGHT}
        text={data.body}
        color={'blue'}
        mode={MODE.OUTLINED}
      />
    )
  }

  const renderFooter = () => {
    return (
      <Text style={styles.footer}>{'End here footer'}</Text>
    )
  }

  const overrideRowRenderer = (type, data, index) => {
    const view = rowRender(type, data, index);
    switch (index) {
      case 0:
        return (
          <View style={styles.overrideStickyHeaderContainer}>
            <Text style={styles.overrideStickyHeaderText}>Overriden Sticky Header</Text>
          </View>
        )
    }
    return view;
  }

  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <StickyContainer
            stickyHeaderIndices={[0]}
            overrideRowRenderer={overrideRowRenderer}
          >
            <RecyclerListView
              dataProvider={dataProvider}
              layoutProvider={layoutProvider}
              rowRenderer={rowRender}
              renderFooter={renderFooter}
              forceNonDeterministicRendering={true}
            />
          </StickyContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overrideStickyHeaderContainer: {
    height: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overrideStickyHeaderText: {
    fontWeight: '700',
     fontSize: 20,
  },
  footer: {
    fontWeight: '700',
  }
});

export default RecyclerListViewPagination;
