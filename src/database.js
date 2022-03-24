import mongoose from "mongoose";

const url ='mongodb://localhost:27017/crudcafe';

mongoose.connect(url,{useNewUrlParser:true});

const conecction = mongoose.connection;

conecction.once('open',()=>{
    console.log('conectado a la BD');
});