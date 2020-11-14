import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import {toUpperFirst} from '../util'
import PListStyle from '../styles/PListStyle'

const PeopleListItem = props => {
    const {people, onPressItemDetails} = props
    const nome = people.nome //dentro de people vai ter o tituli primeiro e ultimo nome da pessoa
    const sobrenome = people.sobrenome 
    const idade = people.idade
    return(
       <TouchableOpacity onPress={() => {
           onPressItemDetails(people)
        }} >
           <View style={PListStyle.line}>
             <Image style={PListStyle.avatar} source={{uri: people.image}} />
                <Text style={PListStyle.lineText} key={nome}>
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


export default PeopleListItem

