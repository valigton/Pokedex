import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardActionArea, CardContent, }from '@material-ui/core';

import Pokeball from '../assets/pokeball.png';

const useStyles = makeStyles({
  root: {
    width: "150px",
    margin: '0 auto',
    '& .MuiCardMedia-root': {
      backgroundSize: 'contain',
    },
  },
  media: {
    height: 140,
  },
  img: {
    height: 32,
    width: 32,
  },
  type: {
    display: 'flex',
    marginTop: '10px',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

export default function PokeCard(props) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [id, setId] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if(props.name) {
      setName(props.name);
      setId(props.index);
    }
  }, [props.index, props.name])

  function handleClick() {
    history.push(`pokemon/${id+1}`)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
      <CardMedia
        className={classes.media}
        image={`https://pokeres.bastionbot.org/images/pokemon/${id + 1}.png`}
        title="Pokemon Image"
        />
        <CardContent>
          <p>#00{id+1}</p>
          <div className={classes.type} >
            <div>
              <img src={Pokeball} className={classes.img} alt="Pokeball" />
            </div>
            <strong>{name}</strong>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}