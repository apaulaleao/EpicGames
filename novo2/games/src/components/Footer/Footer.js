import './Footer.css';
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';


export default function Footer (){
    return(
<div className ='footer'>
    <div className ='social'>
    <a href= 'https://www.facebook.com/epicgames'><FaFacebookSquare /></a>
    <a href= 'https://twitter.com/epicgames'><FaTwitterSquare /></a>
    <a href= 'https://www.youtube.com/epicgames'><FaYoutubeSquare /></a>  
    </div>

    <span className = 'text2'> © 2021, Epic Games, Inc. Todos os direitos reservados. Epic, Epic Games, o logotipo da Epic Games, Fortnite, o logotipo do Fortnite, Unreal, Unreal Engine, o logotipo do Unreal Engine, Unreal Tournament e o logotipo do Unreal Tournament são marcas comerciais ou registradas da Epic Games, Inc. nos Estados Unidos da América e em outros lugares. Outras marcas e nomes de produtos são marcas registradas de seus respectivos donos. Transações para além dos EUA são feitas através da Epic Games International, S.à r.l.   </span>
    <span className = 'text2'> Termos de ServiçoPolítica de PrivacidadePolítica de Reembolso da Loja. </span>
    </div> 
    )
}