import { Link } from 'react-router-dom'
const Header = () => {
    return (
      <div className="Header shadow">
        <nav class="navbar navbar-expand h-25 bg-dark p-0">
      <div class="container-fluid">

        <div class="collapse navbar-collapse justify-content-md-center ">
          <ul class="navbar-nav mt-3">
            <li class="nav-item ">
            <Link to="/" className="nav-text nav-link active text-warning">Home Page</Link> &nbsp;
            </li>
            <li class="nav-item dropdown">
            <Link className='px-3 nav-text nav-link dropdown-toggle text-warning'data-bs-toggle="dropdown" aria-expanded="false">Cars</Link> &nbsp;
              <ul class="dropdown-menu ps-3 ">
                <li><Link to="/Car1" className='dropd--text text-decoration-none text-dark text-warning'>Car1</Link> &nbsp;</li>
                <li><Link to="/Car2" className='dropd--text text-decoration-none text-dark text-warning'>Car2</Link> &nbsp;</li>
                <li><Link to="/Car3" className='dropd--text text-decoration-none text-dark text-warning'>Car3</Link> &nbsp;</li>
              </ul>
            </li>
            <li class="nav-item">
            <Link to="/contactus" className="nav-text nav-link text-warning px-3">Contact Us</Link> &nbsp;
            </li>
            
          </ul>
        </div>
      </div>
    </nav>









      </div>
    );
  }
  
  export default Header;
  