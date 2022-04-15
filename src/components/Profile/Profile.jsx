import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Wall from './Wall/Wall';


const Profile = () => {
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <Wall />
    </div>
  )
};

export default Profile;
