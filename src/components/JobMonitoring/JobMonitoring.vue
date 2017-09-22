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
	          		<span class="count1" @click = "toIncomplete1()">{{tipxing1}}</span>
		          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete1()" v-show = "xing1show">
		          	<img src="../../assets/imgs/garystar (3).png" alt="" v-show = "xing11show">
					<span class="count2" @click = "toIncomplete2()">{{tipsjx1}}</span>
		          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete2()" v-show = "sjx1show">
		          	<img src="../../assets/imgs/garytriangle (3).png" alt="" v-show = "sjx11show">
		          	<span class="count3"  @click = "toIncomplete3()">{{tipy1}}</span>
		          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete3()" v-show = "y1show">
		          	<img src="../../assets/imgs/garyround (3).png" alt="" v-show = "y11show">
		          </td>
		        </tr>
		        <tr>
		          <td>产品合法性责任</td>
		          <td>
	          		<span class="count1" @click = "toIncomplete4()">{{tipxing2}}</span>
		          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete4()" v-show = "xing2show">
		          	<img src="../../assets/imgs/garystar (3).png" alt="" v-show = "xing22show">
					<span class="count2" @click = "toIncomplete5()">{{tipsjx2}}</span>
		          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete5()" v-show = "sjx2show">
		          	<img src="../../assets/imgs/garytriangle (3).png" alt="" v-show = "sjx22show">
		          	<span class="count3" @click = "toIncomplete6()">{{tipy2}}</span>
		          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete6()" v-show = "y2show">
		          	<img src="../../assets/imgs/garyround (3).png" alt="" v-show = "y22show">
		          </td>
		        </tr>
		        <tr>
		          <td>经营过程责任</td>
		          <td>
	          		<span class="count1" @click = "toIncomplete7()">{{tipxing3}}</span>
		          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete7()" v-show = "xing3show">
		          	<img src="../../assets/imgs/garystar (3).png" alt="" v-show = "xing33show">
					<span class="count2" @click = "toIncomplete8()">{{tipsjx3}}</span>
		          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete8()" v-show = "sjx3show">
		          	<img src="../../assets/imgs/garytriangle (3).png" alt="" v-show = "sjx33show">
		          	<span class="count3" @click = "toIncomplete9()">{{tipy3}}</span>
		          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete9()" v-show = "y3show">
		          	<img src="../../assets/imgs/garyround (3).png" alt="" v-show = "y33show">
		          </td>
		        </tr>
		        <tr>
		          <td>产品营销责任</td>
		          <td>
	          		<span class="count1" @click = "toIncomplete10()">{{tipxing4}}</span>
		          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete10()" v-show = "xing4show">
		          	<img src="../../assets/imgs/garystar (3).png" alt="" v-show = "xing44show">
					<span class="count2" @click = "toIncomplete11()">{{tipsjx4}}</span>
		          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete11()" v-show = "sjx4show">
		          	<img src="../../assets/imgs/garytriangle (3).png" alt="" v-show = "sjx44show">
		          	<span class="count3" @click = "toIncomplete12()">{{tipy4}}</span>
		          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete12()" v-show = "y4show">
		          	<img src="../../assets/imgs/garyround (3).png" alt="" v-show = "y44show">
		          </td>
		        </tr>
		        <tr>
		          <td>广告宣传责任</td>
		          <td>
	          		<span class="count1" @click = "toIncomplete13()">{{tipxing5}}</span>
		          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete13()" v-show = "xing5show">
		          	<img src="../../assets/imgs/garystar (3).png" alt="" v-show = "xing55show">
					<span class="count2" @click = "toIncomplete14()">{{tipsjx5}}</span>
		          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete14()" v-show = "sjx5show">
		          	<img src="../../assets/imgs/garytriangle (3).png" alt="" v-show = "sjx55show">
		          	<span class="count3" @click = "toIncomplete15()">{{tipy5}}</span>
		          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete15()" v-show = "y5show">
		          	<img src="../../assets/imgs/garyround (3).png" alt="" v-show = "y55show">
		          </td>
		        </tr>
		        <tr>
		          <td>产品质量追溯责任</td>
		          <td>
	          		<span class="count1" @click = "toIncomplete16()">{{tipxing6}}</span>
		          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete16()" v-show = "xing6show">
		          	<img src="../../assets/imgs/garystar (3).png" alt="" v-show = "xing66show">
					<span class="count2" @click = "toIncomplete17()">{{tipsjx6}}</span>
		          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete17()" v-show = "sjx6show">
		          	<img src="../../assets/imgs/garytriangle (3).png" alt="" v-show = "sjx66show">
		          	<span class="count3" @click = "toIncomplete18()">{{tipy6}}</span>
		          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete18()" v-show = "y6show">
		          	<img src="../../assets/imgs/garyround (3).png" alt="" v-show = "y66show">
		          </td>
		        </tr>
		        <tr>
		          <td>其他质量安全责任</td>
		          <td>
	          		<span class="count1" @click = "toIncomplete19()">{{tipxing7}}</span>
		          	<img src="../../assets/imgs/redstar (3).png" alt="" @click = "toIncomplete19()" v-show = "xing7show">
		          	<img src="../../assets/imgs/garystar (3).png" alt="" v-show = "xing77show">
					<span class="count2" @click = "toIncomplete20()">{{tipsjx7}}</span>
		          	<img src="../../assets/imgs/redtriangle (3).png" alt="" @click = "toIncomplete20()" v-show = "sjx7show">
		          	<img src="../../assets/imgs/garytriangle (3).png" alt="" v-show = "sjx77show">
		          	<span class="count3" @click = "toIncomplete21()">{{tipy7}}</span>
		          	<img src="../../assets/imgs/redround (3).png" alt="" @click = "toIncomplete21()" v-show = "y7show">
		          	<img src="../../assets/imgs/garyround (3).png" alt="" v-show = "y77show">
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
				sjx1:'',xing1:'',y1:'',tipsjx1:'',tipxing1:'',tipy1:'',sjx1show:'',xing1show:'',y1show:'',sjx11show:'',xing11show:'',y11show:'',
				sjx2:'',xing2:'',y2:'',tipsjx2:'',tipxing2:'',tipy2:'',sjx2show:'',xing2show:'',y2show:'',sjx22show:'',xing22show:'',y22show:'',
				sjx3:'',xing3:'',y3:'',tipsjx3:'',tipxing3:'',tipy3:'',sjx3show:'',xing3show:'',y3show:'',sjx33show:'',xing33show:'',y33show:'',
				sjx4:'',xing4:'',y4:'',tipsjx4:'',tipxing4:'',tipy4:'',sjx4show:'',xing4show:'',y4show:'',sjx44show:'',xing44show:'',y44show:'',
				sjx5:'',xing5:'',y5:'',tipsjx5:'',tipxing5:'',tipy5:'',sjx5show:'',xing5show:'',y5show:'',sjx55show:'',xing55show:'',y55show:'',
				sjx6:'',xing6:'',y6:'',tipsjx6:'',tipxing6:'',tipy6:'',sjx6show:'',xing6show:'',y6show:'',sjx66show:'',xing66show:'',y66show:'',
				sjx7:'',xing7:'',y7:'',tipsjx7:'',tipxing7:'',tipy7:'',sjx7show:'',xing7show:'',y7show:'',sjx77show:'',xing77show:'',y77show:'',
			}
		},
		created(){
			this.$http.get(baseUrl+'/checkCompliance').then((res)=>{
				console.log(res)
              	if(res.data.retCode === 0){
              		let data = res.data.data
              		if(data.business_rsp.level1.length > 0 ){
              			this.tipxing1 = data.business_rsp.level1.length;
              			this.xing1show = true;
              			this.xing11show = false;
              			this.xing1 = data.business_rsp.level1;
              		}else if(data.business_rsp.level1.length == 0 ){
              			this.xing11show = true;
              			this.xing1show = false;
              		}
              		if(data.business_rsp.level2.length > 0 ){
              			this.tipsjx1 = data.business_rsp.level2.length;
              			this.sjx1show = true;
              			this.sjx11show = false;
              			this.sjx1 = data.business_rsp.level2;
              		}else if(data.business_rsp.level2.length == 0 ){
              			this.sjx11show = true;
              			this.sjx1show = false;
              		}
              		if(data.business_rsp.level3.length > 0 ){
              			this.tipy1 = data.business_rsp.level3.length;
              			this.y1show = true;
              			this.y11show = false;
              			this.y1 = data.business_rsp.level3;
              		}else if(data.business_rsp.level3.length == 0 ){
              			this.y11show = true;
              			this.y1show = false;
              		}

              		if(data.product_rsp.level1.length > 0 ){
              			this.tipxing2 = data.product_rsp.level1.length;
              			this.xing2show = true;
              			this.xing22show = false;
              			this.xing2 = data.product_rsp.level1;
              		}else if(data.product_rsp.level1.length == 0 ){
              			this.xing22show = true;
              			this.xing2show = false;
              		}
              		if(data.product_rsp.level2.length > 0 ){
              			this.tipsjx2 = data.product_rsp.level2.length;
              			this.sjx2show = true;
              			this.sjx22show = false;
              			this.sjx2 = data.product_rsp.level2;
              		}else if(data.product_rsp.level2.length == 0 ){
              			this.sjx22show = true;
              			this.sjx2show = false;
              		}
              		if(data.product_rsp.level3.length > 0 ){
              			this.tipy2 = data.product_rsp.level3.length;
              			this.y2show = true;
              			this.y22show = false;
              			this.y2 = data.product_rsp.level3;
              		}else if(data.product_rsp.level3.length == 0 ){
              			this.y22show = true;
              			this.y2show = false;
              		}

              		if(data.operate_rsp.level1.length > 0 ){
              			this.tipxing3 = data.operate_rsp.level1.length;
              			this.xing3show = true;
              			this.xing33show = false;
              			this.xing3 = data.operate_rsp.level1;
              		}else if(data.operate_rsp.level1.length == 0 ){
              			this.xing33show = true;
              			this.xing3show = false;
              		}
              		if(data.operate_rsp.level2.length > 0 ){
              			this.tipsjx3 = data.operate_rsp.level2.length;
              			this.sjx3show = true;
              			this.sjx33show = false;
              			this.sjx3 = data.operate_rsp.level2;
              		}else if(data.operate_rsp.level2.length == 0 ){
              			this.sjx33show = true;
              			this.sjx3show = false;
              		}
              		if(data.operate_rsp.level3.length > 0 ){
              			this.tipy3 = data.operate_rsp.level3.length;
              			this.y3show = true;
              			this.y33show = false;
              			this.y3 = data.operate_rsp.level3;
              		}else if(data.operate_rsp.level3.length == 0 ){
              			this.y33show = true;
              			this.y3show = false;
              		}

              		if(data.sale_rsp.level1.length > 0 ){
              			this.tipxing4 = data.sale_rsp.level1.length;
              			this.xing4show = true;
              			this.xing44show = false;
              			this.xing4 = data.sale_rsp.level1;
              		}else if(data.sale_rsp.level1.length == 0 ){
              			this.xing44show = true;
              			this.xing4show = false;
              		}
              		if(data.sale_rsp.level2.length > 0 ){
              			this.tipsjx4 = data.sale_rsp.level2.length;
              			this.sjx4show = true;
              			this.sjx44show = false;
              			this.sjx4 = data.sale_rsp.level2;
              		}else if(data.sale_rsp.level2.length == 0 ){
              			this.sjx44show = true;
              			this.sjx4show = false;
              		}
              		if(data.sale_rsp.level3.length > 0 ){
              			this.tipy4 = data.sale_rsp.level3.length;
              			this.y4show = true;
              			this.y44show = false;
              			this.y4 = data.sale_rsp.level3;
              		}else if(data.sale_rsp.level3.length == 0 ){
              			this.y44show = true;
              			this.y4show = false;
              		}

              		if(data.ad_rsp.level1.length > 0 ){
              			this.tipxing5 = data.ad_rsp.level1.length;
              			this.xing5show = true;
              			this.xing55show = false;
              			this.xing5 = data.ad_rsp.level1;
              		}else if(data.ad_rsp.level1.length == 0 ){
              			this.xing55show = true;
              			this.xing5show = false;
              		}
              		if(data.ad_rsp.level2.length > 0 ){
              			this.tipsjx5 = data.ad_rsp.level2.length;
              			this.sjx5show = true;
              			this.sjx55show = false;
              			this.sjx5 = data.ad_rsp.level2;
              		}else if(data.ad_rsp.level2.length == 0 ){
              			this.sjx55show = true;
              			this.sjx5show = false;
              		}
              		if(data.ad_rsp.level3.length > 0 ){
              			this.tipy5 = data.ad_rsp.level3.length;
              			this.y5show = true;
              			this.y55show = false;
              			this.y5 = data.ad_rsp.level3;
              		}else if(data.ad_rsp.level3.length == 0 ){
              			this.y55show = true;
              			this.y5show = false;
              		}

              		if(data.qlty_rsp.level1.length > 0 ){
              			this.tipxing6 = data.qlty_rsp.level1.length;
              			this.xing6show = true;
              			this.xing66show = false;
              			this.xing6 = data.qlty_rsp.level1;
              		}else if(data.qlty_rsp.level1.length == 0 ){
              			this.xing66show = true;
              			this.xing6show = false;
              		}
              		if(data.qlty_rsp.level2.length > 0 ){
              			this.tipsjx6 = data.qlty_rsp.level2.length;
              			this.sjx6show = true;
              			this.sjx66show = false;
              			this.sjx6 = data.qlty_rsp.level2;
              		}else if(data.qlty_rsp.level2.length == 0 ){
              			this.sjx66show = true;
              			this.sjx6show = false;
              		}
              		if(data.qlty_rsp.level3.length > 0 ){
              			this.tipy6 = data.qlty_rsp.level3.length;
              			this.y6show = true;
              			this.y66show = false;
              			this.y6 = data.qlty_rsp.level3;
              		}else if(data.qlty_rsp.level3.length == 0 ){
              			this.y66show = true;
              			this.y6show = false;
              		}

              		if(data.other_rsp.level1.length > 0 ){
              			this.tipxing1 = data.other_rsp.level1.length;
              			this.xing7show = true;
              			this.xing77show = false;
              			this.xing7 = data.other_rsp.level1;
              		}else if(data.other_rsp.level1.length == 0 ){
              			this.xing77show = true;
              			this.xing7show = false;
              		}
              		if(data.other_rsp.level2.length > 0 ){
              			this.tipsjx7 = data.other_rsp.level2.length;
              			this.sjx7show = true;
              			this.sjx77show = false;
              			this.sjx7 = data.other_rsp.level2;
              		}else if(data.other_rsp.level2.length == 0 ){
              			this.sjx77show = true;
              			this.sjx7show = false;
              		}
              		if(data.other_rsp.level3.length > 0 ){
              			this.tipy7 = data.other_rsp.level3.length;
              			this.y7show = true;
              			this.y77show = false;
              			this.y7 = data.other_rsp.level3;
              		}else if(data.other_rsp.level3.length == 0 ){
              			this.y77show = true;
              			this.y7show = false;
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
			toIncomplete1(){
				this.$router.push({name:'Incomplete',params:{data:this.xing1}})
			},
			toIncomplete2(){
				this.$router.push({name:'Incomplete',params:{data:this.sjx1}})
			},
			toIncomplete3(){
				this.$router.push({name:'Incomplete',params:{data:this.y1}})
			},
			toIncomplete4(){
				this.$router.push({name:'Incomplete',params:{data:this.xing2}})
			},
			toIncomplete5(){
				this.$router.push({name:'Incomplete',params:{data:this.sjx2}})
			},
			toIncomplete6(){
				this.$router.push({name:'Incomplete',params:{data:this.y2}})
			},
			toIncomplete7(){
				this.$router.push({name:'Incomplete',params:{data:this.xing3}})
			},
			toIncomplete8(){
				this.$router.push({name:'Incomplete',params:{data:this.sjx3}})
			},
			toIncomplete9(){
				this.$router.push({name:'Incomplete',params:{data:this.y3}})
			},
			toIncomplete10(){
				this.$router.push({name:'Incomplete',params:{data:this.xing4}})
			},
			toIncomplete11(){
				this.$router.push({name:'Incomplete',params:{data:this.sjx4}})
			},
			toIncomplete12(){
				this.$router.push({name:'Incomplete',params:{data:this.y4}})
			},
			toIncomplete13(){
				this.$router.push({name:'Incomplete',params:{data:this.xing5}})
			},
			toIncomplete14(){
				this.$router.push({name:'Incomplete',params:{data:this.sjx5}})
			},
			toIncomplete15(){
				this.$router.push({name:'Incomplete',params:{data:this.y5}})
			},
			toIncomplete16(){
				this.$router.push({name:'Incomplete',params:{data:this.xing6}})
			},
			toIncomplete17(){
				this.$router.push({name:'Incomplete',params:{data:this.sjx6}})
			},
			toIncomplete18(){
				this.$router.push({name:'Incomplete',params:{data:this.y6}})
			},
			toIncomplete19(){
				this.$router.push({name:'Incomplete',params:{data:this.xing7}})
			},
			toIncomplete20(){
				this.$router.push({name:'Incomplete',params:{data:this.sjx7}})
			},
			toIncomplete21(){
				this.$router.push({name:'Incomplete',params:{data:this.y7}})
			},

		}
	}
</script>
<style lang="scss" src="./JobMonitoring.scss"></style>