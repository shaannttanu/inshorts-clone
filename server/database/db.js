import mongoose from "mongoose";

const Connection = async (username,password) =>{
    const URL =`mongodb://${username}:${password}@clone-inshorts-shard-00-00.4eke2.mongodb.net:27017,clone-inshorts-shard-00-01.4eke2.mongodb.net:27017,clone-inshorts-shard-00-02.4eke2.mongodb.net:27017/?ssl=true&replicaSet=atlas-3ugxy9-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useNewUrlParser:true });
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting to the database ',error);
    }
}

export default Connection;