import "./profile.css"


export const Profile = (props) => {

    return (
        <div>
            <div className="container bootstrap snippets bootdeys">
                <div className="row" id="user-profile">
                    <div className="col-lg-3 col-md-4 col-sm-4">
                        <div className="main-box clearfix">
                            <h2>John Doe </h2>
                            <div className="profile-status">
                                <i className="fa fa-check-circle"></i> Online
                            </div>
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""
                                 className="profile-img img-responsive center-block"/>
                            <div className="profile-label">
                                <span className="label label-danger">Admin</span>
                            </div>
                            <div className="profile-since">
                                Member since: Jan 2012
                            </div>
                            <div className="profile-details">
                                <ul className="fa-ul">
                                    <li><i className="fa-li fa fa-truck"></i>Orders: <span>456</span></li>
                                </ul>
                            </div>

                            <div className="profile-message-btn center-block text-center">
                                <a href="#" className="btn btn-success">
                                    <i className="fa fa-envelope"></i> Send message
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9 col-md-8 col-sm-8">
                        <div className="main-box clearfix">
                            <div className="profile-header">
                                <h3><span>User info</span></h3>
                                <a href="#" className="btn btn-primary edit-profile">
                                    <i className="fa fa-pencil-square fa-lg"></i> Edit profile</a>
                            </div>

                            <div className="row profile-user-info">
                                <div className="col-sm-8">
                                    <div className="profile-user-details clearfix">
                                        <div className="profile-user-details-label">
                                            Username
                                        </div>
                                        <div className="profile-user-details-value">
                                            John
                                        </div>
                                    </div>

                                    <div className="profile-user-details clearfix">
                                        <div className="profile-user-details-label">
                                            Email
                                        </div>
                                        <div className="profile-user-details-value">
                                            johndoe@bootdey.com
                                        </div>
                                    </div>
                                    <div className="profile-user-details clearfix">
                                        <div className="profile-user-details-label">
                                            Phone number
                                        </div>
                                        <div className="profile-user-details-value">
                                            011 223 344 556 677
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;