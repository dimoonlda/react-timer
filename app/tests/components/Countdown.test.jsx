var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should set state to \'started\' and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(12);

            expect(countdown.state.seconds).toBe(12);
            expect(countdown.state.countdownStatus).toBe('started');
            var timer = setTimeout(() => {
                expect(countdown.state.seconds).toBe(11);
                clearTimeout(timer);
                done();
            }, 1001);
        });
        it('shouldn\'t countdown\'s counter be less than 0', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            var timer = setTimeout(() => {
                expect(countdown.state.seconds).toBe(0);
                clearTimeout(timer);
                done();
            }, 3000);
        });
    });
});