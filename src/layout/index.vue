<template>
  <div class="box-all">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from './AppAside/index'
import Header from './AppHeader/index'

export default {
  name: 'index',
  components: {
    Aside,
    Header
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
  computed: {}
}
</script>
<style scoped lang="scss">
.box-all {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #4338ca;
  color: #333;
  text-align: center;
  line-height: 80px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
  background-color: #ffffff;
  right: 0;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-header {
  height: 80px !important;
}
</style>

<!-- <template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <app-aside :isCollapsed="isCollapsed"></app-aside>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <app-header @collapsedSider="collapsedSider" :isCollapsed="isCollapsed"></app-header>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <div class="breadCrumb">
            <my-breadcrumb></my-breadcrumb>
          </div>
          <app-main></app-main>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import AppAside from './AppAside/index'
import AppHeader from "@/layout/AppHeader";
import AppMain from './AppMain'
import MyBreadcrumb from './AppMain/breadCrumb'

export default {
  components: {
    AppAside,
    AppHeader,
    AppMain,
    MyBreadcrumb
  },
  data() {
    return {
      isCollapsed: false
    }
  },
  computed: {},
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
}
</script>
<style lang="scss">
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}

.menu-icon {
  transition: all .3s;
}

.rotate-icon {
  transform: rotate(-90deg);
}

.breadCrumb {
  height: 40px;
  width: 100%;
  line-height: 40px;
  padding: 0 10px;
  border-bottom: 1px solid #dddddd;
}

.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}

.menu-item i {
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}

.collapsed-menu span {
  width: 0px;
  transition: width .2s ease;
}

.ivu-layout.ivu-layout-has-sider {
  height: 100%;
}

.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}
</style> -->
