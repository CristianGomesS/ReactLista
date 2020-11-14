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
    .get('https://demo9754711.mockable.io/api/Desafio3')
    .then(response => {
     const {results } = response.data  
      this.setState({
        peoples: results
        
      })
    })
  }
 
  render(){
    return (
      <View>
        <PeoppleList peoples={this.state.peoples} 
                     onPressItem={ (people) => {
                         this.props.navigation.navigate('Detalhes do Cliente',
                         {"people": people})
                     }}
        />
      </View>
    );
  }
 
}