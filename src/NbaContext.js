import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const NbaContext = createContext([]);

export const NbaProvider = (props) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  let roster = [];
  const fetchPlayerRoster = async () => {
    await axios
      .get('https://api.lineups.com/nba/fetch/roster/2020/atlanta-hawks')
      .then((response) => {
        response.data.roster.forEach(async (player) => {
          await axios
            .get(
              `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${player.full_name}`
            )
            .then((res) => {
              player.poster = res.data.player?.[0].strThumb;
              console.log(player);
              roster.push(player);
            })
            .finally(() => {
              setLoading(false);
              setPlayers(response.data.roster);
            });
        });
      });
    // response.data.roster.forEach(async (player) => {
    //   await axios
    //     .get(
    //       `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${player.full_name}`
    //     )
    //     .then((response) => {
    //       setLoading(false);
    //         player.poster = response.data.player?.[0].strThumb;
    //         setPlayers(player)
    //     });
    //   // player.poster = record.data.player?.[0].strThumb;
    // });
    // setPlayers(response.data.roster);
  };

  useEffect(() => {
    fetchPlayerRoster();
  }, []);

  return (
    <NbaContext.Provider value={[players, setPlayers]}>
      {loading ? 'Loading' : props.children}
    </NbaContext.Provider>
  );
};
