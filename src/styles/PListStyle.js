import {StyleSheet} from 'react-native'

const PListStyle = StyleSheet.create({
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

export default PListStyle