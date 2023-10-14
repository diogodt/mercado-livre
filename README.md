==================================== VERSIÓN EN ESPAÑOL ====================================

### Explorador de Productos de MercadoLibre
Una aplicación web basada en React que facilita la búsqueda y visualización de productos en MercadoLibre.

### Tabla de Contenidos
Enrutamiento
Gestión de Estado
Reductores
Almacén
Funciones Thunks
Búsqueda
Resultado de Búsqueda
Producto Seleccionado
Contenido del Producto Seleccionado
Bloque de Acción de Compra
Imagen del Producto Ampliada

### Enrutamiento
La aplicación utiliza un mecanismo de enrutamiento para facilitar la navegación entre diferentes vistas. Cada vista corresponde a una URL específica:

Caja de Búsqueda: /
Resultados de Búsqueda: /items?search=
Detalles del Producto: /items/:id
Respuesta Predeterminada: Si una URL no coincide con una de las anteriores, redirige a /.

### Gestión de Estado
Reductores
Los reductores son funciones puras que determinan cómo debe cambiar el estado de la aplicación en respuesta a acciones.
1.1. productReducer.ts
Estado: Estado del Producto
Descripción: Gestiona detalles sobre un producto específico.
Acciones: setProductDetails, setProductCondition, setProductPrice, setPurchaseOptions, setProductDescription, setImages, setActiveImage.

1.2. searchReducer.ts
Estado: Estado de Búsqueda
Descripción: Gestiona detalles de búsqueda de productos.
Acciones: setSearchResults, setQuery.

Almacén
Ubicación central donde reside el estado de Redux.
2.1. store.ts
Reductores:
búsqueda: Gestiona acciones de búsqueda de productos.
producto: Gestiona detalles de un producto específico.

Funciones Thunks
Las funciones Thunks permiten efectos secundarios como llamadas API dentro de la arquitectura de Redux.
3.1. productThunks.ts
Base de API: API de MercadoLibre
Funciones: fetchProductDetails

3.2. searchThunks.ts
Base de API: API de MercadoLibre
Funciones: autocompleteSearch, fullSearchAction

### Búsqueda
La funcionalidad de búsqueda consta de componentes: SearchResult y SearchBarDropdown. Interactúan con el almacén de Redux para buscar y mostrar resultados de búsqueda.

Componentes

SearchResult
Propósito: Mostrar resultados de búsqueda.
Dependencias: useSelector de Redux, componente SearchResultItem.

SearchBarDropdown
Propósito: Menú desplegable interactivo para mostrar resultados de búsqueda.
Props: consulta, onSelect.
Dependencias: useSelector de Redux, imagen searchIcon, estilos SCSS de DropDown.scss.
Tipos: Producto - representa la estructura de un producto.

### Resultado de Búsqueda
Muestra componentes <SearchResultItem> que coinciden con el nombre o categoría del producto.

Producto Seleccionado
La página SelectedProductPage muestra los componentes <SelectedProductContent>, <ActionBuyItem> y <ZoomProductImage>. La imagen ampliada se muestra al pasar el ratón sobre la imagen del producto dentro de <SelectedProductContent>.

Contenido del Producto Seleccionado
Resumen: Muestra imágenes del producto y soporta funcionalidad de zoom.
Implementación: Utiliza la acción setActiveImage y manejadores de eventos para el zoom.
Componentes: Miniaturas, imagen principal del producto, ZoomProductImage.
Props: imagen, descripción, posición de actionBuyItem.

### Bloque de Acción de Compra
El componente ActionBuyItem ofrece detalles del producto y un botón de acción para la compra.

Propósito: Mostrar detalles clave del producto y proporcionar funcionalidad de compra.
Props: condición, cantidad vendida, título, monto, decimales.
Dependencias: Estilos SCSS de ActionBuyItem.scss.

### Imagen del Producto Ampliada
ZoomProductImage muestra una vista ampliada de una imagen de producto.

Propósito: Mostrar una imagen de producto ampliada.
Props: imageUrl, posición de zoom, posición de actionBuyItem.
Dependencias: Estilos SCSS de ZoomProductImage.scss.
Implementación: El zoom se logra mediante propiedades CSS de transformación.

==================================== ENGLISH VERSION ====================================

### MercadoLibre Product Explorer
A React-based web application that facilitates product searching and viewing on MercadoLibre.

### Table of Contents
Routing
State Management
Reducers
Store
Thunks
Search
Search Result
Selected Product
Selected Product Content
Action Buy Item Block
Zoom Product Image

### Routing
The application utilizes a routing mechanism to facilitate navigation between different views. Each view corresponds to a specific URL:

Search Box: /
Search Results: /items?search=
Product Details: /items/:id
Fallback: If a URL doesn't match one of the above, it redirects to /.

### State Management
1. Reducers
Reducers are pure functions determining how the application's state should change in response to actions.

1.1. productReducer.ts
State: ProductState
Description: Manages details about a specific product.
Actions: setProductDetails, setProductCondition, setProductPrice, setPurchaseOptions, setProductDescription, setImages, setActiveImage.

1.2. searchReducer.ts
State: SearchState
Description: Manages product search details.
Actions: setSearchResults, setQuery.

2. Store
Central location where the Redux state resides.

2.1. store.ts
Reducers:
search: Manages product search actions.
product: Manages specific product details.

3. Thunks
Thunks enable side effects like API calls within the Redux architecture.

3.1. productThunks.ts
API Base: MercadoLibre API
Functions: fetchProductDetails

3.2. searchThunks.ts
API Base: MercadoLibre API
Functions: autocompleteSearch, fullSearchAction

### Search
The search functionality consists of components: SearchResult and SearchBarDropdown. They interact with the Redux store to fetch and display search results.

Components
1. SearchResult
Purpose: Display search results.
Dependencies: Redux's useSelector, SearchResultItem component.

2. SearchBarDropdown
Purpose: Interactive dropdown menu to display search results.
Props: query, onSelect.
Dependencies: Redux's useSelector, searchIcon image, SCSS styling from DropDown.scss.
Types: Product - represents the structure of a product.

### Search Result
Displays <SearchResultItem> components that match the product name or category.

Selected Product
The SelectedProductPage showcases the <SelectedProductContent>, <ActionBuyItem>, and <ZoomProductImage> components. The zoomed image is displayed upon hovering over the product image within the <SelectedProductContent>.

Selected Product Content
Overview: Displays product images and supports zoom functionality.
Implementation: Uses setActiveImage action and event handlers for zooming.
Components: Thumbnails, main product image, ZoomProductImage.
Props: image, description, actionBuyItemPosition.

### Action Buy Item Block
The ActionBuyItem component provides product details and an action button for purchasing.

Purpose: Showcase key product details and provide purchase functionality.
Props: condition, sold_quantity, title, amount, decimals.
Dependencies: SCSS styling from ActionBuyItem.scss.

### Zoom Product Image
ZoomProductImage displays a zoomed-in view of a product image.

Purpose: Display a magnified product image.
Props: imageUrl, zoomPosition, actionBuyItemPosition.
Dependencies: SCSS styling from ZoomProductImage.scss.
Implementation: Zooming is achieved via CSS transform properties.
