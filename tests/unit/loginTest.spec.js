import { flushPromises, mount } from '@vue/test-utils'
import Login from 'components/Login.vue'
import store from '../../src/store/index.js'
import router from '../../src/routes/index.js'
import 'regenerator-runtime/runtime';
import * as firebaseFunctions from '../../src/store/firebase.js'


window.alert = jest.fn();

describe('Login.vue', () => {
  const wrapper = mount(Login, {global: {
    provide: {
      store: store
    },
    plugins: [router]
  }});

  it('renders a login', (done) => {     
    expect(wrapper.html().includes("Plaque Login")).toBe(true);
    done();
  })

  it('click login button without username password', (done) => {
      jest.spyOn(window, 'alert').mockImplementation(() => {});
      wrapper.find('button').trigger('click');

      //expect(store.default.state.user).toBeNull();
      expect(window.alert).toBeCalledWith(expect.anything());
      done();
  })

  it('click login button with correct username password',  async () => {

    jest.spyOn(firebaseFunctions, "signin").mockReturnValue(Promise.resolve( {user:{id:12345}} ));

    wrapper.find("#email").setValue("a@a.com");
    wrapper.find("#password").setValue("123456");
    wrapper.find('button').trigger('click');

    await flushPromises();

    //expect(store.default.state.user).not.toBeNull();
    expect(router.currentRoute.value.fullPath).toBe("/Main");
})

})

