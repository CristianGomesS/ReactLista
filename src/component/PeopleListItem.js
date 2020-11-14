import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {toUpperFirst} from '../util'

const PeopleListItem = props => {
    const {people, onPressItemDetails} = props
    const nome = people.nome //dentro de people vai ter o tituli primeiro e ultimo nome da pessoa
    const sobrenome = people.sobrenome 
    return(
       <TouchableOpacity onPress={() => {
           onPressItemDetails(people)
        }} >
           <View style={style.line}>
             <Image style={style.avatar} source={{uri: people.image}} />
                <Text style={style.lineText} key={nome}>
                {`${
                        toUpperFirst(nome)
                  } ${
                        toUpperFirst(sobrenome)
                  }`
                }
                </Text>
            </View>
        </TouchableOpacity>
    )

}

const style = StyleSheet.create({
        line: {
            height:50,
            borderBottomWidth: 1,
            borderBottomColor: '#000000',
            borderRadius:50,
            alignItems: 'center',
            flexDirection: 'row',
            
        },
        avatar: {
            aspectRatio: 1,
            marginLeft: 10,
            flex: 1,
            borderRadius: 50
        },
        lineText: {
            fontSize: 20,
            paddingLeft: 20,
            flex: 7
        }
    }
)
export default PeopleListItem

