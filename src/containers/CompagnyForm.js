import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewCompany } from '../store/actions/jobs';

class CompagnyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      companyWebsite: "",
      facebookUrl: "",
      twitterUrl: "",
      linkedinUrl: "",
      companyLogo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postNewCompany({...this.state});
    this.setState({
      companyName: "",
      companyWebsite: "",
      facebookUrl: "",
      twitterUrl: "",
      linkedinUrl: "",
      companyLogo: ""
    });
  }

  render() {
    const { companyName, companyWebsite, facebookUrl, twitterUrl, linkedinUrl, companyLogo } = this.state;
    const { errors } = this.props;
    return (
      <div className="container">
       <div className="row d-flex justify-content-center">
         <div className="col-sm-12 col-xs-12 col-md-5">
            {errors.message && (
              <div className="alert alert-danger">{errors.message}</div>
            )}
           <form onSubmit={this.handleSubmit}>
             <div className="form-group">
               <input type="text" className="" name="companyName" value={companyName} onChange={this.handleChange} />
               <label className="control-label" htmlFor="input">Compagny Name</label>
               <i className="bar"></i>
             </div>
             <div className="form-group">
               <input type="text" className="" name="companyWebsite" value={companyWebsite} onChange={this.handleChange} />
               <label className="control-label" htmlFor="input">Compagny Website Url (Optional)</label>
               <i className="bar"></i>
             </div>
             <div className="form-group">
               <input type="text" className="" name="facebookUrl" value={facebookUrl} onChange={this.handleChange} />
               <label className="control-label" htmlFor="input">Facebook Url (Optional)</label>
               <i className="bar"></i>
             </div>
             <div className="form-group">
               <input type="text" className="" name="twitterUrl" value={twitterUrl} onChange={this.handleChange} />
               <label className="control-label" htmlFor="input">Twitter Url (Optional)</label>
               <i className="bar"></i>
             </div>
             <div className="form-group">
               <input type="text" className="" name="linkedinUrl" value={linkedinUrl} onChange={this.handleChange} />
               <label className="control-label" htmlFor="input">Linkedin Url (Optional)</label>
               <i className="bar"></i>
             </div>
             <div className="form-group">
               <input type="text" className="" name="companyLogo" value={companyLogo} onChange={this.handleChange} />
               <label className="control-label" htmlFor="input">Logo Url (Optional)</label>
               <i className="bar"></i>
             </div>
             <div className="button-container d-flex justify-content-start">
               <button type="submit" className="button">
                   <span><i className=""></i> Submit</span>
               </button>
             </div>
           </form>
         </div>
       </div>
     </div>
   )
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps, { postNewCompany })(CompagnyForm);