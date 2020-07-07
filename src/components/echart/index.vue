<template>
  <div :id="myId"></div>
</template>

<script>
import echarts from "echarts"
import baseEchart from "./baseEchart.ts";
export default {
  props: {
    myId: {
      type: String,
      default: "common-echarts"
    },
    series: {
      type: Array,
      default: () => {
        return [];
      }
    },
    color: {
      type: Array,
      default: () => {
        return [];
      }
    },
    classes: {
      type: Array,
      default: true
    },
    isLegend: {
      type: Boolean,
      default: true
    },
    isDataZoom: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      start: 0,
      end: 100,
    }
  },
  methods: {
    initOption() {
      let isDataZoom = this.isDataZoom;
      const width = document.getElementById(this.myId).clientWidth,
        length = this.classes.length,
        raft = 60;
      if (width / length < raft && this.isDataZoom) {
        this.start = 0;
        this.end = (width / length) / raft *100
      } else {
        this.start = 0;
        this.end = 100;
        if(this.isDataZoom) {
          isDataZoom = false
        }
      }
      return new baseEchart(
        this.color,
        this.series,
        this.classes,
        this.isLegend,
        isDataZoom,
        this.start,
        this.end
      ).getOption();
    },
    renderEchart() {
      const myEchart = echarts.init(document.getElementById(this.myId));
      myEchart.setOption(this.initOption());
      window.addEventListener("resize", () => {
        myEchart.resize();
      });
    }
  },
  watch: {
    series() {
      this.renderEchart();
    }
  },
  mounted() {
    this.renderEchart();
  }
};
</script>