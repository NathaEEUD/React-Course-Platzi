import React, { Component } from 'react';
import '../assets/styles/components/BadgeNew.scss';
import header from '../assets/static/platzi-conf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';

class BadgeNew extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });

    try {
      await api.badges.create(this.state.form);
      this.setState({
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="badgeNew__hero">
          <img src={header} alt="Header" className="img-fluid badgeNew__hero-image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                email={this.state.form.email || 'EMAIL'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                twitter={this.state.form.twitter || 'twitter'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
