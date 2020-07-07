class option {
  constructor(color: String[], series: Object[], classes: String[], isLegend: Boolean, isDataZoom: Boolean, start: Number, end: Number) {
    this.color = color
    this.series = series
    this.classes = classes
    this.isLegend = isLegend
    this.isDataZoom = isDataZoom || false
    this.start = start || 0
    this.end = end || 100
  }
  private color: String[];
  private series: Object[];
  private classes: String[];
  private isLegend: Boolean;
  private isDataZoom: Boolean;
  private start: Number;
  private end: Number;
  public setIsDataZoom(isDataZoom: Boolean) {
    this.isDataZoom = isDataZoom
  }
  public getIsDataZoom() {
    return this.isDataZoom;
  }
  public setColor(color: String[]) {
    this.color = color
  }
  public getColor() {
    return this.color
  }
  public setData(series: Object[]) {
    this.series = series
  }
  public getData() {
    return this.series
  }
  public setXData(classes: String[]) {
    this.classes = classes
  }
  public getXData() {
    return this.classes
  }
  public setIsLegend(isLegend: Boolean) {
    this.isLegend = isLegend
  }
  public getIsLegend() {
    return this.isLegend
  }
  public getOption() {
    const _option = {
      color: this.color,
      title: {
        text: "",
        subtext: ""
      },
      grid: {
        top: "15%",
        left: 10,
        right: 10,
        bottom: "6%",
        containLabel: true
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        show: this.isLegend,
        top: "2%",
        right: 0,
        itemWidth: 10,
        icon: 'circle'
        // data: ["已确认", "已处理"]
      },
      xAxis: [
        {
          type: "category",
          interval: 1,
          axisLine: {
            lineStyle: {
              color: "#6b87a7"
            }
          },
          axisLabel: {
            interval: 0, //强制文字产生间隔
            textStyle: {
              fontSize: 10,
              fontFamily: "Microsoft YaHei"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: this.classes
        }
      ],
      dataZoom: [
        {
          type: 'slider',
          show: this.isDataZoom,
          xAxisIndex: [0],
          left: 'center',
          height: 20,
          bottom: -5,
          start: this.start,
          end: this.end //初始化滚动条
        }
      ],
      yAxis: [
        {
          type: "value",
          splitNumber: 5,
          minInterval: 1,
          axisLabel: {
            formatter: "{value}",
            textStyle: {
              color: "#709ABB"
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dotted",
              color: "#B7BDC8"
            }
          }
        },
        {
          type: "value",
          splitNumber: 5,
          minInterval: 1,
          axisLabel: {
            formatter: "{value}",
            textStyle: {
              color: "#709ABB"
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#6b87a7"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dotted",
              color: "#B7BDC8"
            }
          }
        }
      ],
      series: this.series
    }
    // if (this.isDataZoom) {
    //   _option.dataZoom[0].end = 50
    // }
    return _option
  }
}

export default option