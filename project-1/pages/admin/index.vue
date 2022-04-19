<template>
  <el-row>
    <el-col :span="12" v-for="bar in bars">
      <Bar :key="bar.key" :height="350" :data="bar.data" :options="bar.options" />

    </el-col>
  </el-row>
</template>

<script>
import Bar from "@/components/admin/Bar";
export default {
  name: "index",
  layout: "admin",
  middleware: ['admin-auth'],
  components: { Bar },
  head :{
    title: `Аналитика | ${process.env.appName}`
  },
  data() {
    return {

    };
  },

  async asyncData({store}){
    const analytics = await store.dispatch('post/getAnalytics');
    let bars = []
    for (let key in analytics){
      let analytic = {
        key: key,
        data: {
          labels: analytics[key].labels,
          datasets: [
            {
              label: "Количество",
              data: analytics[key].data,
              backgroundColor: key === 'comments' ?  'rgba(255,0,0,0.3)' :  "rgba(0,90,255,0.3)",
            },
          ],
        },
        options: {
          responsive: true,
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: key.charAt(0).toLocaleUpperCase() + key.slice(1,key.length),
            fontSize: 24,
            fontColor: "#6b7280",
          },
          tooltips: {
            backgroundColor: key === 'comments' ?  'rgb(255,87,87)' :  "rgb(129,171,255)",
          },
        },
      }
      bars.push(analytic);
    }

    return {analytics, bars}
  }
}
</script>

<style scoped>

</style>
