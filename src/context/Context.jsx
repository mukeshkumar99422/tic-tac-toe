/* eslint-disable react-refresh/only-export-components */
import { createContext,useContext,useState } from "react";
import PropTypes from 'prop-types';
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const GameContext=createContext();

export default function ContextProvider(props){
    const [data,setData]=useState(["","","","","","","","",""]);
    const [count,setCount]=useState(0);
    const [lock,setLock]=useState(false);
    const [won,setWon]=useState(0);

    const contextValue={
        data,
        setData,
        count,
        setCount,
        lock,
        setLock,
        won,
        setWon,
    }

    return (
        <GameContext.Provider value={contextValue}>
            {props.children}
        </GameContext.Provider>
    )
}

export function useGameContext(){
    return useContext(GameContext);
}
