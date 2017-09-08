<template>
	<div class="FileManagement_container">
		<p class="FileManagement_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click=goback>
			<span>审核管理</span>
		</p>
		<div class="main">
			<div class="dsearch">
				<input type="text" class="fromname" placeholder="输入表单、台账、档案名称">
				<input type="text" class="timestart" placeholder="输入开始时间">
				<input type="text" class="timeend" placeholder="输入结束时间">
				<mt-button type="primary" class="year">最近一个年</mt-button>
				<mt-button type="primary" class="year">最近一个月</mt-button>
				<mt-button type="primary" class="search">搜索</mt-button>
			</div>
			<table class="jodtable">
		      <thead>
		        <tr>
		          <th>表单、台账、档案名称</th>
		          <th>时间</th>
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <td>产品与供贷企业合规信息登记表</td>
		          <td>2017年5月10日</td>
		          <td class="cao">
		          	<mt-button type="primary" class="edit">编辑</mt-button>
		          	<mt-button type="default" class="print">打印</mt-button>
		          	<mt-button type="danger" class="del">删除</mt-button>
		          </td>
		        </tr>
		      </tbody>
		    </table>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './FileManagement.scss'
	export default {
		data(){
			return {
				formInline: {
		          user: '',
		          region: ''
		        },
		        jod:[['店长'],['进货岗'],['销售岗'],['质量安全岗'],['质量追踪岗']]
			}
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			handleEdit(index, row) {
		        console.log(index, row);
		      },
		    handleDelete(index, row) {
		        console.log(index, row);
		        row.splice(index, 1);
		      },
		    print(index, row) {
		        console.log(index, row);
		      },
		    search(){
		     	console.log(this.formInline.region)
		     	
		     }
		}
	}
</script>
<style lang="scss" src="./FileManagement.scss"></style>