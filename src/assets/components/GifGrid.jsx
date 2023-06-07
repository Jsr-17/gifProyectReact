import React from "react";
import { getGif } from "../helpers/getGifs";


export const GifGrid = ({ category}) => {

    getGif(category);

    return (
        <>
            <h3>{category}</h3>
            <p>Hi world</p>
        </>
    )
}