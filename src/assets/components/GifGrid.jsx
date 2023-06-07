import React, { useEffect } from "react";
import { getGif } from "../helpers/getGifs";


export const GifGrid = ({ category}) => {

    const [images,setImages]=useState([])

    const getImages=async()=>{
        const newImages = await getGif(category);
        setImages(newImages);
    }

    useEffect(()=>{
        getImages();

},[])
    return (
        <>
            <h3>{category}</h3>
            <p>Hi world</p>
        </>
    )
}