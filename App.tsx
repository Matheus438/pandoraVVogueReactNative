import React from "react";
import { Text, View } from 'react-native';
import LoginScreenClientes from './src/login/LoginScreenClientes';
import LodinScreenProfissionais from './src/login/LoginScreenProfissionais';
import LodinScreenAdmin from './src/login/LoginScreenAdmin';
import CadastrAdminsoScreem from "./src/cadastros/CadastroScreenAdmin";
import CadastroClientesScreem from "./src/cadastros/CadstroScreenCliente";
import CadastroProfissionaisScreem from "./src/cadastros/CadastroScreenProfissional";
import CadastoPagamentoScreem from "./src/cadastros/CadastroFormaPagamento";
import CadastroServicoScreem from "./src/cadastros/CadastroScreenServico";


function App(): JSX.Element {
  return(
    //<LoginScreenClientes/>
    //<LodinScreenProfissionais/>
    //<LodinScreenAdmin/>
    //<CadastrAdminsoScreem/>
    //<CadastroClientesScreem/>
    //<CadastroProfissionaisScreem/>
    //<CadastoPagamentoScreem/>
    <CadastroServicoScreem/>
  );
}
export default App;