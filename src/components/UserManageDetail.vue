<template>
  <div class="detail">
    <div>
      <span class="grid"></span>
      <span> Basic Info </span>
      <el-button style="float: right" @click="handleReturn()">Return</el-button>
    </div>
    <el-row :gutter="10">
      <!-- span 为占据栅格的列数，element为24个栅格，gutter为栅格间距 -->
      <template v-for="(value, key) in formInline" :key="key">
        <el-col :span="8" style="margin-top: 20px">
          <span class="labelText" v-if="typeof value == 'string'">
            {{ key }}
          </span>
          <span class="valueText" v-if="typeof value == 'string'">
            {{ value }}
          </span>
        </el-col>
      </template>
    </el-row>

    <div>
      <span class="grid"></span>
      <span> Data </span>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Article" name="article">
        <el-table :data="formInline.article" style="width: 100%">
          <el-table-column label="Name">
            <template #default="scope">
              <a :href="scope.row.src" target="_blank">
                {{ scope.row.name }}
              </a>
            </template>
          </el-table-column>

          <el-table-column prop="keypoint" label="Key Point" />
          <el-table-column prop="time" label="Created Time" />
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="Audio" name="audio">
        <el-row :gutter="10">
          <!-- span 为占据栅格的列数，element为24个栅格，gutter为栅格间距 -->
          <template v-for="item in formInline.audio" :key="item">
            <el-col :span="8" style="margin-top: 20px">
              <iframe
                frameborder="no"
                border="0"
                marginwidth="0"
                marginheight="0"
                width="330"
                height="86"
                :src="item.src"
              ></iframe>
            </el-col>
          </template>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="Video" name="video">
        <el-table :data="formInline.video" style="width: 100%"> </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { ElMessageBox, ElMessage } from "element-plus";
export default {
  name: "UserManage",

  data() {
    return {
      activeName: "article",
      userData: [],
      formInline: {
        name: "",
        tag: "",
      },
    };
  },

  created() {
    console.log(this.$route.query.id);
    let id = this.$route.query.id;
    this.$axios
      .get("/users.json")
      .then((response) => {
        this.userData = response.data.filter((x) => x.name == id);
        console.log(this.userData);
        this.formInline = this.userData[0];
      })
      .catch((error) => {
        console.log(error);
      });
  },
  unmounted() {
    //   this.$route.query.id
  },

  methods: {
    handleReturn() {
      this.$router.push({
        path: "userManage",
      });
      this.$route.query.id = "";
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onQuery() {
      console.log("submit!");
      //   formInline.name

      this.usersData = this.usersData.filter((x) =>
        x.name.match(new RegExp(this.formInline.name || this.formInline.tag))
      );
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
.grid {
  border: 2px solid #1890ff;
  margin-left: 5px;
  margin-right: 10px;
}

.detail {
  background-color: white;
  height: 100%;
}
.labelText {
  display: inline-block;
  width: 60px;
  text-align: right;
  color: #8d8d8d;
  text-transform: capitalize;
}
.valueText {
  color: #5a5a5a;
  margin-left: 30px;
}
</style>
