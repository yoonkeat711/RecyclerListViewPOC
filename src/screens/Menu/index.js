import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const Menu = ({navigation}) => {
    navigateToPaginationListView = () => {
        navigation.navigate('RecyclerListViewPagination');
    }

    navigateToNormalListView = () => {
        navigation.navigate('RecyclerListViewWithoutPagination');
    }
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex:1 }}>
            <TouchableOpacity onPress={navigateToPaginationListView} style={{backgroundColor: 'red'}}>
                <Text>Pagination</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToNormalListView} style={{marginTop: 100, backgroundColor: 'red'}}>
                <Text>Without Pagination</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Menu;
