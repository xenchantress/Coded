import React from "react";
import {useParams} from "react-router-dom";

//path 'pets/:petId'
//localhost:3000/pets/123
//params = ? => {categoryId:dog. petId:333 }

const Products =()=> {
    const params = useParams();
    console.log(params);
}
const pet = petData.find((x) => x.id == params.petId);
console.log(pet);

return(
    <div>
        <h1>ID: {params.petId}</h1>
        <h2>Name: {params.name}</h2>
        <img src={pet.image}/>
        <img src={pet.image2}/>
    </div>
);
