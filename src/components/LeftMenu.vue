<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        default-activ="1"
        router
        unique-opened
        @open="handleOpen()"
        @close="handleClose()"
        v-for="(item, index) in menuData"
        :key="item.menuName"
      >
        <el-sub-menu :index="index">
          <template #title>
            <el-icon><apple /></el-icon>
            <span> {{ item.menuName }} </span>
          </template>

          <el-menu-item
            v-for="subItem in item.subMenu"
            :key="subItem.subMenuName"
            :index="subItem.path"
          >
            <el-icon><cherry /></el-icon>
            <span>{{ subItem.subMenuName }}</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "LeftMenu",
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      handleOpen,
      handleClose,
    };
  },
  data() {
    return {
      menuData: [],
    };
  },
  mounted() {
    this.$axios
      .get("/menu.json")
      .then((response) => {
        this.menuData = response.data;
        console.log(this.menuData);
      })
      .catch(() => {});
  },
};
</script>

