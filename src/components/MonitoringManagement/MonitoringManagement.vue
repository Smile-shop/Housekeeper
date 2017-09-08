<template>
	<div class="MonitoringManagement_container">
		<p class="MonitoringManagement_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click=goback>
			<span>监管记录</span>
		</p>
		<div class="main">
			<table class="jodtable">
		     <!--  <thead>
		        <tr>
		          <th>主体责任</th>
		          <th>未完成事件</th>
		        </tr>
		      </thead> -->
		      <tbody>
		        <tr>
		          <td>记录编号</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		        <tr>
		          <td>检查单位</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		        <tr>
		          <td>检查方式</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		        <tr>
		          <td>检查内容</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		        <tr>
		          <td>检查结果</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		        <tr>
		          <td>检查日期</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		        <tr>
		          <td>检查人</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		        <tr>
		          <td>检查对象</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		        <tr>
		          <td>备注</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		      </tbody>
		    </table>
		    <mt-button type="primary" class="registbtn">签字</mt-button>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './MonitoringManagement.scss'
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
<style lang="scss" src="./MonitoringManagement.scss"></style>