
function App() {
  return (
    <div className="App">
      <i class="bi bi-list menu-mobile"></i>

<aside id="header" >
    <section class="profile">
        <img src="../static/img/perfil.PNG" alt="Foto do Carlos"/>
        <h1>Carlos Pinheiro</h1>
        <div class="social-links mt-4 text-center">
            <a target="_blank" href=" https://www.linkedin.com/in/carlospinheiro2021
            ">
            <i class="bi bi-linkedin"></i>
        </a>
            <a target="_blank" href="https://github.com/Mr1984-Pinheiro">
                <i class="bi bi-github"></i>
            </a>                  
        </div>

        <nav id="navbar" class="nav-menu">
            <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-house"></i>Início</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#sobre"><i class="bi bi-person"></i>Sobre</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#habilidades"><i class="bi bi-list-check"></i>Habilidades</a>
                </li>                    
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#curriculo"><i class="bi bi-file-earmark"></i>Currículo</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#portifolio"><i class="bi bi-collection" aria-hidden="true"></i> Portifólio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contato"><i class="bi bi-envelope" aria-hidden="true"></i>Contato</a>
                </li>                    
              </ul>
        </nav>
    </section>
</aside>
    </div>
  );
}

export default App;
