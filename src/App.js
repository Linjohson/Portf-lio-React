
import './style.css';

function App() {
  return (
    <html lang="en">
    <head>
      
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https: //fonts.googleapis.com/css2? family= Roboto:wght@100;400 & display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="style.css"></link>
        <meta charset="UTF-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        
        

        <title>Meu Portfólio</title>
    </head>
    <body class="container-fluid">
    <header id="header">
        {/* <img src="  " alt=""> */}
        {/* <a href="" style="text-decoration: none"><h4>Meu Portfólio</h4></a> */}
        
        <nav className="navbar">
            <ul >
                <lu><a href="#sobre"> <strong>Sobre</strong>  </a></lu>
                <li><a href="#projetos"> <strong>Projetos</strong>  </a></li>
                <li><a href="#contato"> <strong>Contato</strong>  </a></li>
            </ul>
        </nav>
    </header>

    

    <main>
        <div className="sobre-container" id="sobre">
            <div className="img-container">
               <img src="" alt=""></img>
            </div>
            
        

            <div className="sobre">
                <div className="sobre-texto">
                  <label >
                    Olá!! 🖐😃 <br></br><br></br>

                    Sou o Linjohson, tenho 24 anos e estou no mundo da programação há 2 anos. <br></br><br></br>

                    Durante esses quase dois anos de programador, tenho aprendido a dominar linguagens de programação e frameworks como: React - Javascript e Java, Jquery, Spring Boot e Thymeleaf, e ferramentas de versionamento como Git, usando as plataformas de hospedagem Github e Gitlab.


                    
                  </label>
                  {/* <input type="text" className="form-control" id="exampleFormControlInput1" ></input> */}
                </div>

                <div className="sobre-buttons">
                    <a href="#contato" className="button-saiba">
                        Saiba mais
                    </a>

                    <a href="https://drive.google.com/file/d/13-FBmaI4EIlZQBuogPwyrVsfhcgPqJYQ/view?usp=share_link"  className="button-download">
                        Download CV
                    </a>
                    
                </div>
            </div>
        </div>
        
        

        <section className="projetos-container1" id="projetos">
            <h1 >Projetos</h1>

            <div className="projetos-img-container">
                
                    <a href="https://buscadordeceplinjohson.netlify.app/">
                        {/* <img src="" alt=""></img> */}
                        <div className="projetos-img-cep"></div>
                    </a>

                    <a href="">
                        {/* <img src="" alt=""></img> */}
                        <div className="projetos-img"></div>
                    </a>

                    <a href="">
                        {/* <img src="" alt=""></img> */}
                        <div className="projetos-img"></div>
                    </a>
                
             {/* </div>
                <div class="projetos-img-container">
                    <div class="projetos-img">
                        <a href="">
                            <img src="" alt="">
                        </a>
                        
                    </div>
                    <div class="projetos-img">
                        <a href="">
                            <img src="" alt="">
                        </a>
                        
                    </div>
                    <div class="projetos-img">
                        <a href="">
                            <img src="" alt="">
                        </a>
                        
                    </div> */}
                    
                </div>

            
        </section>

        <section className="contato-container" id="contato">
            {/* <div className="form-container">
                

                <div className="form-group">
                  <label for="email">Seu email:</label>
                  <input type="email" className="form-control" id="email" placeholder="nome@gmail.com"></input>
                </div>
                
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Escreva sua mensagem:</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Olá, Linjohson..."></textarea>
                </div>

                <div className="form-group-button">
                    <input type="submit" value="Enviar"></input>
                </div>
            </div> */}

            <h1 className='contatos-texto'>Contatos</h1>

            <div className="redeSocial-container">
                
                    <h1> <strong>REDES SOCIAIS</strong> </h1>
                      
                <div className="iconsContainer">  

                    <a href="https://github.com/Linjohson" id="github">
                        <div className="iconItem"></div>
                    </a>

                    <a href="https://www.linkedin.com/in/linjohson-guimar%C3%A3es-a1904a140/" id="linkedin">
                         <div className="iconItem"></div>
                    </a>
                   
                    <a href="https://wa.me/5585987051012" id="whatsapp">
                        <div className="iconItem"></div>
                    </a>

                </div>   
                    
                <a href="#header">
                    <div className="voltarAoTopo"></div>
                     
                </a>

            </div>
        </section>

        
    </main>

    <footer className="footerContainer">
        ©2022 - Portfólio Pessoal | All right reserved

        
    </footer>
    
    
  </body>
  </html>
  );
}

export default App;
