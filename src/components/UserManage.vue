<template>
  <!-- 搜索条件 -->
  <el-form :inline="true" :model="formInline">
    <el-form-item label="Name">
      <el-input v-model="formInline.name" placeholder="Please Input"></el-input>
    </el-form-item>
    <el-form-item label="Tag">
      <el-input v-model="formInline.tag" placeholder="Please Input"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onQuery">Query</el-button>
    </el-form-item>
  </el-form>
  <!-- 用户数据 -->
  <el-table :data="usersData" height="550" style="width: 100%">
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="tag" label="Tag" />
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="city" label="City" />
    <el-table-column prop="address" label="Address" />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button type="text" @click="handleDetail(scope.row)">
          <el-icon title="Detail"> <document /> </el-icon>
        </el-button>
        <el-button type="text" title="Delete" @click="handleDelete(scope.row)">
          <el-icon> <delete /></el-icon>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination">
    <el-pagination
      background
      v-model:currentPage="currentPage"
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[10, 20, 50]"
      :page-size="10"
      :total="usersData.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
export default {
  name: "UserManage",
  setup() {
    const handleSizeChange = (val) => {
      console.log(`${val} items per page`);
    };
    const handleCurrentChange = (val) => {
      console.log(`current page: ${val}`);
    };

    return {
      currentPage: ref(1),
      handleSizeChange,
      handleCurrentChange,
    };
  },

  data() {
    return {
      usersData: [],
      formInline: {
        name: "",
        tag: "",
      },
    };
  },

  created() {
    this.$axios
      .get("/users.json")
      .then((response) => {
        this.usersData = response.data;
        console.log(this.usersData);
      })
      .catch(() => {});
  },

  methods: {
    onQuery() {
      console.log("submit!");
      //   formInline.name

      this.usersData = this.usersData.filter((x) =>
        x.name.match(new RegExp(this.formInline.name || this.formInline.tag))
      );
    },
    handleDetail(row) {
      console.log(row.name);
      this.$router.push({
        path: "userManageDetail",
        query: {
          id: row.name,
        },
      });
    },
    handleDelete(row) {
      console.log(row);
      ElMessageBox.confirm(
        `${row.name} will be permanently deleted. Continue?`,
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
        }
      )
        .then(() => {
          this.usersData = this.usersData.filter((x) => x.name != row.name);
          ElMessage({
            type: "success",
            message: "Delete completed",
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Delete canceled",
          });
        });
    },
  },
};
</script>

<style scoped>
.pagination {
  /* width: 100%; */
  /* background-color: white; */
  margin: 10px;
  border: 1px solid red;
}
</style>
