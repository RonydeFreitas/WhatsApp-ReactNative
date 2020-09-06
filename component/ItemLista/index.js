import * as React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image  } from 'react-native';

const styles = StyleSheet.create({
    titulo: {
      fontWeight: '700',
        fontSize: 16
    },
    imagem: {
        width: 64,
        height: 64,
        borderRadius: 50
    },
    boxList: {
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#CDCDCD',
        borderBottomWidth: 1
    },
    conteudo: {
        paddingHorizontal: 16,
        flex: 1,
        justifyContent: 'space-around',
    },
    hora: {
        fontSize: 12,
        fontWeight: '400',
        color: '#25D366',
    },
    qtdMsg: {
        fontSize: 10,
        paddingHorizontal: 6,
        paddingVertical: 4,
        backgroundColor: '#25D366',
        borderRadius: 50,
        width: 22,
        height: 22,
        textAlign: 'center',
        marginHorizontal: 4,
        marginVertical: 4,
        color: 'white',
    },
    status: {
        display: 'flex',
        flexDirection: 'row'
    },
    detalhes: {
        justifyContent: 'space-around',
    }
});


function ItemLista( props ) {
    return (
     <TouchableNativeFeedback onPress={props.onPress}>
         <View style={styles.boxList}>
             <Image style={styles.imagem} source={{
                 uri: "https://bulma.io/images/placeholders/128x128.png"
             }} />

                 <View style={styles.conteudo}>
                     <Text style={styles.titulo}>Rony de Freitas</Text>
                     <View style={styles.status}>
                         <Text>c</Text>
                         <Text>fig - video - foto</Text>
                     </View>
                 </View>
                 <View style={styles.detalhes}>
                     <Text style={styles.hora}>16:20</Text>
                     <Text style={styles.qtdMsg}>1</Text>
                 </View>
         </View>
     </TouchableNativeFeedback>
    );
}

export default ItemLista;

