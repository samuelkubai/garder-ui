import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import StoryHeader from '../../components/StoryHeader';
import Activity from '../../components/Activity';
import Comments from '../../components/Comments';

class Activities extends Component {
  state = {
    error: null,
    isLoaded: false,
    activities: [],
    story: {
      ID: '',
      name: '',
      Comments: [],
      pull_request: [],
    },
    activeTab: 'comments'
  }
  
  componentDidMount() {
    const { match } = this.props;
    fetch(`${process.env.REACT_APP_API_URL}/stories?id=${match.params.storyID}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
          isLoaded: true,
          story: data,
          activities: data.activities ? data.activities : [],
        })
      }) 
  }

  renderStoryHeader () {
    const { story, activeTab } = this.state;
    const tabs = [
      { id: 'comments', name: 'Comments' },
      { id: 'pt', name: 'Pivotal tracker' },
      { id: 'gh', name: 'Github' }
    ]
    return (<StoryHeader story={story} activeTab={activeTab} tabs={tabs} 
      onTabChange={(tab) => this.setState({...this.state, activeTab: tab})}/>);
  }

  renderActivities() {
    const { activities } = this.state;

    return (
      <div className="activities__container">
        {activities.map(activity => <Activity activity={activity}></Activity>)}
      </div>
    ); 
  }

  renderTabContent(story) {
    return (
      <Fragment>
        <Comments story={story}/>
      </Fragment>
    );
  }

  render() {
    const { story } = this.state;

    return (
      <Fragment>
       {this.renderStoryHeader()}
       {this.renderTabContent(story)}
      </Fragment>
    );
  }
}

const DecoratedActivities = withRouter(Activities);

export default DecoratedActivities;
