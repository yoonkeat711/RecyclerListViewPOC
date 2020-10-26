
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   StatusBar,
//   Dimensions,
// } from 'react-native';

// import { LayoutProvider, DataProvider, RecyclerListView } from 'recyclerlistview';
// import StickyContainer from 'recyclerlistview/sticky';
// import RectangleButton from './src/Button/RectangleButton';
// import mountain from './src/assets/mountain.jpeg';
// import { MODE, ICON_POSITION } from './src/constants/ButtonEnums';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { UIActivityIndicator } from 'react-native-indicators';

// const App = () => {

//   let dataProviderObject = new DataProvider((r1, r2) => {
//     return r1 !== r2;
//   });

//   const TOTAL_PAGE = 7810;
//   const [page, setPage] = useState(7800);
//   const [data, setData] = useState([]);
//   //Note: workaround here, dataProvider seems need to have data once initial because of layoutProvider cant read
//   const [dataProvider, setDataProvider] = useState(dataProviderObject.cloneWithRows([{ 'x': 's', "quoteText": '' }]));

//   useEffect(() => {
//     fetchData();
//   }, [page])

//   const fetchData = useCallback(() => {
//     fetch('https://quote-garden.herokuapp.com/api/v2/quotes?page=' + page + '&limit=20')
//       .then((response) => response.json())
//       .then((result) => {
//         setData(data.concat(result.quotes));
//         setDataProvider(dataProviderObject.cloneWithRows(data.concat(result.quotes)));
//       })
//   }, [page]);

//   let layoutProvider = new LayoutProvider(index => {
//     if (dataProvider.getSize() > 0) {
//       return dataProvider.getDataForIndex(index);
//     }
//   }, (type, dim, index) => {
//     if (index === 0) {
//       dim.height = Dimensions.get('window').height / 20;
//       dim.width = Dimensions.get('window').width;
//     }
//     else {
//       dim.height = Dimensions.get('window').height / 12; // height have to set smaller if using forceNonDeterministicRendering otherwise, seems to default to this height if cell is lesses height
//       dim.width = Dimensions.get('window').width;
//     }
//   });

//   const onLoadMore = () => {
//     if (page < TOTAL_PAGE) {
//       setPage(page + 1);
//     }
//   }

//   // recycler list view 
//   const rowRender = (_, data, index) => {
//     /* Note: since sticky header will render 2 header if pull down the list,
//      thus, make an empty header here and render from overrrideRowRenderer */
//     if (index === 0) {
//       return (
//         <View style={{ height: 150 }} />
//       )
//     }
//     return (
//       <RectangleButton
//         icon={mountain}
//         iconPosition={ICON_POSITION.RIGHT}
//         text={data.quoteText}
//         color={'blue'}
//         mode={MODE.OUTLINED}
//       />
//     )
//   }

//   const renderFooter = () => {
//     if (page < TOTAL_PAGE) {
//       return (
//         <UIActivityIndicator size={20} />
//       )
//     }
//     return (
//       <Text style={styles.footer}>{'End here footer'}</Text>
//     )
//   }

//   const overrideRowRenderer = (type, data, index) => {
//     const view = rowRender(type, data, index);
//     switch (index) {
//       case 0:
//         return (
//           <View style={styles.overrideStickyHeaderContainer}>
//             <Text style={styles.overrideStickyHeaderText}>Overriden Sticky Header</Text>
//           </View>
//         )
//     }
//     return view;
//   }

//   return (
//     <>
//       <SafeAreaProvider>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView style={styles.container}>
//           <StickyContainer
//             stickyHeaderIndices={[0]}
//             overrideRowRenderer={overrideRowRenderer}
//           >
//             <RecyclerListView
//               dataProvider={dataProvider}
//               layoutProvider={layoutProvider}
//               rowRenderer={rowRender}
//               onEndReached={onLoadMore}
//               renderFooter={renderFooter}
//               forceNonDeterministicRendering={true}
//             />
//           </StickyContainer>
//         </SafeAreaView>
//       </SafeAreaProvider>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   overrideStickyHeaderContainer: {
//     height: 50,
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   overrideStickyHeaderText: {
//     fontWeight: '700',
//      fontSize: 20,
//   },
//   footer: {
//     fontWeight: '700',
//   }
// });

// export default App;

import React from 'react';
import AppNavigation from './src/navigations/AppNavigation';

const App = () => {
return (
  <AppNavigation />
)
}

export default App;
