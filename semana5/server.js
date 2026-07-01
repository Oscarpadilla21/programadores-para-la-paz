const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor activo');
});

app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: 'Reporte recibido',
    mensaje: mensaje
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor ejecutándose en http://${HOST}:${PORT}`);
});
