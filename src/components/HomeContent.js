import React from 'react'
import Banner from './Banner'
import ItemList from './ItemList'
import SpecificItem from './SpecificItem'
import SponserContent from './SponserContent'

const HomeContent = (props) => {
    return (
        <div className="container-fluid">
            <SponserContent/>
            <div className="container">
                <SpecificItem items={props.items.filter((item)=>item.subCategory==="shirt")} title="T-Shirts"/>
                <SpecificItem items={props.items.filter(item=>item.subCategory==="pant")} title="Pants"/>
                <div className="d-flex justify-content-between px-3 flex-wrap">
                    <Banner imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG-WXare9ZgXw_DNVoEFTFStuZIklQw-Xg6w&usqp=CAU"}/>
                    <Banner imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn5IhpT1sWjFUeCnWbY0BQ6Shmj8lRzE_UA&usqp=CAU"}/>
                    <Banner imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKZTwiHlawri8TkXqPPVHnawmuvNNmN01Bg&usqp=CAU"}/>
                </div>               
                <SpecificItem items={props.items.filter(item=>item.subCategory==="others")} title="Others"/>
            </div>
            
            
        </div>
    )
}

export default HomeContent
