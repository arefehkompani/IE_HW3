import {useEffect, useState} from 'react'
import User from './User'
import axios from 'axios'

const UserList = () => {
    const [data, setData] = useState({})

    useEffect(() =>{ 
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setData(res.data)
        })
        .catch()
    },[])
    // console.log(data);
    return(
        <div>
            {Object.keys(data).length==0 ? (
                <h1>Loading...</h1>
            ) : (
                <div className="grid-container">
                    {data.map(user => {
                        return <User phone={user.phone} email={user.email} name={user.name} website={user.website}/>
                    })}
                </div>
            )}
        </div>
    )
}

export default UserList;