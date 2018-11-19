Vue.component('ToNav',{
    template:`  <div class="topnav">
                    <div class="topnav_bd w1210 bc">
                        <div class="topnav_left"></div>
                        <div class="topnav_right fr">
                            <ul>
                                <li v-if="name==null">您好，欢迎来到京西！[<a href="login.html">登录</a>] [<a href="register.html">免费注册</a>] </li>
                                <li v-else>您好，{{name}}！ [<a @click='logout' href="javascript:;">退出</a>] </li>
                                <li v-if="name!=null" class="line">|</li>
                                <li v-if="name!=null">我的订单</li>
                                <li v-if="name!=null" class="line">|</li>
                                <li v-if="name!=null">客户服务</li>

                            </ul>
                        </div>
                    </div>
                </div>`,
    data:function(){
        return {
            name:localStorage.getItem('name')
        }
    },
    methods:{
        logout:function(){
            localStorage.removeItem('token')
            localStorage.removeItem('name')
            this.name = null
        }
    }
})