import Counter from '@components/Counter';
import { shallow } from 'enzyme';

describe('Example test', () => {
  test('should return true', () => {
    const haveTests = true;
    shallow(<Counter />);
    expect(haveTests).toBeTruthy();
  });
});
