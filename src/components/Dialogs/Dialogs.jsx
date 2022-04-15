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

  let dialogsData = [
    { id: 1, name: 'Максим Лебедев' },
    { id: 2, name: 'Наталья Ларина' },
    { id: 3, name: 'Василий Гончаров' },
    { id: 4, name: 'Марина Иваненко' }
  ];

  let messagesData = [
    { id: 1, message: 'Привет' },
    { id: 2, message: 'Как дела?' },
    { id: 3, message: 'У меня всё отлично' },
    { id: 4, message: 'Как доехал?' },
  ]

  return (



    <div className={classes.dialogs}>
      <div className={classes.dialogsInner}>
        <ul>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} time="18:42" />
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} time="11:10" />
          <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} time="21:15" />
          <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} time="09:56" />
        </ul>
      </div>

      <div className={classes.messagesInner}>
        <ul>
          <Message message={messagesData[0].message} />
          <Message message={messagesData[1].message} />
          <Message message={messagesData[2].message} />
          <Message message={messagesData[3].message} />
        </ul>
      </div>

    </div>
  )
};

export default Dialogs;
