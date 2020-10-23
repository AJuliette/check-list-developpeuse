'use strict';

var Question = React.createClass({displayName: "Question",
  selectYesAnswer: function selectYesAnswer() {
    this.props.selectAnswer(IS_YES);
  },
  selectNoAnswer: function selectNoAnswer() {
    this.props.selectAnswer(IS_NO);
  },
  render: function() {
    return (
      React.createElement("div", {className: "question"}, 
        React.createElement("h1", {className: "question-name"}, this.props.question.name), 
        React.createElement("ul", {className: "question-buttons"}, 
          React.createElement("li", null, React.createElement("button", {className: "btn btn-lg btn-default question-button-yes", onClick: this.selectYesAnswer}, "Oui")), 
          React.createElement("li", null, React.createElement("button", {className: "btn btn-lg btn-default question-button-no", onClick: this.selectNoAnswer}, "Non"))
        )
      )
    )
  }
});

