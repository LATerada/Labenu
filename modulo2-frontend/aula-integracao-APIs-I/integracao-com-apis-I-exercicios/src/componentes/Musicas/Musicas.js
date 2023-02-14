import React, { useEffect, useState } from 'react'
import { Botao, ContainerInputs, ContainerMusicas, InputMusica, Musica } from './styled'
import axios from "axios";

// const musicasLocal = [{
//     artist: "Artista 1",
//     id: "1",
//     name: "Musica1",
//     url: "http://spoti4.future4.com.br/1.mp3"
// },
// {
//     artist: "Artista 2",
//     id: "2",
//     name: "Musica2",
//     url: "http://spoti4.future4.com.br/2.mp3"
// },
// {
//     artist: "Artista 3",
//     id: "3",
//     name: "Musica3",
//     url: "http://spoti4.future4.com.br/3.mp3"
// }]

export default function Musicas(props) {
    const [musicas, setMusicas] = useState([]);
    const [artista,setArtista] = useState("");
    const [musica, setMusica] = useState("");
    const [url, setUrl] = useState("");

    const headers = {
        headers: {
            Authorization: "larissa-terada-conway"
        }
    }

    const novaMusica = {
        name: musica, 
        artist: artista,
        url: url,
    }

    const adicionarMusica = () => {
        axios
            .post(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks`,
                novaMusica,
                headers
            ).then((response) => {
                receberMusicas()
                console.log(response)
            }).catch((error) => {
                console.log(error.response.data)
            })
    }

    const removerMusica = (id) => {
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks/${id}`,
                headers
            ).then(()=> {
                receberMusicas()
            }).catch((error) => {
                console.log(error.response.data.message)
            })
    }
    
    const receberMusicas = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks`,
            headers
            ).then((response) => {
                setMusicas(response.data.result.tracks);
                setArtista("");
                setMusica("")
                setUrl("");
            }).catch((error) => {
                console.log(error.response.data.message)
            })
    }

    useEffect(() => {
        receberMusicas()
    },[])

    return (
        <ContainerMusicas>
            <h2>{props.playlist.name}</h2>
            {musicas.map((musica) => {
                return (
                    <Musica key={musica.id}>
                        <h3>{musica.name} - {musica.artist}</h3>
                        <audio src={musica.url} controls />
                        <button onClick={() => removerMusica(musica.id)}>X</button>
                    </Musica>)
            })}
            <ContainerInputs>
                <InputMusica 
                    placeholder="artista" 
                    value={artista}
                    onChange={(event) => setArtista(event.target.value)}
                />
                <InputMusica 
                    placeholder="musica"
                    value={musica}
                    onChange={(event) => setMusica(event.target.value)} />
                <InputMusica 
                    placeholder="url"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}/>
                <Botao onClick={adicionarMusica} >Adicionar musica</Botao>
            </ContainerInputs>
        </ContainerMusicas>
    )
}

