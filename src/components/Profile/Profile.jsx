import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({username, tag, location, avatar, stats }) => {
    console.log(stats);
    return <>
    <div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>{tag}</p>
            <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
            <li>
                <span className={css.label}>Followers</span>
                    <span className="quantity">{ stats.followers}</span>
            </li>
            <li>
                <span className={css.label}>Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className={css.label}>Likes</span>
                    <span className="quantity">{ stats.likes}</span>
            </li>
        </ul>
    </div>
    </>
    
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

/* <>
<div className="profile">
        <div className="description">
            <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                alt="User Name"
                className="avatar"
            />
            <p className="name">name</p>
            <p className="tag">tag</p>
            <p className="location">location</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">1000</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">2000</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">3000</span>
            </li>
        </ul>
    </div>
    </> */