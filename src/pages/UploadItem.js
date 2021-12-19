import React,{useRef,useState} from 'react'
import Nav from '../components/Nav'
import Select from 'react-select'


const UploadItem = () => {
    const titleRef=useRef()
    const imageRef=useRef()
    const priceRef=useRef()
    const [mainCategory,setMainCategory]=useState()
    const [subCategory,setSubCategory]=useState()

    const mcOptions=[
        {value:"clothes",label:"Clothes"},
        {value:"electronicDevices", label:"Electronic Devices"},
        {value:"utensils",label:"Utensils"}
    ]

    const scOptions=[
        {value:"shirt",label:"Shirt"},
        {value:"pant",label:"Pant"},
        {value:"mobile",label:"Mobile"},
        {value:"laptops",label:"Laptop"},
        {value:"cookingItem",label:"Cooking Item"},
        {value:"others",label:"Others"}
    ]

    const uploadData=(item)=>{
        fetch("https://eccomerceapp-c5016-default-rtdb.firebaseio.com/items.json",
        {
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(()=>{
            alert("item uploaded")
        })
    }

    const damn=(e)=>{
        e.preventDefault()
        console.log("item uploaded")
        const title=titleRef.current.value
        const image=imageRef.current.value
        const price=priceRef.current.value
        const mc=mainCategory.value
        const sc=subCategory.value
        const item={"title":title,"image":image,"price":price,"mainCategory":mc,"subCategory":sc}
        console.log(item)
        uploadData(item)
    } 

    return (
        <div>
            <Nav />
            <div className="container">
                <div className="shadow-lg col-4 p-2 m-3" >
                    <form onSubmit={damn}>
                        <div className="mb-3">
                            <label for="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Item Name.." ref={titleRef}/>
                        </div>
                        <div className="mb-3">
                            <label for="image" className="form-label">Image Url</label>
                            <input type="url" className="form-control" id="image" placeholder="Image url here.." ref={imageRef} />
                        </div>
                        <div className="mb-3">
                            <label for="price" className="form-label">Price</label>
                            <input type="text" className="form-control" id="price" placeholder="Item Name.." ref={priceRef}/>
                        </div>
                        <div className="mb-3">
                            <label for="mainCategory" className="form-label">Main Category</label>
                            <Select options={mcOptions} onChange={(value)=>setMainCategory(value)}/>
                        </div>
                        <div className="mb-3">
                            <label for="subCategory" className="form-label">Sub Category</label>
                            <Select options={scOptions} onChange={(value)=>setSubCategory(value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UploadItem
