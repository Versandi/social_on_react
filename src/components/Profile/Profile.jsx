import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Wall from './Wall/Wall';
import Post from './Post/Post';

const Profile = () => {
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <Wall />
      <Post message='Привет, Михаил' />
      <Post message='Как дела?' />
    </div>
  )
};

export default Profile;
