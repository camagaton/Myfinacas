import React,{useState, useContext} from 'react';
import { Platform} from 'react-native';

import { AuthContext } from '../../contexts/auth';

import {Background,Container,Logo,AreaInput,Input,SubmitButton, SubmitText} from '../SignIn/styles';

export default function SignIn () {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  const {signUp} = useContext(AuthContext);

  function handleSignUp(){
    signUp(email,senha,nome);
  }
 return (
  <Background>
    <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled >
      <AreaInput>
        <Input 
          placeholder='Nome'
          autoCorrect={false}
          autoCapitalize='none'
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
      </AreaInput>
      <AreaInput>
        <Input 
          placeholder='Email'
          autoCorrect={false}
          autoCapitalize='none'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </AreaInput>
      <AreaInput>
        <Input 
          placeholder='*****'
          autoCorrect={false}
          autoCapitalize='none'
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
      </AreaInput>

      <SubmitButton onPress={handleSignUp}>
        <SubmitText>Cadastrar</SubmitText>
      </SubmitButton>
     
    </Container>
  </Background>
 );
}