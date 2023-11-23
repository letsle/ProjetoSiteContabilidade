// Importações dos componentes e ícones necessários
import { SectionWrapper, IconBox, Text, Icon } from "./styles";
import { FaUser } from "react-icons/fa";

import { MdOutlineAssessment } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { TbFileAnalytics } from "react-icons/tb";

import { FaHandHoldingUsd } from "react-icons/fa";

// Componente IconsSection que renderiza uma seção de ícones com texto
const IconsSection = () => {
  return (
    <SectionWrapper>
      {/* Primeiro ícone: Conexão de dados na nuvem (personalizado) */}
      <IconBox>
        <Icon>
          <MdOutlineAssessment className="icon" /> {/* Ícone personalizado */}
          <Text>Assessoria Contábil</Text> {/* Texto descritivo */}
        </Icon>
      </IconBox>

      {/* Segundo ícone: Engrenagens */}
      <IconBox>
        <Icon>
          <FaBalanceScaleLeft className="icon" /> {/* Ícone de engrenagens */}
          <Text>Assessoria Fiscal/Tributária</Text> {/* Texto descritivo */}
        </Icon>
      </IconBox>

      {/* Terceiro ícone: Conexão de rede */}
      <IconBox>
        <Icon>
          <FaUser className="icon" /> {/* Ícone de conexão de rede */}
          <Text>Assessoria de Departamento Pessoal</Text>{" "}
          {/* Texto descritivo */}
        </Icon>
      </IconBox>

      <IconBox>
        <Icon>
          <TbFileAnalytics className="icon" /> {/* Ícone de conexão de rede */}
          <Text>Auditoria</Text> {/* Texto descritivo */}
        </Icon>
      </IconBox>

      <IconBox>
        <Icon>
          <FaHandHoldingUsd className="icon" /> {/* Ícone de conexão de rede */}
          <Text>Consultoria Financeira</Text> {/* Texto descritivo */}
        </Icon>
      </IconBox>
    </SectionWrapper>
  );
};

export default IconsSection; // Exporta o componente IconsSection
