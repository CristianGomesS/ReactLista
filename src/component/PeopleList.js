import React from 'react'
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'
import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const {peoples, onPressItem} = props

    const renderItem = ({item}) => {
        return (
            <PeopleListItem 
                key={item.nome} 
                people={item}
                onPressItemDetails={onPressItem}
            />
        )
    }

    const header= () => {
        return (
            <View style={style.headerStyle}>
                <Text style={style.titleStyle}>
                    Pessoas
                </Text>
            </View>
        )
    }

    return (
        <View style={style.container}>
            <SafeAreaView>
                <FlatList
                    data={peoples}
                    renderItem={renderItem}
                    keyExtractor={(item) => {item.nome}}
                    ListHeaderComponent={header}
                    stickyHeaderIndices={[0]}
                />
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#6A5ACD',
            
        },
        headerStyle: {
            flex: 1,
            height: 50,
            width: '100%',
            backgroundColor: "#00CED1",
            justifyContent: "center",
            alignItems: 'center'
        },
        titleStyle: {
            color: '#000',
            fontSize: 20
        }
    }
)

export default PeopleList