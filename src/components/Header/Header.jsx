import logo from '../../logo.svg'
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} width="159" height="41" alt="Логитип" />

      <ul>
        <li className={classes.item}>люди</li>
        <li className={classes.item}>сообщества</li>
        <li className={classes.item}>игры</li>
        <li className={classes.item}>музыка</li>
        <li className={classes.item}>помощь</li>
        <li className={classes.item}>выйти</li>

      </ul>

    </header>
  )
}

export default Header;

