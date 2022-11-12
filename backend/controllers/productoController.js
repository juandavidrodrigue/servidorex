import producto from "../models/producto.js";
import {
    uploadImage,
    deleteImage
} from '../helpers/Cloudinary.js';

const createProductos = async (rec,res) => {};

const getProductos = async (rec,res) =>{};

const updateProductos = async (rec,res) => {};

const deleteProductos = async (rec,res) => {};

const getProducto  = async (rec,res) => {};

const prueba = (req, res)=>{
    res.send({
        msg:"En esta ruta gestionaremos todas las peticiones correspondiente al modelo de Producto"
    })
};

export{
    prueba,
    getProductos,
    createProductos,
    updateProductos,
    deleteProductos,
    getProducto
};