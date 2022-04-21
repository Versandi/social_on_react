import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
  return (
    <li className={classes.item}>
      <NavLink to={"dialogs/" + props.id} className={navData => navData.isActive ? classes.active : classes.item} >
        <div className={classes.avatar}></div>
        <span className={classes.user}>{props.name}</span>
        <time className={classes.time}>{props.time}</time>
        <p className={classes.text}>Привет, как дела?</p>
      </NavLink>
    </li>
  )
};

export default DialogItem;