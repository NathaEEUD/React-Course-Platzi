import React, { Component } from 'react';
import '../assets/styles/components/Badges.scss';
import { Link } from 'react-router-dom';
import confLogo from '../assets/static/badge-header.svg';
import api from '../api';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class Badges extends Component {
  constructor(props) {
    super(props);
    console.log('1. constructor()');

    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');

    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log({
      prevProps,
      prevState,
    });
    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount()');
    clearTimeout(this.timeoutId);
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.badges.list();
      this.setState({
        loading: false,
        data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };

  render() {
    console.log('2/4. render()');

    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="badges">
          <div className="badges__hero">
            <div className="badges__container">
              <img className="badges__conf-logo" src={confLogo} alt="Conf Logo" />
            </div>
          </div>
        </div>

        <div className="badges__container">
          <div className="badges__buttons">
            <Link className="btn btn-primary" to="/badges/new">
              New Badge
            </Link>
          </div>
        </div>

        <BadgesList badges={this.state.data} />
      </React.Fragment>
    );
  }
}

export default Badges;
