import React, { Component } from 'react';
import GithubPill from '../GithubPill';
import ActivityComponent from '../Activity';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css';

class Github extends Component {
  state = {
    isLoaded: false,
    activePR: {
      activities: []
    },
    pullRequests: []
  };

  componentDidMount() {
    const { story } = this.props;
    this.updatePullRequests(story);
  }

  componentWillUpdate(nextProps) {
    const { story } = this.props;
    if (nextProps.story.ID != story.ID) {
      this.updatePullRequests(nextProps.story);
    }
  }

  updatePullRequests(story) {
    fetch(`${process.env.REACT_APP_API_URL}/pull_requests?storyID=${story.ID}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
          isLoaded: true,
          pullRequests: data,
          activePR: !data[0] ? this.state.activePR : data[0]
        })
      })
  }

  render() {
    const settings = {
      arrow: true,
      className: "github-slider slider variable-width",
      infinite: false,
      centerMode: true,
      focusOnSelect: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      speed: 500,
      afterChange: (index) => {
        const { pullReqeusts } = this.state;
        this.setState({
          ...this.state,
          activePR: pullRequests[index]
        });
      }
    };
    const { activePR, pullRequests } = this.state;
    const { activities } = activePR;

    return (
      <div className="github">
        <Slider {...settings}>
          {pullRequests.map(pr => {
            return <GithubPill pr={pr} />
          })}
        </Slider>

        <div className="github__activities">
          {activities.map(activity => {
            return <ActivityComponent activity={activity} />
          })}
        </div>
      </div>
    );
  }
}

export default Github;
