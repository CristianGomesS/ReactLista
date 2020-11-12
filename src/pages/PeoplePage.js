import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PeoppleList from '../component/PeopleList'

export default class PeoplePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      peoples: []
    }
  }
 
  componentDidMount(){
    axios
    //.get('https://dog.ceo/api/breeds/list/all')
    .get('https://randomuser.me/api/?nat=br&results=20')
    //.get('http://www.animaliarestapi.com/all')
    //.get ('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30') 
    .then(response => {
      const {results } = response.data  
 
      this.setState({
        peoples : results
        
      })
    })
  }
 
  render(){
    return (
      <View>
        <PeoppleList peoples={this.state.peoples} 
                     onPressItem={ (people) => {
                         this.props.navigation.navigate('Detalhe da Pessoa',
                         {"people": people})
                     }}
        />
      </View>
    );
  }
 
}