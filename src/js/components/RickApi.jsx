import React, { useState, useEffect } from "react";

export const RickApi = () => {

  //estado para guardar el array de personajes (inicialmente está vacío)
  const [personajes, setPersonajes] = useState([])

  const obtenerPersonajes=()=>{
    //GUARDO LA URL EN UN ESPACIO DE MEMORIA
    const API_URL = "https://rickandmortyapi.com/api/character"

    fetch(API_URL)
    .then(response => response.json()) //Convierte la respuesta a un formato JSON
    .then(data => {setPersonajes(data.results)}) //Toma los datos para mostrar en el array
    .catch(error => {console.error("Hubo un problema al obtener los personajes", error); //Imprimir el error en la consola
    })
  }

  //  useEffect(()=>{
    //aqui va el codigo que hace algo (ejemplo el fetch)
  //  },[ cuando se repite, si está vacío se ejecuta una sola vez al cargar la página, si tiene un dato se ejecuta cada vez que ese dato cambie]) 
  
  useEffect(()=>{
    obtenerPersonajes();
  },[])


  return (
    <div>
        <h1>Rick and Morty</h1>
        <ol>
          {personajes.map(personaje =>(
            <li key={personaje.id} > Nombre: {personaje.name} Especie: {personaje.species}</li>
          ))}
        </ol>
    </div>
  )
}
