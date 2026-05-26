function Profile() {

  return (

    <div className="profilePage">

      <div className="header">
        Account Settings
      </div>

      <div className="profileContent">

        <div className="topSection">

          <div className="imageSection">

            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="profileImage"
            />

            <div className="camera">
              📷
            </div>

          </div>

          <div>

            <h3 className="name">
              Marry Doe
            </h3>

            <p className="email">
              Marry@gmail.com
            </p>

          </div>

        </div>

        <p className="text">
          Lorem Ipsum Dolor Sit Amet,
          Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam
        </p>

      </div>
      <div className="bottomLine"></div>

    </div>

  );
}

export default Profile;