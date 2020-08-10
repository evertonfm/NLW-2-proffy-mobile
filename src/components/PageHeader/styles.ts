import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#8257e5'
    },

    topBar: {
        flexDirection: 'row', // components lado a lado
        alignItems: 'center',
        justifyContent: 'space-between', // espaco entre components (se tiver 2 components fica um de cada lado)
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
    },
    
});

export default styles;