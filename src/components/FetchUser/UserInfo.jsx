import { useEffect, useState } from "react"
import UserCardDetails from "./UserCardDetails";
import './UserInfo.css';

const UserInfo = ({ isTableView }) => {
    const [usersData, setUsersData] = useState([]);
    const [sortFlag, setSortFlag] = useState(false);
    const [userName, setUserName] = useState("");

    const fetchUsersData = async () => {
        let url = "https://coralmango.com/api/react-test";
        let data = await fetch(url);
        let parsedData = await data.json();
        setUsersData(parsedData);
    }

    const sortByName = () => {
        if (usersData.length > 0) {
            let sortedData = usersData.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
            setUsersData(sortedData);
            setSortFlag(!sortFlag);
        }
    }

    const sortByAge = () => {
        if (usersData.length > 0) {
            let sortedData = usersData.sort((a, b) => a.age - b.age);
            setUsersData(sortedData);
            setSortFlag(!sortFlag);
        }
    }

    const searchUserName = (e) => {
        setUserName(e.target.value);
        let getName = usersData.filter(user => user.name.includes(userName));
        setUsersData(getName);
    }

    useEffect(() => {
    }, [sortFlag])

    useEffect(() => {
        fetchUsersData();
    }, [])

    return (
        <div>
            <div className='input-container'>
                <input type='text' value={userName} className='searchBar searchClass' placeholder='Search for User' onChange={searchUserName} />
                <button className='searchButton searchClass'>Search</button>
            </div>

            <button className="sort-name-btn" onClick={sortByName}>Sot By Name</button>
            <button className="sort-age-btn" onClick={sortByAge}>Sot By Age</button>


                {userName.length > 0 && <div className="info-banner">You are viewing filtered results!</div>}
            <div className="user-container">
                {isTableView ? <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Occupation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((user, ind) => {
                            return <tr key={ind}>
                                <td>{user.name}</td>
                                <td>{user.occupation}</td>
                                <td>{user.age}</td>
                            </tr>
                        })}
                    </tbody>
                </table> :
                    usersData.map((user, ind) => {
                        return <UserCardDetails key={ind} user={user} />
                    })
                }
            </div>
        </div>
    )
}

export default UserInfo
