import React from 'react';
import {View,Text} from 'react-native';
import estilos from './estilos';
import Botao from '../botao';


export default function StatusCarrinho({total}){

    return <View style={estilos.conteudo}>
        <View style={estilos.total}>
            <Text style={estilos.descricao}>Total do Carrinho : </Text>
            <Text style={estilos.valor}>
              R$  {total}
            </Text>
       </View> 
       <View style={estilos.botao}>
        <Botao valor ='Concluir Pedido'/>
       </View>
    </View>
}