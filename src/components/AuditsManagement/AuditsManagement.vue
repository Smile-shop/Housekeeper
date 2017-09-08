<template>
	<div class="AuditsManagement_container">
		<p class="AuditsManagement_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click=goback>
			<span>审核管理</span>
		</p>
		<div class="main">
			<table class="jodtable">
		      <thead>
		        <tr>
		          <th>文件名称</th>
		          <th>上传时间</th>
		          <th></th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <td>产品与供贷企业合规信息登记表</td>
		          <td>2017年5月10日</td>
		          <td><mt-button type="primary" class="search">签字</mt-button></td>
		        </tr>
		      </tbody>
		    </table>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './AuditsManagement.scss'
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
<style lang="scss" src="./AuditsManagement.scss"></style>