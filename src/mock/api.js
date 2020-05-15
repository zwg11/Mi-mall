import Mock from 'mockjs'

Mock.mock('/api/user/login',{
    "status":0,
    "data":{
        "id|1-100":12,
        "username": "@cname",
        "email": "@web",
        "phone|1-9": 5,
        "role": 0,
        "createTime": 1479086486,
        "updateTime": 1867694364
    }
})