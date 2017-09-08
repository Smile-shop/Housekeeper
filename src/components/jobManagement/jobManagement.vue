<template>
	<div class="jobManagement_container">
		<p class="jobManagement_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click=goback>
			<span>岗位人管理</span>
		</p>
		<div class="main">
			<div class="jobsearch">
				<input type="text" class="jobx" placeholder="岗位人员姓名">
				<input type="text" class="jobx" placeholder="手机号">
				<el-select v-model="formInline.region" placeholder="岗位" >
			      <el-option v-for="arr in jod" :label="arr[0]" :value="arr[0]"></el-option>
			    </el-select>
				<mt-button type="primary" class="search" @click=search>搜索</mt-button>
			</div>
				<p>添加岗位</p>
				<input type="text" class="jobx" placeholder="岗位人员姓名">
				<input type="text" class="jobx" placeholder="手机号">
				<mt-button type="primary" class="search" @click=search>提交</mt-button><br>
				<span>店长</span><span>进货岗</span><span>销售岗</span><span>质量安全岗</span><span>质量追踪岗</span>
				<table class="jodtable">
			      <thead>
			        <tr>
			          <th>岗位人员姓名</th>
			          <th>手机号码</th>
			          <th>岗位</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <td>Mark</td>
			          <td>Otto</td>
			          <td>@mdo</td>
			        </tr>
			      </tbody>
			    </table>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './jobManagement.scss'
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
<style lang="scss" src="./jobManagement.scss"></style>