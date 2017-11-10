import React from 'react';
import {shallow} from 'enzyme';

import ResultsFilterItem from './index';

describe('ResultsFilterItem', () => {
    let subject;
    let mockProps;
    let label;

    beforeEach(() => {
        mockProps = {
            isActive: true,
            onClick: jest.fn()
        };
        label = 'Label';

        renderComponent(mockProps, label);
    });

    function renderComponent(props, label) {
        subject = shallow(<ResultsFilterItem {...props}>{label}</ResultsFilterItem>);
    }

    it('should have active class if isActive prop was specified', () => {
        expect(subject.find('span').hasClass('active')).toEqual(true);
    });

    it('should call onCLick handler', () => {
        subject.find('span').simulate('click');
        expect(mockProps.onClick.mock.calls.length).toBe(1);
    });
});

