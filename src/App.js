import React, { useState, useEffect } from 'react';
import './App.css';
import db from './db';
import FilmesItem from './FilmesItem';
import FeaturedMovie from './FeaturedMovie';

const App = () => {

  const[listarFilmes,setListarFilmes] = useState([]);
  const[featuredData,setFeaturedData] = useState([]);

  useEffect( () => {
    const loadAll = async () => {
      let list = await db.getHomeList();
      setListarFilmes(list);

      //pegar filme em destaque
      //para pagar um item especifico usamos o filter do javascript

      let originals = list.filter( function(item) {
        return item.slug === "originals";
      });

      let random = Math.floor( Math.random() * (originals[0].items.results.length - 1) );
      let chosen = originals[0].items.results[random];
      let chosenInfo = await db.getMovieInfo(chosen.id, 'tv');
      console.log(chosenInfo);

      setFeaturedData(chosenInfo)

    }
    loadAll();
  },[])

  return(
    <div className="App">
      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }
      <div className="lists">
        {
          listarFilmes.map( (item, key) => (
              <FilmesItem key={key} title={item.title} items={item.items} />
            )
          )
        }
      </div>
      
    </div>
  )
}

export default App;