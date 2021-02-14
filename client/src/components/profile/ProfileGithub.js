import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileGithub extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      clientId: '3ef1049635135c0ed97f',
      clientSecret: 'de449ab32b8500ca9d3059784974484b7d88108b',
      count: 5,
      sort: 'created: asc',
      repos: [],
    };
  }

  componentDidMount() {
    this._isMounted = true;

    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;
    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (this._isMounted) {
          this.setState({ repos: data });
        }
      })
      .catch((err) => console.log(err));
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { repos } = this.state;
    const repoItens = repos.map((repo) => (
      <div key={repo.id} className='card card-body mb-2'>
        <div className='row'>
          <div className='col-md-6'>
            <h4>
              <a href={repo.html_url} target='_blank' className='text-info'>
                {repo.name}
              </a>
              {/*
                <Link to={repo.html_url} className='text-info' target='_blank'>
                  {repo.name}
                </Link>
                */}
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className='col-md-6'>
            <span className='badge badge-info mr-1'>
              Stars: {repo.stargazers_count}
            </span>
            <span className='badge badge-secondary mr-1'>
              Watchers: {repo.watchers_count}
            </span>
            <span className='badge badge-success'>
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <hr />
        <h3 className='mb-4'>Latest Github Repos</h3>
        {repoItens}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfileGithub;
