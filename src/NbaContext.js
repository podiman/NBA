import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const NbaContext = createContext([]);

export const NbaProvider = (props) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  // let roster = [];
  let playerDetailsLineups = [];
  let roster = [];
  const fetchPlayerRoster = async () => {
    const getMyStuff = new Promise((resolve, reject) => {
      axios
        .get('https://api.lineups.com/nba/fetch/roster/2020/atlanta-hawks')
        .then((response) => {
          playerDetailsLineups = response.data.roster;
          playerDetailsLineups.map((element) => {
            // allData.push(
            //   `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${element.full_name}`
            // );
            axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${element.full_name}`)
              .then((res) => {
                element.poster = res.data.player?.[0].strThumb;
                setPlayers([
                  ...playerDetailsLineups,
                  {
                    poster: element.poster
                  }
                ])
            });
          });
          // setPlayers(playerDetailsLineups);
          // const fetchURL = (url) => axios.get(url);

          // const promiseArray = allData.map(fetchURL);

          // Promise.all(promiseArray)
          //   .then((data) => {
          //     data.map(element => {
          //       console.log(element.data.player?.[0].strThumb);
          //     })
          //   })
          //   .catch((err) => {});
        })
        .catch(reject)
        .finally(() => {
          // console.log(playerDetailsLineups);
        });
    });
    // await Promise.all([
    //   axios
    //     .get('https://api.lineups.com/nba/fetch/roster/2020/atlanta-hawks')
    //     .then((response) => {
    //       playerDetailsLineups = response.data.roster;
    //     }),
    // ]);
    // playerDetailsLineups.forEach(async (player) => {
    //   await axios
    //     .get(
    //       `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${player.full_name}`
    //     )
    //     .then((res) => {
    //       player.poster = res.data.player?.[0].strThumb;
    //       setPlayers(playerDetailsLineups);
    //     });
    // });
    setLoading(false);
  };

  useEffect(() => {
    fetchPlayerRoster();
  }, []);

  return (
    <NbaContext.Provider value={[players, setPlayers, loading, setLoading]}>
      {loading ? 'Loading' : props.children}
    </NbaContext.Provider>
  );
};
