import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from 'path';
import router from "./routes/producto.routes";

//creo una instancia de express
const app = express();
//crear puerto para el servidor
app.set('port',process.env.PORT || 4000);

//escuchar al servidor y ejecutar algo

app.listen(app.get('port'),()=>{
    console.log('estoy en el puerto'+app.get('port'));
})

//midlewares o configuraciones extras
app.use(morgan('dev')) //parametro dev da info extra a la terminal
app.use(cors());//permite recibir peticiones remotas
//para recibir objetos en formato json
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//mostrar una pagina por defecto
//debo decirle al backend donde esta el archivo html y que levante ese archivo como un archivo estatico
//le pedimos ayuda a node con path y su funcion join
///__dirname me indica donde estoy actualmente y le concateno para llevarme a public
//para mostrar esa ruta de manera estatica lo hago con express.static
app.use(express.static(path.join(__dirname,'../public')));




//crear rutas
//cuando alguien haga una peticion a la ruta carga las rutas definidas en router
app.use('/',router)