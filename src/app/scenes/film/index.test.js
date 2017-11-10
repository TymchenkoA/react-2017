import React from 'react';
import {shallow} from 'enzyme';

import {FilmPage} from './';

describe('FilmPage', () => {
    let subject;
    let mockProps;
    let params;

    beforeEach(() => {
        params = {
            query: 'query'
        };
        mockProps = {
            match: {
                params
            },
            activeMovie: {},
            getMovieDetails: jest.fn().mockReturnValue(Promise.resolve({genres: [{id: 2}]})),
            findMoviesByGenre: jest.fn()
        };
    });

    function renderComponent (props) {
        subject = shallow(<FilmPage {...props} />);
    }

    describe('componentDidMount', () => {
        it('should get data', () => {
            renderComponent(mockProps);
            expect(mockProps.getMovieDetails).toHaveBeenCalledWith(params.query);
            //expect(mockProps.findMoviesByGenre.mock.calls.length).toBe(1);
        });
    });

    describe('componentWillReceiveProps', () => {
        let spyGetData = jest.fn();
        let newParams = {
            query: 'lala'
        };

        beforeEach(() => {
            renderComponent(mockProps);
            subject.instance().getData = spyGetData;
        });

        it('should not call get data without props', () => {
            expect(spyGetData).not.toHaveBeenCalled();
        });

        it('should call get data', () => {
            subject.setProps({
                match: {
                    params: newParams
                }
            });
            expect(spyGetData).toHaveBeenCalledWith(newParams);
        });
    });

    describe('goBack', () => {
        let spyHistoryPush = jest.fn();

        beforeEach(() => {
            renderComponent(mockProps);
            subject.setProps({
                history: {
                    push: spyHistoryPush
                }
            });

        });

        it('should go back', () => {
            subject.find('.back-button').simulate('click');
            expect(spyHistoryPush).toHaveBeenCalledWith('/');
        })
    });
});