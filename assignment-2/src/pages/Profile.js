import React from 'react';
import { useSelector} from 'react-redux';

function Profile(){
    const data = useSelector((state) => state.user);

    return(
        <>
        <div className="wrapper-user">
            <h1>Profile</h1>

            {data.user === null ? (
            <p>No customer data</p>
        ) : (
            <>
            <table>
                <tr><td>Fullname</td><td>:</td><td>{`${data.user.fullname}`}</td></tr>
                <tr><td>Email</td><td>:</td><td>{`${data.user.email}`}</td></tr>
                <tr><td>Password</td><td>:</td><td>{`${data.user.password}`}</td></tr>
                <tr><td>Telephone</td><td>:</td><td>{`${data.user.telephone}`}</td></tr>
            </table>
            </>
        )}
        </div>
        </>
    )
}

export default Profile;