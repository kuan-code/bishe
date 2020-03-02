/**
 * Created by kuan on 20-2-15.
 */

var dom = document.getElementById("map_fenbu");
var myChart = echarts.init(dom);
var app = {};
option = null;
var data = [{'name': '江苏', 'value': 2, 'fenbu': ['马尾松毛虫', '赤松毛虫']}, {'name': '浙江', 'value': 5, 'fenbu': ['马尾松毛虫', '思茅松毛虫', '云南松毛虫', '天目松毛虫', '黄山松毛虫']}, {'name': '安徽', 'value': 3, 'fenbu': ['马尾松毛虫', '思茅松毛虫', '黄山松毛虫']}, {'name': '福建', 'value': 7, 'fenbu': ['马尾松毛虫', '室纹松毛虫', '高山松毛虫', '思茅松毛虫', '云南松毛虫', '天目松毛虫', '黄山松毛虫']}, {'name': '江西', 'value': 4, 'fenbu': ['马尾松毛虫', '思茅松毛虫', '云南松毛虫', '天目松毛虫']}, {'name': '河南', 'value': 5, 'fenbu': ['马尾松毛虫', '油松毛虫', '思茅松毛虫', '明纹柏松毛虫', '赤松毛虫']}, {'name': '湖北', 'value': 3, 'fenbu': ['马尾松毛虫', '思茅松毛虫', '云南松毛虫']}, {'name': '湖南', 'value': 4, 'fenbu': ['马尾松毛虫', '高山松毛虫', '思茅松毛虫', '云南松毛虫']}, {'name': '广东', 'value': 2, 'fenbu': ['马尾松毛虫', '思茅松毛虫']}, {'name': '广西', 'value': 4, 'fenbu': ['马尾松毛虫', '高山松毛虫', '思茅松毛虫', '文山松毛虫']}, {'name': '海南', 'value': 3, 'fenbu': ['马尾松毛虫', '云南松毛虫', '海南松毛虫']}, {'name': '四川', 'value': 8, 'fenbu': ['马尾松毛虫', '油松毛虫', '高山松毛虫', '思茅松毛虫', '云南松毛虫', '双波松毛虫', '丽江松毛虫', '德昌松毛虫']}, {'name': '贵州', 'value': 3, 'fenbu': ['马尾松毛虫', '思茅松毛虫', '云南松毛虫']}, {'name': '云南', 'value': 11, 'fenbu': ['马尾松毛虫', '火地松毛虫', '高山松毛虫', '思茅松毛虫', '云南松毛虫', '双波松毛虫', '油杉松毛虫', '文山松毛虫', '丽江松毛虫', '云龙松毛虫', '德昌松毛虫']}, {'name': '陕西', 'value': 11, 'fenbu': ['马尾松毛虫', '油松毛虫', '旬阳松毛虫', '火地松毛虫', '宁陕松毛虫', '室纹松毛虫', '秦岭松毛虫', '明纹柏松毛虫', '华山松毛虫', '云南松毛虫', '黄山松毛虫']}, {'name': '台湾', 'value': 4, 'fenbu': ['马尾松毛虫', '阿里山松毛虫', '思茅松毛虫', '花缘松毛虫']}, {'name': '越南', 'value': 4, 'fenbu': ['马尾松毛虫', '高山松毛虫', '思茅松毛虫', '云南松毛虫']}, {'name': '河北', 'value': 4, 'fenbu': ['油松毛虫', '落叶松毛虫', '明纹柏松毛虫', '赤松毛虫']}, {'name': '山西', 'value': 2, 'fenbu': ['油松毛虫', '明纹柏松毛虫']}, {'name': '辽宁', 'value': 3, 'fenbu': ['油松毛虫', '落叶松毛虫', '赤松毛虫']}, {'name': '山东', 'value': 5, 'fenbu': ['油松毛虫', '落叶松毛虫', '明纹柏松毛虫', '赤松毛虫', '侧柏松毛虫']}, {'name': '甘肃', 'value': 5, 'fenbu': ['油松毛虫', '旬阳松毛虫', '高山松毛虫', '思茅松毛虫', '德昌松毛虫']}, {'name': '西藏', 'value': 5, 'fenbu': ['火地松毛虫', '喜马拉雅松毛虫', '高山松毛虫', '双波松毛虫', '丽江松毛虫']}, {'name': '尼泊尔', 'value': 1, 'fenbu': ['喜马拉雅松毛虫']}, {'name': '北京', 'value': 1, 'fenbu': ['落叶松毛虫']}, {'name': '内蒙古', 'value': 2, 'fenbu': ['落叶松毛虫', '明纹柏松毛虫']}, {'name': '吉林', 'value': 1, 'fenbu': ['落叶松毛虫']}, {'name': '黑龙江', 'value': 1, 'fenbu': ['落叶松毛虫']}, {'name': '新疆', 'value': 1, 'fenbu': ['落叶松毛虫']}, {'name': '俄罗斯', 'value': 1, 'fenbu': ['落叶松毛虫']}, {'name': '朝鲜', 'value': 2, 'fenbu': ['落叶松毛虫', '赤松毛虫']}, {'name': '日本', 'value': 2, 'fenbu': ['落叶松毛虫', '赤松毛虫']}, {'name': '印度', 'value': 1, 'fenbu': ['云南松毛虫']}, {'name': '泰国', 'value': 1, 'fenbu': ['云南松毛虫']}, {'name': '锡金', 'value': 1, 'fenbu': ['双波松毛虫']}, {'name': '青海', 'value': 1, 'fenbu': ['玉树松毛虫']}];
var geoCoordMap = {
        '越南':[108.03 , 13.33],
        '泰国':[100.03 , 15.33],
        '日本':[139.49,36.38],
        '尼泊尔':[85.19,27.43],
        '印度':[76.14,20.43],
        '俄罗斯':[105.32,61.52401],
         '新疆': [86.61 , 40.79],
         '西藏':[89.13 , 30.66],
         '黑龙江':[128.34 , 47.05],
         '吉林':[126.32 , 43.38],
         '辽宁':[123.42 , 41.29],
         '内蒙古':[112.17 , 42.81],
         '北京':[116.40 , 40.40 ],
         '宁夏':[106.27 , 36.76],
         '山西':[111.95,37.65],
         '河北':[115.21 , 38.44],
         '天津':[117.04 , 39.52],
         '青海':[97.07 , 35.62],
         '甘肃':[103.82 , 36.05],
         '山东':[118.01 , 36.37],
         '陕西':[108.94 , 34.46],
         '河南':[113.46 , 34.25],
         '安徽':[117.28 , 31.86],
         '江苏':[120.26 , 32.54],
         '上海':[121.46 , 31.28],
         '四川':[103.36 , 30.65],
         '湖北':[112.29 , 30.98],
         '浙江':[120.15 , 29.28],
         '重庆':[107.51 , 29.63],
         '湖南':[112.08 , 27.79],
         '江西':[115.89 , 27.97],
         '贵州':[106.91 , 26.67],
         '福建':[118.31 , 26.07],
         '云南':[101.71 , 24.84],
         '台湾':[121.01 , 23.54],
         '广西':[108.67 , 23.68],
         '广东':[113.98 , 22.82],
         '海南':[110.03 , 19.33],
         '澳门':[113.54 , 22.19],
         '香港':[114.17 , 22.32]
      };


var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                fenBuData:data[i].fenbu.toString(),


            });


        }
    }
    return res;
};

option = {

    title: {
        text: '全国松毛虫分布图',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        position: 'top',
        confine:true ,
		formatter(params) {

//		console.log();
		return  "<div class='toolDiv'>"+"城市:"+ params.name +'<br>'+"数量:"+params.value[2]+"<br>分布情况:"+params.data.fenBuData+"</div>"


},
        textStyle:{
		    fontFamily:'HeiTi',
		    fontSize:12
        },
        trigger: 'item'
    },
    bmap: {
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
            styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                    'color': '#f3f3f3'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'color': '#fdfdfd'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#999999'
                }
            }]
        }
    },
   series : [
        {
            name: 'chongfenbu',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 0.2;
            },
            label: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            itemStyle: {
                color: 'purple'
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
         {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 0.2;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                formatter: '{b}',
                position: 'right',
                show: true
            },
            itemStyle: {
                color: 'purple',
                shadowBlur: 10,
                shadowColor: '#333'
            },
            zlevel: 3
        }
    ]
};
myChart.setOption(option, true);
