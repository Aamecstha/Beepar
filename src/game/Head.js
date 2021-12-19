import React,{useState} from 'react'

const Head = (props) => {
    const size=Math.floor((Math.random()*20)+15)
    console.log("size:",size)

    return (
        <div style={{
            position:"relative",
            top:`${props.position.y}px`,
            left:`${props.position.x}px`,
            backgroundColor:"red",
            width:`${size}px`,
            height:`${size}px`
        }} onClick={props.changePosition}>
            {/* <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11e2682e-4a99-4816-8dfc-676fcf199257/dcxlg5w-143ae884-24ab-4e59-8c41-d7a3dfe4cac9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzExZTI2ODJlLTRhOTktNDgxNi04ZGZjLTY3NmZjZjE5OTI1N1wvZGN4bGc1dy0xNDNhZTg4NC0yNGFiLTRlNTktOGM0MS1kN2EzZGZlNGNhYzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fm1jikH57EeR4-AvzB97qOeA4vluumX68ZQKARGWKgI"  
                width="100%" height="100%"/> */}
        </div>
    )
}

export default Head
