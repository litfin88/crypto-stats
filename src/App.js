import './App.css';
import { useEffect, useState } from 'react'
import { Container, Col } from 'reactstrap';
import { CoinPage } from './components/CoinPage';

function App() {
  const [coinList, setList] = useState([]);
  const [searchedCoin, setSearch] = useState("");

  let disallowedCoins = ["USDT", "WBTC", "DAI", "CRO", "NEAR", "STETH", "OMI", "CETH", "CDAI", "MIM", "FRAX", "OSMO", "CUSDC", "MIOTA", "XRD", "HBTC", "BCHA", "KCS", "BSV", "KDA", "HT", "CEL", "HEART", "JUNO", "FRAX3CRV-f", "NEXO", "POKT", "GT"]

  useEffect(()=>{
    fetch('https://api.coinstats.app/public/v1/coins?skip=0')
    .then(response => response.json())
    .then(data => setList(data.coins));
  }, [])

  const coinSearch = coinList.filter((coin) => {
    return coin.name.toLowerCase().includes(searchedCoin.toLowerCase()) || coin.symbol.toLowerCase().includes(searchedCoin.toLowerCase())
  })

  return (
    <Container>
      <Col className='bg-light border my-2 p-3 mx-auto' sm={5}>
        <input type="text" className="form-control" onChange={(e) => setSearch(e.target.value)} placeholder='Search specific coin.'></input>
      </Col>
      {coinSearch.map((coin) => (
        <CoinPage coinIcon={coin.icon} coinName={coin.name} coinSymbol={coin.symbol} coinPrice={coin.price} disallowed={disallowedCoins} />
      ))}
    </Container>
  );
}

export default App;
