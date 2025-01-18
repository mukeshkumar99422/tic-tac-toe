import { useEffect, useState } from 'react'

export default function usePersistedState(key,initialValue) {
    const [value,setValue]=useState(()=>{
        const storage=JSON.parse(localStorage.getItem(key));
            if(storage) return storage;
            else return initialValue;
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value,key])
    return [value,setValue];
}

