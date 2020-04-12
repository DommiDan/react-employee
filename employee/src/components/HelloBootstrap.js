import React from "react";
import logo from "./img1/images/cloud.jpg";
import logo1 from "./img1/images/aerith.jpg";
import logo2 from "./img1/images/barret.jpg";
import logo3 from "./img1/images/seph.png";
import logo4 from "./img1/images/tifa.jpg";
import "./img1/index.css";
// import friends from "./friends.json";

function HelloBootstrap() {
  return (
    <div>
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
        <div className="space"></div>
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
            <img src={logo} 
            width="190" 
            height="150">
            </img>
          </td>
            <td>Cloud</td>
            <td>123-456-7890</td>
            <td>cloud@example.com</td>
            <td>08-11-90</td>
          </tr>
        </thead>
        <thead>
          <tr>
          <th scope="row">2</th>
          <td>
            <img src={logo1}  
            width="190" 
            height="150">
            </img>
          </td>
          <td>Aerith</td>
            <td>098-765-4321</td>
            <td>arieth@example.com</td>
            <td>02-07-89</td>
          </tr>
        </thead>
        <thead>
          <tr>
          <th scope="row">3</th>
          <td>
            <img src={logo2}  
            width="190" 
            height="150">
            </img>
          </td>
          <td>Barret</td>
            <td>246-809-7531</td>
            <td>b.arret@example.com</td>
            <td>10-30-64</td>
          </tr>
        </thead>
        <thead>
          <tr>
          <th scope="row">4</th>
          <td>
            <img src={logo3}  
            width="190" 
            height="150">
            </img>
          </td>
          <td>Sephiroth</td>
            <td>135-790-8642</td>
            <td>badguy.with.wings.seph@example.com</td>
            <td>07-11-84</td>
          </tr>
        </thead>
        <thead>
          <tr>
          <th scope="row">5</th>
          <td>
            <img src={logo4} 
            width="190" 
            height="150">
            </img>
          </td>
          <td>Tifa</td>
            <td>112-223-4456</td>
            <td>Tifa.is.awesome@example.com</td>
            <td>05-03-90</td>
          </tr>
        </thead>
   </table>
   </div>
  );
}

export default HelloBootstrap;
