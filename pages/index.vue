<template>
  <div class="p-index">
    <Header />
    <Main />
    <Side />
    <Footer title="Footer" />
  </div>
</template>

<script>
import Side from '@/components/Side/Side'
import Header from '~/components/Header/Header'
import Main from '~/components/Main/Main'
import Footer from '~/components/Footer/Footer'
export default {
  components: { Side, Footer, Main, Header }
}
</script>
