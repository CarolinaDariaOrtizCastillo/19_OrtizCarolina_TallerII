import { Component } from '@angular/core'; // Quité signal porque no lo usas
import { ApiService } from './services/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  title = 'Listado de Usuarios desde API';

  post: any[] = [];

  // PAGINACIÓN
  paginaActual: number = 1;
  itemsPorPagina: number = 5;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.cargarPost();
  }

  cargarPost() {
    this.apiService.getPosts().subscribe({
      next: (data: any) => {
        // Guardamos los usuarios y verificamos en consola
        this.post = data.users;
        console.log('Datos cargados con éxito:', this.post);
      },
      error: (e) => {
        console.error('Error al llamar a la API:', e);
      }
      // Se eliminó el segundo bloque "error" que causaba el fallo TS1117
    });
  }

  get postPaginados() {
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    return this.post.slice(inicio, inicio + this.itemsPorPagina);
  }

  siguientePagina() {
    if ((this.paginaActual * this.itemsPorPagina) < this.post.length) {
      this.paginaActual++;
    }
  }

  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  } 
}