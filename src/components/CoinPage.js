import React from 'react'
import { Row, Col, Button } from 'reactstrap'

export const CoinPage = ({coinName, coinIcon, coinSymbol, coinPrice, disallowed}) => {
  return (
    <Row>
      <Col className='bg-light border my-2 p-3 mx-auto' sm={5}>
        <div className='float-left d-flex'>
          <h3>{coinName}</h3>
          <img src={coinIcon} alt="cIcon" className='mx-3' width={30} height={30} />
        </div>
        <p>{coinSymbol}</p>
        <div>
          <p className='text-info my-0 font-weight-bold'>{coinPrice} $</p>
          {
          disallowed.indexOf(coinSymbol) > -1?
          <Button className='btn btn-success mt-2' onClick={()=>window.open("https://www.binance.com/en/trade/"+coinSymbol+"_USDT")} disabled>Buy with Binance</Button>
          :
          <Button className='btn btn-success mt-2' onClick={()=>window.open("https://www.binance.com/en/trade/"+coinSymbol+"_USDT")}>Buy with Binance</Button>
          }
        </div>
      </Col>
    </Row>
  )
}
