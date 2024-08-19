const { response } = require("express");

const usuariosGet = (req, res = response) => {
  res.json({
    msg: "get API - controlador",
  });
};
const usuariosPost = (req, res = response) => {
 
  const {id} = req.params ;
  res.json({
    msg: "Post API - controlador",
    id:"10"
  });
};const usuariosPut = (req, res = response) => {
  res.json({
    msg: "Put API - controlador",
  });
};const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "Delete API - controlador",
  });
};const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "Patch API - controlador",
  });
};
module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch
};
