import {Server} from "socket.io"
import http from "http"
import express from "express"


const serverApp = express()

const server=http.createServer(serverApp)
const io=new Server(server,{
    cors:{
        origin:"https://chatapp-deploy-xihv.onrender.com",
        method:["GET","POST"],
        
    }
})

export const getReceiverSocketId=(recevierId)=>{
    return users[recevierId]
}

const users={}

//use to listen event on server site
io.on("connection",(socket)=>{
    console.log("A user connected", socket.id);
    const userId=socket.handshake.query.userId
    if (userId){
        users[userId]=socket.id
        console.log(users);
        
    }
    
    io.emit("getOnlineUsers",Object.keys(users))

    socket.on("disconnect",()=>{
        console.log("A user Disconnected",socket.id);
        delete users[userId]
        io.emit("getOnlineUsers",Object.keys(users))
        
    })
    
})

export { serverApp,io,server}