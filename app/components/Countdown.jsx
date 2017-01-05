var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getDefaultProps: function () {
        return {
            seconds: 0
        }
    },
    getInitialState: function () {
        return {
            seconds: 0,
            countdownStatus: 'stopped'
        }
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newSeconds = this.state.seconds - 1;
            this.setState({
               seconds: newSeconds >= 0 ? newSeconds : 0
            });
        }, 1000);
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
            }
        }
    },
    handleSetCountdown: function (seconds) {
        this.setState({
            seconds: seconds,
            countdownStatus: 'started'
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