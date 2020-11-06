import React from 'react';

export default class MultiStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreviousBtn: false,
      showNextBtn: false,
      showDoneBtn: false,
      compState: 0,
      navState: this.getNavStates(0, this.props.steps.length)
    };
    this.hidden = {
      display: 'none'
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.done = this.done.bind(this);
  }

  getNavStates(indx, length) {
    let styles = [];
    for (let i=0; i<length; i++) {
      if(i < indx) {
        styles.push('done')
      }
      else if(i === indx) {
        styles.push('doing')
      }
      else {
        styles.push('todo')
      }
    }
    return { current: indx, styles: styles }
  }

  checkNavState(currentStep){
    if(currentStep > 0 && currentStep < this.props.steps.length - 1){
      this.setState({
        showPreviousBtn: false,
        showNextBtn: true,
        showDoneBtn: false
      })
    }
    else if(currentStep === 0) {
      this.setState({
        showPreviousBtn: false,
        showNextBtn: true,
        showDoneBtn: false
      })
    }
    else {
      this.setState({
        showPreviousBtn: false,
        showNextBtn: false,
        showDoneBtn: false
      })
    }
    console.log(currentStep);
  }

  setNavState(next) {
    this.setState({navState: this.getNavStates(next, this.props.steps.length)})
    if (next < this.props.steps.length) {
      this.setState({compState: next})
    }
    this.checkNavState(next);
  }

  handleKeyDown(evt) {
    if (evt.which === 13) {
      this.next()
    }
  }

  handleOnClick(evt) {
    if (evt.currentTarget.value === (this.props.steps.length - 1) &&
      this.state.compState === (this.props.steps.length - 1)) {
      this.setNavState(this.props.steps.length)
    }
    else {
      this.setNavState(evt.currentTarget.value)
    }
  }

  next() {
    this.setNavState(this.state.compState + 1)
  }

  previous() {
    if (this.state.compState > 0) {
      this.setNavState(this.state.compState - 1)
    }
  }

  done() {
    if (this.state.compState > 0) {
      this.setNavState(this.state.compState - 0)
    }
  }

  getClassName(className, i){
    return className + "-" + this.state.navState.styles[i];
  }

  renderSteps() {
    return this.props.steps.map((s, i)=> (
      <li className={this.getClassName("progtrckr", i)} onClick={this.handleOnClick} key={i} value={i}>
        <em>{i+1}</em>
        <span>{this.props.steps[i].name}</span>
      </li>
    ));
  }

  render() {
    console.log(this.props.steps.length);
    return (
      <div className="container" onKeyDown={this.handleKeyDown}>
        <ol className="progtrckr d-flex justify-content-center">
          {this.renderSteps()}
        </ol>
        {this.props.steps[this.state.compState].component}
        <div className="button-container d-flex justify-content-center" style={this.props.showNavigation ? {} : this.hidden}>
          <button style={this.state.showPreviousBtn ? {} : this.hidden}
                  className="button"
                  onClick={this.previous}><span><i className="fa fa-long-arrow-left"></i> Previous</span></button>

          <button style={this.state.showNextBtn ? {} : this.hidden} style={{position: 'relative', top: -40, right: -90}}
                  className="button"
                  onClick={this.next}><span>Next <i className="fa fa-long-arrow-right"></i></span></button>
          <button style={this.state.showDoneBtn ? {} : this.hidden}
                  className="button"
                  onClick={this.done}><span>Done</span></button>
        </div>
      </div>
    );
  }
}

MultiStep.defaultProps = {
  showNavigation: true
};
