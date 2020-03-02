/**
 * Created by kuan on 20-1-17.
 */
function sleep(d){
    for(var t = Date.now();Date.now() - t <= d;);
}



var dom = document.getElementById("search_tree");
var myChart = echarts.init(dom);
myChart.showLoading();

option = null;
$(function () {
    $.ajax({
         type: "GET",
         url: "/search_list",
         data: {"wormYear":1},
         dataType: "json",
         success:function (data) {
            var wormdata = data;
            str = "";


            //表头
            str+= "<tr><th>#</th>";

                    for(var item in wormdata){
                    str+= "<th>"+item+"</th>"
                }
            str+="</tr>";


            //列表内容
             //类别长度
            str += "<tr><td>所含类别个数</td>";
                    for(var item in wormdata){
                    str+= "<td style='font-size: 13px'>"+"Sum:"+wormdata[item].length+"</td>"
                }
            str+="</tr>";

            //内容查询

            str += "<tr style='display: none'><td>内容查询</td>";
                    for(var item in wormdata){
                    str+="<td><input type='text' id="+item+"></td>"
                }
            str+="</tr>";





            //类别内容
            str += "<tr id='content'><td>所含内容(点击展开)</td>";
                    for(var i in wormdata){
                        var name = i;
                        var listData = wormdata[i];
                        var wormList = "";
                        for (var i =0 ;i<listData.length;i++){
                            wormList+=listData[i]+"\n"
                        }
                    str+= "<td style=' cursor:pointer' onclick='More(this,"+name+")'>"+wormList+"</td>"
                }
            str+="</tr>";
            document.getElementById("tb").innerHTML=str
         }
    });
    $.ajax({
         type: "GET",
         url: "/search_tree",
         data: {"wormYear":1},
         dataType: "json",
         success:function (data) {
             var mydata = data;
             myChart.hideLoading();
              myChart.setOption(option = {
        title: {
            text: 'yearWorm(1)',
        left: 'center',
        textStyle: {
            color: '#181818',
            fontSize:22
        }
    },

        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data:[mydata] ,
                initialTreeDepth:4,
                top: '5%',
                left: '9%',
                bottom: '1%',
                right: '20%',

                symbolSize: 12,

                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 15,
                    color:'rgb(78,29,76)'
                },

                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    });

         }
    })
});



$("#uli li").click(
    function() {
        // $(this).css("background","#99CCFF").siblings().css("background","#ffffff");
        var v=$(this).val();
        var C_id = "c"+v;
        $(this).find("img").attr("src","../static/img/chongzi_f.png");
        $(this).siblings().find("img").attr("src", "../static/img/chongzi.png");
        // document.getElementById(C_id).src="../static/img/chongzi_f.png"
    });



$("#uli li").click(function(){

    myChart.showLoading();
//获取选中的li里面的值
        var v=$(this).val();
    $.ajax({
         type: "GET",
         url: "/search_list",
         data: {"wormYear":v},
         dataType: "json",
         success:function (data) {
            var wormdata = data;
            str = "";


            //表头
            str+= "<tr><th>#</th>";

                    for(var item in wormdata){
                    str+= "<th>"+item+"</th>"
                }
            str+="</tr>";


            //列表内容
             //类别长度
            str += "<tr><td>所含类别个数</td>";
                    for(var item in wormdata){
                    str+= "<td style='font-size: 13px'>"+"Sum:"+wormdata[item].length+"</td>"
                }
            str+="</tr>";

            //内容查询

            str += "<tr style='display: none'><td>内容查询</td>";
                    for(var item in wormdata){
                    str+="<td><input type='text' id="+item+"></td>"
                }
            str+="</tr>";





            //类别内容
            str += "<tr id='content'><td>所含内容(点击展开)</td>";
                    for(var i in wormdata){
                        var name = i;
                        var listData = wormdata[i];
                        var wormList = "";
                        for (var i =0 ;i<listData.length;i++){
                            wormList+=listData[i]+"\n"
                        }
                    str+= "<td style=' cursor:pointer' onclick='More(this,"+name+")'>"+wormList+"</td>"
                }
            str+="</tr>";
            document.getElementById("tb").innerHTML=str
         }
    });
    if(v=='4'|| v=='6'){
        $.ajax({
         type: "GET",
         url: "/search_tree",
         data: {"wormYear":v},
         dataType: "json",
         success:function (data) {
             var mydata = data;
              myChart.setOption(option = {
        title: {
            text: 'yearWorm('+v+")",
        left: 'center',
        textStyle: {
            color: '#181818',
            fontSize:22
        }
    },

        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data:[mydata] ,
                initialTreeDepth:2,
                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',

                symbolSize: 12,

                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 15
                },

                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    });
    sleep(1000);
    myChart.hideLoading();
         }
    })
    }else {
        $.ajax({
         type: "GET",
         url: "/search_tree",
         data: {"wormYear":v},
         dataType: "json",
         success:function (data) {
             var mydata = data;
              myChart.setOption(option = {
        title: {
            text: 'yearWorm('+v+")",
        left: 'center',
        textStyle: {
            color: '#181818',
            fontSize:22
        }
    },

        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data:[mydata] ,
                initialTreeDepth:3,
                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',

                symbolSize: 12,

                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 15
                },

                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    });
    sleep(1000);
    myChart.hideLoading();
         }
    })
    }

});









function More(obj,name) {
    console.log(obj);
    swal(name.id, $(obj).text());
    $(".swal-modal").scrollTop(0);
}

