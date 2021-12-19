import React,{useState,useEffect} from 'react'

const LavaBar = () => {
    const[velY,setVelY]=useState(-20)
    const[speed,setSpeed]=useState(5)
    const currentVelY=velY
    const curSpeed=speed
    
    console.log(currentVelY)
    console.log(curSpeed)
    if(currentVelY>350){
        setSpeed(-5)
        setVelY(0)       
    }else if(currentVelY<0){
        setSpeed(5)
        setVelY(2)      
    }
    

    useEffect(()=>{
        setInterval(()=>{
            setVelY(vely=>vely+speed)
        },20)
    },[])

    return (
        <>
        <div style={{
            width:"50px",
            height:"100px",
            backgroundColor:"red",
            position:'relative',
            left:"200px",
            top:`${velY}px`
        }}>
            
        </div>
        </>
    )
}

export default LavaBar
