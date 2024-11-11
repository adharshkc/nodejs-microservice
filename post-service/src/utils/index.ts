import axios from "axios"



export const publishUserEvent = async function(payload:any){
    axios.post("http://localhost:3002/app-events", payload)
}