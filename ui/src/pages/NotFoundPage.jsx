import React from 'react';

class NotFoundPage extends React.Component {
  render() {
    return (
      <span>
        404 Not Found
        <br />
        <img src={'/images/lilly.png'}/>
      </span>
    )
  }
}

export default NotFoundPage;