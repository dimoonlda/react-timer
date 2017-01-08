var React = require('react');
var Controls = require('Controls');
var Clock = require('Clock');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            seconds: 0,
            timerStatus: 'stopped'
        }
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            });
        }, 1000);
    },
    stopTimer: function () {
        this.setState({
            seconds: 0
        });
    },
    componentWillUnmount: function () {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.stopTimer();
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    handleStatusChange: function (newStatus) {
        this.setState({
            timerStatus: newStatus
        })
    },
    render: function () {
        var {seconds, timerStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={seconds}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
});

module.exports = Timer;