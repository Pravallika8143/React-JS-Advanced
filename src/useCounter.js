import { useEffect, useState } from "react"

export function useCounter(icount,step,name) {
    var [count,setcount] = useState(icount);
    useEffect(()=>{
        if(window.localStorage.getItem(name)){
            setcount(+window.localStorage.getItem(name))
        }
        else{
            window.localStorage.setItem(name,icount)
        }
    },[])
    function incCount() {
        setcount((cv)=>{
            return cv + step;
        });
    }
    useEffect(()=>{
          window.localStorage.setItem(name,count)
        },[count,name])
    function decCount() {
        setcount(count - step);
    }
    return [count,incCount,decCount]
}