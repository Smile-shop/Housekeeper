<template>
	<div class="SendNotice_container">
		<p class="SendNotice_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click='goback'>
			<span>发送通知</span>
		</p>
		<div class="main">
			<div class="jobsearch">
				<el-input v-model="cpmc" class="jobx" placeholder="产品名称"></el-input>
				<el-input v-model="cppc" class="jobx" placeholder="产品批次"></el-input>
				<mt-button type="primary" class="search" @click="search">搜索</mt-button>
			</div>
			<table class="jodtable">
		      <thead>
		        <tr>
		          <th>顾客姓名</th>
		          <th>购买数量</th>
		          <th>联系方式</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr v-for = "(arr,index) in data">
		          <td>{{arr.realname}}</td>
		          <td>{{arr.mobile}}</td>
		          <td><span v-for= 'arr2 in arr.role_ids' class= "s gwei">{{arr2}}</span></td>
		        </tr>
		      </tbody>
		    </table>
		</div>
		<mt-button type="primary" class="send">发送</mt-button>
	</div>
</template>

<script type="text/javascript">
	// import './SendNotice.scss'
	export default {
		data(){
			return {
		        data:'',
		        cpmc:'',
		        cppc:'',
			}
		},
		created(){
			this.getdata();
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
 			getdata(){
 				this.$http.post(baseUrl+'/searchUser').then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.data = res.data.data
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              this.$messagebox.alert("获取信息错误!");
		          });
 			},
		    search(){
		    	let obj = {user_name:this.username,mobile:this.userphone,title_name:this.gangwei}
		     	this.$http.post(baseUrl+'/searchUser',obj).then((res)=>{
	              	// console.log(res)
	              	if(res.data.retCode === 0){
	              		this.data = res.data.data;
	              		this.gangwei = '';
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              console.log('failed');
		              this.$messagebox.alert("查询失败!");
		          });
		     },
		    add(){
		    	if(this.userName==''){
					this.$messagebox.alert('岗位人员姓名不能为空！');
					return false;
				}else if(this.userMobile==''){
					this.$messagebox.alert('手机号码不能为空！');
					return false;
				}
				console.log(this.checkedNames)
		     	let obj = {user_name:this.userName,mobile:this.userMobile,role_ids:this.checkedNames}
		     	this.$http.post(baseUrl+'/addUser',obj).then((res)=>{
		              	console.log(res)
		              	this.getdata();
		              	if(res.data.retCode === 0){
		              		this.data = res.data.data
		              		this.$messagebox.alert('添加成功!').then(action => {

 							});
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			          },(err)=>{
			              this.$messagebox.alert("添加失败!");
			          });
		     },
		}
	}
</script>
<style lang="scss" src="./SendNotice.scss"></style>