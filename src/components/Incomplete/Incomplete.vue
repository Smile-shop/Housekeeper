<template>
	<div class="Incomplete_container">
		<p class="Incomplete_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click=goback>
			<span>未完成事件</span>
		</p>
		<div class="main">
			<table class="jodtable">
		      <thead>
		        <tr>
		          <th>事件</th>
		          <th>负责人姓名</th>
		          <th>岗位</th>
		          <th>手机号</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <td>公共场所经营者卫生许可证</td>
		          <td>开卷的</td>
		          <td>店长</td>
		          <td>13588888888</td>
		        </tr>
		      </tbody>
		    </table>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './Incomplete.scss'
	export default {
		data(){
			return {
				
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
<style lang="scss" src="./Incomplete.scss"></style>