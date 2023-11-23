// Importações dos módulos e componentes necessários
import { Link, useLocation } from "react-router-dom"; // React Router para navegação
import Logo from "../../assets/4logo.png"; // Importa o logotipo da empresa
import {
  Container,
  MainMenu,
  Menu,
  Li,
  ContainerModal,
  CustomModal,
} from "./styles"; // Importa componentes e estilos do arquivo "./styles"
import { useState } from "react"; // Importa o hook useState do React
import { HiHome } from "react-icons/hi2"; // Ícone de home
import Modal from "react-modal"; // Componente de modal
import "../../main"; // Importa o arquivo de estilos "main.css"

//icones olho aberto e fechado para mostrar e ocultar senha
import { HiEye, HiEyeOff } from "react-icons/hi";

// Define que o modal está associado ao elemento com o id "root"
Modal.setAppElement("#root");

function Header() {
  // Estados para controlar o comportamento do cabeçalho e do modal
  const [changeBackground, setChangeBackground] = useState(false);
  const [transparentButtons, setTransparentButtons] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("login"); // Estado para controlar o tipo de modal
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // Estado para o email
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para a confirmação de senha
  const { pathname } = useLocation();
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Função para abrir o modal com base no tipo (login ou criação de conta)
  function toggleModal(type) {
    setIsOpen(true);
    setModalType(type);
  }

  // Função para fechar o modal
  function closeModal() {
    setIsOpen(false);
    setUsername("");
    setPassword("");
    setEmail("");
    setConfirmPassword("");
    setValidEmail(true);
    setName("");
    setPhone("");
  }

  // Função para lidar com o envio dos campos de usuário e senha (autenticação)
  function handleLogin() {
    console.log("Username:", username);
    console.log("Password:", password);
    // Lógica de autenticação...
  }

  // Função para lidar com o envio dos campos de criação de conta
  function handleCreateAccount() {
    if (!email) {
      setValidEmail(false); // Email está em branco
      return;
    }

    // Verificação de formato de email usando uma expressão regular
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setValidEmail(false); // Email não tem um formato válido
      return;
    }

    if (password === confirmPassword) {
      setValidEmail(true);
      setPasswordsMatch(true);

      // Certifique-se de que os campos de nome e telefone não estão vazios

      if (!name || !phone) {
        // Exibir mensagem de erro se algum dos campos (nome ou telefone) estiver vazio
        setErrorMessage("Os campos de nome e telefone são obrigatórios.");
        return;
      }

      // Se ambos os campos (nome e telefone) estiverem preenchidos, limpe a mensagem de erro
      setErrorMessage("");

      // Se todos os campos estiverem preenchidos corretamente, prepare os dados para envio
      const data = {
        email: email,
        password: password,
        name: name,
        phone: phone,
      };

      // Enviar a requisição POST para o backend
      fetch("/api/criar-conta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Resposta do servidor:", result);
          // Lógica para tratar a resposta do servidor, por exemplo, exibir uma mensagem de sucesso
        })
        .catch((error) => {
          console.error("Erro ao enviar requisição:", error);
          // Lógica para tratar erros
        });
    } else {
      setPasswordsMatch(false);
    }
  }

  // Função para lidar com a mudança de senha
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Evento de rolagem da janela
  window.onscroll = () => {
    if (!changeBackground && window.scrollY > 150) {
      setChangeBackground(true); // Ative a transparência do Header
    }
    if (changeBackground && window.scrollY <= 150) setChangeBackground(false); // Desative a transparência do Header

    if (!transparentButtons && window.scrollY > 150) {
      setTransparentButtons(true); // Desative a transparência dos botões
    }
    if (transparentButtons && window.scrollY <= 150) {
      setTransparentButtons(false); // Desative a transparência dos botões
    }
  };

  return (
    <>
      {/* Container do cabeçalho */}
      <Container changeBackground={changeBackground}>
        <img src={Logo} alt="Logo da empresa" />
        {/* Menu principal */}
        <MainMenu>
          {/* Links do menu principal com base na localização atual */}
          <Li isActive={pathname.includes("/home")}>
            <Link to="/home">Home</Link>
          </Li>
          <Li isActive={pathname.includes("/servicos")}>
            <Link to="/servicos">Nossos Serviços</Link>
          </Li>
          <Li isActive={pathname.includes("/contato")}>
            <Link to="/contato">Contato</Link>
          </Li>
          <Li isActive={pathname.includes("/quemsomos")}>
            <Link to="/quemsomos">Quem Somos</Link>
          </Li>
        </MainMenu>
        {/* Menu secundário com ícones */}
        <Menu>
          <Li>
            <Link to="/home">
              <HiHome className="iconHome" />
            </Link>
          </Li>
          {/* Botão para abrir o modal de login */}
          <button
            onClick={() => toggleModal("login")}
            className={transparentButtons ? "transparent-button" : ""}
          >
            Login
          </button>
          {/* Botão para abrir o modal de criação de conta */}
          <button
            onClick={() => toggleModal("create")}
            className={transparentButtons ? "transparent-button" : ""}
          >
            Criar Conta
          </button>
        </Menu>
      </Container>

      {/* Modal de login ou criação de conta */}
      {modalIsOpen && (
        <ContainerModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <CustomModal>
            {/* Título do modal com base no tipo (login ou criação de conta) */}
            <h1>
              {modalType === "login"
                ? "Preencha seu usuário e senha:"
                : "Crie sua conta:"}
            </h1>

            {/* Mensagem de erro se o email não for válido */}
            {modalType === "create" && !validEmail && (
              <p className="error-message">
                Por favor, insira um email válido.
              </p>
            )}

            {/* Mensagem de erro se as senhas não coincidirem */}
            {modalType === "create" && !passwordsMatch && (
              <p className="error-message">
                As senhas não coincidem,
                <br />
                Por favor digite novamente.
              </p>
            )}

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {/* Campos de entrada de dados */}
            <div className="input-container">
              {modalType === "login" ? (
                <>
                  {/* Campos de login */}
                  <input
                    type="email"
                    placeholder="Email do Usuário (exemplo@email.com)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    type="password"
                    placeholder="Digite sua Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button onClick={handleLogin}>Enviar</button>
                  <p className="paragraph">
                    <span className="text-password">
                      <a className="link-password">Esqueceu a senha?</a>
                    </span>
                    <br />
                    <br /> Ainda não é cliente?
                    <span className="host-plan">
                      <a className="link-hosting">
                        Escolha um plano de hospedagem
                      </a>
                    </span>
                    e comece agora!
                  </p>
                </>
              ) : (
                <>
                  {/* Campos de criação de conta */}
                  <input
                    type="text"
                    placeholder="Nome Social"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Telefone: (XX)9XXXX-XXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <input
                    type="email"
                    placeholder="Digite aqui um endereço de Email válido (exemplo@email.com)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {/* Campo de senha */}
                  <input
                    type={showPassword ? "text" : "password"}
                    className="password-input"
                    placeholder="Digite aqui uma senha"
                    value={password}
                    onChange={handlePasswordChange}
                  />

                  {/* Ícone para mostrar/ocultar senha */}
                  <span
                    className="toggle-password"
                    onClick={togglePasswordVisibility}
                  >
                    Mostrar/Ocultar
                    <br /> Senha
                    <br />
                    {showPassword ? <HiEyeOff /> : <HiEye />}
                  </span>

                  {/* Segurança da senha */}
                  <div className="secure-password">
                    {password.length > 0 && password.length < 8 && (
                      <p>A senha deve ter pelo menos 8 caracteres.</p>
                    )}
                    {password.length >= 8 && !/[A-Z]/.test(password) && (
                      <p>A senha deve conter pelo menos uma letra maiúscula.</p>
                    )}
                    {password.length >= 8 && !/[a-z]/.test(password) && (
                      <p>A senha deve conter pelo menos uma letra minúscula.</p>
                    )}
                    {password.length >= 8 && !/\d/.test(password) && (
                      <p>A senha deve conter pelo menos um número.</p>
                    )}
                    {password.length >= 8 && !/[!@#$%^&*]/.test(password) && (
                      <p>
                        A senha deve conter pelo menos um caractere especial.
                      </p>
                    )}
                  </div>

                  {/* Campo de confirmação de senha */}
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirmar senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  {/* Botão para criar conta */}
                  <button onClick={handleCreateAccount}>Criar Conta</button>
                </>
              )}

              {/* Botão para fechar o modal */}
              <button className="button-close" onClick={closeModal}>
                Fechar
              </button>
            </div>
          </CustomModal>
        </ContainerModal>
      )}
    </>
  );
}

export default Header;
