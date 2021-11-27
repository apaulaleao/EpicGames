import Slider from '../../components/Slider/Slider';
import Search from '../../components/Search/Search';
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';
import './Home.css';
import axios from 'axios';
import {useEffect,useState} from 'react';


export default function Home (){

    const [games, setGames] = useState([]);
    const [mounted, setMounted] = useState(false);
  
    const getData = async () => {
      await axios.get('/game/findMany')
      .then(response => {
        if(mounted) {
          setGames(response.data)
        }
      })
    }
  
    useEffect(() => {
      setMounted(true)
      getData()
    }, [mounted])


  return (
      <div className ='home'>
        <div className ='banner'> 
          
        <img src=' https://cdn.wallpapersafari.com/84/45/3JTpIO.jpg'></img>
         </div>

         {/* <Slider
          id='29d54874-490a-4c22-88d4-8b1c52b671e0'
          image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
          classificationNumber='L'
          classificationText='Livre para qualquer idade'
          />
           */}
          <Search/>
          <div className ='titulo'><h2>Destaque Melhores Jogos!</h2></div>
          <div className ='cards__destaque'>
            
              
         {/* <Container>
            {
                games.map(game => (
                <Card 
                    id={game.id}
                   // image={game.image}
                    title={game.name}
                    preco={game.price}
                    //key={game.id}
                    />
                ))
            }
          </Container> */}

<Card 

id='108014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/>

<Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/><Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/><Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/><Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/><Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/><Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/><Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/><Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/><Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/><Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/><Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/><Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/><Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/><Card 

id='08014b08-6cbc-4c49-b5b9-1886fd44c2ac'
image='https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Play%20Nintendo/Mario%20Party%20Superstars/posters/Switch_MPS_LaunchTRL_5994_AvailableNow_YouTube_H264_UPDATED'
title='Mario Party™ Superstars'
preco= '299'

/>


</div>
</div>
)
}