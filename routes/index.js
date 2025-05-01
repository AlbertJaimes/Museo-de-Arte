import express from 'express';
const router = express.Router();

const obras = [
    { id: 1, titulo: 'La Gioconda', autor: 'Leonardo da Vinci',año: 1503, descripcion: 'Es un óleo sobre tabla de álamo de 79 × 53 cm, pintado entre 1503 y 1519,​ y retocado varias veces por el autor. Se considera el ejemplo más logrado de sfumato, técnica muy característica de Leonardo, si bien actualmente su colorido original es menos perceptible por el oscurecimiento de los barnices.', imagen: '/img/Gato.jpg' },
    { id: 2, titulo: 'Las Meninas', autor: 'Diego de Velázquez',año: 1508, descripcion: 'En 1508 el Papa Sixto IV encargó a Miguel Ángel que pintara la bóveda de esta capilla de la iglesia de Nuestra Señora de las Mercedes.',imagen:'/img/Las-Meninas.jpg' },
    { id: 3, titulo: 'El Grito, de Munch', autor: 'Edvuard Munch', año: 1890, descripcion: 'En realidad no es cuadro, sino varios, en los que el propio Edvuard Munch versionó (rondando el año 1890) esta escena de un hombre gritando, según unos, o tapándose los oídos al oír un grito, según otros. Como curiosidad, se dice que es el cuadro más robado de la historia.', imagen: '/img/El grito, de Munch.jpg' },
    { id: 4, titulo: 'La joven de la perla', autor: 'Johannes Vermeer', año: 1665, descripcion: 'Uno de los retratos más bellos de la historia del arte, realizado por el pintor holandés sobre 1665. También se le conoce como Muchacha con turbante y puede verse en el museo Mauritshuis, en La Haya (Países Bajos).', imagen: '/img/La-joven-de-la-perla.jpg' },
    { id: 5, titulo: 'El matrimonio Arnolfini', autor: 'Jan van Eyck', año: 1434, descripcion: 'Se trata de uno de los cuadros más antiguos y mejor conservados del mundo, ya que está datado en 1434. En él aparece un comerciante de seda de la época, el italiano Giovanni Arnolfini, y su esposa Constanza Trenta, que aperece embarazada, representando la fecundidad. Se encuentra en la National Gallery de Londres.', imagen: '/img/El-matrimonio-Arnolfini.jpg' }
];

// Página de inicio
router.get('/', (req, res) => {
    res.render('index');
});

// Redirección /inicio -> /
router.get('/inicio', (req, res) => {
    res.redirect('/');
});

// Galería
router.get('/galeria', (req, res) => {
    res.render('galeria', { obras });
});

// Detalle de una obra
router.get('/obra/:id', (req, res) => {
    const obra = obras.find(o => o.id == req.params.id);
    if (obra) {
        res.render('obra', { obra });
    } else {
        res.status(404).send('Obra no encontrada');
    }
});

// Acerca de
router.get('/acerca', (req, res) => {
    res.render('acerca');
});

export default router;
