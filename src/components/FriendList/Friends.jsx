import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => { 
    return (<>
        <ul>
            {friends.map(friend => (
            <li className="item" key={friend.id}>
                <span className="status"></span>
                <img className={friend.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
            </li >    
            ))}

    </ul>

</>)
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

