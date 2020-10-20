import { createConnection } from 'typeorm';

try{
    createConnection();
} catch(e){
    console.log(e);
}