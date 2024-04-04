import { Profile } from "./Profile/Profile";
// import friends from 'path/to/friends.json';
import user from "./Profile/user.json"

export const App = () => {
  return (

    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      ></Profile>


    // <FriendList friends={friends}></FriendList>
  );
};


  // username={user.username}
  