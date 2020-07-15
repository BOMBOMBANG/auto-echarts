<template>
  <div :id="myId"></div>
</template>

<script>
import baseEchart from "./baseEchart.ts";
export default {
  props: {
    myId: {
      type: String,
      default: "common-line"
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
    },
    units: {
      type: Object,
      default: () => {
        return {}
      }
    },
    raft: {
      type: Number,
      default: 60
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
        length = this.classes.length;
        // console.log(width, length, width / length, (width / length / raft));
      if (width / length < this.raft && this.isDataZoom) {
        this.start = 0;
        this.end = (width / length) / this.raft *100
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
        this.end,
        this.units
      ).getOption();
    },
    renderEchart() {
      const echart = this.$echarts.init(document.getElementById(this.myId));
      echart.setOption(this.initOption());
      window.addEventListener("resize", () => {
        echart.resize();
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