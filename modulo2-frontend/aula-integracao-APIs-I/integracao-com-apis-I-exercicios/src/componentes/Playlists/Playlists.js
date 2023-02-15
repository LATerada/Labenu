import React, {  useState } from "react";
import Musicas from "../Musicas/Musicas";
import axios from "axios";

// const playlistsLocal = [
//     {
//         id: 1,
//         name: "Playlist 1"
//     },
//     {
//         id: 2,
//         name: "Playlist 2"
//     },
//     {
//         id: 3,
//         name: "Playlist 3"
//     },
//     {
//         id: 4,
//         name: "Playlist 4"
//     },
// ]

function Playlists() {
    const [playlists, setPlaylists] = useState([])
    const [pesquisa,setPesquisa] = useState("")
    const [novaPlaylist,setNovaPlaylist] = useState("")

    const headers = {
        headers: {
            Authorization: "larissa-terada-conway"
          }
    }

    const criarNovaPlaylist = async () => {
        const body = {
            name: novaPlaylist
        }
        try{
            await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, body, headers)
            receberPlaylists()
        }catch (error) {
            console.log(error.response.data)
        }
    }

    const pesquisarPlaylist = async () => {
        try{
            const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${pesquisa}`, headers)
            console.log(response)
            const data = response.data
            setPlaylists(data.result.playlist)
            setPesquisa("")
        }catch (error) {
            console.log(error.response)
        }
    }

    const deletarPlaylist = async (id) => {
        try{
            await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, headers)
            receberPlaylists()
        }catch (error) {
            console.log(error.response.data.message)
        }
    }

    const receberPlaylists = () => {
        axios
            .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            headers
            ).then((response) => {
                setPlaylists(response.data.result.list)
            }).catch((error) => {
                console.log(error.response.message)
            })
    }

    useState(()=> {
        receberPlaylists()
    },[])
  
    return (
        <div>
            <input
                value={novaPlaylist}
                onChange={(event) => setNovaPlaylist(event.target.value)}/>
            <button 
                onClick={criarNovaPlaylist}>Criar Playlist</button>
            <input
                value={pesquisa}
                onChange={(event) => setPesquisa(event.target.value)}/>
            <button 
                onClick={pesquisarPlaylist}>Pesquisar</button>
                
            {playlists.map((playlist) => {
                return (
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button onClick={() => deletarPlaylist(playlist.id)} >X</button>
                    <Musicas key={playlist.id} playlist={playlist} headers={headers}/>
                </div>)
  
            })}

        </div>
    );
}

export default Playlists;
