Vue.component('pagination',{
    props:['total_page','page'],
    template:`
            <div class="page mt20">
                <a href="javascript:;" @click="pageClick(1)">首页</a>
                <a href="javascript:;" >上一页</a>
                <a :class="{cur:v==page}" v-for='(v,k) in pageRange' @click="pageClick(v)" href="javascript:;">{{v}}</a>
                <a href="javascript:;">下一页</a>
                <a href="javascript:;" @click="pageClick(total_page)">尾页</a>
                当前第<input @keyup.enter="pageClick(cur_page)" v-model="cur_page" style="width:50px" type="number">页/共{{total_page}}页
            </div>`,
    data:function(){
        return {
            cur_page:this.page
        }
    },
    methods:{
        pageClick:function(num){
            if(num>this.total_page) num=this.total_page
            if(num<1) num = 1
            this.$emit('page_changed',parseInt(num))
        }
    },
    computed:{
        pageRange:function(){
            let star = Math.max(this.page-3,1)
            let end = Math.min(this.page+3,this.total_page)
            let page = []
            for(let i=star;i<=end;i++){
                page.push(i)
            }
            return page
        }
    }
})