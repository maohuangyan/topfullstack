<template>
  <el-container>
    <el-header>
      <h3>全栈之巅 - 后台管理界面</h3>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu mode="vertical" style="height:100vh" :default-active="$route.path" router>
          <el-submenu
            v-for="(item, index) in menu.items"
            :index="`menu-item-${index}`"
            :key="`menu-item-${index}`"
          >
            <template slot="title">{{item.title}}</template>
            <el-menu-item
              v-for="(subItem, subIndex) in item.items"
              :key="`menu-item-${index}-${subIndex}`"
              :index="subItem.path"
            >
              <div style="display: flex; align-items: center">
                <i :class="subItem.icon"></i>
                <div>{{subItem.title}}</div>
              </div>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: "内容管理",
        items: [
          { title: "首页", path: "/", icon: "el-icon-house" },
          {
            title: "课程管理",
            path: "/courses/list",
            icon: "el-icon-notebook-2"
          },
          { title: "课时管理", path: "/episodes/list", icon: "el-icon-reading" }
        ]
      },
      {
        title: "运营管理",
        items: [
          { title: "用户管理", path: "/users/list", icon: "el-icon-user" }
        ]
      }
    ]
  };
}
</script>

<style>
body {
  margin: 0;
}
.el-aside{
  padding: 10px 0
}
.el-header{
  box-shadow:  0 10px 10px rgba(244, 244, 244, 0.6)
}
</style>