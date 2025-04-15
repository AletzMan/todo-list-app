import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { Categories } from '../../constants';
import { CheckboxModule } from 'primeng/checkbox';

interface Task {
  name: string
  sub_tasks: string[]
  date: string
  category: Categories
  total_tasks: number
  completed_tasks: number
}

type Categories = 'work' | 'sport' | 'study' | 'social' | 'home' | 'shopping' | 'travel' | 'movie' | 'music'

const taskTypeIcons: { [key: string]: string } = {
  'Overdue': 'pi pi-exclamation-circle',
  'Upcoming': 'pi pi-clock',
  'Completed': 'pi pi-check-circle'
};

@Component({
  selector: 'app-todaytasks',
  standalone: true,
  imports: [
    ProgressBarModule,
    CheckboxModule
  ],
  templateUrl: './todaytasks.component.html',
  styleUrl: './todaytasks.component.scss'
})
export class TodaytasksComponent implements OnInit {
  @Input() taskType: 'Overdue' | 'Upcoming' | 'Completed' = "Overdue";

  taskIcon: string = '';
  cetegories = Categories;

  tasks: Task[] = [
    {
      name: 'Preparar informe de ventas',
      sub_tasks: ['Recopilar datos', 'Analizar tendencias', 'Escribir resumen ejecutivo', 'Enviar borrador'],
      date: '2025-04-16',
      category: 'work',
      total_tasks: 4,
      completed_tasks: 1
    },
    {
      name: 'Reunión con equipo de marketing',
      sub_tasks: ['Preparar agenda', 'Discutir campaña actual', 'Brainstorming nuevas ideas', 'Tomar notas'],
      date: '2025-04-17',
      category: 'work',
      total_tasks: 4,
      completed_tasks: 0
    },
    {
      name: 'Responder correos electrónicos de clientes',
      sub_tasks: ['Revisar bandeja de entrada', 'Priorizar correos', 'Redactar respuestas', 'Hacer seguimiento si es necesario'],
      date: '2025-04-15',
      category: 'work',
      total_tasks: 4,
      completed_tasks: 3
    },

    // Sport
    {
      name: 'Entrenamiento de carrera',
      sub_tasks: ['Calentamiento (10 min)', 'Carrera continua (30 min)', 'Estiramientos (15 min)'],
      date: '2025-04-18',
      category: 'sport',
      total_tasks: 3,
      completed_tasks: 2
    },
    {
      name: 'Partido de fútbol con amigos',
      sub_tasks: ['Confirmar asistencia', 'Llevar balón', 'Organizar equipos', 'Jugar'],
      date: '2025-04-20',
      category: 'sport',
      total_tasks: 4,
      completed_tasks: 4
    },
    {
      name: 'Sesión de yoga',
      sub_tasks: ['Preparar la esterilla', 'Seguir rutina online', 'Relajación final'],
      date: '2025-04-19',
      category: 'sport',
      total_tasks: 3,
      completed_tasks: 1
    },

    // Study
    {
      name: 'Leer capítulo del libro de historia',
      sub_tasks: ['Seleccionar el capítulo', 'Tomar notas mientras leo', 'Resaltar puntos importantes'],
      date: '2025-04-21',
      category: 'study',
      total_tasks: 3,
      completed_tasks: 0
    },
    {
      name: 'Preparar presentación de biología',
      sub_tasks: ['Investigar tema', 'Crear diapositivas', 'Practicar la exposición'],
      date: '2025-04-23',
      category: 'study',
      total_tasks: 3,
      completed_tasks: 1
    },
    {
      name: 'Hacer ejercicios de matemáticas',
      sub_tasks: ['Revisar la teoría', 'Resolver los problemas asignados', 'Verificar las respuestas'],
      date: '2025-04-22',
      category: 'study',
      total_tasks: 3,
      completed_tasks: 3
    },

    // Social
    {
      name: 'Cena con amigos',
      sub_tasks: ['Elegir restaurante', 'Hacer reserva', 'Confirmar asistencia', 'Disfrutar de la noche'],
      date: '2025-04-24',
      category: 'social',
      total_tasks: 4,
      completed_tasks: 2
    },
    {
      name: 'Ir al cine',
      sub_tasks: ['Elegir película', 'Comprar entradas', 'Comprar palomitas', 'Ver la película'],
      date: '2025-04-25',
      category: 'social',
      total_tasks: 4,
      completed_tasks: 4
    },
    {
      name: 'Visitar a mis padres',
      sub_tasks: ['Planificar el viaje', 'Comprar un regalo pequeño', 'Pasar tiempo con ellos'],
      date: '2025-04-26',
      category: 'social',
      total_tasks: 3,
      completed_tasks: 0
    },

    // Home
    {
      name: 'Limpiar la casa',
      sub_tasks: ['Barrer/aspirar', 'Limpiar baños', 'Quitar el polvo', 'Lavar los platos'],
      date: '2025-04-27',
      category: 'home',
      total_tasks: 4,
      completed_tasks: 1
    },
    {
      name: 'Lavar la ropa',
      sub_tasks: ['Separar la ropa', 'Poner la lavadora', 'Secar la ropa', 'Doblar y guardar'],
      date: '2025-04-28',
      category: 'home',
      total_tasks: 4,
      completed_tasks: 4
    },
    {
      name: 'Regar las plantas',
      sub_tasks: ['Revisar qué plantas necesitan agua', 'Regar cada una cuidadosamente'],
      date: '2025-04-29',
      category: 'home',
      total_tasks: 2,
      completed_tasks: 2
    },

    // Shopping
    {
      name: 'Comprar comestibles',
      sub_tasks: ['Hacer la lista', 'Ir al supermercado', 'Comprar los artículos', 'Guardar todo'],
      date: '2025-04-30',
      category: 'shopping',
      total_tasks: 4,
      completed_tasks: 3
    },
    {
      name: 'Comprar regalo de cumpleaños',
      sub_tasks: ['Pensar en ideas', 'Buscar en tiendas/online', 'Comprar y envolver el regalo'],
      date: '2025-05-01',
      category: 'shopping',
      total_tasks: 3,
      completed_tasks: 0
    },
    {
      name: 'Comprar ropa nueva',
      sub_tasks: ['Revisar mi armario', 'Ir de compras', 'Probarme la ropa', 'Pagar'],
      date: '2025-05-02',
      category: 'shopping',
      total_tasks: 4,
      completed_tasks: 2
    },

    // Travel
    {
      name: 'Planificar viaje de fin de semana',
      sub_tasks: ['Elegir destino', 'Reservar alojamiento', 'Planificar actividades', 'Empacar'],
      date: '2025-05-03',
      category: 'travel',
      total_tasks: 4,
      completed_tasks: 1
    },
    {
      name: 'Reservar vuelo',
      sub_tasks: ['Buscar opciones', 'Comparar precios', 'Completar la reserva', 'Recibir confirmación'],
      date: '2025-05-04',
      category: 'travel',
      total_tasks: 4,
      completed_tasks: 4
    },
    {
      name: 'Hacer maletas',
      sub_tasks: ['Hacer lista de lo necesario', 'Doblar la ropa', 'Organizar la maleta'],
      date: '2025-05-05',
      category: 'travel',
      total_tasks: 3,
      completed_tasks: 3
    },

    // Movie
    {
      name: 'Ver película pendiente',
      sub_tasks: ['Elegir la película', 'Preparar snacks', 'Poner subtítulos si es necesario', 'Disfrutar'],
      date: '2025-05-06',
      category: 'movie',
      total_tasks: 4,
      completed_tasks: 0
    },
    {
      name: 'Ir al estreno de la nueva película',
      sub_tasks: ['Comprar entradas', 'Llegar a tiempo', 'Comprar algo para comer', 'Ver la película'],
      date: '2025-05-07',
      category: 'movie',
      total_tasks: 4,
      completed_tasks: 4
    },
    {
      name: 'Noche de películas en casa',
      sub_tasks: ['Elegir varias películas', 'Preparar bebidas', 'Acomodarse en el sofá'],
      date: '2025-05-08',
      category: 'movie',
      total_tasks: 3,
      completed_tasks: 2
    },

    // Music
    {
      name: 'Escuchar nuevo álbum',
      sub_tasks: ['Buscar el álbum', 'Poner los auriculares', 'Disfrutar de cada canción'],
      date: '2025-05-09',
      category: 'music',
      total_tasks: 3,
      completed_tasks: 1
    },
    {
      name: 'Aprender una nueva canción en la guitarra',
      sub_tasks: ['Buscar tutorial', 'Practicar los acordes', 'Intentar tocar la melodía completa'],
      date: '2025-05-10',
      category: 'music',
      total_tasks: 3,
      completed_tasks: 0
    },
    {
      name: 'Ir a un concierto',
      sub_tasks: ['Comprar entrada', 'Llegar al lugar', 'Disfrutar de la música en vivo'],
      date: '2025-05-11',
      category: 'music',
      total_tasks: 3,
      completed_tasks: 3
    }
  ];

  ngOnInit(): void {
    this.taskIcon = this.getIconForType(this.taskType);
  }

  getIconForType(type: 'Overdue' | 'Upcoming' | 'Completed'): string {
    return taskTypeIcons[type] || 'pi pi-question'; // Icono por defecto si no se encuentra
  }
}