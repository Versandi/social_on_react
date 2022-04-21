import classes from './Wall.module.css';
import Post from './Post/Post';

const Wall = () => {

  let posts = [
    { id: 1, message: 'Привет', time: '6 окт в 15:30', likesCount: 12 },
    { id: 2, message: 'Как дела?', time: '6 окт в 15:40', likesCount: 24 }
  ];

  let postElements = posts
    .map(p => <Post message={p.message} time={p.time} likesCount={p.likesCount} />
    );

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
      {postElements}
    </>
  )
};

export default Wall;
