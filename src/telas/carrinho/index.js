import React from "react";
import {Text,SafeAreaView,StatusBar,FlatList} from "react-native";
import Item from "./item";
import estilos from "../../estilos";
import estilosGlobais from  '../../estilos'
import StatusCarrinho from "../../componentes/statusCarrinho";

const servicos = [
    {
        id : 1,
        nome : "Lavagem a seco",
        preco : 120,
        descricao : "Uma lavagem a seco no carro de qualidade"
    },
    {
        id : 2,
        nome : "Lavagem completa carro",
        preco : 25,
        descricao : "Lavagem geral no carro"
    },

    {
        id : 3,
        nome : "Lavagem completa Moto",
        preco : 15,
        descricao : "lavagem geral na moto"
    },
    {
        id : 4,
        nome : "Lavagem veiculos grandes",
        preco :  35,
        descricao : "Lavagem em veiculos maiores categoria D"
    }

]

export default function Carrinho(){
    const total = servicos.reduce((soma,{preco}) => soma + preco,0)


    return <SafeAreaView style={estilos.preencher}>
         <StatusBar/>
         <StatusCarrinho total={total} />
         <FlatList
            data={servicos}
            renderItem={({item}) => <Item {...item}/>}
            keyExtractor={({id}) => String(id)}
         
         />

    </SafeAreaView>
}