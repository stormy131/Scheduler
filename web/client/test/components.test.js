// eslint-disable no-undef
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
import { createLocalVue, mount } from '@vue/test-utils';
import Menu from '../src/components/Menu';
import MenuButton from '../src/components/MenuButton';
import NewTask from '../src/components/NewTask';
import Project from '../src/components/Project';
import ProjectItem from '../src/components/ProjectItem';
import Projects from '../src/components/Projects';
import Task from '../src/components/Task';
import Error from '../src/components/Error';
import App from '../src/App';
import router from '../src/router';
import VueRouter from 'vue-router';

require('jsdom-global')();

const localVue = createLocalVue({
  render: (h) => h(App),
  router,
});

localVue.use(VueRouter);

describe('Component unit tests', () => {
  describe('MenuButton tests', () => {
    const button = mount(MenuButton, {
      localVue,
      props: {
        name: 'projects',
        href: '/projects',
      },
    });
    test('Button should have src = ./projects.svg', () => {
      expect(button.vm.src).toBe('./projects.svg');
    });
    test('Button snapshot test', () => {
      expect(button.element).toMatchSnapshot();
    });
  });
});
