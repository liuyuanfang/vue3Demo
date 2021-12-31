<template>
  <el-row :gutter="10">
    <el-col :xs="15" :sm="15" :md="15" :lg="15" :xl="15">
      <div class="grid">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Important Things" name="doing">
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :hollow="activity.hollow"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </el-tab-pane>
          <el-tab-pane label="Todo" name="todo">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="name" label="Name" />
              <el-table-column prop="deadline" label="Deadline" />
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
    <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9">
      <div class="grid" id="echartVue"></div>
    </el-col>
  </el-row>
  <div class="block">
    <el-row :gutter="10">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="grid">
          <el-tabs v-model="activeName1" @tab-click="handleClick">
            <el-tab-pane label="Sale Volume" name="saleVolume">
              <div id="echartSale" ref="echartSale"></div>
            </el-tab-pane>
            <el-tab-pane label="Visits" name="visits">
              <div class="grid" id="echartVisit" ref="echartVisit"></div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="grid">
          <el-table :data="saleData" height="550" style="width: 100%">
            <el-table-column type="index" width="50" />
            <el-table-column label="Commodity Brand" prop="brandName">
            </el-table-column>
            <el-table-column label="Price(￥)" prop="price"> </el-table-column>
            <el-table-column label="Count(台)" prop="count"> </el-table-column>
            <el-table-column label="Sales(￥)" prop="sales"> </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  setup() {
    return {
      activities: [
        {
          content: "Meeting",
          timestamp: "04-12 14:00",
          size: "large",
          type: "primary",
        },
        {
          content: "Project Acceptance",
          timestamp: "04-09",
          color: "#0bbd87",
        },
        {
          content: "Meeting",
          timestamp: "04-03 14:00",
          size: "large",
        },
      ],
    };
  },
  data() {
    return {
      activeName: "doing",
      activeName1: "saleVolume",
      saleData: [
        {
          brandName: "HUAWEI Mate 40 Pro",
          price: 7000,
          count: 14,
          sales: 98000,
        },
        {
          brandName: "Apple 12 Pro",
          price: 7000,
          count: 10,
          sales: 70000,
        },
        {
          brandName: "HUAWEI Mate 30 Pro",
          price: 6000,
          count: 10,
          sales: 60000,
        },
        {
          brandName: "Apple 12 Pro",
          price: 7000,
          count: 10,
          sales: 70000,
        },
        {
          brandName: "HUAWEI Mate 40 Pro",
          price: 7000,
          count: 14,
          sales: 98000,
        },
        {
          brandName: "Apple 12 Pro",
          price: 7000,
          count: 10,
          sales: 70000,
        },
        {
          brandName: "HUAWEI Mate 40 Pro",
          price: 7000,
          count: 14,
          sales: 98000,
        },
        {
          brandName: "Apple 12 Pro",
          price: 7000,
          count: 10,
          sales: 70000,
        },
        {
          brandName: "HUAWEI Mate 40 Pro",
          price: 7000,
          count: 14,
          sales: 98000,
        },
        {
          brandName: "Apple 12 Pro",
          price: 7000,
          count: 10,
          sales: 70000,
        },
      ],
      tableData: [
        {
          name: "project",
          deadline: "05-15",
        },
        {
          name: "project",
          deadline: "05-15",
        },
        {
          name: "project",
          deadline: "05-15",
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.$nextTick(() => {
        this.$echarts.getInstanceByDom(this.$refs.echartSale).resize();
        this.$echarts.getInstanceByDom(this.$refs.echartVisit).resize();
      });
    },
  },
  mounted() {
    var myChart2 = this.$echarts.init(document.getElementById("echartSale"));
    var myChart1 = this.$echarts.init(document.getElementById("echartVisit"));
    console.log("myChart2......................");
    console.log(myChart2);
    console.log("myChart1......................");
    console.log(myChart1);
    myChart1.setOption({
      title: {
        text: "Visits",
        left: "left",
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    });

    myChart2.setOption({
      title: {
        text: "Sale Volume",
        left: "left",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "value",
        },
      ],
      yAxis: [
        {
          type: "category",
          axisTick: {
            show: false,
          },
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
      ],
      series: [
        {
          name: "Profit",
          type: "bar",
          label: {
            show: true,
            position: "inside",
          },
          emphasis: {
            focus: "series",
          },
          data: [200, 170, 240, 244, 200, 220, 210],
        },
        {
          name: "Income",
          type: "bar",
          stack: "Total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          data: [320, 302, 341, 374, 390, 450, 420],
        },
        {
          name: "Expenses",
          type: "bar",
          stack: "Total",
          label: {
            show: true,
            position: "left",
          },
          emphasis: {
            focus: "series",
          },
          data: [-120, -132, -101, -134, -190, -230, -210],
        },
      ],
    });

    var myChart = this.$echarts.init(document.getElementById("echartVue"));
    // 绘制图表
    console.log(document.getElementById("echartVue"));

    myChart.setOption({
      title: {
        text: "Project Schedule",
        left: "left",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          type: "pie",
          radius: ["40%", "70%"],
          data: [
            { value: 30, name: "Done" },
            { value: 50, name: "Doing" },
            { value: 20, name: "ToDo" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });
  },
};
</script>
<style scoped>
.block {
  margin-top: 10px;
}
.el-col {
  border-radius: 5px;
}
.el-tabs,
.el-tab-pane,
#echartSale {
  height: 100%;
}
.grid {
  height: 100%;
  min-height: 250px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid red;
}
</style>