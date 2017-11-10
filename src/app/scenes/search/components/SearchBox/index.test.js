import React from 'react';
import {mount} from 'enzyme';

import {SearchBox} from './index';

describe('SearchBox', () => {
    let subject;
    let mockProps;
    let enterEvent;
    let spyHistoryPush;
    let instance;

    beforeEach(() => {
        spyHistoryPush = jest.fn();
        mockProps = {
            options: [{
                value: 'value-one',
                label: 'Value one',
            }, {
                value: 'value-two',
                label: 'Value two',
            }, {
                value: 'value-three',
                label: 'Value three',
            }],
            onClick: jest.fn(),
            history: {
                push: spyHistoryPush
            }
        };
        enterEvent = {
            keyCode: 13,
            preventDefault: jest.fn()
        };
    });

    function renderComponent(props) {
        subject = mount(<SearchBox {...props} />);
        instance = subject.instance();
    }

    it('should render SearchFilter', () => {
        renderComponent(mockProps);
        expect(subject.find('SearchFilter').length).toEqual(1);
    });

    it('should render SearchInput', () => {
        renderComponent(mockProps);
        expect(subject.find('SearchInput').length).toEqual(1);
    });

    describe('switchFilter', () => {
        let activeButton = 'mock_button';

        beforeEach(() => {
            renderComponent(mockProps);
            subject.setState({
                activeButton
            });
            subject.instance().switchFilter(activeButton);
        });

        it('should switch filter', () => {
            expect(subject.state('activeButton')).toEqual('mock_button');
        })
    });

    describe('search', () => {
        beforeEach(() => {
            renderComponent(mockProps);
            subject.setState({
                value: 'some',
                activeButton: 'any'
            });
        });

        it('should make search', () => {
            subject.find('.search-box__button').simulate('click');
            expect(spyHistoryPush).toHaveBeenCalledWith('/search/any/some');
        })
    });

    describe('onEnter', () => {
        describe('on enter', () => {
            beforeEach(() => {
                renderComponent(mockProps);
                instance.onEnter(enterEvent);
            });

            it('should make search', () => {
                subject.find('SearchInput').simulate('keyDown');
                expect(spyHistoryPush).toHaveBeenCalled();
            });

            it('should prevent default', () => {
                expect(enterEvent.preventDefault).toHaveBeenCalled();
            });
        });
    });


});

