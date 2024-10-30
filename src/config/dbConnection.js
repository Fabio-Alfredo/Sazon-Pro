import mongoose from 'mongoose';
import 'dotenv/config';

export const dbConnection = async () =>{
    const BD_URI = process.env.DATABASE_URL;
    if(!BD_URI){
        throw new Error('No se ha definido la variable de entorno BD_URI');
    }
    try{
        await mongoose.connect(BD_URI)
        console.log('Conexión a la base de datos exitosa')
    }catch(error){
        console.log('Error al conectar a la base de datos', error)
    }
}

