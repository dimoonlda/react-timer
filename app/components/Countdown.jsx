var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
            if (this.state.seconds === 0) {
                this.setState({
                    countdownStatus: 'stopped'
                });
            }
        }, 1000);
    },
    stopTimer: function () {
        this.setState({
            seconds: 0
        });
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.stopTimer();
                case 'paused':
                    clearTimeout(this.timer);
                    this.timer = undefined;
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
    handleStatusChange: function (newStatus) {
        this.setState({
            countdownStatus: newStatus
        })
    },
    render: function () {
        var {seconds, countdownStatus} = this.state;
        var renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        };
        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={seconds}/>
                {renderControlArea()}
            </div>
        )
    }
});

module.exports = Countdown;