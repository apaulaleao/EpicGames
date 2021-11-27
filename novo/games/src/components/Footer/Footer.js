import './Footer.css';
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import { SiUnrealengine, SiEpicgames } from 'react-icons/si'


export default function Footer() {
  return (
    <div className='footer'>

      <div className='footer__div1'>
        <div className='social'>
          <a href='https://www.facebook.com/epicgames'><FaFacebookSquare /></a>
          <a href='https://twitter.com/epicgames'><FaTwitterSquare /></a>
          <a href='https://www.youtube.com/epicgamesinc'><FaYoutubeSquare /></a>
        </div>
      </div>

      <div className='footer__div2'>
        <div className='info'>
          <div className='info__means'>
              <div className='meansTitle'>
                <span>Recursos</span>
              </div>
              
              <div className='means'>
                <div className='column'>
                <a href='https://www.epicgames.com/site/pt-BR/creator'>Apoie um Criador</a>
                <a href='https://www.epicgames.com/site/pt-BR/public'>Publicar na Epic Games</a>
                <a href='https://www.epicgames.com/site/pt-BR/carrers'>Carreiras</a>
                </div>
                <div className='column'>
                <a href='https://www.epicgames.com/site/pt-BR/empresa'>Empresa</a>
                <a href='https://www.epicgames.com/site/pt-BR/fanart'>Politica de Fanart</a>
                <a href='https://www.epicgames.com/site/pt-BR/creator'>UX Research</a>
                </div>
                <div className='column'>
                <a href='https://www.epicgames.com/site/pt-BR/eula'>EULA da Loja</a>
                <a href='https://www.epicgames.com/site/pt-BR/online'>Serviços On-line</a>
                <a href='https://www.epicgames.com/site/pt-BR/comunidade'>Regras da Comunidade</a>
                </div>
            </div>
          </div>

          <div className='info__made__in'>
              <div className='made__inTitle'>
                <span>Feito pela Epic Games</span>
              </div>
              <div className='means'>
                
                <div className='column'>
                  <a href='https://www.epicgames.com/site/pt-BR/battle'>Battle Breakers</a>
                  <a href='https://www.epicgames.com/site/pt-BR/fortnite'>Fortnite</a>
                  <a href='https://www.epicgames.com/site/pt-BR/infinityblade'>Infinity Blade</a>
                  </div>
                  <div className='column'>
                  <a href='https://www.epicgames.com/site/pt-BR/call'>Robo Recall</a>
                  <a href='https://www.epicgames.com/site/pt-BR/shadow'>Shadow Complex</a>
                  </div>
                  <div className='column'>
                  <a href='https://www.epicgames.com/site/pt-BR/spy'>Spyjinx</a>
                  <a href='https://www.epicgames.com/site/pt-BR/ureal'>Unreal Tournament</a>
                  </div>
                </div>
              
        </div>
        </div>
      </div>

      <div className='footer__div3'>
        <div className='direitos'>
          <span>© 2021, Epic Games, Inc. Todos os direitos reservados. Epic, Epic Games, o logotipo da Epic Games,
             Fortnite, o logotipo do Fortnite, Unreal, Unreal Engine, o logotipo do Unreal Engine, Unreal Tournament
              e o logotipo do Unreal Tournament são marcas comerciais ou registradas da Epic Games, Inc. nos Estados Unidos da América
               e em outros lugares. Outras marcas e nomes de produtos são marcas registradas de seus respectivos donos.
                Transações para além dos EUA são feitas através da Epic Games International, S.à r.l. </span>
          <span>Nintendo of America Inc. | A sede está localizada em Redmond, Washington (EUA) | Assistência.</span>
        </div>
      </div>

      <div className='footer__div4'>
        <div className='poli_left'>
          <a href='https://www.epicgames.com/site/pt-BR/tos'>Termos de Serviço</a>
          <a href='https://www.epicgames.com/site/pt-BR/privacypolicy'>Política de Privacidade</a>
          <a href='https://www.epicgames.com/site/pt-BR/store-refund-policy'>Política de Reembolso da Loja</a>
        </div>
        <div className='poli_rigth'>
          <a href='https://twitter.com/NintendoAmerica'><SiEpicgames /></a>
          <a href='https://www.youtube.com/nintendo'><SiUnrealengine /></a>
        </div>
      </div>

    </div>
  )
}