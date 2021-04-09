const sortingFunction = require('../../components/AnecdoteList').filterCheck;

let anecdotes, mockState;
describe('Anecdote sorter function', () => {
  beforeEach(() => {
    anecdotes = [
      {
        content: 'Anecdote 1',
        vote: 1,
        filtered: false
      },
      {
        content: 'Anecdote 2',
        vote: 2,
        filtered: true
      },
      {
        content: 'Anecdote 3',
        vote: 3,
        filtered: false
      },
    ];
    mockState = {
      filter: true,
      anecdotes: anecdotes
    };
  });
  test('filters anecdotes properly', () => {
    const { anecdotes } = sortingFunction(mockState);
    const contents = anecdotes.map(a => a.content);

    expect(contents).toContain('Anecdote 1');
    expect(contents).toContain('Anecdote 3');

  });
});