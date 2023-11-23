// Importa o componente "MainButton" do arquivo "./styles"
import { MainButton } from "./styles";

// Desabilita temporariamente a regra do eslint para o próximo elemento
// referente à validação de propriedades (props) do React
// eslint-disable-next-line react/prop-types
function BlueButton({ children }) {
  // Este é um componente funcional chamado "RedButton"
  // que aceita um único parâmetro "children" (geralmente usado para incluir conteúdo dentro do botão).

  // Renderiza o componente "MainButton" importado do arquivo "./styles",
  // e passa o conteúdo (children) fornecido como filho deste botão.
  return <MainButton>{children}</MainButton>;
}

// Exporta o componente "RedButton" como o componente padrão deste arquivo,
// tornando-o disponível para uso em outros lugares do código.
export default BlueButton;
