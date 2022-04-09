import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsInner}>
        <ul>
          <li>
            <NavLink to="/dialogs/1" className={navData => navData.isActive ? classes.active : classes.dialogCard}>
              <div className={classes.dialogAvatar}></div>
              <span className={classes.dialogUser}>Максим Лебедев</span>
              <time className={classes.dialogTime}>18:42</time>
              <p className={classes.dialogText}>Привет, как дела?</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dialogs/2" className={navData => navData.isActive ? classes.active : classes.dialogCard}>
              <div className={classes.dialogAvatar}></div>
              <span className={classes.dialogUser}>Наталья Ларина</span>
              <time className={classes.dialogTime}>21:02</time>
              <p className={classes.dialogText}>Привет, как дела?</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dialogs/3" className={navData => navData.isActive ? classes.active : classes.dialogCard}>
              <div className={classes.dialogAvatar}></div>
              <span className={classes.dialogUser}>Василий Гончаров</span>
              <time className={classes.dialogTime}>07:22</time>
              <p className={classes.dialogText}>Привет, как дела?</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dialogs/4" className={navData => navData.isActive ? classes.active : classes.dialogCard}>
              <div className={classes.dialogAvatar}></div>
              <span className={classes.dialogUser}>Марина Иваненко</span>
              <time className={classes.dialogTime}>11:22</time>
              <p className={classes.dialogText}>Привет, как дела?</p>
            </NavLink>
          </li>

        </ul>
      </div>
      <div className={classes.messagesInner}></div>
    </div>
  )
};

export default Dialogs;
