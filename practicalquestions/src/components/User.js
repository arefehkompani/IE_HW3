import PropTypes from 'prop-types';

function User({phone,email,name,website}){
    console.log(typeof phone);
    return(
        <div className="grid-item">
            <ul>
                <li>{name}</li>
                <li>{phone}</li>
                <li>{email}</li>
                <li>{website}</li>
            </ul>
        </div>
    );
}

User.propTypes = {
    phone: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    website: PropTypes.string
}

User.defaultProps = {
    phone: "09123451673",
    email: "default@yahoo.com",
    name: "admin",
    website: "placeholder.com"
};

export default User;