
const User = ({phone,email,name,website}) => {

    return(
        <div>
            <ul>
                <li>{phone}</li>
                <li>{email}</li>
                <li>{name}</li>
                <li>{website}</li>
            </ul>
        </div>
    );
}


export default User;