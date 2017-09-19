<template>
	<div class="table-container">
		<table class="ui celled table">
	        <thead>
	            <tr>
	                <th v-for="item in titles">{{item.title}}</th>	
	            </tr>
	        </thead>
	        <tbody>
	            <tr v-for="row in list">
		            <td v-for="item in titles">
		            	<template v-if="item.key">{{row[item.key]}}</template>
		            	<template v-if="item.buttons && item.buttons.length" v-for="button in item.buttons">
		            		<a v-if="!button.authCode || (button.authCode && hasAuth(button.authCode))"
		            			@click="handleClick(button, row)">
		            			{{button.text}}
		            		</a>
			            	<br>
		            	</template>
		            </td>
	            </tr>
	            <tr v-if="list && !list.length"><td colspan="30">无数据</td></tr>
	        </tbody>
	    </table>
	</div>
</template>

<script>
export default {
	props: [
		'titles',
		'list'
	],

	methods: {
		handleClick (button, row) {
			if(button.on) {
				button.on.click(row);
				return;
			} 
			if(button.link) {
				this.onOpenWindow(button, row);
			}
		},

		onOpenWindow (button, row) {
			let target = button.target == '_blank' ? '_blank' : '_self',
				href = button.link;
			for(let i = 0, len = button.vars.length; i < len; i ++) {
				href = href.replace('${' + button.vars[i] + '}', row[button.vars[i]]);
			}
			window.open(href, target);
		}
	}
}
</script>
<!---
使用：
<simple-table :list="list" :titles="tableTitle"></simple-table>
	
	data () {
		return {
			list: [],

			tableTitle: [
				{title: '合同编号', key: 'contractNo'},
				{title: '用户名', key: 'userName'},
				{title: '开始时间', key: 'startTime'},
				{title: '结束时间', key: 'endTime'},
				{title: '合同总金额', key: 'amount'},
				{title: '中止时间', key: 'stopTime'},
				{title: '公司', key: 'companyName'},
				{title: '品牌名', key: 'brandName'},
				{title: '代理商', key: 'agentName'},
				{title: '销售', key: 'salesName'},
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
	}
->