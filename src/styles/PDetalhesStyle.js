import {StyleSheet} from 'react-native'

const PDetalhesStyle = StyleSheet.create({
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
        fontSize: 16,
        
        
    },
    ViewStyle:{
        backgroundColor:'#C0C0C0',
        alignItems : 'center',
        borderBottomLeftRadius : 50,
        borderBottomRightRadius : 50,
        borderBottomColor: '#000000',
        flex:1,
},
Nome:{
    fontSize: 20
}
})
 
export default PDetalhesStyle