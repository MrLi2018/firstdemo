<template>
  <div >
    <page-header :loginuser="loginuser"></page-header>
    <page-footer style="margin-top: 38%;height: 50px"></page-footer>
  </div>
</template>

<script>
  import PageHeader from '@/components/common/PageHeader.vue'
  import PageFooter from '@/components/common/PageFooter.vue'

  export default {
    name: 'BlogIndex',
    // blogHeader/blogFooter组件给申明到components里面然后在template里面使用
    components: {PageHeader, PageFooter},
    data() {
      return {
        loginuser:''
      }
    },
    created(){

      this.loginuser = this.$route.params.username;

    }
  }
</script>
<style scoped>
  *{
    margin-top: 0px;
    padding: 0px;
  }
  .el-table .success-row {
    background-color: oldlace;
  }

  .el-table .warning-row {
    background-color: #f0f9eb;
  }

</style>
