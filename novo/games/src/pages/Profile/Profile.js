import './Profile.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Profile(props) {

  const [user, setUser] = useState({});
  const [mounted, setMounted] = useState(false);
  const [notLogged, setNotLogged] = useState(true);

  useEffect(() => {
    setMounted(true)

    if(localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }

      axios.get('/auth/me', config)
      .then(response => {
        setNotLogged(false)
        setUser(response.data)
      })
    }

  }, [mounted])




  return (
    <div className='profile'>
      <div className='profile-img'>
        <img src='https://static.wikia.nocookie.net/disney/images/9/93/Profile-_Jessica_Rabbit.png/revision/latest?cb=20200518184544' alt='Ana Paula' />
      </div>
      {
        !notLogged ? (
          <>
            <h2>{user.name}</h2>
            <span>Email: {user.email}</span>
            <span>Membro desde: {user.createdAt}</span>
          </>
        ) : (
          <h2>Sem dados do perfil, faça login</h2>
        )
      }

    </div>
  )
}