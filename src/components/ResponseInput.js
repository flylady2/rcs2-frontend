import React from 'react';
import {connect} from 'react-redux';

class ResponseInput extends React.Component {

  render() {
    return (
      <div>
        ResponseInput
        <form>
          <label>Ranking</label>
          <select>
          <option>1</option>
          <option>2</option>
        </select>
        </form>
      </div>
    )
  }

}
export default connect(null)(ResponseInput)
