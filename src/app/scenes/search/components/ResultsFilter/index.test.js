import React from 'react';
import {shallow} from 'enzyme';

import ResultsFilter from './index';

describe('ResultsFilter', () => {
    let subject;
    let mockProps;
    let options = [{
        value: 'value-one',
        label: 'Value one',
    }, {
        value: 'value-two',
        label: 'Value two',
    }, {
        value: 'value-three',
        label: 'Value three',
    }];

    beforeEach(() => {
        mockProps = {
            onClick: jest.fn(),
            options
        };
        renderComponent(mockProps);
    });

    function renderComponent(props) {
        subject = shallow(<ResultsFilter {...props}></ResultsFilter>);
    }

    it('should render ResultsFilterItems', () => {
        expect(subject.find('ResultsFilterItem').length).toEqual(mockProps.options.length);
    });

    describe('onClick', () => {
        beforeEach(() => {
            renderComponent(mockProps);
        });

        it('should call onClick and change active button', () => {
            let activeButton = 'mock_button';
            subject.instance().onClick(activeButton);
            expect(subject.state('activeButton')).toEqual(activeButton);
        });

        it('should not call onClick and change active button if button is not changed', () => {
            let activeButton = 'mock_button';
            subject.setState({
                activeButton
            });
            subject.instance().onClick(activeButton);
            expect(mockProps.onClick).not.toHaveBeenCalled();
        })
    });

    describe('isActiveButton', () => {
        let activeButton = 'mock_button';
        beforeEach(() => {
            renderComponent(mockProps);
            subject.setState({
                activeButton
            });
        });

        it('should define whether button is active', () => {
            expect(subject.instance().isActiveButton(activeButton)).toBeTruthy();
        });

        it('should define whether button is active', () => {
            let button = 'another_button';
            expect(subject.instance().isActiveButton(button)).toBeFalsy();
        });

    });
});

