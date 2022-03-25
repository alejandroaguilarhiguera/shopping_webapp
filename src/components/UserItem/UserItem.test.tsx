import React from 'react';
import moment from 'moment';
import faker from 'faker';
import { User } from 'types';
import { shallow, mount, render, ShallowWrapper } from 'enzyme';
import { UserItem } from 'components';

const user = {
  id: moment().unix(),
  email: faker.internet.email(),
  username: faker.internet.userName(),
  provider: true,
  confirmed: true,
  blocked: false,
  createdAt: moment().unix().toString(),
  updatedAt: moment().unix().toString(),
}

const setUp = (props={ user }) => shallow(<UserItem {...props} />);

describe('<UserItem />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = setUp({ user });
  });
  test('Should render the application', () => {
    const wrapper = component;
    
    // const wrapper = shallow(<UserItem user={user} />);
    // expect(wrapper).toMatchSnapshot();
  });

  test('full rendering props', () => {
    const wrapper = mount(<UserItem user={user} />);
    expect(wrapper.props().user.email).toEqual(user.email);
    const otherUser = {
      id: moment().unix(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      provider: true,
      confirmed: true,
      blocked: false,
      createdAt: moment().unix().toString(),
      updatedAt: moment().unix().toString(),
    }
    wrapper.setProps({ user: otherUser });
    expect(wrapper.props().user.email).toEqual(otherUser.email);
  });

  it('Render', () => {
    const utils = render(<UserItem user={user} />);
    console.log(utils.html());
    expect(1).toBe(1);
    // expect(utils.find('.colEmail').text()).toContain(user.email);
    
  });
});