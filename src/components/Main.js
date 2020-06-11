import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PokeCard from "./PokeCard";

import api from '../services/api';

const styles = makeStyles({
  root: {
    display: 'flex',
    maxWidth: '980px',
    margin: '0 auto',
    padding: '50px 0',
    textAlign: 'center',
  },
  ul: {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: '30px',
    marginTop: '10px',
  }
})
export default function Main() {
  const classes = styles();
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    async function loadPokemon() {
      const response = await api.get('?limit=20&offset=0');
      setPokemon(response.data.results);
    }
    loadPokemon();
  }, [])

  return(
    <div className={classes.root}>
      <ul className={classes.ul}>
        {pokemon ? 
          pokemon.map((data, index) => (
            <li key={data.name}>
              <PokeCard name={data.name} index={index}/>
            </li> 
          ))
        : ''}
      </ul>
    </div>
  )
}