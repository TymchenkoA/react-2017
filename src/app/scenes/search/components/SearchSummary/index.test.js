import React from 'react';
import {shallow} from 'enzyme';

import {SearchSummary} from './';

describe('SearchSummary', () => {
    let subject;
    let mockProps;
    let params;

    beforeEach(() => {
        params = {
            type: 'some',
            query: 'query'
        };
        mockProps = {
            match: {
                params
            },
            getMovies: jest.fn(),
            getGenres: jest.fn()
        };
    });

    function renderComponent (props) {
        subject = shallow(<SearchSummary {...props} />);
    }

    describe('componentDidMount', () => {
        it('should get genres', () => {
            renderComponent(mockProps);
            expect(mockProps.getGenres).toHaveBeenCalled();
        });
    });

    describe('componentWillReceiveProps', () => {
        let spyFindMovies = jest.fn();
        let newParams = {
            query: 'lala'
        };
        let newMovies = 'new movies';

        beforeEach(() => {
            renderComponent(mockProps);
            subject.instance().findMovies = spyFindMovies;
            subject.setProps({
                match: {
                    params: newParams
                },
                movies: newMovies
            });
        });

        it('should call find movies', () => {
            expect(spyFindMovies).toHaveBeenCalledWith(newParams);
        });

        it('should set state with new movies', () => {
            expect(subject.state('movies')).toEqual(newMovies);
        });
    });

    describe('findMovies', () => {
        it('should get movies', () => {
            renderComponent(mockProps);
            expect(mockProps.getMovies).toHaveBeenCalled();
        });

        it('should not get movies if query is not specified', () => {
            params.query = null;
            renderComponent(mockProps);
            expect(mockProps.getMovies).not.toHaveBeenCalled();
        })
    });

    describe('sortData', () => {
        let filter = 'mock_filter';
        let movies = [{
            'mock_filter': 2
        }, {
            'mock_filter': 1
        }];

        beforeEach(() => {
            renderComponent(mockProps);
            subject.setState({
                movies
            });
            subject.instance().sortData(filter);
        });

        it('should sort movies', () => {
            expect(subject.state('movies')).toEqual([{
                'mock_filter': 1
            }, {
                'mock_filter': 2
            }]);
        })
    });
});