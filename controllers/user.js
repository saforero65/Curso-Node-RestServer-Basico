const { response } = require("express");

const usuariosGet = (req, res = response) => {
  const params = req.query;

  res.json({
    msg: "get Api - Controlador",
    params,
  });
};
const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put Api - Controlador",
    id,
  });
};

const usuariosPost = (req, res) => {
  const { nombre, edad } = req.body;

  res.status(201).json({
    msg: "post Api - Controlador",
    nombre,
    edad,
  });
};
const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete Api - Controlador",
  });
};
const usuariosPatch = (req, res) => {
  res.json({
    msg: "patch Api - Controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosDelete,
  usuariosPut,
  usuariosPatch,
};
