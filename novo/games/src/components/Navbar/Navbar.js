import './Navbar.css';
import logo from './epic2.jpg';
import { FaRegUser, FaUserPlus } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';


export default function Navbar(){
    return (

    <div className='Navbar'>
        <div className ='navbar__rigth'></div>
        <a className ='navbar__logo' href = '/'>
            <img className ='navbar__image' src={logo} alt='Epic Games'></img>
        </a>
        <div className='navbar__links'>
            <ul className='navbar__links__list'>
            <li>
            <a className ='items' href=  '/store'>  
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
            <a className='items' href='https://www.epicgames.com/help/pt-BR/'>
            <span className='text'>Ajuda</span>
            </a>
            </li>

            <li>
            <a className='items' href='https://www.unrealengine.com/en-US/'>
            <span className='text'>Unreal Engine</span>
            </a>
            </li>

            </ul>
    </div>

    <div className='navbar__left'>
        <div className='navbar__links'>
          <ul className='navbar__links__list'>
          <li>
              <a className='items' href='/register'>
                <FaUserPlus />
                <span className='text'>CRIAR</span>
              </a>
            </li>
            <li>
              <a className='items' href='/login'>
                <FiLogIn />
                <span className='text'>LOGIN</span>
              </a>
            </li>
            <li>
              <a className='items' href='/profile'>
                <FaRegUser />
                <span className='text'>PERFIL</span>
              </a>
            </li>
          </ul>
          </div>
        </div>
        </div>
        
    
    

    
 )
}