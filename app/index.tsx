
import styled from 'styled-components/native';
import Title from "../components/titulo/titulo";
import { useEffect, useState } from 'react';
import InputTexto from '@/components/titulo/Input/input';
import { Alert, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { api } from '@/utils/api';

export default function Login() {

    const [email, setEmail] = useState('exemplo@exemplo.com')
    const [erroEmail, setErroEmail] = useState(false)

    const [senha, setSenha] = useState('@Exemplo123')
    const [erroSenha, setErroSenha] = useState(false)
    const [mostrarSenha, setMostrarSenha] = useState(false)

    const [formularioValido, setFormularioValido] = useState(true)

    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            setErroEmail(false)
            setFormularioValido(false)
        }
        else {
            setErroEmail(true)
            setFormularioValido(true)
        }

    }, [email])


    useEffect(() => {

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (senha == '!@Exemplo123') {
            setFormularioValido(true)
        }
        else if (passwordRegex.test(senha)) {
            setErroSenha(false)
            setFormularioValido(false)
        }
        else {
            setErroSenha(true)
            setFormularioValido(true)
        }
    }, [senha])

    async function Logar() {
        try {
            const resposta = await api.post('/Usuario', {
            email: email,
            senha: senha
            })

            console.log(resposta.data)
        }
        catch (error) {
           Alert.alert(
            "ops",
            "email ou senha incorreto",
           )
        }
    }

    return (
        <Tela>
            <Title texto={'Criar conta'} flag={true} />
            <Title texto={'Bem vindo ao app'} flag={false} />
            <ContainerCampoTexto>
                <Email>
                    <InputTexto erro={true} placeholder='Digite seu email...' onChangeText={text => setEmail(text)} />
                    {erroEmail ?
                        <TextErrorHint>Email invalido</TextErrorHint>
                        :
                        null
                    }
                </Email>
                <Senha>
                    <InputTexto erro={false} placeholder='Digite sua senha...' onChangeText={text => setSenha(text)} secureTextEntry={!mostrarSenha} />
                    <Olho onPress={() => setMostrarSenha(!mostrarSenha)}>
                        <Ionicons name={mostrarSenha ? "eye-off" : "eye"} size={24} color="black" />
                    </Olho>
                    {erroSenha ?
                        <TextErrorHint>Senha invalida</TextErrorHint>
                        :
                        null
                    }
                </Senha>
                <Senha>
                    <InputTexto erro={false} placeholder='Confirme sua senha...' onChangeText={text => setSenha(text)} secureTextEntry={!mostrarSenha} />
                    <Olho onPress={() => setMostrarSenha(!mostrarSenha)}>
                        <Ionicons name={mostrarSenha ? "eye-off" : "eye"} size={24} color="black" />
                    </Olho>
                    {erroSenha ?
                        <TextErrorHint>Senha invalida</TextErrorHint>
                        :
                        null
                    }
                </Senha>

            </ContainerCampoTexto>

            <Acoes>
                <Button
                    disabled={formularioValido}
                    onPress={() => Logar()}>
                    <ButtonText>Criar minha conta</ButtonText>
            
                </Button>
                
            </Acoes>
        </Tela>
    )
}
const Tela = styled.View`
    flex: 1;
    background-color: #ebde55;
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
    border-radius: 10px;
    justify-content: center;
    background-color: #d44949;
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

