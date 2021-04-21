import { Component } from 'react';

class mainIndex extends Component {
  render() {
    return (
      <div className="App">
        <li className="timeline-item">
          <div className="timeline-badge"><span className="bg-primary bg-lighten-4" data-toggle="tooltip" data-placement="right" title="Portfolio project work"><i className="ft-cloud-drizzle primary"></i></span></div>
          <div className="activity-list-text">
            <h6 className="mb-1"><span>Weather Update</span><span className="float-right grey font-italic font-small-2">Yesterday</span></h6>
            <p className="mt-0 mb-2 font-small-3">Hi John! It is a rainy day with 16&deg;C.</p>
          </div>
        </li>
      </div>
    )
  }
}
export default mainIndex;