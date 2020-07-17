import { shallowMount } from '@vue/test-utils';
import CurrentURLs from '../views/About.vue';


jest.mock('axios', () => jest.fn(() => Promise.resolve({ data: { urls: [{ id: 1, url: 'http//google.com' }] } })));


it('should fetch urls when mounted', async () => {
    const wrapper = shallowMount(CurrentURLs);

    wrapper.vm.$nextTick(() => {
        // @ts-ignore
        expect(wrapper.vm.URLs.length).toBe(1);
    });
});