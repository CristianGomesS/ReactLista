import React from 'react'
import {View, Text, Image} from 'react-native'
import PDetalhesStyle from '../styles/PDetalhesStyle'
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
            <View style={PDetalhesStyle.ViewStyle}>
                <Image style={{height:300,width:300}} source={{uri:this.state.people.image}} />
                <Text style={PDetalhesStyle.Nome}>Nome: {this.state.people.nome} {this.state.people.sobrenome} </Text>
                <Text  style={PDetalhesStyle.Texto}>Idade: {this.state.people.idade}</Text>
                <Text  style={PDetalhesStyle.Texto}>Data de Nascimento:  {this.state.people.dataNascimento}</Text>
                <Text  style={PDetalhesStyle.Texto}>Email: {this.state.people.email}</Text>
                <Text  style={PDetalhesStyle.Texto}>Telefone: {this.state.people.telefone}</Text>
                <Text  style={PDetalhesStyle.Texto}>CPF: {this.state.people.cpf}</Text>
                <Text  style={PDetalhesStyle.Texto}>RG: {this.state.people.rg}</Text>
             

            </View>
        )
    }
}




