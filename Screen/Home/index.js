import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import ItemLista from "../../component/ItemLista";

function Conversas() {
    const navigation = useNavigation();

    function navigateToMessages(conversaAtual){
        navigation.navigate(conversaAtual);
    }

    return (
        <>
            <ItemLista onPress={() => {
                navigateToMessages("TelaConversa")
            }} />
        </>
    );
}

export default Conversas;
