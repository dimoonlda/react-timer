var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    describe('handleStatusChange', () => {
        it('should start and count timer', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');
            setTimeout(() => {
                expect(timer.state.seconds).toBe(3);
                expect(timer.state.timerStatus).toBe('started');
                done();
            }, 3001)
        });
        it('should pause timer on paused status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');
            setTimeout(() => {
                timer.handleStatusChange('paused');
                setTimeout(() => {
                    expect(timer.state.seconds).toBe(2);
                    expect(timer.state.timerStatus).toBe('paused');
                    done();
                }, 2000);
            }, 2001);
        });
    })
});