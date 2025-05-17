import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [score, setScore] = useState('');
  const [medalCountry, setMedalCountry] = useState('');
  const [medalType, setMedalType] = useState('gold');

  const submitRanking = async () => {
    await axios.post('http://localhost:3001/update-ranking', { name, country, score });
  };

  const submitMedal = async () => {
    await axios.post('http://localhost:3001/update-medals', { country: medalCountry, type: medalType });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🎮 比赛成绩录入</h2>
      <input placeholder="姓名" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="国家" value={country} onChange={e => setCountry(e.target.value)} />
      <input placeholder="成绩" value={score} onChange={e => setScore(e.target.value)} />
      <button onClick={submitRanking}>提交成绩</button>

      <hr />

      <h2>🥇 奖牌更新</h2>
      <input placeholder="国家" value={medalCountry} onChange={e => setMedalCountry(e.target.value)} />
      <select value={medalType} onChange={e => setMedalType(e.target.value)}>
        <option value="gold">金</option>
        <option value="silver">银</option>
        <option value="bronze">铜</option>
      </select>
      <button onClick={submitMedal}>更新奖牌</button>
    </div>
  );
}

export default App;
