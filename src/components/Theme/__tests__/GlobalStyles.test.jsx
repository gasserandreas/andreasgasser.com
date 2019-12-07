import GlobalStyles from '../GlobalStyles';

describe('components/Theme/GlobalStyles', () => {
  it('should provide GlobalStyles', () => {
    expect(GlobalStyles).toMatchSnapshot();
  });
});
