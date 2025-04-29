import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuraciones
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware personalizado para registrar rutas
app.use((req, res, next) => {
    const fecha = new Date().toISOString();
    console.log(`[${fecha}] Ruta visitada: ${req.originalUrl}`);
    next();
});

// Rutas
app.use('/', routes);

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});
