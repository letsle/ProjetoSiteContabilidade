// Importações dos componentes e estilos necessários
import {
  TitleIncludedPlans, // Componente para o título da seção
  IncludedList, // Componente para a lista de itens incluídos
  IncludedListItem, // Componente para cada item da lista
  IconWrapper, // Componente para envolver o ícone
  Text, // Componente para o texto descritivo
  IncludedPlans,
  Container, // Componente para envolver a lista de itens
} from "./styles";

import { FcOk } from "react-icons/fc"; // Ícone de marca de seleção da biblioteca react-icons/fc

// Função do componente CardIncludedPlans
function CardIncludedPlans() {
  return (
    <Container>
      {/* Título da seção */}
      <TitleIncludedPlans>
        Conheça alguns dos nossos benefícios
      </TitleIncludedPlans>

      {/* Envolve a lista de itens incluídos */}
      <IncludedPlans>
        {/* Lista de itens incluídos */}
        <IncludedList>
          {/* Item 1: Gerencie até 100 sites */}
          <IncludedListItem>
            {/* Envolve o ícone */}
            <IconWrapper>
              <FcOk /> {/* Ícone de marca de seleção */}
            </IconWrapper>
            {/* Texto descritivo do item */}
            <Text>Relatórios Gerenciais</Text>
          </IncludedListItem>

          {/* Item 2: Gerencie até 100 sites (repetido) */}
          <IncludedListItem>
            <IconWrapper>
              <FcOk />
            </IconWrapper>
            <Text>Análise de Resultados e Indicadores</Text>
          </IncludedListItem>

          {/* Item 3: Publique seus sites com Criador de Sites */}
          <IncludedListItem>
            <IconWrapper>
              <FcOk />
            </IconWrapper>
            <Text>Planejamento Contábil e Fiscal</Text>
          </IncludedListItem>

          {/* Itens 4, 5 e 6: Repetição dos itens anteriores */}
          <IncludedListItem>
            <IconWrapper>
              <FcOk />
            </IconWrapper>
            <Text>Atendimento Personalizado e Rápido</Text>
          </IncludedListItem>
          <IncludedListItem>
            <IconWrapper>
              <FcOk />
            </IconWrapper>
            <Text>Atendimento Descomplicado</Text>
          </IncludedListItem>
          <IncludedListItem>
            <IconWrapper>
              <FcOk />
            </IconWrapper>
            <Text>Atendimento a empresas de todos os portes</Text>
          </IncludedListItem>
        </IncludedList>
      </IncludedPlans>
    </Container>
  );
}

export default CardIncludedPlans; // Exporta o componente CardIncludedPlans
