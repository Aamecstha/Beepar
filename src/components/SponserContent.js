import React,{useState,useEffect} from 'react'

const SponserContent = () => {
    const[currentImg,setCurrentImg]=useState(0)
    const images=[
        "https://www.sastodeal.com/media/weltpixel/owlcarouselslider/images/w/i/winter-deals-desktop-version-recovered.png",
        "https://www.sastodeal.com/media/weltpixel/owlcarouselslider/images/m/a/main_banner.jpg",
        "https://www.sastodeal.com/media/weltpixel/owlcarouselslider/images/m/i/microsoftteams-image_-_2021-12-06t195845.858.png",
        "https://www.sastodeal.com/media/weltpixel/owlcarouselslider/images/m/i/microsoftteams-image_-_2021-12-07t113211.338.png"
    ]

    useEffect(()=>{
        setInterval(()=>{
                setCurrentImg(cImg=>{
                    if(cImg>2){
                        return 0
                    }
                    else{
                        return cImg+1
                    }
                })
                
        },4000)
    },[])    

    return (
        <div className="container-fluid">
            <img src={images[currentImg]} width="100%" height="350px"/>
        </div>
    )
}

export default SponserContent
