import React,{useState} from 'react'
import Nav from "../components/Nav"
import Head from './Head'
import HeadSpawner from './HeadSpawner'
import LavaBar from './LavaBar'

const Game = () => {
    const[score,setScore]=useState(0)
    const[isGameStarted,setGameStarted]=useState(false)
    const[isGameEnded,setGameEnded]=useState(false)
    if(!localStorage.getItem("highScore")){
        localStorage.setItem("highScore","10")
    }

    const restart=()=>{
        setScore(0)
        setGameStarted(true)
        setGameEnded(false)
    }
    let content=<div style={{width:"300px",margin:"auto",paddingTop:"200px"}}>
                <button onClick={restart}>Play</button>
            </div>
    

    const changeScore=()=>{
        setScore(score=>score+1)
    }

   

    if(isGameStarted){
        content=<>
                    <h3>Score:{score}</h3>
                    <h3>High Score:{localStorage.getItem("highScore")}</h3>
                    <HeadSpawner changeScore={changeScore} isGameStarted={isGameStarted} setGameStarted={setGameStarted}  setGameEnded={setGameEnded}/>
                </>
    }
    else if(isGameEnded){
        content=<div style={{width:"300px",margin:"auto",paddingTop:"200px"}}>
                    <p>Winner Winner Chicken Dinner!!!</p>
                    <p>Your Score is {score}</p>
                    {score>Number(localStorage.getItem("highScore")) && localStorage.setItem("highScore",`${score}`) && <h2>High Score!!!</h2>}
                    <button onClick={restart}>Play</button>
        </div>
    }
  

    return (
        <>
            <div className="container">
                <h3>Play Game Have Some Fun!!!</h3>
                <div className="col-10 bg-primary" style={{height:"500px"}}>
                    {content}
                </div>
            </div>      
        </>
    )
}

export default Game
