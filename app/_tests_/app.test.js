import App from '../app';

const appComponent = mount(<App />);
describe('<App />', () => {
  it('render', () => {
    expect(appComponent).toHaveLength(1);
  });
});
