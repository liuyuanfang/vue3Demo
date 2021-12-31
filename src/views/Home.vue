<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="220px">
        <LeftMenu />
      </el-aside>
      <el-container>
        <el-main>
          <div style="height: 100%; border: 1px solid red">
            <router-view />
          </div>
        </el-main>
        <el-footer> Footer. Only Learn. </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LeftMenu from "@/components/LeftMenu.vue";

export default {
  name: "Home",
  components: {
    LeftMenu,
  },
};
</script>

<style scoped>
.el-header {
  background-color: #409eff;
}
.main {
  background-color: #f7f7f7;
}
.el-aside,
.el-footer {
  background-color: white;
}

.el-container,
.el-aside,
.el-main {
  height: 100%;
}
</style>
