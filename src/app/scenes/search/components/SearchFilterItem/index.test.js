import React from 'react';
import {shallow} from 'enzyme';

import SearchFilterItem from './index';

describe('SearchFilterItem', () => {
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
        subject = shallow(<SearchFilterItem {...props}>{label}</SearchFilterItem>);
    }

    it('should have active class if isActive prop was specified', () => {
        expect(subject.find('button').hasClass('active')).toEqual(true);
    });

    it('should call onCLick handler', () => {
        subject.find('button').simulate('click');
        expect(mockProps.onClick.mock.calls.length).toBe(1);
    });
});

