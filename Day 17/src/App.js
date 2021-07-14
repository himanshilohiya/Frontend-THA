
import './App.css';
import Card from './component/card.jsx'

export default function App() {
  return (
    <div className="App">
      <label> Calorie Reading</label>
      <div class="container">
        <Card name="Pizza" cal="50"/>
        <Card name="Brownie" cal="100"/>
        <Card name="French Fries" cal="50"/>
        <Card name="Pani-puri" cal="60"/>
        <Card name="Bread" cal="70"/>
        <Card name="Dosa" cal="100"/>
        <Card name="Manchurian" cal="100"/>
        <Card name="Dabeli" cal="70"/>
        <Card name="Burger" cal="120"/>
      </div>
    </div>
  );
}


