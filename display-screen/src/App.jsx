import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function App() {
  const [rankings, setRankings] = useState([]);
  const [medals, setMedals] = useState({});

  useEffect(() => {
    socket.on('ranking_update', (data) => {
      setRankings(prev => [...prev, data].slice(-10));
    });

    socket.on('medals_update', ({ country, medals: updated }) => {
      setMedals(prev => ({ ...prev, [country]: updated }));
    });
  }, []);

  return (
    <div style={{ padding: 20, backgroundColor: '#f4f4f4', height: '100vh' }}>
      <h1>🏆 实时比赛排名</h1>
      <ul>
        {rankings.map((r, i) => (
          <li key={i}>{i + 1}. {r.name} ({r.country}) - {r.score}</li>
        ))}
      </ul>

      <h1>🎖 奖牌榜</h1>
      <ul>
        {Object.entries(medals).map(([country, medal], i) => (
          <li key={i}>{country} - 🥇{medal.gold} 🥈{medal.silver} 🥉{medal.bronze}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
