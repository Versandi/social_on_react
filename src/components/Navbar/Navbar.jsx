import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink to="/profile" className={navData => navData.isActive ? classes.active : classes.item} >Моя Страница</NavLink></li>
        <li className={classes.item}>
          <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/dialogs">Мои Сообщения</NavLink></li>
        <li className={classes.item}>
          <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/news">News</NavLink></li>
        <li className={classes.item}>
          <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/music">Music</NavLink></li>
        <li className={classes.item}>
          <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/settings">Settings</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;
