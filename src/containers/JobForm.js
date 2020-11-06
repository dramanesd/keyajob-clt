import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { postNewJob } from '../store/actions/jobs';
import { fetchCategories } from '../store/actions/category';
import { fetchJobTypes } from '../store/actions/jobTypes';
import { fetchCompanies } from '../store/actions/companies';
import { fetchTags } from '../store/actions/tags';

class JobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      applicationLink: "",
      company: "",
      category: "",
      jobType: "",
      tags: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchJobTypes();
    this.props.fetchCompanies();
    this.props.fetchTags();
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postNewJob({...this.state});
    this.setState({
      title: "",
      description: "",
      applicationLink: "",
      company: "",
      category: "",
      jobType: "",
      tags: "",
    });
  }
  render() {
    const { title, applicationLink, description } = this.state;
    let categoryItem = this.props.categories.map(category => {
      return <option key={category._id} value={category._id} >{category.categoryName}</option>
    });
    const companyItem = this.props.companies.map(company => {
      return <option key={company._id} value={company._id} >{company.companyName}</option> 
    });
    const jobTypeItem = this.props.jobTypes.map(jobType => {
      return <option key={jobType._id} value={jobType._id} >{jobType.jobTypeName}</option>
    });
    const tagItem = this.props.tags.map(tag => {
      return <option key={tag._id} value={tag._id} >{tag.tagName}</option>
    });


    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-xs-12 col-md-5">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" className="" name="title" value={title} onChange={this.handleChange} />
                <label className="control-label" htmlFor="input">Job Title</label>
                <i className="bar"></i>
              </div>
              <div className="form-group">
                <select className="" name="jobType" value={this.state.jobType} onChange={this.handleChange}>
                  <option>Select a Job Type</option>
                  {jobTypeItem}
                </select>
                <label className="control-label" htmlFor="select"></label>
                <i className="bar"></i>
              </div>
              <div className="form-group">
                <select className="" name="category" value={this.state.category} onChange={this.handleChange}>
                  <option>Select a Category</option>
                  {categoryItem}
                </select>
                <label className="control-label" htmlFor="select"></label>
                <i className="bar"></i>
              </div>

              <div className="form-group">
                <select className="" name="tags" value={this.state.tags} onChange={this.handleChange}>
                  <option>Select a Tag</option>
                  {tagItem}
                </select>
                <label className="control-label" htmlFor="select"></label>
                <i className="bar"></i>
              </div>
              <div className="form-group">
                <select className="" name="company" value={this.state.company} onChange={this.handleChange}>
                  <option>Select A Companies</option>
                  {companyItem}
                </select>
                <label className="control-label" htmlFor="select"></label>
                <i className="bar"></i>
              </div>
              <div className="form-group">
                <input type="text" className="" name="applicationLink" value={applicationLink} onChange={this.handleChange} />
                <label className="control-label" htmlFor="input">Application Url</label>
                <i className="bar"></i>
              </div>
              <div className="form-group">
                <textarea className="" rows="3" name="description" value={description} onChange={this.handleChange}></textarea>
                <label className="control-label" htmlFor="textarea">Description</label>
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
    currentUser: state.currentUser,
    categories: state.categories,
    jobTypes: state.jobTypes,
    companies: state.companies,
    tags: state.tags
  }
}

export default connect( mapStateToProps, { postNewJob, fetchCategories, fetchJobTypes, fetchCompanies, fetchTags } )(JobForm);