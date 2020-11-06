import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewRequest } from '../store/actions/requests';

class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestEmail: "",
      subject: "",
      requestDetail: "",
      attachment: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componetDidMount() {
    this.props.postNewRequest();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postNewRequest({...this.state});
    this.setState({
      requestEmail: "",
      subject: "",
      requestDetail: "",
      attachment: ""
    });
  }

  render() {
    const {requestDetail, requestEmail, subject, attachment} = this.state;
    return (
      <div className="container">
        <div className="request-form">
          <h1 className="text-center">Submit a request</h1>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-xs-12 col-md-5">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="text" className="" name="requestEmail" value={requestEmail} onChange={this.handleChange} />
                  <label className="control-label" htmlFor="input">Email Address</label>
                  <i className="bar"></i>
                </div>
                <div className="form-group">
                  <input type="text" className="" name="subject" value={subject} onChange={this.handleChange} />
                  <label className="control-label" htmlFor="input">Subject</label>
                  <i className="bar"></i>
                </div>
                <div className="form-group">
                  <textarea className="" rows="3" name="requestDetail" value={requestDetail} onChange={this.handleChange} ></textarea>
                  <label className="control-label" htmlFor="textarea">Type someting...</label>
                  <i className="bar"></i> 
                  <small id="fileHelp" className="form-text text-muted">Please enter the details of your request. A member of our support staff will respond as soon as possible..</small>
                </div>
                <div className="form-group">
                  <label className="file-upload-input d-flex justify-content-center" htmlFor="InputFile">
                    <input type="file" className="form-control-file" id="InputFile" name="attachment" value={attachment} onChange={this.handleChange} />
                    <i className="fa fa-chain"></i> Add your File here
                  </label>
                  <small id="fileHelp" className="form-text text-muted">Maximum file size: 5 Mo</small>
                </div>
                <div className="button-container d-flex justify-content-center">
                  <button type="submit" className="button"><span>Submit</span></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    
  }
}

export default connect(mapStateToProps, { postNewRequest })(RequestForm);