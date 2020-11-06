import React, { Component } from 'react';
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div>
        {this.props.currentUser.isAuthenticated ? (
            <div>
              <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "url(/img/city-profile.jpg)", transform: "translate3d(0, 100, 0)", height: 380}}></div>
              <div className="d-main">
                <div className="d-profile">
                  <div className="profile-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6 ml-auto mr-auto d-flex justify-content-center">
                          <div className="profile">
                            <div className="d-avatar">
                              <img className="rounded-circle img-fluid" src="/img/christian.jpg" alt="Circle Avatar" />
                            </div>
                            <div className="name text-center">
                              <h3 className="title">Christian Louboutin</h3>
                              <h6>Designer</h6>
                              <a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble"><i class="fa fa-dribbble"></i></a>
                              <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter"><i class="fa fa-twitter"></i></a>
                              <a href="#pablo" className="btn btn-just-icon btn-link btn-pinterest"><i class="fa fa-pinterest"></i></a>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="description text-center">
                        <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
                        <hr />
                      </div>
                      <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                          <div className="profile-tabs">
                            <ul className="nav nav-pills nav-pills-icons justify-content-center">
                              <li className="nav-item">
                                <a className="nav-link" href="#companies" role="tab" data-toggle="tab">
                                  <i className="fa fa-camera"></i>
                                    Companies
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#jobs" role="tab" data-toggle="tab">
                                  <i className="fa fa-palette"></i>
                                  Jobs
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content tab-space">
                        <div className="tab-pane text-center active" id="companies">
                          <table className="table">  
                            <thead className="thead-light">    
                              <tr>      
                                <th>#</th>      
                                <th>Name</th>
                                <th>Job Numbers</th>  
                                <th>Date</th>
                                <th>Action</th>
                                <th></th> 
                              </tr>  
                            </thead>  
                            <tbody>    
                              <tr>      
                                <th scope="row">1</th>      
                                <td>Keyajob</td>
                                <td>12</td>
                                <td>05/06/2018</td>
                                <td>Edit</td>
                                <td>Delete</td>
                              </tr>
                              <tr>      
                                <th scope="row">2</th>      
                                <td>DoumSoft</td>
                                <td>55</td>
                                <td>05/06/2018</td>
                                <td>Edit</td>
                                <td>Delete</td>
                              </tr>  
                            </tbody> 
                          </table>
                        </div>
                        <div className="tab-pane text-center" id="jobs">
                          <table className="table">  
                            <thead className="thead-light">    
                              <tr>      
                                <th>#</th>      
                                <th>Title</th>
                                <th>Company</th>  
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th></th> 
                              </tr>  
                            </thead>  
                            <tbody>    
                              <tr>      
                                <th scope="row">1</th>      
                                <td>Nina</td>
                                <td>Keyajob</td>
                                <td>05/06/2018</td>
                                <td>Active</td>
                                <td>Edit</td>
                                <td>Delete</td>
                              </tr>
                              <tr>      
                                <th scope="row">2</th>      
                                <td>John</td>
                                <td>DoumSoft</td>
                                <td>05/06/2018</td>
                                <td>Desactive</td>
                                <td>Edit</td>
                                <td>Delete</td> 
                              </tr>  
                            </tbody> 
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ) :
        (
          <div>
            {this.props.history.push("/")}
          </div>
        )
        }
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Dashboard);