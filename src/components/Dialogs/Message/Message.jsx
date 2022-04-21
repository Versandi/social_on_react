import classes from './Message.module.css';

const Message = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.avatar}></div>
      <p className={classes.text}>{props.message}</p>
    </li>
  )
};

export default Message;