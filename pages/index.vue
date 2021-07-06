<template>
  <div class="p-index">
    <Header />
    <Main />
    <Footer title="Footer"/>
  </div>
</template>

<script>
import Header from '~/components/Header/Header'
import Main from '~/components/Main/Main'
import Footer from '~/components/Footer/Footer'
export default {
  components: { Footer, Main, Header }
}
</script>
