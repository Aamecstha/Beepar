import React,{useState,useEffect} from "react"
import Head from "./Head"

const HeadSpawner=(props)=>{
    const[position,setPosition]=useState({x:900,y:330})      //maxX:1000 maxY:420
    const[time,setTime]=useState(35)
    const curTime=time

    if(curTime<=0){
        props.setGameStarted(false)
        props.setGameEnded(true)
    }

    useEffect(()=>{
        setInterval(()=>{
            if(props.isGameStarted){
                setTime(time=>time-1)
                setPosition(()=>{
                        const randX=Math.floor(Math.random()*1000)      
                        const randY=Math.floor(Math.random()*420)  
                        return {x:randX,y:randY}       
                })
            }          
        },1000)
    },[])

    const changePosition=()=>{
        props.changeScore()
        setPosition(()=>{
            const randX=Math.floor(Math.random()*1000)      
            const randY=Math.floor(Math.random()*420)  
            return {x:randX,y:randY}       
        })
    }

    return(
        <>
            <h3>Time:{time}</h3>
            <Head position={position} changePosition={changePosition}/>
        </>
    )
}

export default HeadSpawner