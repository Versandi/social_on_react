import classes from './Post.module.css';

const Post = (props) => {
  return (
<div className={classes.post}>
  <div className={classes.avatar}></div>
  <div className={classes.message}>
    <div className={classes.heading}>
      <span>Сергей Трофимов</span>
    </div>
    <p>{ props.message }</p>
  </div>
</div>
  )
};

export default Post;
