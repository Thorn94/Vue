const Mock = require('mockjs')
var template01 = {
    'tableData|30-60': [{

        "guid": '@guid',     //唯一ID

        'id|+1': 1,     //模拟id 序号

        "name": 'Random.ctitle(3, 5)',

        "Loophole": "Alureon/Olmarik 网络通信检测",     //漏洞名称

        "date": "@date('yyyy-MM-dd')",  //模拟时间

        "number": "@natural(60, 100)",

        "content": "@paragraph()", //模拟文本

        "content1": "@paragraph(2)", //模拟文本

        "content2": "@paragraph(1,3)" //模拟文本
    }]
}
Mock.mock('/api/test01', template01);


var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        "number|1-100.1-10": 1,
        "date": Mock.mock('@time')
    }]
})
Mock.mock('/api/test03', data);
