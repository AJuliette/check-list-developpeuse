'use strict';

var Question = React.createClass({
  selectYesAnswer: function selectYesAnswer() {
    this.props.selectAnswer(IS_YES);
  },
  selectNoAnswer: function selectNoAnswer() {
    this.props.selectAnswer(IS_NO);
  },
  render: function() {
    return (
      <div className="question">
        <h1 className="question-name">{this.props.question.name}</h1>
        <ul className="question-buttons">
          <li><button className="btn btn-lg btn-default question-button-yes" onClick={this.selectYesAnswer}>Oui</button></li>
          <li><button className="btn btn-lg btn-default question-button-no" onClick={this.selectNoAnswer}>Non</button></li>
        </ul>
      </div>
    )
  }
});

