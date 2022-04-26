import React from "react";
import {fireEvent, render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import LikeBtn from "../components/LikeBtn";
import rules from "../data.json"

 
describe( "LikeBtn" , () => {
   
    it(" on click it should increment likes by one", () => {
        
        const {getByTitle} = render(<LikeBtn isLike={true} counter={rules[0].likes}/>);

        const btn = getByTitle('+1')
        expect(parseInt(btn.textContent)).toBe(rules[0].likes)
        fireEvent.click(btn);
        expect(parseInt(btn.textContent)).toBe(rules[0].likes + 1)
    })
})