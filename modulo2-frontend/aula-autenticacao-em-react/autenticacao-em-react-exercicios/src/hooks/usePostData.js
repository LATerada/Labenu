// import axios from 'axios';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { baseURL } from "../constants/baseURL";
// import { goToFeed } from '../routes/coordinator';

// export function usePostData ( path , body ) {
//     const navigate = useNavigate()
//     useEffect(() => {
//         axios.post(`${baseURL}${path}`, body)
//         .then((response) => {
//             localStorage.setItem("token", response.data.token)

//             goToFeed(navigate)
//         })
//         .catch((error) => {
//             console.log(error.response.data);
//         })
//         return
//     },[])
// }