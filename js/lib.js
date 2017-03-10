var addTab = function(title, url, tab) {
    if (tab.tabs('exists', title)) {
        tab.tabs('select', title);
    } else {
        tab.tabs('add', {
            title: title,
            href: url.replace('/protected/', ''),
            closable: true
        });
    }
}

var realSysTime = function(clock) {
    var now = new Date(); //创建Date对象 
    var year = now.getFullYear(); //获取年份 
    var month = now.getMonth(); //获取月份 
    var date = now.getDate(); //获取日期 
    var day = now.getDay(); //获取星期 
    var hour = getNum(now.getHours()); //获取小时 
    var minu = getNum(now.getMinutes()); //获取分钟 
    var sec = getNum(now.getSeconds()); //获取秒钟 
    month = month + 1;
    var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var week = arr_week[day]; //获取中文的星期 
    var time = year + "年" + month + "月" + date + "日 " + week + " " + hour + ":" + minu + ":" + sec; //组合系统时间 
    clock.innerHTML = time; //显示系统时间 
}

var getNum = function(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
}

var menuHandler = function(item) {
    var tabs = $("#tt");
    var selectTab = tabs.tabs("getSelected");
    var curTab = selectTab.panel('options');
    var curTabTitle = curTab.title;
    console.log(curTabTitle);
    //var selectTabIndex = tabs.tabs('getTabIndex', selectTab);
    var closeTabsTitle = getAllTabObj(tabs);
    if (item.name === "closeAll") {
        //循环删除要关闭的tab     
        $.each(closeTabsTitle, function() {
            var title = this;
            tabs.tabs('close', title);
        });

    } else if (item.name === "closeOther") {
        $.each(closeTabsTitle, function() {
            var title = this;
            if (title != curTabTitle) {
                tabs.tabs('close', title);
            }
        });
    }
}

var getAllTabObj = function(tabs) { //存放所有tab标题  
    var closeTabsTitle = []; //所有所有tab对象  
    var allTabs = tabs.tabs('tabs');
    $.each(allTabs, function() {
        var tab = this;
        var opt = tab.panel('options'); //获取标题   
        var title = opt.title; //是否可关闭 ture:会显示一个关闭按钮，点击该按钮将关闭选项卡   
        var closable = opt.closable;
        if (closable) {
            closeTabsTitle.push(title);
        }
    });
    return closeTabsTitle;
}