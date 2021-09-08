import React, { PureComponent } from 'react';

class Navbar extends React.Component {
    render() { 
        return <div>
              <nav className="navbar navbar-light bg-light"> <a className="navbar-brand" href="#">Navbar
              {this.props.totalCounters}
              </a>
      </nav>
      </div>;
    }
}
 
export default Navbar;