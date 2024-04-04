

export const FriendList = ({ friends }) => { 
return <>
<li className="item">
    <span className="status"></span>
    <img className="{friends.avatar}" src="" alt="User avatar" width="48" />
    <p className="name"></p>
</li >
</>
};