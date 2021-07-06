## nuxt-jest common errors and warnings:

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# run test
$ npm run test
```
---

 **1-[Vue warn]: Unknown custom element: <nuxt-link> - did you register the component correctly? For recursive components, make sure to provide the "name" option.**
 
 component:

     <template>  
      <header class="c-header">  
        <nuxt-link to="/">  
          Home  
        </nuxt-link>  
      </header>  
    </template>

test:

    import { mount } from '@vue/test-utils'  
    import Header from '~/components/Header/Header'  
      
    describe('Header', () => {  
      test('is a Vue instance', () => {  
      const wrapper = mount(Header)  
      expect(wrapper.vm).toBeTruthy()  
     })})
solution:

    import { mount, RouterLinkStub } from '@vue/test-utils'  
    import Header from '~/components/Header/Header'  
      
    describe('Header', () => {  
      test('is a Vue instance', () => {  
      const wrapper = mount(Header, {  
      stubs: {  
      NuxtLink: RouterLinkStub  
      }  
     })  expect(wrapper.vm).toBeTruthy()  
     })})

**2-[Vue warn]: Error in render: "TypeError: Cannot read property 'state' of undefined"**

component: 

    <template>  
      <main class="c-main">  
        <h1 class="c-main__title">  
          {{ $store.state.title }}  
        </h1>  
      </main>  
    </template>

test: 

    import { mount } from '@vue/test-utils'  
    import Main from '~/components/Main/Main'  
      
    describe('Main', () => {  
      test('is a Vue instance', () => {  
      const wrapper = mount(Main)  
      expect(wrapper.vm).toBeTruthy()  
     })})

solution:

    import { mount, createLocalVue } from '@vue/test-utils'  
    import Vuex from 'vuex'  
    import Main from '~/components/Main/Main'  
      
    const localVue = createLocalVue()  
    localVue.use(Vuex)  
      
    const store = new Vuex.Store({  
      state: {  
      title: 'nuxt-jest'  
      }  
    })  
      
    describe('Main', () => {  
      test('is a Vue instance', () => {  
      const wrapper = mount(Main, {  
      localVue,  
      store  
      })  
      expect(wrapper.vm).toBeTruthy()  
     })})
**3-[Vue warn]: Missing required prop: "title"**

component:

    <template>  
      <footer class="c-footer">  
        <h2>{{ title }}</h2>  
      </footer>  
    </template>  
      
    <script>  
    export default {  
      name: 'Footer',  
      props: {  
      title: {  
      type: String,  
      required: true  
      }  
     }}  
    </script>

test: 

    import { mount } from '@vue/test-utils'  
      
    import Footer from '~/components/Footer/Footer'  
      
    describe('Footer', () => {  
      test('is a Vue instance', () => {  
      const wrapper = mount(Footer)  
      expect(wrapper.vm).toBeTruthy()  
     })})

solution:

    import { mount } from '@vue/test-utils'  
      
    import Footer from '~/components/Footer/Footer'  
      
    describe('Footer', () => {  
      test('is a Vue instance', () => {  
      const wrapper = mount(Footer, {  
      propsData: { title: 'footer' }  
     })  expect(wrapper.vm).toBeTruthy()  
     })})
 

