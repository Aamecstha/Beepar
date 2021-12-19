import React,{useState,useEffect} from 'react'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'
import Nav from '../components/Nav'

const Home = () => {
    const[loadedItems,setLoadedItems]=useState([])
    const[isLoading,setLoading]=useState(true)  

    useEffect(()=>{
        setLoading(true)
        fetch("https://eccomerceapp-c5016-default-rtdb.firebaseio.com/items.json")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            const items=[]

            for(const key in data){
                const item={id:key,...data[key]}
                items.push(item)
            }
            setLoading(false)
            setLoadedItems(items)
        })      
    },[])

    if(isLoading){
        return(
            <p>
                Loading.....
            </p>
        )
    }

    return(
        <>
            <Nav/>
            <HomeContent items={loadedItems}/>
            <Footer/>
        </>
    )
}

export default Home
