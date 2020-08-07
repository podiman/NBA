import React, { useEffect } from 'react';
import { Nav } from './Nav';
import { NbaProvider } from './NbaContext';
import { Header } from './Header';
import './App.css';
import { PlayerCard } from './ui/PlayerCard';
import { SearchBar } from './SearchBar';

const App = () => {
  useEffect(() => {
    getAllNbaTeamDetails();
  }, []);

  const getAllNbaTeamDetails = async () => {
    // const response = await fetch("https://thesportsdb.p.rapidapi.com/1/lookup_all_teams.php?id=4387", {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-host": "thesportsdb.p.rapidapi.com",
    //   }
    // });
    // const response = await fetch("https://api.lineups.com/nba/fetch/roster/2020/atlanta-hawks?format=json", {
    //   "method": "GET",
    // });
    // const response = await fetch("https://api-nba-v1.p.rapidapi.com/teams/teamId/1", {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
    //   }
    // });
    // const loadData = [...jsonData.api.teams];
    // const data = await response.json();
    // console.log(data.roster);
    // console.log(response.json());
  };
  return (
    <NbaProvider>
      <div className="App">
        <Nav />
        <Header />
        <SearchBar />
        <PlayerCard />
      </div>
    </NbaProvider>
  );
};

export default App;
