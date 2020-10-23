'use strict';

var Answer = React.createClass({
  render: function() {
    var response = classNames({
      './img/tada.png': this.props.isAnswerCorrect,
      './img/thumbs_down.png': !this.props.isAnswerCorrect
    });
    var alt =
      classNames({
        'confetti emojis': this.props.isAnswerCorrect,
        'thumbs down emoji': !this.props.isAnswerCorrect
      });
    var classes = classNames({
      'answer': true,
      'answer-correct bg-success': this.props.isAnswerCorrect,
      'answer-incorrect bg-danger': !this.props.isAnswerCorrect
    });
    var img = "./img/" + this.props.question.img;
    var name = this.props.question.name;
    var url = this.props.question.url;
    var text = this.props.question.text;

    return (
      <div className={classes}>
        <h1 className="answer-name">
          {name}
        </h1>
        <div className="answer-picture"><img src={response} alt={alt} width="80"/></div>
        <div className="answer-text">{text}</div>
        <div className="answer-next">
          <button className="btn btn-lg btn-info answer-button-next" onClick={this.props.nextQuestion}>Question suivante</button>
        </div>
      </div>
    )
  }
});

