import React, { useState, useEffect } from "react";

export const TodoListApi = () => {

  const [lista, setLista] = useState([])
  const [tarea, setTarea] = useState("")

  const API_URL = "https://playground.4geeks.com/todo"

  const crearUsuario = () => {
    fetch(API_URL + "/users/pedro0309", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }

  const obtenerLista = () => {
    fetch(API_URL + "/users/pedro0309")
      .then((response) => {
        if (response.status === 404) {
          crearUsuario()
        }
        return response.json()
      })
      .then(data => setLista(data.todos))
      .catch(error => console.error(error))
  }

  const agregarTarea = () => {
    const nuevaTarea = {
      label: tarea,
      is_done: false
    }

    fetch(API_URL + "/todos/pedro0309", {
      method: "POST",
      body: JSON.stringify(nuevaTarea),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setTarea("")
        obtenerLista()
      })
      .catch(error => console.error(error))
  }

  const eliminarTarea = (id) => {
    fetch(API_URL + "/todos/" + id, {
      method: "DELETE"
    })
      .then(() => obtenerLista())
      .catch(error => console.error(error))
  }


  useEffect(() => {
    obtenerLista()
  }, [])

  return (
    <div>
      <h1>Todo List Pedro</h1>

      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            agregarTarea()
          }
        }}
      />

      <ol>
        {lista.map((item) => (
          <li key={item.id}>
            {item.label}
            <button onClick={() => eliminarTarea(item.id)}>❌</button>
          </li>
        ))}
      </ol>
    </div>
  )
}