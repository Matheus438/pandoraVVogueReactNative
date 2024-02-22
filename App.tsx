import React from "react";
import { Text, View } from 'react-native';
import LoginScreenClientes from './src/login/LoginScreenClientes';
import LodinScreenProfissionais from './src/login/LoginScreenProfissionais';
import LodinScreenAdmin from './src/login/LoginScreenAdmin';


function App(): JSX.Element {
  return(
    //<LoginScreenClientes/>
    //<LodinScreenProfissionais/>
    <LodinScreenAdmin/>
  );
}
export default App;