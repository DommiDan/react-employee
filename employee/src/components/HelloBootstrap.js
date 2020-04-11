import React from "react";

function HelloBootstrap() {
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
        FFVII Employees
        </a>
        <form className="form-inline" >
          <input 
          className="form-control mr-sm-2" 
          type="search" 
          placeholder="Search" 
          aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" 
          type="submit">Search
        </button>
        </form>
        </nav>

        <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <thead>
          
          <tr>
          <th scope="row">1</th>
          <td>
            <img src="images/18_Event_Cloud.0.jpg" 
            width="150" 
            height="150">
            </img>
          </td>
            <td>Cloud</td>
            <td>123-456-7890</td>
            <td>cloud@example.com</td>
            <td>08-11-90</td>
          </tr>
        </thead>
   </table>
   </div>
  );
}

export default HelloBootstrap;
