import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://alura:123@alura.ksurbzl.mongodb.net/alura-node?");
const db = mongoose.connection;
export default db