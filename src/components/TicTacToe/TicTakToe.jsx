/* eslint-disable no-unused-vars */
import React from 'react'
import './TicTakToe.css';
import TicTacToeBoard from '../TicTacToeBoard/TicTacToeBoard';
import { useGameContext } from '../../context/Context';
import usePersistedState from '../../customHook/usePersistedState';


function TicTakToe() {
  const {won,setWon,setData,setCount,setLock}=useGameContext();
  const initialValue={
      count: 0,
      data: ["","","","","","","","",""],
      lock: false,
      won: 0,
  }
  const [value,setValue]=usePersistedState("tic-tac-toe",initialValue);

  const reset=()=>{
    setValue(initialValue);
    setWon(0);
    setData(["","","","","","","","",""]);
    setLock(false);
    setCount(0);
  }
  return (
    <>
    <div className="container">
        {won==0?
        <h1 className='heading'>Tic Tak Toe Game using<span>React</span></h1>:
        <h1 className='heading wonHeading'><span>{won==1?"<Player 1>":"<Player 2>"}</span>won the game</h1>}
        <div className="ticTacToeBoard">
            <TicTacToeBoard/>
        </div>
        <button className="reset" onClick={reset}>RESET</button>
    </div>
    </>
  )
}

export default TicTakToe;