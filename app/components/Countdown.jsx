var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getDefaultProps: function () {
      return {
          seconds: 0
      }
    },
    getInitialState: function(){
        return {
            seconds: 0
        }
    },
    handleSetCountdown: function (seconds) {
        this.setState({
           seconds: seconds
        });
    },
    render: function () {
        var {seconds} = this.state;
        return (
            <div>
                <Clock totalSeconds={seconds}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        )
    }
});

module.exports = Countdown;