import express from "express";

//creo una instancia de express
const app = express();
//crear puerto para el servidor
app.set('port',process.env.PORT || 4000);

//escuchar al servidor y ejecutar algo

app.listen(app.get('port'),()=>{
    console.log('estoy en el puerto'+app.get('port'));
})