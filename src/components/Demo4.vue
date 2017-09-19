<template>
    <div class="container">
        <simple-table :list="list" :titles="tableTitle"></simple-table>
    </div>
</template>
<script>
import SimpleTable from './Simple-table.vue';

export default {
	data () {
		return {
			list: [],
			tableTitle: [
				{title: '合同编号', key: 'contractNo'},
				{title: '用户名', key: 'userName'},
				// {title: '开始时间', key: 'startTime'},
				// {title: '结束时间', key: 'endTime'},
				// {title: '合同总金额', key: 'amount'},
				{title: '中止时间', key: 'stopTime'},
				{title: '公司', key: 'companyName'},
				// {title: '品牌名', key: 'brandName'},
				// {title: '代理商', key: 'agentName'},
				// {title: '销售', key: 'salesName'},
				{title: '状态', key: 'stateName'},
				{
					title: '操作', 
					buttons: [
						{
							text: '修改合同',
							authCode: 'CRM:KA_CONTRACT_CPT_BRAND_UPDATE',
							on: {
								click: item => {
									this.onUpdateContract(item);
								}
							}
						},
						{
							text: '终止合同',
							authCode: 'CRM:KA_CONTRACT_CPT_BRAND_TERMINATE',
							on: {
								click: item => {
									this.onTerminateContract(item);
								}
							}
						},
						{
							text: '编辑物料',
							link: 'http://e.sm.cn/cpt/static/index.html?uid=${userid}#/management/list',
							vars: ['userid'],
							target: '_blank'
						},
						{
							text: '替换词包',
							authCode: 'CRM:KA_CONTRACT_CPT_BRAND_REPLACE_PACKAGE',
							on: {
								click: item => {
									this.onUpdateContractPackage(item);
								}
							}
						}
					]
				}
			]
		}
	},

	components: {
		SimpleTable
	},

	methods: {
		onUpdateContract (data) {
			console.log(data);
		},

		onTerminateContract (data) {
			console.log(data);
		},

		onUpdateContractPackage (data) {
			console.log(data);
		},

		update () {
			setTimeout(() => {
				let data = {"status":0,"message":"success","data":{"pageNo":1,"pageSize":20,"totalCount":963,"list":[{"id":1894,"contractNo":"GZJY-PF-20170627-20007","userid":22859569,"userName":"平安车险神马","brandName":"平安车险","unitPrice":14851.0,"amount":89100.0,"paymentState":2,"paymentStateName":"已付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"","startTime":"2017-10-01","endTime":"2018-03-31","stopTime":"2018-03-31","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-06-27 18:37:57","modifyTime":"2017-06-27 18:37:57","companyName":"","agentName":null,"salesName":null,"createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-10-01","endTime":"2018-03-31","amount":89100.0}],"packageIds":[296270]},{"id":1962,"contractNo":"GZJY-PF-20170727-21594","userid":1167,"userName":"lutingting@jiuxian.com","brandName":"酒仙网","unitPrice":32400.0,"amount":97200.0,"paymentState":1,"paymentStateName":"付款中","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"","startTime":"2017-10-01","endTime":"2017-12-31","stopTime":"2017-12-31","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-07-27 16:31:21","modifyTime":"2017-07-27 16:31:21","companyName":"酒仙网电子商务股份有限公司","agentName":"adsage神马管家账户2015","salesName":"wanghua","createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-10-01","endTime":"2017-12-31","amount":97200.0}],"packageIds":[301750]},{"id":1958,"contractNo":"GZJY-PF-20170724-21315","userid":100485,"userName":"平安好医生","brandName":"平安好医生","unitPrice":14040.0,"amount":84240.0,"paymentState":0,"paymentStateName":"未付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"","startTime":"2017-08-17","endTime":"2018-02-16","stopTime":"2018-02-16","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-07-24 17:10:35","modifyTime":"2017-07-24 17:10:35","companyName":"平安健康互联网股份有限公司","agentName":"北京爱德康赛","salesName":"","createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-17","endTime":"2018-02-16","amount":84240.0}],"packageIds":[301462]},{"id":1957,"contractNo":"GZJY-PF-20170724-21317","userid":1513,"userName":"平安陆金所lufax","brandName":"平安陆金所","unitPrice":11250.0,"amount":67500.0,"paymentState":0,"paymentStateName":"未付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"","startTime":"2017-08-15","endTime":"2018-02-14","stopTime":"2018-02-14","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-07-24 17:08:11","modifyTime":"2017-07-24 17:08:11","companyName":"上海陆家嘴国际金融资产交易市场股份有限公司","agentName":"北京爱德康赛","salesName":"","createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-15","endTime":"2018-02-14","amount":67500.0}],"packageIds":[299354]},{"id":1967,"contractNo":"GZJY-PF-20170728-21632","userid":20384652,"userName":"美素佳儿","brandName":"美素佳儿","unitPrice":20000.0,"amount":100000.0,"paymentState":0,"paymentStateName":"未付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"","startTime":"2017-08-10","endTime":"2018-01-09","stopTime":"2018-01-09","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-07-28 16:00:27","modifyTime":"2017-07-28 16:00:27","companyName":"","agentName":null,"salesName":null,"createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-10","endTime":"2018-01-09","amount":100000.0}],"packageIds":[298627]},{"id":1978,"contractNo":"GZJY-PF-20170802-21807","userid":25100995,"userName":"融之家金融-1","brandName":"融之家","unitPrice":11250.0,"amount":135000.0,"paymentState":0,"paymentStateName":"未付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"","startTime":"2017-08-04","endTime":"2018-08-03","stopTime":"2018-08-03","createUserId":13430467,"modifyUserId":13430467,"createTime":"2017-08-02 16:24:48","modifyTime":"2017-08-02 16:24:48","companyName":"","agentName":null,"salesName":null,"createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-04","endTime":"2018-08-03","amount":135000.0}],"packageIds":[299490]},{"id":1976,"contractNo":"GZJY-PF-20170801-21789","userid":2179,"userName":"zenglizhi@lvmama.com","brandName":"驴妈妈","unitPrice":22500.0,"amount":67500.0,"paymentState":2,"paymentStateName":"已付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"溢价","startTime":"2017-08-03","endTime":"2017-11-02","stopTime":"2017-11-02","createUserId":29972163,"modifyUserId":29972163,"createTime":"2017-08-02 09:58:05","modifyTime":"2017-08-02 09:58:05","companyName":"上海景域文化传播有限公司","agentName":"蓝坤互动","salesName":"","createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-03","endTime":"2017-11-02","amount":67500.0}],"packageIds":[331757]},{"id":1950,"contractNo":"GZJY-PF-20170718-21004","userid":1999,"userName":"美联英语","brandName":"美联英语","unitPrice":12500.0,"amount":62500.0,"paymentState":2,"paymentStateName":"已付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"","startTime":"2017-08-01","endTime":"2017-12-31","stopTime":"2017-12-31","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-07-18 10:49:51","modifyTime":"2017-07-18 10:49:51","companyName":"深圳市美联教育科技有限公司","agentName":null,"salesName":null,"createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-01","endTime":"2017-12-31","amount":62500.0}],"packageIds":[302006]},{"id":1952,"contractNo":"GZJY-PF-20170719-21039","userid":10857045,"userName":"SH-拉勾网络","brandName":"拉勾网","unitPrice":11250.0,"amount":67500.0,"paymentState":2,"paymentStateName":"已付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"","startTime":"2017-08-01","endTime":"2018-01-31","stopTime":"2018-01-31","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-07-19 10:50:41","modifyTime":"2017-07-19 10:50:41","companyName":"北京拉勾网络技术有限公司","agentName":null,"salesName":null,"createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-01","endTime":"2018-01-31","amount":67500.0}],"packageIds":[299289]},{"id":1953,"contractNo":"GZJY-PF-20170719-21040","userid":1886,"userName":"zhilian_UC","brandName":"智联招聘","unitPrice":162000.0,"amount":1296000.0,"paymentState":1,"paymentStateName":"付款中","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"","startTime":"2017-08-01","endTime":"2018-03-31","stopTime":"2018-03-31","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-07-19 10:51:44","modifyTime":"2017-07-19 10:51:44","companyName":"北京网聘咨询有限公司","agentName":"","salesName":"chaoli918","createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-01","endTime":"2018-03-31","amount":1296000.0}],"packageIds":[298637]},{"id":1956,"contractNo":"GZJY-PF-20170724-21294","userid":1282,"userName":"百合网交友","brandName":"百合网","unitPrice":31500.0,"amount":189000.0,"paymentState":2,"paymentStateName":"已付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"","startTime":"2017-08-01","endTime":"2018-01-31","stopTime":"2018-01-31","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-07-24 17:06:59","modifyTime":"2017-07-24 17:06:59","companyName":"百合网股份有限公司","agentName":null,"salesName":null,"createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-01","endTime":"2018-01-31","amount":189000.0}],"packageIds":[330713]},{"id":1961,"contractNo":"GZJY-PF-20170727-21590","userid":26272570,"userName":"神马-荣耀关键字20170523","brandName":"华为","unitPrice":300000.0,"amount":300000.0,"paymentState":0,"paymentStateName":"未付款","state":2,"stateName":"已过期","type":0,"typeName":"普通品专","source":0,"sourceName":"","remark":"享受8折","startTime":"2017-08-01","endTime":"2017-08-31","stopTime":"2017-08-31","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-07-27 16:11:05","modifyTime":"2017-07-27 16:11:05","companyName":"","agentName":null,"salesName":null,"createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-01","endTime":"2017-08-31","amount":300000.0}],"packageIds":[331401]},{"id":1963,"contractNo":"GZJY-PF-20170727-21592","userid":896,"userName":"UC-安居客二手房移动","brandName":"安居客","unitPrice":59400.0,"amount":356400.0,"paymentState":2,"paymentStateName":"已付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"","startTime":"2017-08-01","endTime":"2018-01-31","stopTime":"2018-01-31","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-07-27 16:34:15","modifyTime":"2017-07-27 16:34:15","companyName":"瑞庭网络技术(上海)有限公司","agentName":null,"salesName":null,"createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-01","endTime":"2018-01-31","amount":356400.0}],"packageIds":[331134]},{"id":1964,"contractNo":"GZJY-PF-20170727-21597","userid":19700610,"userName":"神马-IHG2017","brandName":"洲际酒店","unitPrice":10800.0,"amount":64800.0,"paymentState":2,"paymentStateName":"已付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"新客享受额外8折","startTime":"2017-08-01","endTime":"2018-01-31","stopTime":"2018-01-31","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-07-27 17:33:29","modifyTime":"2017-07-27 17:33:29","companyName":"","agentName":null,"salesName":null,"createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-01","endTime":"2018-01-31","amount":64800.0}],"packageIds":[331217]},{"id":1965,"contractNo":"GZJY-PF-20170727-21611","userid":28548995,"userName":"GsMKcom","brandName":"MK","unitPrice":15750.0,"amount":94500.0,"paymentState":2,"paymentStateName":"已付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"前5个月享受额外8折,最后一个月不享受\n","startTime":"2017-08-01","endTime":"2018-01-31","stopTime":"2018-01-31","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-07-28 10:28:25","modifyTime":"2017-07-28 10:28:25","companyName":"","agentName":null,"salesName":null,"createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-01","endTime":"2018-01-31","amount":94500.0}],"packageIds":[330990]},{"id":1970,"contractNo":"GZJY-PF-20170724-21313","userid":29895554,"userName":"平安新一贷sm3","brandName":"平安新一贷","unitPrice":11250.0,"amount":67500.0,"paymentState":2,"paymentStateName":"已付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"","startTime":"2017-08-01","endTime":"2018-01-31","stopTime":"2018-01-31","createUserId":13430467,"modifyUserId":13430467,"createTime":"2017-07-31 15:04:50","modifyTime":"2017-07-31 15:04:50","companyName":"","agentName":null,"salesName":null,"createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-01","endTime":"2018-01-31","amount":67500.0}],"packageIds":[331756]},{"id":1980,"contractNo":"艺龙普通","userid":556,"userName":"vipshop","brandName":"艺龙旅行","unitPrice":200000.0,"amount":310000.0,"paymentState":0,"paymentStateName":"未付款","state":2,"stateName":"已过期","type":0,"typeName":"普通品专","source":0,"sourceName":"","remark":"xx","startTime":"2017-08-01","endTime":"2017-08-31","stopTime":"2017-08-31","createUserId":68007,"modifyUserId":68007,"createTime":"2017-08-08 15:47:22","modifyTime":"2017-08-08 15:47:22","companyName":"宇杰和小浒额额额","agentName":"蓝坤互动","salesName":"wanghua","createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-08-01","endTime":"2017-08-31","amount":310000.0}],"packageIds":[333074]},{"id":1966,"contractNo":"GZJY-PF-20170728-21639","userid":19610426,"userName":"ofo神马搜索","brandName":"ofo共享单车","unitPrice":25200.0,"amount":151200.0,"paymentState":2,"paymentStateName":"已付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"","startTime":"2017-07-31","endTime":"2018-01-30","stopTime":"2018-01-30","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-07-28 14:30:26","modifyTime":"2017-07-28 14:30:26","companyName":"","agentName":null,"salesName":null,"createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-07-31","endTime":"2018-01-30","amount":151200.0}],"packageIds":[330936]},{"id":1969,"contractNo":"测试普通合同","userid":13240230,"userName":"zzcs2","brandName":"海底捞","unitPrice":1.0,"amount":2.0,"paymentState":0,"paymentStateName":"未付款","state":1,"stateName":"终止","type":0,"typeName":"普通品专","source":0,"sourceName":"SME","remark":"测试","startTime":"2017-07-29","endTime":"2017-08-02","stopTime":"2017-07-29","createUserId":23245449,"modifyUserId":23245449,"createTime":"2017-07-29 16:14:09","modifyTime":"2017-07-29 18:25:06","companyName":"神马测试","agentName":null,"salesName":null,"createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-07-29","endTime":"2017-08-02","amount":2.0}],"packageIds":[332832]},{"id":1960,"contractNo":"GZJY-PF-20170725-21420","userid":27501478,"userName":"腾讯云2017","brandName":"腾讯云","unitPrice":12500.0,"amount":64113.0,"paymentState":2,"paymentStateName":"已付款","state":0,"stateName":"生效","type":0,"typeName":"普通品专","source":0,"sourceName":"KA","remark":"","startTime":"2017-07-28","endTime":"2017-12-31","stopTime":"2017-12-31","createUserId":13430577,"modifyUserId":13430577,"createTime":"2017-07-25 16:44:16","modifyTime":"2017-07-25 16:44:16","companyName":"","agentName":null,"salesName":null,"createUserName":null,"modifyUserName":null,"orderStartEndTimeAndAmount":[{"startTime":"2017-07-28","endTime":"2017-12-31","amount":64113.0}],"packageIds":[301745]}],"totalPageCount":49}};
				this.list = data.data.list;
			}, 100);
		}
	},

	mounted () {
		this.update();
	}

}
</script>
<style scoped>
	
</style>
