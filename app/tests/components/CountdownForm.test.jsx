var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exists', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var el = ReactDOM.findDOMNode(countdownForm);

        countdownForm.refs.seconds.value = '121';
        TestUtils.Simulate.submit(el.querySelector('form')[0]);

        expect(spy).toHaveBeenCalledWith(121);
    });

    it('shouldn\'t call onSetCountdown if invalid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var el = ReactDOM.findDOMNode(countdownForm);

        countdownForm.refs.seconds.value = 'abc';
        TestUtils.Simulate.submit(el.querySelector('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});