# Ticket-Globant

Ticket-Globant es una aplicación web desarrollada con React para ver y comprar entradas de conciertos. La aplicación permite a los usuarios navegar por una lista de conciertos, aplicar filtros para refinar la búsqueda, ver detalles de cada evento y gestionar un carrito de la compra.

## Características

- Listado de conciertos:**  
  Visualiza una lista de conciertos disponibles y utiliza filtros para buscar por artista, ciudad, fecha y rango de precios.

- Detalles del concierto:**  
  Accede a información detallada de cada concierto, incluyendo descripción, ubicación, fecha y precio.

- Cesta de la compra  
  Añade conciertos a la cesta, actualiza cantidades, elimina entradas y confirma la compra con un proceso interactivo.

- Doble fuente de datos  
  Alternar entre el uso de datos locales (una matriz de conciertos) o datos obtenidos de una API, controlado por un conmutador en la interfaz.

- Actualizaciones en tiempo real  
  Componentes interactivos y notificaciones (por ejemplo, mensajes de éxito o error al añadir entradas).

## Tecnologías utilizadas

- **React:** Biblioteca para construir la interfaz de usuario.
- **React Router:** Gestión de rutas y navegación entre vistas.
- **Context API:** Gestión del estado global a través de `CartContext` y `FilterContext`.
- **Custom Hooks:** Ejemplo, `useFilteredConcerts` para filtrar la lista de conciertos.
- **CSS:** Estilos personalizados y módulos CSS para dar formato a los componentes.
- **Vitest:** Framework para pruebas.

## Instalación

1. **Clonar el repositorio:**

# Ticket-Globant

Ticket-Globant es una aplicación web desarrollada con React para ver y comprar entradas de conciertos. La aplicación permite navegar por una lista de conciertos, aplicar filtros para refinar la búsqueda, ver información detallada de cada evento y gestionar un carrito de la compra.

## Instalación

1. **Clone el repositorio:**

git clone https://github.com/tuusuario/Ticket-Malaga.git
cd Ticket-Malaga

# Instalar dependencias:
npm install

# Iniciar el servidor de desarrollo:
npm start
# La aplicación estará disponible en https://ticket-malaga.vercel.app/


## Fuente de datos: API vs. Datos Locales

La aplicación permite elegir entre dos fuentes de datos para la lista de conciertos:

- **Datos Locales:**  
  Los conciertos se obtienen de un fichero (por ejemplo, `src/data/concerts.js`) y se filtran localmente usando el hook personalizado `useFilteredConcerts`.

- Datos de la API:**  
  Cuando se desactiva el modo local (configurado mediante un conmutador o selector), la aplicación realiza una llamada a la API XXX para obtener la lista de conciertos.

## Cómo utilizar la aplicación

### Página de Inicio

- Listado de conciertos  
  Muestra una lista de conciertos.
- **Funcionalidad del filtro:**  
  Utilice el **FilterBar** para buscar conciertos por artista, ciudad, fecha o rango de precios.
- Conciertos destacados  
  La vista principal incluye el componente **MainEvent**, que muestra aleatoriamente un concierto destacado cada 5 segundos.

### Detalles del concierto

Al hacer clic en un concierto, se muestra la vista **ConcertDetail** con información ampliada y la opción de añadir entradas al carrito.

### Cesta de la compra

- El componente **ActiveCart** permite ver los artículos añadidos, modificar las cantidades, eliminar entradas y confirmar la compra.
- Si el carro está vacío, se muestra la vista **CarroVacío** con un mensaje y la opción de volver a la tienda.

### Navegación

- El **Header** contiene el logo, el **FilterBar**, y un botón para acceder al carrito.
- La navegación entre vistas se gestiona con React Router.

## Personalización y Extensión

- **Modificar datos locales:**  
  Edita el archivo en `src/data/concerts.js` para actualizar o ampliar la lista de conciertos.
- **Actualizar la API:**  
  Si quieres cambiar la fuente de datos, modifica la URL en el hook `useFilteredConcerts.js`.
- **Estilos y componentes:**  
  Los estilos se encuentran en archivos CSS dentro de cada componente. Puedes personalizarlos según la identidad visual de tu proyecto.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

---


# Ticket-Globant

Ticket-Globant is a web application developed with React for viewing and purchasing concert tickets. The application allows users to browse a list of concerts, apply filters to refine the search, view details of each event, and manage a shopping cart.

## Features

- **Concert Listing:**  
  Visualize a list of available concerts and use filters to search by artist, city, date, and price range.

- **Concert Details:**  
  Access detailed information for each concert, including description, location, date, and price.

- **Shopping Cart:**  
  Add concerts to the cart, update quantities, remove tickets, and confirm the purchase with an interactive process.

- **Dual Data Source:**  
  Alternate between using local data (an array of concerts) or data obtained from an API, controlled by a toggle in the interface.

- **Real-Time Updates:**  
  Interactive components and notifications (for example, success or error messages when adding tickets).

## Technologies Used

- **React:** Library to build the user interface.
- **React Router:** Route management and navigation between views.
- **Context API:** Global state management through `CartContext` and `FilterContext`.
- **Custom Hooks:** Example, `useFilteredConcerts` to filter the list of concerts.
- **CSS:** Custom styles and CSS modules to format the components.
- **Vitest:** Framework for testing.

## Installation

1. **Clone the repository:**

# Ticket-Globant

Ticket-Globant is a web application developed with React for viewing and purchasing concert tickets. The application allows you to browse a list of concerts, apply filters to refine your search, view detailed information about each event, and manage a shopping cart.

## Installation

1. **Clone the repository:**

git clone https://github.com/tuusuario/Ticket-Malaga.git
cd Ticket-Malaga

# Install dependencies:
npm install

# Start the development server:
npm start
# The application will be available at https://ticket-malaga.vercel.app/


## Data Source: API vs. Local Data

The application allows you to choose between two data sources for the concert list:

- **Local Data:**  
  The concerts are obtained from a file (for example, `src/data/concerts.js`) and filtered locally using the custom hook `useFilteredConcerts`.

- **Data from the API:**  
  When local mode is deactivated (configured by a toggle or selector), the application makes a call to the API XXX  to obtain the list of concerts.

This choice is managed in the `useFilteredConcerts` hook through the `useLocalData` variable obtained from the `FilterContext`.

## How to Use the Application

### Home Page

- **Concert Listing:**  
  Displays a list of concerts.
- **Filter Functionality:**  
  Use the **FilterBar** to search for concerts by artist, city, date, or price range.
- **Featured Concert:**  
  The main view includes the **MainEvent** component, which randomly shows a featured concert every 5 seconds.

### Concert Details

By clicking on a concert, the **ConcertDetail** view is displayed with expanded information and the option to add tickets to the cart.

### Shopping Cart

- The **ActiveCart** component allows you to view added items, modify quantities, remove tickets, and confirm the purchase.
- If the cart is empty, the **EmptyCart** view is displayed with a message and the option to return to the store.

### Navigation

- The **Header** contains the logo, the **FilterBar**, and a button to access the cart.
- Navigation between views is managed with React Router.

## Customization and Extension

- **Modify Local Data:**  
  Edit the file in `src/data/concerts.js` to update or expand the list of concerts.
- **Update the API:**  
  If you want to change the data source, modify the URL in the `useFilteredConcerts.js` hook.
- **Styles and Components:**  
  The styles are found in CSS files within each component. You can customize them according to your project's visual identity.

## License

This project is licensed under the [MIT License](LICENSE).