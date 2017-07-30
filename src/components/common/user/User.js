import React from 'react';

const User = () => {
    return (
        <div className="user-container">
            <button type="button" className="btn btn-default btn-lg" data-toggle="modal" data-target="#myModal">
                <span className="glyphicon glyphicon-log-out icon"></span>
            </button>
            <p className="user-container__title">User</p>
        </div>
    )
};
export default User;