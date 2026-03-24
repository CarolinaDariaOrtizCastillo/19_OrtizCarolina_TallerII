# 🚀 Angular User List API

Proyecto desarrollado en **Angular** que consume una API externa para mostrar un listado de usuarios con diseño interactivo y paginación funcional.

## 🛠️ Características Implementadas
* **Consumo de API:** Conexión con `https://dummyjson.com/users` mediante `HttpClient`.
* **Servicio Centralizado:** Uso de `ApiService` para gestionar las peticiones `GET`.
* **Paginación Dinámica:** Lógica en TypeScript para mostrar **5 ítems por página** (3 arriba, 2 abajo centrados).
* **Diseño Personalizado:** * Paleta de colores: `#BAD8B6`, `#E1EACD`, `#F9F6E6`, `#8D77AB`.
    * Efectos **Hover**: Levitación de tarjetas (`translateY`) y rotación de imágenes.
* **Componentes Standalone:** Arquitectura modular y limpia.

## 📦 Tecnologías Utilizadas
* **Angular** (Componentes, Servicios, Directivas `*ngFor` / `*ngIf`).
* **TypeScript** (Lógica de arreglos y métodos de navegación).
* **CSS Moderno** (Flexbox para alineación exacta y Transiciones suaves).

## 🚀 Ejecución
1. Instalar dependencias: `npm install`
2. Correr servidor local: `ng serve`
3. Abrir en: `http://localhost:4200`


# ANGULAR
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
