<template>
  <div style="height:100%">
    <div v-if="$route.name=='login' || $route.name=='reg'" style="height:100%">
      <router-view/>
    </div>
    <div v-if="$route.name!='login' && $route.name!='reg'">
      <Header/>
      <section>
          <div class="ydc-content-slide ydc-body">
              <div class="ydc-flex">
                  <!-- left begin -->
                  <div class="ydc-column ydc-column-2">
                    <Menu />
                  </div>
                  <!-- left end -->
                  <!-- right begin -->
                  <div class="ydc-column ydc-column-8">
                      <router-view/>
                  </div>
                  <!-- right end -->
              </div>
          </div>
          <Footer/>
      </section>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import Menu from '@/components/menu'
import Footer from '@/components/footer'
export default {
  name: 'App',
  components: {Header,Menu,Footer}
}
</script>

<style scope="">

</style>
