/**
 * Created by kuan on 20-2-9.
 */
/**
 * Created by kuan on 20-1-21.
 */

function sleep(d){
    for(var t = Date.now();Date.now() - t <= d;);
}

var dom  = document.getElementById("line_chart");
var myChart = echarts.init(dom);
var dom_r  = document.getElementById("right_chart");
var myChart_r = echarts.init(dom_r);
$(function () {
    st_init();
    st_init_r()
});


function st_init() {
    $.ajax({
         type: "GET",
         url: "/search_type",
         data: {'type':"Phylum"},
         dataType: "json",
         success:function (data) {
            var type = data;
            var availableTags = type;
            $.ajax({
                        type: "GET",
                        url: "/search_compare",
                        data: {"type":"Phylum","name":"p__Proteobacteria"},
                        dataType: "json",
                        success:function (data) {
                            var mydata = data;
                            var option = {
                                title: {
            text: '1-7龄p__Proteobacteria数量比较统计图',
        left: 'center',
        textStyle: {
            color: '#181818',
            fontSize:12
        }
    },
                                grid: [{
        width: '75%',
        bottom: '30%',
        left:"1%",
        containLabel: true
    }],
                                xAxis: {
                                    name:"WORMYEAR",
                                    nameTextStyle:{
                                        fontSize:8
                                    },
                                    axisLabel: {
       show: true,
        textStyle: {
          fontSize : 10     //更改坐标轴文字大小
        }
     },
                                    type: 'category',
                                    data: ['1', '2', '3', '4', '5', '6', '7']
    },
                                yAxis: {
                                    name:"value",
                                    nameTextStyle:{
                                        fontSize:12
                                    },
                                    axisLabel: {
       show: true,
        textStyle: {
          fontSize : 8      //更改坐标轴文字大小
        }
     },
                                    type: 'value'
    },
                                series: [{
                                    data: mydata,
                                    type: 'bar',
                                    radius: '80%',
                                    itemStyle: { normal: {label : {
                                        show: true,
                                        position: 'top',
                                        textStyle:{
                                            color:"black",
                                            fontSize:10
                                        }

                                    }}}

    }
                                ]
                            };
                            myChart.setOption(option, true);
                        }
                    });
            $( "#select_name" ).focus(function(){
            $( "#select_name" ).autocomplete({
                source: availableTags,
                minLength:0,
                create:function () {
                    $(this).bind("click",function(){
                        var active=$(this).data("autocomplete");
                    if(!active){
                  $(this).autocomplete("search" , "");
              }
          });
        },
                select:function (event,ui) {
                    var name = ui.item.value;
                    $.ajax({
                        type: "GET",
                        url: "/search_compare",
                        data: {"type":"Phylum","name":name},
                        dataType: "json",
                        success:function (data) {
                            var mydata = data;
                            var option = {
                                title: {
            text: '1-7龄'+name+'数量比较统计图',
        left: 'center',
        textStyle: {
            color: '#181818',
            fontSize:14
        }
    },
                                grid: [{
        width: '75%',
        bottom: '30%',
        left:10,
        containLabel: true
    }],
                                xAxis: {
                                    name:"WORMYEAR",
                                    nameTextStyle:{
                                        fontSize:9
                                    },
                                    axisLabel: {
       show: true,
        textStyle: {
          fontSize : 15      //更改坐标轴文字大小
        }
     },
                                    type: 'category',
                                    data: ['1', '2', '3', '4', '5', '6', '7']
    },
                                yAxis: {
                                    name:"value",
                                    nameTextStyle:{
                                        fontSize:9
                                    },
                                    axisLabel: {
       show: true,
        textStyle: {
          fontSize : 15      //更改坐标轴文字大小
        }
     },
                                    type: 'value'
    },
                                series: [{
                                    data: mydata,
                                    type: 'bar',
                                    itemStyle: { normal: {label : {
                                        show: true,
                                        position: 'top',
                                        textStyle:{
                                            color:"black",
                                            fontSize:8
                                        }

                                    }}}

    }
                                ]
                            };
                            myChart.setOption(option, true);
                        }
                    });
                }
            });
        });
         }

    })
}

function st_init_r() {
    $.ajax({
         type: "GET",
         url: "/search_type",
         data: {'type':"Phylum"},
         dataType: "json",
         success:function (data) {
            var type = data;
            var availableTags = type;
            $.ajax({
                            type: "GET",
                             url: "/search_QZH",
                            data: {"type":"Phylum","name":'p__Proteobacteria',"year":5},
                            dataType: "json",
                            success:function (data) {
                                var mydata = data;
                                var max = Math.max.apply(Math,mydata);

                                var option = {


    title: {
        text: '松毛虫身体分段微生物含量比较',
        left: 'center',
        textStyle: {
            color: '#181818',
            fontSize:12

        }

    },

    tooltip: {},
    radar: {
        radius: 80,
        shape: 'circle',
        nameGap : 30,
        center:['50%','50%'],
        name: {
            textStyle: {
                color: 'white',
                backgroundColor: '#6c756f',
                borderRadius: 3,
                fontSize:12,
                padding: [2, 3]
            }
        },
        indicator: [
            { name: 'WROM_front', max: max},
            { name: 'WROM_mid', max: max},
            { name: 'WROM_rear', max: max}

        ]
    },
    series: [{
        name: '松毛虫身体分段微生物含量',
        type: 'radar',
        data: [
            {
                value: mydata,
                name: '松毛虫身体分段微生物',
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                color: 'black',
                 fontSize:16

            },
                        formatter:function(params) {
                            return params.value;
                        }
                    }
                }

            }

        ]
    }]
};
                            myChart_r.setOption(option, true);

         }
                        });
            $( "#select_name_r" ).focus(function(){
            $( "#select_name_r" ).autocomplete({
                source: availableTags,
                minLength:0,
                create:function () {
                    $(this).bind("click",function(){
                        var active=$(this).data("autocomplete");
                    if(!active){
                  $(this).autocomplete("search" , "");
              }
          });
        },
                select:function (event,ui) {
                    var name = ui.item.value;
                    $("#wormYear button").click(function(){
                        var wormYear = $(this).val();
                        $.ajax({
                            type: "GET",
                             url: "/search_QZH",
                            data: {"type":"Phylum","name":name,"year":wormYear},
                            dataType: "json",
                            success:function (data) {
                                var mydata = data;
                                var max = Math.max.apply(Math,mydata);
                                var option = {
    title: {
        text: '松毛虫身体分段微生物含量比较',
        left: 'center',
        textStyle: {
            color: '#181818',
            fontSize:14

        }
    },
    tooltip: {},
    radar: {
        // shape: 'circle',
        nameGap : 20,
        center:['50%','50%'],
        radius:"80%",
        name: {
            textStyle: {
                color: 'white',
                backgroundColor: '#6c756f',
                borderRadius: 3,
                fontSize:18,
                padding: [2, 3]
            }
        },
        indicator: [
            { name: 'WROM_front', max: max},
            { name: 'WROM_mid', max: max},
            { name: 'WROM_rear', max: max}

        ]
    },
    series: [{
        name: '松毛虫身体分段微生物含量',
        type: 'radar',
        radius:"80%",
        data: [
            {
                value: mydata,
                name: '松毛虫身体分段微生物',
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                color: 'black',
                 fontSize:16

            },
                        formatter:function(params) {
                            return params.value;
                        }
                    }
                }

            }

        ]
    }]
};
                            myChart_r.setOption(option, true);
         }
                        })
                });
                }
            });
        });
         }

    })
}

function getName() {
    var wormtype = document.getElementById("select_type").value;
    $.ajax({
         type: "GET",
         url: "/search_type",
         data: {'type':wormtype},
         dataType: "json",
         success:function (data) {
            var type = data;
            var availableTags = type;
            $( "#select_name" ).focus(function(){
            $( "#select_name" ).autocomplete({
                source: availableTags,
                minLength:0,
                create:function () {
                    $(this).bind("click",function(){
                        var active=$(this).data("autocomplete");
                    if(!active){
                  $(this).autocomplete("search" , "");
              }
          });
        },
                select:function (event,ui) {
                    var name = ui.item.value;
                    $.ajax({
                        type: "GET",
                        url: "/search_compare",
                        data: {"type":wormtype,"name":name},
                        dataType: "json",
                        success:function (data) {
                            var mydata = data;
                            var option = {
                                title: {
            text: '1-7龄p__Proteobacteria数量比较统计图',
        left: 'center',
        textStyle: {
            color: '#181818',
            fontSize:12
        }
    },
                                grid: [{
        width: '75%',
        bottom: '30%',
        left:"1%",
        containLabel: true
    }],
                                xAxis: {
                                    name:"WORMYEAR",
                                    nameTextStyle:{
                                        fontSize:8
                                    },
                                    axisLabel: {
       show: true,
        textStyle: {
          fontSize : 10     //更改坐标轴文字大小
        }
     },
                                    type: 'category',
                                    data: ['1', '2', '3', '4', '5', '6', '7']
    },
                                yAxis: {
                                    name:"value",
                                    nameTextStyle:{
                                        fontSize:12
                                    },
                                    axisLabel: {
       show: true,
        textStyle: {
          fontSize : 8      //更改坐标轴文字大小
        }
     },
                                    type: 'value'
    },
                                series: [{
                                    data: mydata,
                                    type: 'bar',
                                    radius: '80%',
                                    itemStyle: { normal: {label : {
                                        show: true,
                                        position: 'top',
                                        textStyle:{
                                            color:"black",
                                            fontSize:10
                                        }

                                    }}}

    }
                                ]
                            };
                            myChart.setOption(option, true);
                        }
                    })
                }
            });
        });
         }

    })
}


function getName_R(){
    var wormtype = document.getElementById("select_type_r").value;
    $.ajax({
         type: "GET",
         url: "/search_type",
         data: {'type':wormtype},
         dataType: "json",
         success:function (data) {
            var type = data;
            var availableTags = type;
            $( "#select_name_r" ).focus(function(){
            $( "#select_name_r" ).autocomplete({
                source: availableTags,
                minLength:0,
                create:function () {
                    $(this).bind("click",function(){
                        var active=$(this).data("autocomplete");
                    if(!active){
                  $(this).autocomplete("search" , "");
              }
          });
        },
                select:function (event,ui) {
                    var name = ui.item.value;
                    $("#wormYear button").click(function(){
                        var wormYear = $(this).val();
                        sleep(400);
                        $.ajax({
                            type: "GET",
                             url: "/search_QZH",
                            data: {"type":wormtype,"name":name,"year":wormYear},
                            dataType: "json",
                            success:function (data) {
                                var mydata = data;
                                var max = Math.max.apply(Math,mydata);
                                var option = {


    title: {
        text: '松毛虫身体分段微生物含量比较',
        left: 'center',
        textStyle: {
            color: '#181818',
            fontSize:12

        }

    },

    tooltip: {},
    radar: {
        radius: 80,
        shape: 'circle',
        nameGap : 30,
        center:['50%','50%'],
        name: {
            textStyle: {
                color: 'white',
                backgroundColor: '#6c756f',
                borderRadius: 3,
                fontSize:12,
                padding: [2, 3]
            }
        },
        indicator: [
            { name: 'WROM_front', max: max},
            { name: 'WROM_mid', max: max},
            { name: 'WROM_rear', max: max}

        ]
    },
    series: [{
        name: '松毛虫身体分段微生物含量',
        type: 'radar',
        data: [
            {
                value: mydata,
                name: '松毛虫身体分段微生物',
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                color: 'black',
                 fontSize:16

            },
                        formatter:function(params) {
                            return params.value;
                        }
                    }
                }

            }

        ]
    }]
};
                            myChart_r.setOption(option, true);
         }
                        })
                });
                }
            });
        });
         }

    })
}


