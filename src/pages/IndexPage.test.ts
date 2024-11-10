import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import IndexPage from './IndexPage.vue';
import { MyButton } from 'quasar-app-extension-qui';

describe('IndexPage', () => {
  it('should mount correctly', () => {
    const wrapper = mount(IndexPage, {
      global: {
        components: {
          MyButton,
        },
      },
    });

    const btn = wrapper.findComponent(MyButton);
    expect(btn.exists()).toBe(true);
  });
});
