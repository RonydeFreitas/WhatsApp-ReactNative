import React, {useRef} from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableHighlight, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function TelaConversas() {
    const scrollViewRef = useRef();
    const [value, setValue] = React.useState();
    const [mensagens, setMensagens] = React.useState([
    {
        tipo: 'received',
        content: "contentMessage.replace(/  +/g, '')",
        hour: getDateTime(),
        status: "lida"
    }

]);

    function getDateTime(){
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        return `${hour}:${minute}`
    }

    function sendMessage(contentMessage){
        if (value && value.trim()) {
            setMensagens([...mensagens, {
                tipo: 'send',
                content: contentMessage.replace(/  +/g, ''),
                hour: getDateTime(),
                status: "lida"
            }])
        }
        setValue("");
    }

    return (
        <>
            <ScrollView style={styles.backGround}
                        ref={scrollViewRef}
                        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            >
                {
                    mensagens.map((msg, index) => {
                        if (msg.tipo === 'send'){
                            return (
                                <View key={index} style={styles.enviadas}>
                                    <View style={styles.ponta}/>
                                    <Text>{msg.content}</Text>
                                    <Text style={styles.hora}>{msg.hour} <MaterialCommunityIcons name="check" style={styles.iconeCheck} size={14}/></Text>
                                </View>
                            )
                        } if (msg.tipo === 'received'){
                            return (
                                <View key={index} style={styles.recebidos}>
                                    <View style={styles.pontaRecebidos}/>
                                    <Text>{msg.content}</Text>
                                    <Text style={styles.hora}>{msg.hour}</Text>
                                </View>
                            )
                        }
                    })
                }
            </ScrollView>
            <View style={styles.groupSend}>
                <TextInput style={styles.inputSend}
                           onChangeText={text => setValue(text)} value={value}
                           placeholder={'Digite sua mensagem'}/>
                <TouchableHighlight style={styles.btnAudio} onPress={() => {
                    sendMessage(value)
                }}>
                    <MaterialIcons name="send" size={24} color="white" />
                </TouchableHighlight>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    backGround: {
        backgroundColor: '#ece5dd',
        paddingHorizontal: 8,
    },
    enviadas: {
        backgroundColor: '#DCF8C6',
        width: "70%",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
        elevation: 1,
        alignSelf: 'flex-end',
        right: 12,
        marginVertical: 6
    },
    ponta: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 18,
        borderTopWidth: 16,
        borderRightColor: 'transparent',
        borderTopColor: '#DCF8C6',
        position: 'absolute',
        right: -12
    },
    recebidos: {
        backgroundColor: '#FFFFFF',
        width: "70%",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
        elevation: 1,
        alignSelf: 'flex-start',
        left: 12,
        marginVertical: 6
    },
    pontaRecebidos: {
        width: 0,
        height: 0,
        top: 1,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 18,
        borderTopWidth: 16,
        borderRightColor: 'transparent',
        borderTopColor: '#FFFFFF',
        position: 'absolute',
        left: -12,
        transform: [
            {rotate: '90deg'}
        ]
    },
    hora: {
        color: 'gray',
        alignSelf: 'flex-end',
        fontSize: 12,
        top: 1,

    },
    btnAudio: {
        backgroundColor: '#075E54',
        width: 42,
        height: 42,
        marginVertical: 8,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputSend: {
        marginHorizontal: 8,
        height: 42,
        width: '80%',
        borderRadius: 25,
        marginVertical: 8,
        elevation: 1,
        paddingHorizontal: 16
    },
    groupSend: {
        flexDirection: 'row',
    }
});

export default TelaConversas;
