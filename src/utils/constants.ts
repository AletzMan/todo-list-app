import { Task } from "../app/pages/todaytasks-page/todaytasks-page.component";

export const Categories = {
    work: {
        icon: "pi pi-briefcase",
        name: "Work",
        id: 0
    },
    sport: {
        icon: "pi pi-heart",
        name: "Sport",
        id: 1
    },
    study: {
        icon: "pi pi-graduation-cap",
        name: "Study",
        id: 2
    },
    social: {
        icon: "pi pi-megaphone",
        name: "Social",
        id: 3
    },
    home: {
        icon: "pi pi-home",
        name: "Home",
        id: 4
    },
    shopping: {
        icon: "pi pi-shopping-bag",
        name: "Shopping",
        id: 5
    },
    travel: {
        icon: "pi pi-car",
        name: "Travel",
        id: 6
    },
    movie: {
        icon: "pi pi-video",
        name: "Movie",
        id: 7
    },
    music: {
        icon: "pi pi-headphones",
        name: "Music",
        id: 8
    },
}

export const CategoriesArray = [
    { icon: 'pi pi-briefcase', name: 'Show all', id: 0, key: 'all' },
    { icon: 'pi pi-briefcase', name: 'Work', id: 0, key: 'work' },
    { icon: 'pi pi-heart', name: 'Sport', id: 1, key: 'sport' },
    { icon: 'pi pi-graduation-cap', name: 'Study', id: 2, key: 'study' },
    { icon: 'pi pi-megaphone', name: 'Social', id: 3, key: 'social' },
    { icon: 'pi pi-home', name: 'Home', id: 4, key: 'home' },
    { icon: 'pi pi-shopping-bag', name: 'Shopping', id: 5, key: 'shopping' },
    { icon: 'pi pi-car', name: 'Travel', id: 6, key: 'travel' },
    { icon: 'pi pi-video', name: 'Movie', id: 7, key: 'movie' },
    { icon: 'pi pi-headphones', name: 'Music', id: 8, key: 'music' }
]

export const StatusArray = [
    {
        key: 'all',
        name: 'Show all',
        icon: 'pi pi-exclamation-circle'
    },
    {
        key: 'overdue',
        name: 'Overdue',
        icon: 'pi pi-exclamation-circle'
    },
    {
        key: 'upcoming',
        name: 'Upcoming',
        icon: 'pi pi-clock'
    },
    {
        key: 'completed',
        name: 'Completed',
        icon: 'pi pi-check-circle'
    }
];
export const TasksArray: Task[] = [
    // Work
    {
        name: 'Enviar informe mensual',
        sub_tasks: [
            { id: 'work-1-1', name: 'Recopilar datos', label: 'Recopilar datos' },
            { id: 'work-1-2', name: 'Analizar tendencias', label: 'Analizar tendencias' },
            { id: 'work-1-3', name: 'Escribir resumen ejecutivo', label: 'Escribir resumen ejecutivo' },
            { id: 'work-1-4', name: 'Enviar borrador', label: 'Enviar borrador' },
        ],
        date: '2025-04-10',
        category: 'work',
        completed_tasks: [true, false, false, false],
        status: 'Overdue',
    },
    {
        name: 'Revisar propuesta del cliente X',
        sub_tasks: [
            { id: 'work-2-1', name: 'Leer la propuesta', label: 'Leer la propuesta' },
            { id: 'work-2-2', name: 'Anotar comentarios', label: 'Anotar comentarios' },
            { id: 'work-2-3', name: 'Enviar feedback', label: 'Enviar feedback' },
        ],
        date: '2025-04-12',
        category: 'work',
        completed_tasks: [false, false, false],
        status: 'Overdue',
    },
    {
        name: 'Llamar al proveedor Z',
        sub_tasks: [
            { id: 'work-3-1', name: 'Buscar número', label: 'Buscar número' },
            { id: 'work-3-2', name: 'Realizar la llamada', label: 'Realizar la llamada' },
            { id: 'work-3-3', name: 'Tomar nota de la conversación', label: 'Tomar nota de la conversación' },
        ],
        date: '2025-04-14',
        category: 'work',
        completed_tasks: [false, false, false],
        status: 'Overdue',
    },
    {
        name: 'Preparar presentación para el martes',
        sub_tasks: [
            { id: 'work-4-1', name: 'Crear diapositivas', label: 'Crear diapositivas' },
            { id: 'work-4-2', name: 'Practicar la exposición', label: 'Practicar la exposición' },
        ],
        date: '2025-04-16',
        category: 'work',
        completed_tasks: [false, false],
        status: 'Upcoming',
    },
    {
        name: 'Revisar el diseño del banner',
        sub_tasks: [
            { id: 'work-5-1', name: 'Abrir el archivo', label: 'Abrir el archivo' },
            { id: 'work-5-2', name: 'Dar feedback al diseñador', label: 'Dar feedback al diseñador' },
        ],
        date: '2025-04-16',
        category: 'work',
        completed_tasks: [false, false],
        status: 'Upcoming',
    },

    // Sport
    {
        name: 'Entrenamiento de carrera',
        sub_tasks: [
            { id: 'sport-1-1', name: 'Calentamiento (10 min)', label: 'Calentamiento (10 min)' },
            { id: 'sport-1-2', name: 'Carrera continua (30 min)', label: 'Carrera continua (30 min)' },
            { id: 'sport-1-3', name: 'Estiramientos (15 min)', label: 'Estiramientos (15 min)' },
        ],
        date: '2025-04-18',
        category: 'sport',
        completed_tasks: [true, true, false],
        status: 'Upcoming',
    },
    {
        name: 'Partido de fútbol con amigos',
        sub_tasks: [
            { id: 'sport-2-1', name: 'Confirmar asistencia', label: 'Confirmar asistencia' },
            { id: 'sport-2-2', name: 'Llevar balón', label: 'Llevar balón' },
            { id: 'sport-2-3', name: 'Organizar equipos', label: 'Organizar equipos' },
            { id: 'sport-2-4', name: 'Jugar', label: 'Jugar' },
        ],
        date: '2025-04-20',
        category: 'sport',
        completed_tasks: [true, true, true, true],
        status: 'Upcoming',
    },
    {
        name: 'Sesión de yoga',
        sub_tasks: [
            { id: 'sport-3-1', name: 'Preparar la esterilla', label: 'Preparar la esterilla' },
            { id: 'sport-3-2', name: 'Seguir rutina online', label: 'Seguir rutina online' },
            { id: 'sport-3-3', name: 'Relajación final', label: 'Relajación final' },
        ],
        date: '2025-04-19',
        category: 'sport',
        completed_tasks: [true, false, false],
        status: 'Upcoming',
    },
    {
        name: 'Ir al gimnasio (ayer)',
        sub_tasks: [
            { id: 'sport-4-1', name: 'Preparar la ropa', label: 'Preparar la ropa' },
            { id: 'sport-4-2', name: 'Ir al gimnasio', label: 'Ir al gimnasio' },
            { id: 'sport-4-3', name: 'Hacer rutina', label: 'Hacer rutina' },
        ],
        date: '2025-04-14',
        category: 'sport',
        completed_tasks: [true, false, true],
        status: 'Completed',
    },
    {
        name: 'Nadar en la piscina',
        sub_tasks: [
            { id: 'sport-5-1', name: 'Buscar traje de baño', label: 'Buscar traje de baño' },
            { id: 'sport-5-2', name: 'Ir a la piscina', label: 'Ir a la piscina' },
            { id: 'sport-5-3', name: 'Nadar unos largos', label: 'Nadar unos largos' },
        ],
        date: '2025-04-17',
        category: 'sport',
        completed_tasks: [true, true, true],
        status: 'Upcoming',
    },

    // Study
    {
        name: 'Leer capítulo del libro de historia',
        sub_tasks: [
            { id: 'study-1-1', name: 'Seleccionar el capítulo', label: 'Seleccionar el capítulo' },
            { id: 'study-1-2', name: 'Tomar notas mientras leo', label: 'Tomar notas mientras leo' },
            { id: 'study-1-3', name: 'Resaltar puntos importantes', label: 'Resaltar puntos importantes' },
        ],
        date: '2025-04-21',
        category: 'study',
        completed_tasks: [false, false, false],
        status: 'Upcoming',
    },
    {
        name: 'Preparar presentación de biología',
        sub_tasks: [
            { id: 'study-2-1', name: 'Investigar tema', label: 'Investigar tema' },
            { id: 'study-2-2', name: 'Crear diapositivas', label: 'Crear diapositivas' },
            { id: 'study-2-3', name: 'Practicar la exposición', label: 'Practicar la exposición' },
        ],
        date: '2025-04-23',
        category: 'study',
        completed_tasks: [false, true, false],
        status: 'Upcoming',
    },
    {
        name: 'Hacer ejercicios de matemáticas',
        sub_tasks: [
            { id: 'study-3-1', name: 'Revisar la teoría', label: 'Revisar la teoría' },
            { id: 'study-3-2', name: 'Resolver los problemas asignados', label: 'Resolver los problemas asignados' },
            { id: 'study-3-3', name: 'Verificar las respuestas', label: 'Verificar las respuestas' },
        ],
        date: '2025-04-22',
        category: 'study',
        completed_tasks: [true, true, true],
        status: 'Upcoming',
    },
    {
        name: 'Escribir ensayo de literatura',
        sub_tasks: [
            { id: 'study-4-1', name: 'Elegir tema', label: 'Elegir tema' },
            { id: 'study-4-2', name: 'Hacer borrador', label: 'Hacer borrador' },
            { id: 'study-4-3', name: 'Revisar y editar', label: 'Revisar y editar' },
        ],
        date: '2025-04-13',
        category: 'study',
        completed_tasks: [true, true, false],
        status: 'Completed',
    },
    {
        name: 'Estudiar para el examen de física',
        sub_tasks: [
            { id: 'study-5-1', name: 'Repasar fórmulas', label: 'Repasar fórmulas' },
            { id: 'study-5-2', name: 'Resolver problemas de ejemplo', label: 'Resolver problemas de ejemplo' },
        ],
        date: '2025-04-16',
        category: 'study',
        completed_tasks: [false, false],
        status: 'Upcoming',
    },

    // Social
    {
        name: 'Cena con amigos',
        sub_tasks: [
            { id: 'social-1-1', name: 'Elegir restaurante', label: 'Elegir restaurante' },
            { id: 'social-1-2', name: 'Hacer reserva', label: 'Hacer reserva' },
            { id: 'social-1-3', name: 'Confirmar asistencia', label: 'Confirmar asistencia' },
            { id: 'social-1-4', name: 'Disfrutar de la noche', label: 'Disfrutar de la noche' },
        ],
        date: '2025-04-24',
        category: 'social',
        completed_tasks: [true, true, false, false],
        status: 'Upcoming',
    },
    {
        name: 'Ir al cine',
        sub_tasks: [
            { id: 'social-2-1', name: 'Elegir película', label: 'Elegir película' },
            { id: 'social-2-2', name: 'Comprar entradas', label: 'Comprar entradas' },
            { id: 'social-2-3', name: 'Comprar palomitas', label: 'Comprar palomitas' },
            { id: 'social-2-4', name: 'Ver la película', label: 'Ver la película' },
        ],
        date: '2025-04-25',
        category: 'social',
        completed_tasks: [true, true, true, true],
        status: 'Upcoming',
    },
    {
        name: 'Visitar a mis padres',
        sub_tasks: [
            { id: 'social-3-1', name: 'Planificar el viaje', label: 'Planificar el viaje' },
            { id: 'social-3-2', name: 'Comprar un regalo pequeño', label: 'Comprar un regalo pequeño' },
            { id: 'social-3-3', name: 'Pasar tiempo con ellos', label: 'Pasar tiempo con ellos' },
        ],
        date: '2025-04-26',
        category: 'social',
        completed_tasks: [false, false, false],
        status: 'Upcoming',
    },
    {
        name: 'Llamar a un familiar',
        sub_tasks: [
            { id: 'social-4-1', name: 'Buscar número', label: 'Buscar número' },
            { id: 'social-4-2', name: 'Hacer la llamada', label: 'Hacer la llamada' },
            { id: 'social-4-3', name: 'Ponerse al día', label: 'Ponerse al día' },
        ],
        date: '2025-04-14',
        category: 'social',
        completed_tasks: [true, true, true],
        status: 'Completed',
    },
    {
        name: 'Organizar una salida al parque',
        sub_tasks: [
            { id: 'social-5-1', name: 'Invitar amigos', label: 'Invitar amigos' },
            { id: 'social-5-2', name: 'Preparar algo para comer', label: 'Preparar algo para comer' },
            { id: 'social-5-3', name: 'Elegir el lugar', label: 'Elegir el lugar' },
        ],
        date: '2025-04-17',
        category: 'social',
        completed_tasks: [false, false, false],
        status: 'Upcoming',
    },

    // Home
    {
        name: 'Limpiar la casa',
        sub_tasks: [
            { id: 'home-1-1', name: 'Barrer/aspirar', label: 'Barrer/aspirar' },
            { id: 'home-1-2', name: 'Limpiar baños', label: 'Limpiar baños' },
            { id: 'home-1-3', name: 'Quitar el polvo', label: 'Quitar el polvo' },
            { id: 'home-1-4', name: 'Lavar los platos', label: 'Lavar los platos' },
        ],
        date: '2025-04-27',
        category: 'home',
        completed_tasks: [true, false, false, false],
        status: 'Upcoming',
    },
    {
        name: 'Lavar la ropa',
        sub_tasks: [
            { id: 'home-2-1', name: 'Separar la ropa', label: 'Separar la ropa' },
            { id: 'home-2-2', name: 'Poner la lavadora', label: 'Poner la lavadora' },
            { id: 'home-2-3', name: 'Secar la ropa', label: 'Secar la ropa' },
            { id: 'home-2-4', name: 'Doblar y guardar', label: 'Doblar y guardar' },
        ],
        date: '2025-04-28',
        category: 'home',
        completed_tasks: [true, true, true, true],
        status: 'Upcoming',
    },
    {
        name: 'Regar las plantas',
        sub_tasks: [
            { id: 'home-3-1', name: 'Revisar qué plantas necesitan agua', label: 'Revisar qué plantas necesitan agua' },
            { id: 'home-3-2', name: 'Regar cada una cuidadosamente', label: 'Regar cada una cuidadosamente' },
        ],
        date: '2025-04-29',
        category: 'home',
        completed_tasks: [true, true],
        status: 'Upcoming',
    },
    {
        name: 'Hacer la compra',
        sub_tasks: [
            { id: 'home-4-1', name: 'Hacer la lista', label: 'Hacer la lista' },
            { id: 'home-4-2', name: 'Ir al supermercado', label: 'Ir al supermercado' },
            { id: 'home-4-3', name: 'Guardar todo', label: 'Guardar todo' },
        ],
        date: '2025-04-15',
        category: 'home',
        completed_tasks: [true, true, true],
        status: 'Completed',
    },
    {
        name: 'Arreglar el jardín',
        sub_tasks: [
            { id: 'home-5-1', name: 'Cortar el césped', label: 'Cortar el césped' },
            { id: 'home-5-2', name: 'Regar las flores', label: 'Regar las flores' },
        ],
        date: '2025-04-16',
        category: 'home',
        completed_tasks: [false, false],
        status: 'Upcoming',
    },
];