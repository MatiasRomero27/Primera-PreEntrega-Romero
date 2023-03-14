

const Dropdown = () => {
    return (

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Products
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Tshirts</a></li>
            <li><a className="dropdown-item" href="#">shorts</a></li>
            <li><a className="dropdown-item" href="#">football boots </a></li>
            <li><a className="dropdown-item" href="#">football jackets</a></li>
            <li><hr className="dropdown-divider" /></li>
          </ul>
        </li>

    );
}

export default Dropdown;
