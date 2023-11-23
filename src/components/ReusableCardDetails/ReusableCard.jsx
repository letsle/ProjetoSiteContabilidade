// Importa os estilos definidos nos arquivos "./styles"
import { Card, CardTitle, Value, Description, CardIcon } from "./styles";

// Componente funcional ReusableCard que aceita as seguintes propriedades:
// - title: O título a ser exibido no cartão.
// - value: O valor a ser exibido no cartão.
// - description: A descrição a ser exibida no cartão.
// - buttonText: O texto do botão (opcional) a ser exibido no cartão.
// eslint-disable-next-line react/prop-types
const ReusableCard = ({ icon, title, value, description }) => {
  return (
    <Card>
      {icon && <CardIcon>{icon}</CardIcon>}
      {/* Título do cartão */}
      <CardTitle>{title}</CardTitle>
      {/* Valor do cartão */}
      <Value>{value}</Value>
      {/* Descrição do cartão */}
      <Description>{description}</Description>
    </Card>
  );
};

// Exporta o componente ReusableCard para ser utilizado em outros lugares do aplicativo
export default ReusableCard;
