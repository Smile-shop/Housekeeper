<template>
	<div class="JobMonitoring_container">
		<p class="JobMonitoring_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click=goback>
			<span>工作监控</span>
		</p>
		<div class="main">
			<table class="jodtable">
		      <thead>
		        <tr>
		          <th>主体责任</th>
		          <th>未完成事件</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <td>企业准入责任</td>
		          <td><img src="../../assets/imgs/redround (3).png" alt="" @click = toIncomplete()></td>
		        </tr>
		      </tbody>
		    </table>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './JobMonitoring.scss'
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
			toIncomplete(){
				this.$router.push({name:'Incomplete'})
			},
		    search(){
		     	console.log(this.formInline.region)
		     	
		     }
		}
	}
</script>
<style lang="scss" src="./JobMonitoring.scss"></style>