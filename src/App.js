import React, { useState, useEffect } from 'react';
import './App.css';
import db from './db';
import FilmesItem from './FilmesItem';

const App = () => {

  const[listarFilmes,setListarFilmes] = useState([]);

  useEffect( () => {
    const loadAll = async () => {
      let list = await db.getHomeList();
      setListarFilmes(list);
      console.log(list)
    }
    loadAll();
  },[])

  return(
    <>
      {
        listarFilmes.map( (item, key) => (
            <FilmesItem key={key} title={item.title} items={item.items} />
          )
        )
      }
    </>
  )
}

export default App;