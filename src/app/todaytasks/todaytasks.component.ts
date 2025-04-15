import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { Categories } from '../../utils/constants';
import { CheckboxModule } from 'primeng/checkbox';
import { TaskviewComponent } from '../taskview/taskview.component';
import { TabMenuModule } from 'primeng/tabmenu';

export interface Task {
  name: string
  sub_tasks: string[]
  date: string
  category: Categories
  completed_tasks: boolean[]
  status: 'Overdue' | 'Upcoming' | 'Completed'
}

type Categories = 'work' | 'sport' | 'study' | 'social' | 'home' | 'shopping' | 'travel' | 'movie' | 'music';

@Component({
  selector: 'app-todaytasks',
  standalone: true,
  imports: [
    ProgressBarModule,
    CheckboxModule,
    TaskviewComponent,
    TabMenuModule
  ],
  templateUrl: './todaytasks.component.html',
  styleUrl: './todaytasks.component.scss'
})
export class TodaytasksComponent {

  selectedType: 'Overdue' | 'Upcoming' | 'Completed' = 'Overdue'

  items = [
    { label: 'Overdue ', icon: 'pi pi-calendar-times', command: () => { this.selectedType = "Overdue" } },
    { label: 'Upcoming ', icon: 'pi pi pi-hourglass', command: () => this.selectedType = "Upcoming" },
    { label: 'Completed ', icon: 'pi pi-check-square', command: () => this.selectedType = "Completed" },
  ]


  tasks: Task[] = [
    // Work
    {
      name: 'Enviar informe mensual',
      sub_tasks: ['Recopilar datos', 'Analizar tendencias', 'Escribir resumen ejecutivo', 'Enviar borrador'],
      date: '2025-04-10',
      category: 'work',
      completed_tasks: [true, false, false, false],
      status: 'Overdue'
    },
    {
      name: 'Revisar propuesta del cliente X',
      sub_tasks: ['Leer la propuesta', 'Anotar comentarios', 'Enviar feedback'],
      date: '2025-04-12',
      category: 'work',
      completed_tasks: [false, false, false],
      status: 'Overdue'
    },
    {
      name: 'Llamar al proveedor Z',
      sub_tasks: ['Buscar número', 'Realizar la llamada', 'Tomar nota de la conversación'],
      date: '2025-04-14',
      category: 'work',
      completed_tasks: [false, false, false],
      status: 'Overdue'
    },
    {
      name: 'Preparar presentación para el martes',
      sub_tasks: ['Crear diapositivas', 'Practicar la exposición'],
      date: '2025-04-16',
      category: 'work',
      completed_tasks: [false, false],
      status: 'Upcoming'
    },
    {
      name: 'Revisar el diseño del banner',
      sub_tasks: ['Abrir el archivo', 'Dar feedback al diseñador'],
      date: '2025-04-16',
      category: 'work',
      completed_tasks: [false, false],
      status: 'Upcoming'
    },

    // Sport
    {
      name: 'Entrenamiento de carrera',
      sub_tasks: ['Calentamiento (10 min)', 'Carrera continua (30 min)', 'Estiramientos (15 min)'],
      date: '2025-04-18',
      category: 'sport',
      completed_tasks: [true, true, false],
      status: 'Upcoming'
    },
    {
      name: 'Partido de fútbol con amigos',
      sub_tasks: ['Confirmar asistencia', 'Llevar balón', 'Organizar equipos', 'Jugar'],
      date: '2025-04-20',
      category: 'sport',
      completed_tasks: [true, true, true, true],
      status: 'Upcoming'
    },
    {
      name: 'Sesión de yoga',
      sub_tasks: ['Preparar la esterilla', 'Seguir rutina online', 'Relajación final'],
      date: '2025-04-19',
      category: 'sport',
      completed_tasks: [true, false, false],
      status: 'Upcoming'
    },
    {
      name: 'Ir al gimnasio (ayer)',
      sub_tasks: ['Preparar la ropa', 'Ir al gimnasio', 'Hacer rutina'],
      date: '2025-04-14',
      category: 'sport',
      completed_tasks: [true, false, true],
      status: 'Completed'
    },
    {
      name: 'Nadar en la piscina',
      sub_tasks: ['Buscar traje de baño', 'Ir a la piscina', 'Nadar unos largos'],
      date: '2025-04-17',
      category: 'sport',
      completed_tasks: [true, true, true],
      status: 'Upcoming'
    },

    // Study
    {
      name: 'Leer capítulo del libro de historia',
      sub_tasks: ['Seleccionar el capítulo', 'Tomar notas mientras leo', 'Resaltar puntos importantes'],
      date: '2025-04-21',
      category: 'study',
      completed_tasks: [false, false, false],
      status: 'Upcoming'
    },
    {
      name: 'Preparar presentación de biología',
      sub_tasks: ['Investigar tema', 'Crear diapositivas', 'Practicar la exposición'],
      date: '2025-04-23',
      category: 'study',
      completed_tasks: [false, true, false],
      status: 'Upcoming'
    },
    {
      name: 'Hacer ejercicios de matemáticas',
      sub_tasks: ['Revisar la teoría', 'Resolver los problemas asignados', 'Verificar las respuestas'],
      date: '2025-04-22',
      category: 'study',
      completed_tasks: [true, true, true],
      status: 'Upcoming'
    },
    {
      name: 'Escribir ensayo de literatura',
      sub_tasks: ['Elegir tema', 'Hacer borrador', 'Revisar y editar'],
      date: '2025-04-13',
      category: 'study',
      completed_tasks: [true, true, false],
      status: 'Completed'
    },
    {
      name: 'Estudiar para el examen de física',
      sub_tasks: ['Repasar fórmulas', 'Resolver problemas de ejemplo'],
      date: '2025-04-16',
      category: 'study',
      completed_tasks: [false, false],
      status: 'Upcoming'
    },

    // Social
    {
      name: 'Cena con amigos',
      sub_tasks: ['Elegir restaurante', 'Hacer reserva', 'Confirmar asistencia', 'Disfrutar de la noche'],
      date: '2025-04-24',
      category: 'social',
      completed_tasks: [true, true, false, false],
      status: 'Upcoming'
    },
    {
      name: 'Ir al cine',
      sub_tasks: ['Elegir película', 'Comprar entradas', 'Comprar palomitas', 'Ver la película'],
      date: '2025-04-25',
      category: 'social',
      completed_tasks: [true, true, true, true],
      status: 'Upcoming'
    },
    {
      name: 'Visitar a mis padres',
      sub_tasks: ['Planificar el viaje', 'Comprar un regalo pequeño', 'Pasar tiempo con ellos'],
      date: '2025-04-26',
      category: 'social',
      completed_tasks: [false, false, false],
      status: 'Upcoming'
    },
    {
      name: 'Llamar a un familiar',
      sub_tasks: ['Buscar número', 'Hacer la llamada', 'Ponerse al día'],
      date: '2025-04-14',
      category: 'social',
      completed_tasks: [true, true, true],
      status: 'Completed'
    },
    {
      name: 'Organizar una salida al parque',
      sub_tasks: ['Invitar amigos', 'Preparar algo para comer', 'Elegir el lugar'],
      date: '2025-04-17',
      category: 'social',
      completed_tasks: [false, false, false],
      status: 'Upcoming'
    },

    // Home
    {
      name: 'Limpiar la casa',
      sub_tasks: ['Barrer/aspirar', 'Limpiar baños', 'Quitar el polvo', 'Lavar los platos'],
      date: '2025-04-27',
      category: 'home',
      completed_tasks: [true, false, false, false],
      status: 'Upcoming'
    },
    {
      name: 'Lavar la ropa',
      sub_tasks: ['Separar la ropa', 'Poner la lavadora', 'Secar la ropa', 'Doblar y guardar'],
      date: '2025-04-28',
      category: 'home',
      completed_tasks: [true, true, true, true],
      status: 'Upcoming'
    },
    {
      name: 'Regar las plantas',
      sub_tasks: ['Revisar qué plantas necesitan agua', 'Regar cada una cuidadosamente'],
      date: '2025-04-29',
      category: 'home',
      completed_tasks: [true, true],
      status: 'Upcoming'
    },
    {
      name: 'Hacer la compra',
      sub_tasks: ['Hacer la lista', 'Ir al supermercado', 'Guardar todo'],
      date: '2025-04-15',
      category: 'home',
      completed_tasks: [true, true, true],
      status: 'Completed'
    },
    {
      name: 'Arreglar el jardín',
      sub_tasks: ['Cortar el césped', 'Regar las flores'],
      date: '2025-04-16',
      category: 'home',
      completed_tasks: [false, false],
      status: 'Upcoming'
    },
  ];

}