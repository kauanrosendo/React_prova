
import styled from 'styled-components/native';
import Title from "../components/titulo/titulo";
import { useEffect, useState } from 'react';
import InputTexto from '@/components/titulo/Input/input';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Login() {

     const [email,setEmail] = useState('exemplo@exemplo.com')
     const [erroEmail, setErroEmail] = useState(false)

     const [senha, setSenha] = useState('@Exemplo123')
     const [erroSenha, setErroSenha] = useState(false)
     const [mostrarSenha, setMostrarSenha] = useState(false)

     useEffect(()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailRegex.test(email))
        {
           setErroEmail(false)
        }
        else{
            setErroEmail(true)
        }

     },[email])
     

     useEffect(()=>{
       
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if(!passwordRegex.test(senha))
        {
            setErroSenha(true)
        }
        else
        {
            setErroSenha(false)
        }
    },[senha])


    return (
        <Tela>
            <Title texto={'Entrar'} flag={true}/>
            <Title texto={'Bem vindo ao app'} flag={false}/>
                <ContainerCampoTexto>
                 <Email>   
                <InputTexto erro= {true} placeholder='Digite seu email...'onChangeText={text =>setEmail(text)} />
                {erroEmail ?
                <TextErrorHint>Email invalido</TextErrorHint>
                 :
                 null
                }
                </Email>
                <Senha>
                <InputTexto erro= {false} placeholder='digite sua senha...'onChangeText={text =>setSenha(text)} secureTextEntry={!mostrarSenha}/>
                <Olho onPress={() => setMostrarSenha(!mostrarSenha)}>
                <Ionicons name={ mostrarSenha ? "eye-off" : "eye"}  size={24} color="black" />
                </Olho>
                {erroSenha ?
                <TextErrorHint>Senha invalida</TextErrorHint>
                 :
                 null
                }
                </Senha>

                </ContainerCampoTexto>
              
                <Acoes>
                    <Button>
                        <ButtonText>entrar</ButtonText>
                    </Button>
                    <Cadastrar>Cadastra-se</Cadastrar>
                    <EsqueciSenha>Esqueci-senha</EsqueciSenha>
                </Acoes>
        </Tela>
    )
}
const Tela = styled.View`
    flex: 1;
    background-color: #0d58ee;
    padding: 26px;
`;

const ContainerCampoTexto = styled.View`
    gap: 25px;
`;

const Acoes = styled.View`
    gap: 20px;
    margin-top: 10px;
`;

const Button = styled.Pressable`
    width: 284px;
    height: 67px;
    align-items: center;
    align-self: center;
    justify-content: center;
    background-color: #fff;
`;

const ButtonText = styled.Text`
    color: #000;
`;

const Cadastrar = styled.Text`
    text-align: center;
`;

const EsqueciSenha = styled.Text`
    text-align: center;
`;

const TextErrorHint = styled.Text`
    font-size: 16px;
    color: #E63946;
`;

const Olho = styled.Pressable`
position: absolute;
right: 20px;
top: 18px;
`

const Senha = styled.View`
    position: relative;
    width: 100%;
`;

const Email = styled.View`
    position: relative;
    width: 100%;
`;

