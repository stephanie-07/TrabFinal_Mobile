import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  TrocaSenha: undefined;
  CadCliente: undefined;
  AlterarCliente: { id: string};
};
//Home
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


//Login
type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;


//Cadastro
type CadProps = NativeStackScreenProps<RootStackParamList, 'Register'>;


//Trocar de senha
type SenhaProps = NativeStackScreenProps<RootStackParamList, 'TrocaSenha'>;


//Cliente
type CadClienteProps = NativeStackScreenProps<RootStackParamList, 'CadCliente'>;


type AlterarClienteProps = NativeStackScreenProps<RootStackParamList, 'AlterarCliente'>;

export type { HomeProps, RootStackParamList, LoginProps, CadProps, CadClienteProps, AlterarClienteProps };