/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import './TicTacToeBoard.css';
import cross_icon from '../../assets/cross.png'
import circle_icon from '../../assets/circle.png'
import {useGameContext} from '../../context/Context';
import usePersistedState from '../../customHook/usePersistedState';

function TicTacToeBoard() {
    const {data,setData,count,setCount,lock,setLock,won,setWon}=useGameContext();

    //local storage
    const initialValue={
        count: 0,
        data: ["","","","","","","","",""],
        lock: false,
        won: 0,
    }
    const [value,setValue]=usePersistedState("tic-tac-toe",initialValue);
    useEffect(()=>{
        setCount(value.count);
        setData(value.data);
        setLock(value.lock);
        setWon(value.won);
    },[])
    useEffect(()=>{
        const newValue={
            count: count,
            data: data,
            lock: lock,
            won: won,
        }
        setValue(newValue);
    },[count,won,lock,data]);


    //check won or not
    const checkWon=()=>{
        if(data[0]!="" && data[0]==data[1] && data[1]==data[2]){
            return data[0];
        }
        if(data[3]!="" && data[3]==data[4] && data[4]==data[5]){
            return data[3];
        }
        if(data[6]!="" && data[6]==data[7] && data[7]==data[8]){
            return data[6];
        }
        if(data[0]!="" && data[0]==data[3] && data[3]==data[6]){
            return data[0];
        }
        if(data[1]!="" && data[1]==data[4] && data[4]==data[7]){
            return data[1];
        }
        if(data[2]!="" && data[2]==data[5] && data[5]==data[8]){
            return data[2];
        }
        if(data[0]!="" && data[0]==data[4] && data[4]==data[8]){
            return data[0];
        }
        if(data[2]!="" && data[2]==data[4] && data[4]==data[6]){
            return data[2];
        }
        return "";
    }

    //change when count updated count
    useEffect(()=>{
        console.log(count);
        const wonStatus=checkWon();
        if(wonStatus!="" || count==9){
            setLock(true);
        } 
        if(wonStatus!=""){
            if(wonStatus=="x"){
                setWon(1);
                console.log("1 won");
            }
            else{
                setWon(2);
                console.log("2 won");
            }
        }
    },[count, data])
    
    //onclick any box
    const toggle =(e,num)=>{
        if(lock) return 0;
        if(e.target.parentElement.className==="box" || (e.target.firstChild && e.target.firstChild.tagName==="IMG")) return 0;

        if(count%2==0){
            const newData = [...data];
            newData[num] = "x";
            setData(newData);
            setCount(count+1);
        }
        else{
            const newData = [...data];
            newData[num] = "o";
            setData(newData);
            setCount(count+1);
        }

    }

    //chose image to display in box
    const choseImage=(index)=>{
        if(data[index]=="") return false;
        else if(data[index]=="x") return cross_icon;
        else return circle_icon;
    }

return (
    <div className='board'>
            {[0, 1, 2].map(row => (
                    <div key={row} className={`row${row + 1} row`}>
                            {[0, 1, 2].map(col => {
                                    const index = row * 3 + col;
                                    return (
                                            <div key={index} id={index.toString()} className="box" onClick={(e) => toggle(e, index)}>
                                                    {choseImage(index) ? <img src={`${choseImage(index)}`} alt='ICON' /> : null}
                                            </div>
                                    );
                            })}
                    </div>
            ))}
    </div>
)
}

export default TicTacToeBoard