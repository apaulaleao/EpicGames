import './Navbar.css';
import logo from './epic2.jpg';


export default function Navbar(){
    return (

    <div className='Navbar'>
        <a className ='navbar__logo' href = '/'>
            <img className ='navbar__image' src={logo} alt='Epic Games'></img>
        </a>
        <div className='navbar__links'>
        <ul className='navbar__links__list'>
        <li>
        <a className ='items' href=  'https://www.epicgames.com/store/pt-BR/'>  
        <span className = 'text'> Store</span>
        </a>
        </li>

        <li>
            <a className='items' href='/'>
    
            <span className='text'>Novidades</span>
            </a>
        </li>
        <li>
            <a className='items' href='/'>
    
            <span className='text'>Perguntas Frequentes</span>
            </a>
        </li>
        <li>
            <a className='items' href='/'>
    
            <span className='text'>Ajuda</span>
            </a>
        </li>
        <li>
            <a className='items' href='/'>
    
            <span className='text'>Unreal Engine</span>
            </a>
        </li>


        </ul>
        </div>
    </div>
)
}