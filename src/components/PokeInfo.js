import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import api from '../services/api'

const useStyles = makeStyles({
  root: {
    width: "150px",
    margin: '0 auto',
    '& .MuiCardMedia-root': {
      backgroundSize: 'contain',
    },
  },
});

export default function PokeInfo() {
  const classes = useStyles();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function loadPokemon() {
      const res = await api.get(`/${id}`)
      setPokemon(res.data);
    }
    loadPokemon();
  }, [id])
  
  console.log(pokemon)
  return (
    <div className={classes.root}>
      <h2>{pokemon.name}</h2>
    </div>
  );
}