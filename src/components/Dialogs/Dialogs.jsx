import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <li className={classes.dialogItem}>
      <NavLink to={"dialogs/" + props.id} className={navData => navData.isActive ? classes.active : classes.item} >
        <div className={classes.dialogAvatar}></div>
        <span className={classes.dialogUser}>{props.name}</span>
        <time className={classes.dialogTime}>{props.time}</time>
        <p className={classes.dialogText}>Привет, как дела?</p>
      </NavLink>
    </li>
  )
};

const Message = (props) => {
  return (
    <li className={classes.messageItem}>
      <div className={classes.messageAvatar}></div>
      <p className={classes.messageText}>{props.message}</p>
    </li>
  )
}

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsInner}>
        <ul>
          <DialogItem name="Максим Лебедев" id="1" time="18:42" />
          <DialogItem name="Наталья Ларина" id="2" time="11:10" />
          <DialogItem name="Василий Гончаров" id="3" time="21:15" />
          <DialogItem name="Марина Иваненко" id="4" time="09:56" />
        </ul>
      </div>

      <div className={classes.messagesInner}>
        <ul>
          <Message message="Привет, как дела?" />
          <Message message="Продам втулки кулисы(материал капролон графитонаполненный) ремкомплект кулисы на все модели Бмв
Втулки трапеции дворников е36 е34 (бронза)
Втулки капота е34 (капролон)
Отправка почтой по РБ
Более подробно в л.с" />
        </ul>
      </div>

    </div>
  )
};

export default Dialogs;
