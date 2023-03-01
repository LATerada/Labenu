import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useRequestData(estadoInicial, path, headers) {
    const [dados, setDados] = useState(estadoInicial)
    const recebeDados = () => {
        const aluno = 'larissa'
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}${path}`, headers)
          .then((res) => {
            setDados(res.data)
          })
          .catch((err) => { 
            console.log(err.response);
          })
      }
      useEffect(() => {
        recebeDados()
      }, [])
  return [dados]
}