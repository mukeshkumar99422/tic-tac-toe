/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import TicTakToe from './components/TicTacToe/TicTakToe'
import { useGameContext } from './context/Context';

function App() {
  const {data,setData,count,setCount,lock,setLock,won,setWon}=useGameContext();
  
      // //local storage
      // useEffect(()=>{
      //     const storage=JSON.parse(localStorage.getItem("tic-tac-toe"));
      //     if(storage){
      //         setCount(storage.count);
      //         setData(storage.data);
      //         setLock(storage.lock);
      //         setWon(storage.won);
      //     }
      // },[]);
      // useEffect(()=>{
      //     const storage={
      //         count: count,
      //         data: data,
      //         lock: lock,
      //         won: won,
      //     }
      //     localStorage.setItem("tic-tac-toe", JSON.stringify(storage));
      // },[count,won,lock,data]);
  return (
    <>
      <TicTakToe/>
    </>
  )
}

export default App
