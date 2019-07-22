const Mock = require('mockjs')
var template01= {
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
Mock.mock('/api/test01',template01);