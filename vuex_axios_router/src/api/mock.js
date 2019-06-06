import Mock from 'mockjs'

Mock.mock('/list',{
    'yule':[
        {
        title:'娱乐标题1',
        content:'1234'
        },
        {
            title:'娱乐标题2',
            content:'123467789'
        },
    ],
    
    'shehui' : [
        {
        title:'社会标题1',
        content:'1234'
        },
        {
            title:'社会标题2',
            content:'123467789'
        }
    ]   
})