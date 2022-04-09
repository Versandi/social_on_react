import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div className={classes.top}>
      <div>
        <div className={classes.avatar}></div>
        <button className={classes.edit}>Редактировать</button>
      </div>
      <div className={classes.profileData}>
        <span className={classes.profileName}>Михаил Светлов</span>
        <div>
          <table>
            <tr>
              <td className={classes.col1}>День рождения:</td>
              <td className={classes.col2}>10 октября 1984 г.</td>
            </tr>
            <tr>
              <td className={classes.col1}>Родной город:</td>
              <td className={classes.col2}>Витебск</td>
            </tr>
            <tr>
              <td className={classes.col1}>Место учёбы:</td>
              <td className={classes.col2}>ВГТУ</td>
            </tr>
            <tr>
              <td className={classes.col1}>Веб сайт:</td>
              <td className={classes.col2}>https://vk.com</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
};

export default ProfileInfo;