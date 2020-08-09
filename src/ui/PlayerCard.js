import React, { useContext } from 'react';
import styled from 'styled-components';
import { NbaContext } from '../NbaContext';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const PageContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex-basis: auto;
  margin-top: 10px;
  grid-gap: 10px;
`;

const PlayerPhoto = styled.div`
  display: flex;
  margin-top: 5px;
  flex: auto;
  justify-content: center;
`;

export const PlayerCard = () => {
  const [players, setPlayers, loading, setLoading] = useContext(NbaContext);
  const classes = useStyles();
  players.forEach(element => {
    console.log(element.poster);
  });

  return (
    <PageContent>
      <Grid container spacing={3}>
        {players.map((player, key) => (
          <Grid item xs={3}>
          {player.poster ? <Paper className={classes.paper}>
              <PlayerPhoto>
                <img style={{width: "100%"}} src={player.poster} alt={player.full_name}></img>
              </PlayerPhoto>
              <Typography variant="subtitle1" gutterBottom>
                {player.full_name}
              </Typography>
              <div>Age: {player.age}</div>
              <Button color="primary">Learn more</Button>
            </Paper> :
              <Paper className={classes.paper}>
              <PlayerPhoto>
                <img src={player.photo_url} alt={player.full_name}></img>
              </PlayerPhoto>
              <Typography variant="subtitle1" gutterBottom>
                {player.full_name}
              </Typography>
              <div>Age: {player.age}</div>
              <Button color="primary">Learn more</Button>
            </Paper>
          }
          </Grid>
        ))}
      </Grid>
    </PageContent>
  );
};
