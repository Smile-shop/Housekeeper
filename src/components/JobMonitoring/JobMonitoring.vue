<template>
	<div class="JobMonitoring_container">
		<p class="JobMonitoring_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click=goback>
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
		<!-- 	      <tr v-for="(arr,index) in zeren">
			          <td>{{arr}}</td>
			          <td>
			          	<span class="count1">1</span>
			          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete(index)">
			          	<img src="../../assets/imgs/garystar (3).png" alt="" @click = "toIncomplete(index)">
						<span class="count2">1</span>
			          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete(index)">
			          	<img src="../../assets/imgs/garytriangle (3).png" alt="" @click = "toIncomplete(index)">
			          	<span class="count3">1</span>
			          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete(index)">
			          	<img src="../../assets/imgs/garyround (3).png" alt="" @click = "toIncomplete(index)">
			          </td>
			        </tr> -->
		        <tr>
		          <td>企业准入责任</td>
		          <td>
	          		<span class="count1">{{xing}}</span>
		          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garystar (3).png" alt="" @click = "toIncomplete()">
					<span class="count2">{{sjx}}</span>
		          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garytriangle (3).png" alt="" @click = "toIncomplete()">
		          	<span class="count3">{{y}}</span>
		          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garyround (3).png" alt="" @click = "toIncomplete()">
		          </td>
		        </tr>
		        <tr>
		          <td>产品合法性责任</td>
		          <td>
	          		<span class="count1">1</span>
		          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garystar (3).png" alt="" @click = "toIncomplete()">
					<span class="count2">2</span>
		          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garytriangle (3).png" alt="" @click = "toIncomplete()">
		          	<span class="count3">1</span>
		          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garyround (3).png" alt="" @click = "toIncomplete()">
		          </td>
		        </tr>
		        <tr>
		          <td>经营过程责任</td>
		          <td>
	          		<span class="count1">1</span>
		          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garystar (3).png" alt="" @click = "toIncomplete()">
					<span class="count2">1</span>
		          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garytriangle (3).png" alt="" @click = "toIncomplete()">
		          	<span class="count3">1</span>
		          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garyround (3).png" alt="" @click = "toIncomplete()">
		          </td>
		        </tr>
		        <tr>
		          <td>产品营销责任</td>
		          <td>
	          		<span class="count1">1</span>
		          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garystar (3).png" alt="" @click = "toIncomplete()">
					<span class="count2">1</span>
		          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garytriangle (3).png" alt="" @click = "toIncomplete()">
		          	<span class="count3">1</span>
		          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garyround (3).png" alt="" @click = "toIncomplete()">
		          </td>
		        </tr>
		        <tr>
		          <td>广告宣传责任</td>
		          <td>
	          		<span class="count1">1</span>
		          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garystar (3).png" alt="" @click = "toIncomplete()">
					<span class="count2">1</span>
		          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garytriangle (3).png" alt="" @click = "toIncomplete()">
		          	<span class="count3">1</span>
		          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garyround (3).png" alt="" @click = "toIncomplete()">
		          </td>
		        </tr>
		        <tr>
		          <td>产品质量追溯责任</td>
		          <td>
	          		<span class="count1">1</span>
		          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garystar (3).png" alt="" @click = "toIncomplete()">
					<span class="count2">1</span>
		          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garytriangle (3).png" alt="" @click = "toIncomplete()">
		          	<span class="count3">1</span>
		          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garyround (3).png" alt="" @click = "toIncomplete()">
		          </td>
		        </tr>
		        <tr>
		          <td>其他质量安全责任</td>
		          <td>
	          		<span class="count1">1</span>
		          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garystar (3).png" alt="" @click = "toIncomplete()">
					<span class="count2">1</span>
		          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garytriangle (3).png" alt="" @click = "toIncomplete()">
		          	<span class="count3">1</span>
		          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete()">
		          	<img src="../../assets/imgs/garyround (3).png" alt="" @click = "toIncomplete()">
		          </td>
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
				zeren:['企业准入责任','产品合法性责任','经营过程责任','产品营销责任','广告宣传责任','产品质量追溯责任','其他质量安全责任'],
				xing:'',
				sjx:'',
				y:'',
				sjx1:'',
			}
		},
		created(){
			this.$http.get(baseUrl+'/checkCompliance').then((res)=>{
				console.log(res)
              	if(res.data.retCode === 0){
              		this.sjx1 = res.data.data[0].business_rsp[0].level2;
              		console.log(this.sjx1)
              		if(res.data.data[0].business_rsp[0].level1.length > 0 ){
              			this.xing = res.data.data[0].business_rsp[0].level1.length;
              		}else if(res.data.data[0].business_rsp[0].level3.length > 0 ){
              			this.y = res.data.data[0].business_rsp[0].level3.length;
              		}else if(res.data.data[0].business_rsp[0].level2.length > 0 ){
              			this.sjx = res.data.data[0].business_rsp[0].level2.length;
              		}
              	}else{
              		this.$messagebox.alert(res.data.retMessage);
              	}
	          },(err)=>{
	              this.$messagebox.alert("获取信息错误!");
	          });
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			toIncomplete(){
				this.$router.push({name:'Incomplete',params:{sjx1:this.sjx1}})
			},
		    search(){
		     	console.log(this.formInline.region)
		     	
		     }
		}
	}
</script>
<style lang="scss" src="./JobMonitoring.scss"></style>