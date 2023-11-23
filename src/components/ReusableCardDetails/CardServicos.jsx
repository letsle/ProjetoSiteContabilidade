// Importa o componente ReusableCard e os estilos definidos nos arquivos "./styles"
import ReusableCard from "./ReusableCard";
import {
  CardRow,
  Title,
  CustomizeContainer,
  StyledParagraph,
  CustomizeImage,
  ButtonCardDetails,
} from "./styles";

import { GiSandsOfTime } from "react-icons/gi";
import {
  FaFileExcel,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// Componente Screen1 que renderiza uma tela com vários cartões de informações de Servidores VPS
const Screen1 = () => {
  // Dados dos cartões a serem exibidos na tela
  const cardData = [
    {
      icon: <GiSandsOfTime />,
      description: "Demora significativa na resolução de questionamentos",
    },
    {
      icon: <FaFileExcel />,
      description:
        "Ocorrência frequente de equívocos nas etapas de encerramento contábil, fiscal e processamento de folha de pagamento",
    },
    {
      icon: <FaRegFileAlt />,
      description:
        "Ausência de recebimento dos relatórios de desempenho da sua empresa",
    },

    {
      icon: <FaRegCalendarAlt />,
      description: "Envio dos impostos na data de vencimento",
    },
    {
      icon: <FaRegQuestionCircle />,
      description: "Escassez de dados para embasar decisões",
    },
    {
      icon: <HiOutlineMail />,
      description:
        "Procedimentos de atendimento excessivamente burocráticos, requerendo o envio de e-mails para tudo",
    },
  ];

  // Divide os dados dos cartões em linhas de até 3 cartões por linha para melhor organização
  const cardRows = [];

  for (let i = 0; i < cardData.length; i += 3) {
    const row = cardData.slice(i, i + 3);
    cardRows.push(row);
  }

  return (
    <>
      <Title>Gestão Fiscal e Tributária</Title>
      <CustomizeContainer>
        <StyledParagraph>
          Oferecemos serviços abrangentes de Gestão Fiscal e Tributária, desde a
          fase pré-CNPJ até o cumprimento das obrigações legais. Nossas
          atividades incluem orientação, planejamento e apuração de tributos,
          acompanhamento fiscal para decisões estratégicas, consultoria jurídica
          tributária, escrituração fiscal completa, cumprimento de obrigações
          acessórias e emissão antecipada de guias tributárias para uma
          eficiente programação financeira da empresa.
        </StyledParagraph>
        <CustomizeImage className="fiscal" />
      </CustomizeContainer>

      <Title>Gestão e Planejamento Societário</Title>
      <CustomizeContainer>
        <StyledParagraph>
          Oferecemos serviços completos para obtenção e regularização de
          negócios junto aos órgãos públicos, proporcionando credibilidade e
          segurança. Nossos principais serviços incluem Constituição de CNPJ,
          Registros Empresariais, Alvarás e Licenças, Alterações Contratuais,
          Análise de Viabilidade, Elaboração de Contratos Societários, Cadastro
          em Conselhos de Classe, Extinções e diversos cadastros
        </StyledParagraph>
        <CustomizeImage className="societario" />
      </CustomizeContainer>

      <Title>Gestão Contábil</Title>
      <CustomizeContainer>
        <StyledParagraph>
          Somos especializados na gestão completa das operações contábeis da sua
          empresa, aplicando as normas e regulamentos vigentes. Nosso foco é
          gerar demonstrativos financeiros por meio de registros contábeis
          essenciais, proporcionando uma gestão empresarial eficiente. Através
          desses procedimentos, calculamos o lucro e os valores disponíveis para
          distribuição aos sócios, fornecendo informações precisas e objetivas
          para embasar decisões estratégicas. Nossos serviços abrangem a
          classificação, conciliação e escrituração dos eventos financeiros e
          econômicos, elaboração periódica de balanços, balancetes e
          demonstrações, entrega de obrigações acessórias, análise da tributação
          mais vantajosa, revisão do balanço anual e emissão de diversos
          relatórios contábeis. Contate-nos para mais detalhes.
        </StyledParagraph>
        <CustomizeImage className="contabil" />
      </CustomizeContainer>

      <Title>Gestão Trabalhista</Title>
      <CustomizeContainer>
        <StyledParagraph>
          Gerenciamos todos os processos relacionados aos colaboradores, desde a
          admissão até a rescisão, abrangendo a elaboração da folha de
          pagamento, encargos, férias, afastamentos e questões previdenciárias.
          Oferecemos serviços que incluem apuração da folha e encargos, emissão
          de guias, acompanhamento de convenções coletivas, cálculo de verbas
          rescisórias, homologação de rescisões, consultoria trabalhista,
          disponibilização de relatórios e cumprimento de obrigações acessórias.
          Conte conosco para garantir eficiência e conformidade na gestão de
          recursos humanos de sua empresa.
        </StyledParagraph>
        <CustomizeImage className="trabalhista" />
      </CustomizeContainer>

      {/* Título da tela */}
      <Title>Sua empresa enfrenta algum desses desafios?</Title>
      <div>
        {/* Mapeia as linhas de cartões e renderiza cada linha */}
        {cardRows.map((cardRow, index) => (
          <CardRow key={index}>
            {/* Mapeia os cartões em cada linha e renderiza cada cartão usando o componente ReusableCard */}
            {cardRow.map((card, cardIndex) => (
              <ReusableCard
                key={cardIndex}
                icon={card.icon}
                value={card.value}
                description={card.description}
                buttonText={card.buttonText}
              />
            ))}
          </CardRow>
        ))}
        <ButtonCardDetails>Falar com um especialista</ButtonCardDetails>
      </div>
    </>
  );
};

export default Screen1; // Exporta o componente Screen1
