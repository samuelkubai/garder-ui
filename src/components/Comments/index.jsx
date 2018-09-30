import React, { Component, Fragment } from 'react';
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';
import 'moment-timezone';

import './index.css';

class Comments extends Component {
    state = {
      isLoaded: false,
      comments: []
    }

    componentWillUpdate(nextProps) {
      const { story } = this.props;

      if (nextProps.story.ID != story.ID) {
        fetch(`${process.env.REACT_APP_API_URL}/comments?storyID=${nextProps.story.ID}`)
          .then(response => response.json())
          .then(data => {
            this.setState({
              isLoaded: true,
              comments: data  
            })
          });
      }
    }

    render() {
      const { comments } = this.state;

      return (
        <div className="comments">
          <div className="stream">
            {comments.map(comment => (
              <div className="comment">
                <div className="comment__user-pic">
                  <img src="/images/1.jpg" />
                </div>
                <div className="comment__container">
                  <div className="comment__user-name">
                    Mark twin
                  </div>
                  <div className="comment__updated-at">
                    <Moment fromNow>{comment.UpdatedAt}</Moment>
                  </div>
                  <div className="comment__message">
                    <ReactMarkdown source={comment.message} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="observations">
            <div className="observations__title">
              Observations
            </div>

            <div className="observations__stream">
              <div className="observation">
                <div className="observation__title">
                  <i className="material-icons">
                    attachment
                  </i>
                  Document
                </div>
                <div className="observation__content">
                  <a href="#">
                    https://docs.google.com/spreadsheets/S002KK2ksds-23?sharing=true
                  </a>
                </div>
              </div>              
              <div className="observation">
                <div className="observation__title">
                  <i className="material-icons red">
                    slow_motion_video
                  </i>
                  Blocker
                </div>
                <div className="observation__content">
                  There's a potential blocker with <b>#KDS2999</b>
                </div>
              </div>
              <div className="observation">
                <div className="observation__title">
                  <i className="material-icons">
                    attachment
                  </i>
                  Document
                </div>
                <div className="observation__content">
                  <a href="#">
                    https://docs.google.com/spreadsheets/S002KK2ksds-23?sharing=true
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default Comments;
