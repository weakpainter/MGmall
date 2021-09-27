<template>
    <div class="item-rule" v-if="Object.keys(itemInfo).length !== 0">
        <table v-for="(table,index) in itemInfo.rule.tables" :key="index">
            <tr v-for="(tr,indey) in table" :key="indey">
                <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
            </tr>
        </table>
        <table class="table-content">
            <tr v-for="(item,index) in itemInfo.info.set" :key="index">
                <td class="item-key">{{item.key}}</td>
                <td class="item-value">{{item.value}}</td>
            </tr>
        </table>

        <div class="item-img" v-if="itemInfo.info.image">
            <img :src="itemInfo.info.image" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailItemParams",
    props:{
        itemInfo:{
            type:Object
        }
    }
}
</script>

<style scoped>
    .item-rule{
        margin-top: 20px;
        border-bottom: 5px solid rgba(243, 241, 241, 0.849);
    }
    .item-rule table{
        width: 100%;
        border-collapse: collapse;
    }
    .item-rule table tr{
        height: 45px;
    }
    .item-rule table tr td{
        padding-left: 20px;
        border-bottom: 2px solid rgba(100,100,100,.1);
    }

    .item-rule table.table-content{
        border-top: 5px solid rgba(243, 241, 241, 0.849);
    }
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    .item-rule table tr td.item-key{
        width: 94px;
    }
    .item-rule table tr td.item-value{
        text-align: left;
        padding-left: 30px; 
        color: #ce679b
    }
    .item-rule .item-img img{
        width: 100%;
    }
</style>