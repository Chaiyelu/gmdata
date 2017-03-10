var Common = {
    onEdit: function(e, window) {
        var rowdata = JSON.parse(e.getAttribute('rowdata'));
        console.log(rowdata);
        window.window({
            onOpen: function() {
                //回显数据
                window.form("load", rowdata);
            }
        }).window("open");
    },
    onAdd: function(window) {
        window.window({
            onOpen: function() {
                //清空数据
                window.form("clear");
            }
        }).window("open");
    },
    onSubmit: function(params) {
        console.log('on submit');

    }
}

var _initButton = function(val, data, index) {

    var html = "";
    html += "<a class='easyui-linkbutton iconfont button-default' data-options='iconCls:\"icon-eye\"' rowdata='" + JSON.stringify(data) + "'>查看</a>";
    html += "<a class='easyui-linkbutton iconfont button-warning btn-edit' data-options='iconCls:\"icon-lead-pencil\"' rowdata='" + JSON.stringify(data) + "'>编辑</a>";
    html += "<a class='easyui-linkbutton iconfont button-danger' data-options='iconCls:\"icon-delete\"' rowdataid='" + data.itemid + "'>删除</a>";

    return html;
}

var _initButton2 = function(val, data, index) {

    var html = "";
    if ($.inArray("4", val)) {
        html += "<a class='easyui-linkbutton iconfont button-default' data-options='iconCls:\"icon-eye\"' rowdata='" + JSON.stringify(data) + "'>查看</a>";
    };
    if ($.inArray("5", val)) {
        html += "<a class='easyui-linkbutton iconfont button-warning' data-options='iconCls:\"icon-eye\"' rowdata='" + JSON.stringify(data) + "'>审核</a>";
    };

    return html;
}