import React, { Component } from 'react';
import Moment from 'react-moment';

import './index.css';

class GithubPill extends Component {
  render() {
    const { pr } = this.props;

    return (
      <div className="github-pill">
        <div  className="github-pill__story">
          <div className="github-pill__story__indicator"></div>
          <div className="github-pill__story__info">
            <div className="github-pill__story__title">
              {pr.title}
            </div>
            <div className="github-pill__story__metadata">
              <div className="github-pill__story__last-updated">
                Last updated <Moment fromNow>{pr.UpdatedAt}</Moment>
              </div>
              <ul className="github-pill__story__owners">
                <li className="github-pill__story__owners-pic">
                  <img src="/images/1.jpg"/>
                </li>
                <li className="github-pill__story__owners-pic">
                  <img src="/images/2.jpg"/>
                </li>
              </ul>
            </div>
          </div>
          <div className="github-pill__story__statistics">
            <div className="github-pill__story-statistic">
              <div className="github-pill__story-statistic__value">
                45%
              </div>
              <div className="github-pill__story-statistic__name">
                Confidence
              </div>
            </div>
            <div className="github-pill__story-statistic">
              <div className="github-pill__story-statistic__value">
                2
              </div>
              <div className="github-pill__story-statistic__name">
                Comments
              </div>
            </div>
            <div className="github-pill__story-statistic">
              <div className="github-pill__story-statistic__value">
                0
              </div>
              <div className="github-pill__story-statistic__name">
                Pull requests
              </div>
            </div>
            <div className="github-pill__story-statistic">
              <div className="github-pill__story-statistic__value">
                3
              </div>
              <div className="github-pill__story-statistic__name">
                Complexity
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GithubPill;
