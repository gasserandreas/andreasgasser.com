/* global fetch */
import { __testables__, requestInitialState, sendContactMessage } from '../services';

const { getUrl } = __testables__;

describe('components/utils/services', () => {
  it('check requestInitialState', () => {
    expect(requestInitialState).toMatchSnapshot();
  });

  it('should return default url', () => {
    expect(getUrl).toMatchSnapshot();
  });

  it('should ', (done) => {
    fetch.mockResponseOnce('{"send":true,"data":"01000170f970fb94-0a203402-dfd0-427a-a023-c32ba13f29cf-000000"}');

    const person = {
      name: 'Test Name',
      email: 'test.name@domain.com',
      message: 'test message',
    };

    sendContactMessage(person)
      .then((data) => {
        expect(data).toMatchSnapshot();
        done();
      });
  });
});
