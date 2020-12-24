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

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Router,Route, Switch, Redirect, NavLink } from "react-router-dom";

import Blocs from "./Blocs";
import routes from "routesC.js";

class Parking extends React.Component {

constructor(props){
super(props);
}



getRoutes = routes => {
  return routes.map((prop, key) => {
    if (prop.layout === "/admin") {
      return (
        <NavLink
                    to={prop.layout + prop.path}
                    className="btn btn-info"
                    activeClassName="active"
                    key={key}
      >{prop.name}</NavLink>
      );
    } else {
      return null;
    }
  });
};



  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                 
                </CardHeader>
                <CardBody className="all-icons">
                  <Row>
                    <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="3"
                      md="3"
                      sm="4"
                    >
                      <div className="font-icon-detail">
                        <i className="tim-icons icon-alert-circle-exc" />
                        <p>icon-alert-circle-exc</p>
                      </div>
                    </Col>
                    <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="3"
                      md="3"
                      sm="4"
                    >
                      <div className="font-icon-detail">
                        <i className="tim-icons icon-align-center" />
                        <p>icon-align-center</p>
                      </div>
                    </Col>
                    <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="3"
                      md="3"
                      sm="4"
                    >
                      <div className="font-icon-detail">
                        <i className="tim-icons icon-align-left-2" />
                        <p>icon-align-left-2</p>
                      </div>
                    </Col>
                    <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="3"
                      md="3"
                      sm="4"
                    >
                      <div className="font-icon-detail">
                        <i className="tim-icons icon-align-left-2" />
                        <p>icon-align-left-2</p>
                      </div>
                    </Col>
                     <div className="row ">
    <div className="col ml-3">{this.getRoutes(routes)}</div>
                  
                      </div>
                    <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="12"
                      md="12"
                      sm="12"
                    >
                      <div className="font-icon-detail">
                        <i className="tim-icons icon-attach-87" />
                        <p>Visualisation Parking</p>
                      </div>
                    </Col>
                   </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Parking;
