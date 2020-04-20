<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="header">
          <div>XXXX系统</div>
          <div>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                欢迎登录<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">退出</el-dropdown-item>
                <el-dropdown-item command="b">退出11</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <template  v-for="item in list" @key="item.index">
              <el-submenu index='1'>
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.name}}</span>
                </template>
                <el-menu-item-group v-for="(link, index) in item.path" @key="index">
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </template>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
  import home from './home'
  export default home
</script>

<style lang="scss" scoped>
  .el-header {
    background-color: #7d8996;
    color: #fff;
    text-align: center;
    line-height: 60px;
    .header {
      display: flex;
      justify-content: space-between;
    }
  }
  .el-aside {
    width: 200px!important;
    overflow: hidden;
  }
  .el-menu {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
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
</style>
