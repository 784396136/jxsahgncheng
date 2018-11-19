// AJAX代码

// 注册
function regist(params){
    return axios.post('/regist',params)
}
// 发送验证码
function send(params){
    return axios.post('/send',params)
}
// 登录
function login(params){
    return axios.post('/login',params)
}
// 商品分类
function categorys(){
    return axios.post('/categorys')
}
//楼层
function getFloor(){
    return axios.post('/floor')
}
// 商品详细页
function getGoodsInfo(skuid){
    return axios.get('/goods/'+skuid) 
}
// 评论
function getComments(spuid,per_page,page){
    return axios.get('/comments/'+spuid+"?limit="+per_page+"&page="+page+"&sort_by=id&sort_way=desc")
    
}
// 搜索商品
function searchGoods(search){
    return axios.get('/goods', {
        params:search
    })
}

// 获取规格
function getSpecifications(catid){
    return axios.get('/specifications/'+catid)
}

// 获取品牌
function getBrands(catid){
    return axios.get('/brands/'+catid)
}