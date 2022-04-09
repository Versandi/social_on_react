import classes from './Wall.module.css';

const Wall = () => {
  return (
    <div className={classes.wall}>
      <div className={classes.wallTop}>
        <span>Мои новости</span>
        <span>мои записи</span>
      </div>
      <textarea rows="2"></textarea>
      <button className={classes.button}>Отправить</button>
    </div>
  )
};

export default Wall;
