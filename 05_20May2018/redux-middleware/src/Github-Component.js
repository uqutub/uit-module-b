import React, { Component } from 'react';

import { connect } from 'react-redux';

import { GitAction } from './store/action/github';

class GithubComponent extends Component {

  componentWillMount() {
      console.log('caling api.....')
    this.props.getMyRepo('uqutub');
  }

  componentWillReceiveProps(props) {
    console.log('props repo', props)
  }
  
  render() {
    return (
      <div>
            Loader: { this.props.loader.toString() }
            {
                this.props.repo && this.props.repo.map(repo => (
                    <div key={repo.id}>
                        {repo.id}
                    </div>
                ))
            }
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        repo: state.GithubReducer['repo'],
        loader: state.GithubReducer['loader'],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMyRepo: (x) => dispatch(GitAction.getRepos(x))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(GithubComponent);
