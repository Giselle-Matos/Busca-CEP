import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 300,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontWheight: "bold",
        fontSize: 25,
    },
    input: {
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: "#90EE90",
        marginBottom: 15,
    },
    botaoBuscar: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "#90EE90",
        marginBottom: 15,
        borderRadius: 50,
    },
    textoResultado: {
        fontSize: 18,
    },
    historico:{
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderWidth: 1,
        marginBottom: 15,
    }
});

export default styles