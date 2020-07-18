import { shallowMount } from '@vue/test-utils';
import SubmitURL from '../components/SubmitURL.vue';


it ('should return error when original_url is empty', async () => {
    const wrapper = shallowMount(SubmitURL);
    const button = wrapper.find('button');
    await button.trigger('click');

    const test =wrapper.find('error');
    // @ts-ignore
    expect(wrapper.vm.error).toBe(true);
});

it ('should call http request when original_url is not empty', async () => {
    const wrapper = shallowMount(SubmitURL);
    wrapper.find('input').setValue('https://www.youtube.com/watch?v=o8NPllzkFhE');
    const button = wrapper.find('button');
    await button.trigger('click');

    const test =wrapper.find('error');
    // @ts-ignore
    expect(wrapper.vm.error).toBe(false);
});