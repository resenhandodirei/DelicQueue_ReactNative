import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#F2E1D8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:60,
        paddingTop:20,
        //paddingBottom:250,
      },
      inputContainer:{
        width:'80%',
        flexDirection:'column',
        alignItems:'center',
      }
});

export default styles