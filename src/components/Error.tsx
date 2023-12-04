import React from 'react'
import "./Error.modulo.css";

export const Error = () => {
  return (

    <div className="error">
        <h2>
            Usuário não encontrado!
        </h2>
        <img src="./public/octocat-404.png" alt="Imagem de erro" />
    </div>
  )
}
