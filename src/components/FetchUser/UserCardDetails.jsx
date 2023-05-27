import './UserCardDetails.css';

const UserCardDetails = ({ user }) => {
    return (
        <div className="user-card">
            <div className="user-card-details">
                <h1 className="user-name">{user.name}</h1>
                <h2 className="user-occupation">{user.occupation}</h2>
                <h3 className="user-age">{user.age} years</h3>
            </div>
        </div>
    )
}

export default UserCardDetails;
