import React from 'react'
import {View, Text,StyleSheet, Image} from 'react-native'

export default class PeopleDetailsPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            "people": props.route.params.people
        }
    }

    render(){
        //const imagem = this.state.people
        return(
            <View style={style.ViewStyle}>
                <Image style={{height:300,width:300}} source={{uri:this.state.people.image}} />
                <Text style={style.Texto}>Nome: {this.state.people.nome}</Text>
                <Text  style={style.Texto}>Sobrenome: {this.state.people.sobrenome}</Text>
                <Text  style={style.Texto}>Email: {this.state.people.email}</Text>
                <Text  style={style.Texto}>Telefone: {this.state.people.telefone}</Text>
                <Text  style={style.Texto}>CPF: {this.state.people.cpf}</Text>
                <Text  style={style.Texto}>RG: {this.state.people.rg}</Text>
                <Text  style={style.Texto}>Data de Nascimento:  {this.state.people.dataNascimento}</Text>
                <Text  style={style.Texto}>Idade: {this.state.people.idade}</Text>

            </View>
        )
    }
}
const style = StyleSheet.create({
    line: {
        height:60,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row'
    },
    avatar: {
        aspectRatio: 1,
        marginLeft: 10,
        flex: 1,
        borderRadius: 50
    },
    Texto: {
        fontSize: 14,
        
        
    },
    ViewStyle:{
        backgroundColor:'#C0C0C0',
        alignItems : 'center',
        borderBottomLeftRadius : 50,
        borderBottomRightRadius : 50,
        borderBottomColor: '#000000',
      
    },
}
)

