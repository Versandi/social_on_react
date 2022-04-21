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

  let dialogs = [
    { id: 1, name: 'Максим Лебедев', time: '18:42' },
    { id: 2, name: 'Наталья Ларина', time: '11:10' },
    { id: 3, name: 'Василий Гончаров', time: '21:15' },
    { id: 4, name: 'Марина Иваненко', time: '09:56' }
  ];

  let messages = [
    { id: 1, message: 'Привет' },
    { id: 2, message: 'Как дела?' },
    { id: 3, message: 'У меня всё отлично' },
    { id: 4, message: 'Как доехал?' },
  ];

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} time={d.time} />);



  let messagesElements = messages
    .map(m => <Message message={m.message} />);

  return (



    <div className={classes.dialogs}>
      <div className={classes.dialogsInner}>
        <ul>
          {dialogsElements}
        </ul>
      </div>

      <div className={classes.messagesInner}>
        <ul>
          {messagesElements}
        </ul>
      </div>

    </div>
  )
};

export default Dialogs;
