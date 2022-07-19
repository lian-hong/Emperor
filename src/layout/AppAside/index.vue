<template>
  <div class="aside">
    <el-row class="tac">
      <el-col>
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>后台面板</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">主控台</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-2">商品管理</el-menu-item>
              <el-menu-item index="1-2">分类管理</el-menu-item>
              <el-menu-item index="1-2">规格管理</el-menu-item>
              <el-menu-item index="1-2">优惠券管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-2">用户管理</el-menu-item>
              <el-menu-item index="1-2">会员等级</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-2">订单管理</el-menu-item>
              <el-menu-item index="1-2">评论管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
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
<style scoped lang="scss"></style>

<!-- <template>
  <div>
    <Menu :active-name="activeDefault" theme="dark" width="auto" :class="menuitemClasses">
      <recursive-menu v-for="item in menus" :key="item.id" :tree="item"></recursive-menu>
    </Menu>
  </div>

</template>

<script>
import recursiveMenu from './recursiveMenu'
import {mapGetters} from "vuex";
import {findMenuIndex} from "@/utils/activeDefault";

export default {
  components: {
    recursiveMenu
  },
  props: ['isCollapsed'],
  computed: {
    ...mapGetters({
      menus: 'menus'
    }),
    activeDefault() {
      let path = this.$route.path
      return findMenuIndex(this.menus, path)
    },
    menuitemClasses() {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  data() {
    return {}
  },

}
</script>
<style lang="scss" scoped>

</style> -->
