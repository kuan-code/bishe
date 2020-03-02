/**
 * Created by kuan on 20-2-8.
 */

var dom = document.getElementById("chart_container");
var myChart = echarts.init(dom);

$(function () {
   M_list_init();
   M_list_tree();
});


function M_list_init() {
    var Namelist=['Phylum','Class','Order','Family','Genus','Species'];
    $.ajax({
        type: "GET",
         url: "/search_m_list",
         data: {"wormYear":1},
         dataType: "json",
         success:function (data) {
              str = "";
              str+="<tr>"+
		"<th>#</th>"+
		"<th>所含类别个数</th>"+
		"<th>所含内容(点击展开)</th>"+
		"</tr>";

        str += "<tr style='display: none'><td>内容查询</td>";
                    for(var item in data){
                    str+="<td><input type='text' id="+item+"></td>"
                }
            str+="</tr>";

             for(var i = 0;i<Namelist.length;i++){
                 var type = Namelist[i];
                 var len = data[Namelist[i]].length;
                 var wormlist = "";
                 for (var j = 0;j<data[Namelist[i]].length;j++){
                      wormlist+=data[Namelist[i]][j]+"\n"
                 }
                 var wormdata = data[Namelist[i]];
                 str+=
		"<tr>"+
			"<td>"+type+"</td>"+
			"<td>Sum:"+len+"</td>"+
			"<td style='font-weight: 800;border-radius: 0.4em;color:darkred' onclick='More(this,"+type+")'>"+wormlist+"\n"+"</td>"+
		"</tr>";

             }
             document.getElementById("m_table").innerHTML=str
         }
    })
}

function M_list_tree() {
    $.ajax({type: "GET",
         url: "/search_m_tree",
         data: {"wormYear":1},
         dataType: "json",
         success:function (data) {
            var mydata = data;
            myChart.hideLoading();
            option = {
                title: {
            text:1+'_yearWorm',
        left: 'center',
        textStyle: {
            color: '#181818'
        }
    },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series:[
            {nameGap : 40,
                center:['50%','60%'],
                type: 'tree',

                data: [mydata],
                initialTreeDepth:3,
                 top: '12%',
                left: '2%',
                bottom: '25%',
                right: '2%',

                symbol: 'emptyCircle',

                orient: 'vertical',

                expandAndCollapse: true,

                label: {
                    position: 'top',
                    rotate: -90,
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 12,
                    fontFamily:'Microsoft YaHei'

                },

                leaves: {
                    label: {
                        position: 'bottom',
                        rotate: -90,
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                animationDurationUpdate: 750
            }
        ]
    };
            myChart.setOption(option);
    }
    })
}

function M_list() {
    myChart.showLoading();
    var obj = document.getElementById("worm_year");
    var Namelist=['Phylum','Class','Order','Family','Genus','Species'];
    $.ajax({
        type: "GET",
         url: "/search_m_list",
         data: {"wormYear":obj.value},
         dataType: "json",
         success:function (data) {
              str = "";
              str+="<tr>"+
		"<th>#</th>"+
		"<th>所含类别个数</th>"+
		"<th>所含内容(点击展开)</th>"+
		"</tr>";

        str += "<tr style='display: none'><td>内容查询</td>";
                    for(var item in data){
                    str+="<td><input type='text' id="+item+"></td>"
                }
            str+="</tr>";
             for(var i = 0;i<Namelist.length;i++){
                 var type = Namelist[i];
                 var len = data[Namelist[i]].length;
                 var wormlist = "";
                 for (var j = 0;j<data[Namelist[i]].length;j++){
                      wormlist+=data[Namelist[i]][j]+"\n"
                 }
                 str+=
		"<tr>"+
			"<td>"+type+"</td>"+
			"<td>Sum:"+len+"</td>"+
			"<td style='font-weight: 800;border-radius: 0.4em;color:darkred' onclick='More(this,"+type+")'>"+wormlist+"\n"+"</td>"+
		"</tr>";

             }
             document.getElementById("m_table").innerHTML=str
         }
    });
    if(obj.value=='4'|| obj.value=='6'){
        $.ajax({type: "GET",
         url: "/search_m_tree",
         data: {"wormYear":obj.value},
         dataType: "json",
         success:function (data) {
            var mydata = data;
            myChart.hideLoading();
            option = {
                title: {
            text:obj.value+'_yearWorm',
        left: 'center',
        textStyle: {
            color: '#181818'
        }
    },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series:[
            {nameGap : 40,
                center:['50%','60%'],
                type: 'tree',

                data: [mydata],
                initialTreeDepth:2,
                 top: '12%',
                left: '2%',
                bottom: '25%',
                right: '2%',

                symbol: 'emptyCircle',

                orient: 'vertical',

                expandAndCollapse: true,

                label: {
                    position: 'top',
                    rotate: -90,
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 12,
                    fontFamily:'Microsoft YaHei'

                },

                leaves: {
                    label: {
                        position: 'bottom',
                        rotate: -90,
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                animationDurationUpdate: 750
            }
        ]
    };
            myChart.setOption(option);
    }
    })
    }else {
        $.ajax({type: "GET",
         url: "/search_m_tree",
         data: {"wormYear":obj.value},
         dataType: "json",
         success:function (data) {
            var mydata = data;
            myChart.hideLoading();
            option = {
                title: {
            text:obj.value+'_yearWorm',
        left: 'center',
        textStyle: {
            color: '#181818'
        }
    },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series:[
            {nameGap : 40,
                center:['50%','60%'],
                type: 'tree',

                data: [mydata],
                initialTreeDepth:3,
                 top: '12%',
                left: '2%',
                bottom: '25%',
                right: '2%',

                symbol: 'emptyCircle',

                orient: 'vertical',

                expandAndCollapse: true,

                label: {
                    position: 'top',
                    rotate: -90,
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 12,
                    fontFamily:'Microsoft YaHei'

                },

                leaves: {
                    label: {
                        position: 'bottom',
                        rotate: -90,
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                animationDurationUpdate: 750
            }
        ]
    };
            myChart.setOption(option);
    }
    })
    }

}

function More(obj,name) {
    console.log(obj);
    swal(name.id, $(obj).text());
    $(".swal-modal").scrollTop(0);
}
