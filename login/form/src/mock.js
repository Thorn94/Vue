// const Mock=require('mockjs');
// var template01={
//     'data|6':[{
//     'title':'@title',
//     'article':'@article'
//     }]
   
    
// }
// Mock.mock('/api/test01',template01); 
const Mock=require('mockjs');
var template01={
    'data|6':[{
    'title':'@title',
    'article':'@article'
    },{
        "string|3": "★★★"
    }]
}
Mock.mock('/api/test01',template01); 
var tem={
    "foo": "Hello",
    "nested": {
      "a": {
        "b": {
          "c": "Mock.js"
        }
      }
    },
    "relativePath": {
      "a": {
        "b": {
          "c": "@../../../foo @../../../nested/a/b/c"
        }
      }
    }
  }
Mock.mock('/api/test02',tem);
