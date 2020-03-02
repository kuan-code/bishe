$(function() {
    init()
});


function init() {
    $.ajax({
         type: "GET",
         url: "/init_search",
         data: {},
         dataType: "json",
         success:function (data) {
             var Sname = data;
             var availableTags = Sname;
        $( "#Domain" ).focus(function(){
            $( "#Domain" ).autocomplete({
                source: availableTags[0],
                minLength:0,
                create:function () {
                    $(this).bind("click",function(){
                        var active=$(this).data("autocomplete");
                    if(!active){
                  $(this).autocomplete("search" , "");
              }
          });
        }
    //             select:function (event,ui) {
    //                 var sname=ui.item.value;
    //                 $.ajax({
    //                     type: "GET",
    //                     url: "/search_data",
    //                     data: {'sname':sname},
    //                     dataType: "json",
    //                     success:function (data) {
    //                         var sdata = data;
    //                          var str = "";
    //                          str += '<table class="table table-striped" border="1" style="width:400px">';
    //                          str += '<tr><th>#OTU_ID</th>' +
    //                              '<th>5_Q_1</th>' +
    //                              '<th>5_Q_2</th>' +
    //                              '<th>5_Q_3</th>' +
    //                              '<th>5_Z_1</th>' +
    //                              '<th>5_Z_2</th>' +
    //                              '<th>5_Z_3</th>' +
    //                              '<th>5_H_1</th>' +
    //                              '<th>5_H_2</th>' +
    //                              '<th>5_H_3</th>' +
    //                              '<th>6_Q_1</th>' +
    //                              '<th>6_Q_2</th>' +
    //                              '<th>6_Q_3</th>' +
    //                              '<th>6_Z_1</th>' +
    //                              '<th>6_Z_2</th>' +
    //                              '<th>6_Z_3</th>' +
    //                              '<th>6_H_1</th>' +
    //                              '<th>6_H_2</th>' +
    //                              '<th>6_H_3</th>' +
    //                              '<th>7_Q_1</th>' +
    //                              '<th>7_Q_2</th>' +
    //                              '<th>7_Q_3</th>' +
    //                              '<th>7_Z_1</th>' +
    //                              '<th>7_Z_2</th>' +
    //                              '<th>7_Z_3</th>' +
    //                              '<th>7_H_1</th>' +
    //                              '<th>7_H_2</th>' +
    //                              '<th>7_H_3</th>' +
    //                              '</tr>';
    //
    //
    //                         for (x in sdata)
    //                          {
    //                              str += "<tr>";
    //                             for (y in sdata[x])
    //                         {
    //                             str += '<td style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;" >' + sdata[x][y] + "</td>";
    //                         }
    //                         str += "</tr>";
    // }
    //
    //
    //
    //
    //                     //     str ="";
    //                     //     for ( var i = 0; i <sdata.length; i++){
    //                     //         str += "<li>"+sdata[i]+"</li>";
    //                     //         console.log(str)
    //                     // }
    //                     document.getElementById('sdata').innerHTML=str
    //
    //                     }
    //
    //                 })
    //             }
            });
        });
        $( "#Kingdom" ).focus(function(){
            $( "#Kingdom" ).autocomplete({
                source: availableTags[1],
                minLength:0,
                create:function () {
                    $(this).bind("click",function(){
                        var active=$(this).data("autocomplete");
                    if(!active){
                  $(this).autocomplete("search" , "");
              }
          });
        }


            });
        });
        $( "#Phylum" ).focus(function(){
            $( "#Phylum" ).autocomplete({
                source: availableTags[2],
                 minLength:0,
                create:function () {
                    $(this).bind("click",function(){
                        var active=$(this).data("autocomplete");
                    if(!active){
                  $(this).autocomplete("search" , "");
              }
          });
        },
                //PtoC
                select:function (event,ui) {
                    var Phylum = ui.item.value;
                    $.ajax({
                        type: "GET",
                         url: "/PtoC",
                         data: {'Phylum':Phylum},
                        dataType: "json",
                        success:function (data) {
                            var Cdata = data;
                            var availableTags = Cdata;
                            $( "#Class" ).focus(function(){
                                $( "#Class" ).autocomplete({
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
                   //CtoO
                   select:function (event,ui) {
                    var Class = ui.item.value;
                    $.ajax({
                        type: "GET",
                         url: "/CtoO",
                         data: {'Phylum':Phylum,'Class':Class},
                        dataType: "json",
                        success:function (data) {
                            var Odata = data;
                            var availableTags = Odata;
                            $( "#Order" ).focus(function(){
                                $( "#Order" ).autocomplete({
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

                     //OtoF
                    select:function (event,ui) {
                    var Order = ui.item.value;
                    $.ajax({
                        type: "GET",
                         url: "/OtoF",
                         data: {'Phylum':Phylum,'Class':Class,"Order":Order},
                        dataType: "json",
                        success:function (data) {
                            var Fdata = data;
                            var availableTags = Fdata;
                            $( "#Family" ).focus(function(){
                                $( "#Family" ).autocomplete({
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
                  //FtoG
                    select:function (event,ui) {
                    var Family = ui.item.value;
                    $.ajax({
                        type: "GET",
                         url: "/FtoG",
                         data: {'Phylum':Phylum,'Class':Class,"Order":Order,'Family':Family},
                        dataType: "json",
                        success:function (data) {
                            var Gdata = data;
                            var availableTags = Gdata;
                            $( "#Genus" ).focus(function(){
                                $( "#Genus" ).autocomplete({
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
                  //GtoS
                select:function (event,ui) {
                    var Genus = ui.item.value;
                    $.ajax({
                        type: "GET",
                         url: "/GtoS",
                         data: {'Phylum':Phylum,'Class':Class,"Order":Order,'Family':Family,"Genus":Genus},
                        dataType: "json",
                        success:function (data) {
                            var Sdata = data;
                            var availableTags = Sdata;
                            $( "#Species" ).focus(function(){
                                $( "#Species" ).autocomplete({
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
                  //FtoG






            });
        });
                        }
                    })
                }





            });
        });
                        }
                    })
                }





            });
        });
                        }
                    })
                }



            });
        });
                        }
                    })
                }


            });
        });
                        }
                    })
                }

            });
        });


        //Class


        // $( "#Class" ).focus(function(){
        //     $( "#Class" ).autocomplete({
        //         source: availableTags[3]
        //
        //
        //     });
        // });


        //Class
        //   $( "#Order" ).focus(function(){
        //     $( "#Order" ).autocomplete({
        //         source: availableTags[4]
        //
        //
        //     });
        // });
        // $( "#Family" ).focus(function(){
        //     $( "#Family" ).autocomplete({
        //         source: availableTags[5]
        //
        //     });
        // });
        // $( "#Genus" ).focus(function(){
        //     $( "#Genus" ).autocomplete({
        //         source: availableTags[6]
        //
        //
        //
        //     });
        // });
        // $( "#Species" ).focus(function(){
        //     $( "#Species" ).autocomplete({
        //         source: availableTags[7]
        //
        //
        //     });
        // });
     }
    })




}



 $("#myform").submit(function (e) {
     e.preventDefault();
    $.ajax({
            type: "POST",   //提交的方法
            url:"/search_data", //提交的地址
            data:$(this).serialize(),// 序列化表单值
            async: false,
            dataType: "json",
            error: function(request) {  //失败的话
                 alert("Connection error");
            },
            success: function(data) {
                var mydata = data;
                str = "";
                str = '<tr>'+
                                 '<th>1_1</th>' +
                                 '<th>1_2</th>' +
                                 '<th>1_3</th>' +
                                 '<th>2_1</th>' +
                                 '<th>2_2</th>' +
                                 '<th>2_3</th>' +
                                 '<th>3_1</th>' +
                                 '<th>3_2</th>' +
                                 '<th>3_3</th>' +
                                 '<th>4_1</th>' +
                                 '<th>4_2</th>' +
                                 '<th>4_3</th>' +
                                 '<th>5_Q_1</th>' +
                                 '<th>5_Q_2</th>' +
                                 '<th>5_Q_3</th>' +
                                 '<th>5_Z_1</th>' +
                                 '<th>5_Z_2</th>' +
                                 '<th>5_Z_3</th>' +
                                 '<th>5_H_1</th>' +
                                 '<th>5_H_2</th>' +
                                 '<th>5_H_3</th>' +
                                 '<th>6_Q_1</th>' +
                                 '<th>6_Q_2</th>' +
                                 '<th>6_Q_3</th>' +
                                 '<th>6_Z_1</th>' +
                                 '<th>6_Z_2</th>' +
                                 '<th>6_Z_3</th>' +
                                 '<th>6_H_1</th>' +
                                 '<th>6_H_2</th>' +
                                 '<th>6_H_3</th>' +
                                 '<th>7_Q_1</th>' +
                                 '<th>7_Q_2</th>' +
                                 '<th>7_Q_3</th>' +
                                 '<th>7_Z_1</th>' +
                                 '<th>7_Z_2</th>' +
                                 '<th>7_Z_3</th>' +
                                 '<th>7_H_1</th>' +
                                 '<th>7_H_2</th>' +
                                 '<th>7_H_3</th>' +
                                 '<th>SUM</th>' +
                                 '</tr>';
                str+="<tr>";
                for (var i=0;i<mydata.length;i++){
                    str+="<td>"+mydata[i]+"</td>"
                }
                str+="</tr>";

                document.getElementById("otu_table").innerHTML=str;


            }
         });
       });

