import React from 'react';
import { create } from 'react-test-renderer';
import { User } from '../../src/components/User/User';

describe('User Component', () => {
  it('renders correctly with user data', () => {
    const userProps = {
      location: 'City, Country',
      login: 'username',
      avatar_url: 'https://example.com/avatar.png',
      followers: 100,
      following: 50,
      bio: 'Software Developer',
    };

    const component = create(<User {...userProps} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without optional data (location and bio)', () => {
    const userProps = {
      login: 'username',
      avatar_url: 'https://example.com/avatar.png',
      followers: 100,
      following: 50,
    };

    const component = create(<User {...userProps} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
