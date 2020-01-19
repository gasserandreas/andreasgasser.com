import React from 'react';

export default {
  title: 'Welcome',
};

export const toStorybook = () => (
  <div>
    <h1>Personal Storybook</h1>
    <p>Component and pattern library for this webpage</p>
  </div>
);

toStorybook.story = {
  name: 'to Storybook',
};
