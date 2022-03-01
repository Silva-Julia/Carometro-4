import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/LogoNota.png'
import '../../assets/css/style.css';
import setinha from '../../assets/img/setinha.png';


export default function Home() {

  const [ listaSalas, setListaSalas ] = useState( [] )
  const [isLoading, setIsLoading] = useState(false)

  function salasDisponiveis(){
    axios.get('', {
        headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
        }
    } )

    .then(resposta => {
        if(resposta.status === 200){

            setListaSalas(resposta.data)
            console.log(listaSalas)
        }
    })
    .catch(erro => console.log(erro))
}

useEffect(salasDisponiveis, [])


  return (
    <div>
      <header>
        <div className="container container_header">
        <Link to="/" className="header_logo"><img className="logo" src={logo} alt="logo"/></Link>
          <nav className="nav_header">
            <Link to="/Login" className="redirecionamento_header zoom">login</Link>
          </nav>
        </div>
      </header>
      <main>
        {
          listaSalas.map((event) => {
            console.log(event)
              return(
                <div className='box_sala container'>
                  <div className='box_titulo'>
                    <span>Sala: 1</span>
                  </div>
                  <img src={setinha} />
                </div>
              )
          })
        }
      </main>
    </div>
  );
};
