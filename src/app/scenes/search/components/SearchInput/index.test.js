import React from 'react';
import {shallow} from 'enzyme';

import SearchInput from './index';

describe('SearchInput', () => {
    let subject;
    let mockProps;

    beforeEach(() => {
        mockProps = {
            onChange: jest.fn(),
            onKeyDown: jest.fn()
        };

        renderComponent(mockProps);
    });

    function renderComponent(props) {
        subject = shallow(<SearchInput {...props} />);
    }

    it('should call onChange handler', () => {
        subject.find('input').simulate('change');
        expect(mockProps.onChange.mock.calls.length).toBe(1);
    });

    it('should call onKeyDown handler', () => {
        subject.find('input').simulate('keyDown');
        expect(mockProps.onKeyDown.mock.calls.length).toBe(1);
    });
});

