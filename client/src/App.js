function App() {
  return (
    <div id="app">
      <div id="header">
        <div className="brand">
          <a href="/">
            <span className="logo"></span>
          </a>
        </div>
        <div className="middle">
          <div className="dropdown centered">Maccabi Tel Aviv</div>
        </div>
        <div className="profile">
          <div className="avatar avatar-sm" style={{ backgroundImage: `url('user-avatar-001.png')` }}>
            {/* A */}
          </div>
        </div>
      </div>
      <div id="wrap">
        <form className="height-cont">
          <div>
            <div className="bg-bar"></div>
            <div className="file-picker" onClick="handleFilePickTBD" role="button">
              <input type="file" accept=".png, .jpg" />
              <div className="avatar avatar-md" style={{ backgroundImage: `url('user-avatar-001.png')` }}>
                {/* A */}
              </div>
              <span>Update Avatar</span>
            </div>
          </div>
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
          <input type="password" name="password" placeholder="Password" />
          <input type="password" name="confirmation" placeholder="Password Confirmation" />
          <input type="tel" name="phone" placeholder="Phone Number" />
          <button className="my-45">Save</button>
        </form>
      </div>
      <ul id="nav" className="nav">
        <li className="tab-games active">Games</li>
        <li className="tab-team">Team</li>
        <li className="tab-camera">Camera</li>
        <li className="tab-live">Live</li>
      </ul>
    </div>
  );
}

export default App;
