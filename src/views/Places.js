/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {Button ,Table}  from "reactstrap"
import DataTable, { createTheme } from 'react-data-table-component';
import { MDBDataTable } from 'mdbreact';
import "../assets/css/ourStyle.css";
const mystyle = {

  backgroundColor: "gray",
  fontSize:"18px",
  color: "black",

 
};


const data = {
  columns: [
    {
      label: 'Name',
      field: 'name',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Position',
      field: 'position',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Office',
      field: 'office',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Age',
      field: 'age',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Start date',
      field: 'date',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Salary',
      field: 'salary',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Modifier',
      field: 'modifier',
      sort: 'asc',
      width: 100,
      
    },
    {
      label: 'Supprimer',
      field: 'supprimer',
      sort: 'asc',
      width: 100,
      
    }
  ],
  rows: [
    {
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: '61',
      date: '2011/04/25',
      salary: '$320',
      modifier:<center><button className="btn btn-success">Modifier</button></center>,
      supprimer:<center><button className="btn btn-danger">Supprimer</button></center>
    }
  ]
};
class Places extends React.Component {
  handleClick() {
    console.log("hello");
  };
  
constructor(props){
super(props);


}


  render() {
    return (
      <>
   <div className="content text-info">
   
   <MDBDataTable className="our" 
      striped
      bordered
      hover
      
      data={data}
    />
   
   </div>
      </>
    );
  }
 
}




export default Places;
