import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import AnecdoteList from '../../components/AnecdoteList';
import store from '../../store/store';

describe('<AnecdoteList />', () => {
  let anecdoteList;

  beforeEach(() => {
    Enzyme.configure({ adapter: new Adapter() });
    anecdoteList = [
      {
        content: 'Anecdote 1',
        vote: 1
      },
      {
        content: 'Anecdote 2',
        vote: 2
      },
      {
        content: 'Anecdote 3',
        vote: 3
      },
    ];
  });

  test('renders all the anecdotes given', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AnecdoteList anecdotes={anecdoteList} />
      </Provider>
    );
    expect(wrapper.props().children.props.anecdotes).toHaveLength(3);
  });

});