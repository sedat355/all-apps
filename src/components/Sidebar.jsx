import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <ul className="flex flex-col">
      <li className="sidebar-list-item">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="sidebar-list-item">
        <NavLink to="/digital-assistans">Digital Assistans</NavLink>
      </li>
      <li className="sidebar-list-item">
        <NavLink to="/button-page">Button</NavLink>
      </li>
      <li className="sidebar-list-item">
        <NavLink to="/accordion">Accordion</NavLink>
      </li>
      <li className="sidebar-list-item">
        <NavLink to="/add-animal">Add Animal</NavLink>
      </li>
    </ul>
  )
}

export default Sidebar