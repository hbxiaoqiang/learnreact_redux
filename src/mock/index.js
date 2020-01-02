import Mock from 'mockjs';
// 使用mockjs 模拟请求数据
const data = Mock.mock({
    "data":[   //意思是data数组中有100条数据
        1111,2222,3333
    ]
})

Mock.mock("list","get",function(options){
    
    return data.data  //data.data是上面的数据，这里获取的是
})

Mock.setup({
    timeout: 1000
})