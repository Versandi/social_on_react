import classes from './Wall.module.css';
import Post from '../Post/Post';

const Wall = () => {

  let postData = [
    { id: 1, message: 'Привет', time: '6 окт в 15:30', likesCount: 12 },
    { id: 2, message: 'Как дела?', time: '6 окт в 15:40', likesCount: 24 }
  ]

  return (
    <>
      <div className={classes.wall}>
        <div className={classes.wallTop}>
          <span>Мои новости</span>
          <span>мои записи</span>
        </div>
        <textarea rows="2"></textarea>
        <button className={classes.button}>Отправить</button>
      </div>
      <Post message={postData[0].message} time={postData[0].time} likesCount={postData[0].likesCount} />
      <Post message={postData[1].message} time={postData[1].time} likesCount={postData[1].likesCount} />
    </>
  )
};

export default Wall;
