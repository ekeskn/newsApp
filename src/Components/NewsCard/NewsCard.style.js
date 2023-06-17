import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {borderWidth:1,
    borderColor: '#e9e9e9',
backgroundColor: '#f5f5f5',
margin: 5,
borderRadius:10,
borderColor:'black'

  },
  image: {
    height: Dimensions.get('window').height/4,
    borderColor: '#e9e9e9',
    borderTopLeftRadius:10,
    borderTopRightRadius:10

  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,

  },
  description: {
    fontSize: 14,
    marginLeft:10

  },
  author:{
    fontStyle:'italic',
    textAlign:'right',
    marginRight:5,
    marginBottom:5,
  }
});
