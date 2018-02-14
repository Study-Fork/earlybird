import {configure, addDecorator} from '@storybook/react';
import centered from '@storybook/addon-centered'

addDecorator(centered);

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
