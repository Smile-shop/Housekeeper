<template>
	<div class="PurchaseLie_container">
		<p class="PurchaseLie_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click='goback'>
			<span>工作状态</span>
		</p>
		<div class="main">
			<table class="jodtable" v-show='showOrnot'>
		      <thead>
		        <tr>
		          <th>类型</th>
		          <th>名称</th>
		          <th>日期</th>
		          <!-- <th>人员</th> -->
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody>
		      	<tr v-show='s'>
		      		<td colspan="4">暂无数据</td>
		      	</tr>
		        <tr v-for="(arr,index) in a">
		          <td>首营企业</td>
		          <td>{{arr.enterprise_name}}</td>
		          <td>{{arr.create_time.split(' ')[0]}}</td>
		          <td class="cao">
		          	<mt-button type="primary" style="width:1rem;height:.48rem;font-size:10px;" @click="look1(index)">编辑</mt-button>
		          </td>
		        </tr>
				<tr v-for="(arr,index) in b">
		          <td>首营产品</td>
		          <td>{{arr.product_name}}</td>
		          <td>{{arr.create_time.split(' ')[0]}}</td>
		          <td class="cao">
		          	<mt-button type="primary" style="width:1rem;height:.48rem;font-size:10px;" @click="look2(index)">编辑</mt-button>
		          </td>
		        </tr>
		        <tr v-for="(arr,index) in c">
		          <td>进货记录</td>
		          <td>{{arr.product_name}}</td>
		          <td>{{arr.create_time.split(' ')[0]}}</td>
		          <td class="cao">
		          	<mt-button type="primary" style="width:1rem;height:.48rem;font-size:10px;" @click="look3(index)">编辑</mt-button>
		          </td>
		        </tr>
		      </tbody>
		    </table> 
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './PurchaseLie.scss'
	export default {
		data(){
			return {
				data:'',
				showOrnot:true,
				s:true,
				a:[{create_time:"2017-09-10 16:01:01"}],
				b:[{create_time:"2017-09-10 16:01:01"}],
				c:[{create_time:"2017-09-10 16:01:01"}],
			}
		},
		created(){
			this.$http.post(baseUrl+'/getPRejectList').then((res)=>{
				console.log(res)
              	if(res.data.retCode === 0){
              		if(res.data.data != '' || res.data.data != null){
              			this.s = false
              		}
              		if(res.data.data.enterprise != []){
              			this.a = res.data.data.enterprise;
              		}
              		if(res.data.data.product != []){
              			this.b = res.data.data.product;
              		}
              		if(res.data.data.purchase != []){
              			this.c = res.data.data.purchase;
              		}
              	}else{
              		this.$messagebox.alert(res.data.retMessage);
              	}
	          },(err)=>{
	              console.log(err);
	          });
		},
		methods: {
			goback(){
				this.$router.push({name:'index'})
			},
			look1(index){
				this.$router.push({name:'EditFirstBusiness',params:{id:this.a[index].id}})
			},
			look2(index){
				this.$router.push({name:'EditAddProduct',params:{id:this.b[index].id}})
			},
			look3(index){
		  		this.$router.push({name:'EditPurchase',params:{id:this.c[index].id}})
		     },
		}
	}
</script>
<style lang="scss" src="./Purchase.scss"></style>