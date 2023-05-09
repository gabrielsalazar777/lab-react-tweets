const User = ({ userData }) => {
  return (
    <div>
    {/* console.log({userData.name}) */}
      <span className="user">
        <span className="name"> {userData.name} </span>
        <span className="handle"> {userData.handle} </span>
      </span>
    </div>
  );
};

export default User;