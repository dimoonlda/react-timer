var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });
    describe('render', () => {
        it('should render Pause button when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            var controls_element = ReactDOM.findDOMNode(controls);
            expect(controls_element.querySelector('.secondary')).toExist();
        });
        it('should render Start button when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            var controls_element = ReactDOM.findDOMNode(controls);
            expect(controls_element.querySelector('.primary')).toExist();
        });
    });
});