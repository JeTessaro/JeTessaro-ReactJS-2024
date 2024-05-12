
import { Carrito } from "./Carrito"

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Empresa</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Líneas
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Tradicional</a></li>
            <li><a class="dropdown-item" href="#">Moderna</a></li>
            <li><a class="dropdown-item" href="#">Ejecutiva</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

        // <nav className="nav">
        //     <ul className="nav-menu">
        //         <li><a className="nav-link" href="#">Inicio</a></li>
        //         <li><a className="nav-link" href="#">Línea Tradicional</a></li>
        //         <li><a className="nav-link" href="#">Línea Moderna</a></li>
        //     </ul>
        // </nav>
  )
}


