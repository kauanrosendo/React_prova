// import { Button, StyleSheet, Text, View } from "react-native"

// export default function App(){
//     return(
//         <View>
//             <Text style={Estilo.botao}> texto </Text>
//             <Button title="Ola"

//             />
//         </View>
//     )

// }

// const Estilo = StyleSheet.create({
//     texto : {
//         color,
//         textAlign: 'center',
//         fontSize
//     },
//     botao :{
//         width : 100,
//         color : ""
//     }
// })



import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";

import styled from 'styled-components/native';

export default function Login() {
    return (
        <Tela>
              
                <Titulo >Entrar</Titulo>
                <ContainerCampoTexto>
                <CampoTexto placeholder="Email" placeholderTextColor="#000"/>
                <CampoTexto placeholder="senha" />
                </ContainerCampoTexto>
              
                <Acoes>
                    <Button>
                        <ButtonText>entrar</ButtonText>
                    </Button>
                    <Cadastrar>Cadastra-se</Cadastrar>
                    <EsqueciSenha>esqueci-senha</EsqueciSenha>
                </Acoes>
        </Tela>
    )
}

const Tela = styled.View`
    flex: 1;
    background-color: #1500F7;
    padding: 26px;
`

const Titulo = styled.Text`
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    margin:80px 0px    
`
const ContainerCampoTexto = styled.View`
    gap: 25px;
`

const CampoTexto = styled.TextInput`
   background-color: #fff;
   font-size:18px;
   padding:20px;
`

const Acoes = styled.View`
    gap: 20px;
    margin-top: 10px;
    `

const Button = styled.Pressable`
    width: 284px;
    height: 67px;
    align-items:center;
    align-self: center;
    margin-bottom: 10px;
    justify-content:center;
    background-color:#fff;
    
`

const ButtonText = styled.Text`
    color: #000;
`

const Cadastrar = styled.Text`
    text-align: center;
    
`
const EsqueciSenha = styled.Text`
text-align: center;
    
`











/* 
// const estilo = StyleSheet.create({
//     tela:{
//        flex: 1,
//        backgroundColor: '#1500F7',
//        padding: 26
//     },
//     titulo:{
//         fontSize: 56,
//         fontWeight: 'bold' ,
//         color: '#ffff',
//         marginTop: 80,
//         marginBottom: 80
//     },
//     campo_texto: {
//         backgroundColor: '#ffff' ,
//         fontSize: 18,
//         textAlignVertical: 'center',
//         paddingHorizontal: 16 ,
//         padding: 20
//     }
// }) */