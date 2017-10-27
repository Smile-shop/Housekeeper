<template>
	<div class="jobManagement_container">
		<p class="jobManagement_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click=goback>
			<span>岗位人员管理</span>
		</p>
		<div class="main">
			<div class="jobsearch">
				<el-input v-model="username" class="jobx" placeholder="岗位人员姓名"></el-input>
				<!-- <input type="text" class="jobx" placeholder="岗位人员姓名" v-model = username> -->
				<!-- <input type="text" class="jobx" placeholder="手机号" v-model = userphone> -->
				<el-input v-model="userphone" class="jobx" placeholder="手机号"></el-input>
				<el-select v-model="gangwei" placeholder="岗位">
			      <el-option v-for="arr in jod" :label="arr[0]" :value="arr[0]" ></el-option>
			    </el-select>
				<mt-button type="primary" class="search" @click="search">搜索</mt-button>
			</div>
			<p class="tiannjia">添加岗位人员</p>
			<el-input v-model="userName" class="jobx" placeholder="岗位人员姓名"></el-input>
			<el-input v-model="userMobile" class="jobx" placeholder="手机号"></el-input>
			<!-- <input type="text" class="jobx" placeholder="岗位人员姓名" v-model = "userName">
			<input type="text" class="jobx" placeholder="手机号" v-model = userMobile> -->
			<mt-button type="primary" class="search" @click="add">添加</mt-button><br>
			<span :class="{'spanActive':dz1}" @click = "dz" class = "gwei">店长
				<input type="checkbox" class = "a1" v-model="checkedNames" value= "店长">
			</span>
			<span :class="{'spanActive':jh1}" @click = "jh" class = "gwei">进货岗
				<input type="checkbox" class = "a1" v-model="checkedNames" value= "进货岗">
			</span>
			<span :class="{'spanActive':xs1}" @click = "xs" class = "gwei">销售岗
				<input type="checkbox" class = "a1" v-model="checkedNames" value= "销售岗">
			</span>
			<span :class="{'spanActive':fz1}" @click = "fz" class = "gwei">质量安全负责岗
				<input type="checkbox" class = "a1" v-model="checkedNames" value= "质量安全负责岗">
			</span>
			<span :class="{'spanActive':zz1}" @click = "zz" class = "gwei">质量安全追踪岗
				<input type="checkbox" class = "a1" v-model="checkedNames" value= "质量安全追踪岗">
			</span>
			<table class="jodtable">
		      <thead>
		        <tr>
		          <th>岗位人员姓名</th>
		          <th>手机号码</th>
		          <th>岗位</th>
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr v-for = "(arr,index) in data">
		          <td>{{arr.realname}}</td>
		          <td>{{arr.mobile}}</td>
		          <td><span v-for= 'arr2 in arr.role_ids' class= "s gwei">{{arr2}}</span></td>
		          <td>
		          	<mt-button type="primary" class="edit" @click="edit(index)">修改</mt-button><br>
		          	<mt-button type="danger" class="del" @click = "del(index)">删除</mt-button>
		          </td>
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
				checkedNames:[],
				gangwei:'',
		        jod:[['店长'],['进货岗'],['销售岗'],['质量安全负责岗'],['质量安全追踪岗']],
		        dz1:false,
		        jh1:false,
		        xs1:false,
		        fz1:false,
		        zz1:false,
		        data:'',
		        userphone:'',
		        username:'',
		        data:'',
		        editdata:'',
		        userName:'',
		        userMobile:''
			}
		},
		created(){
			this.getdata();
		},
		methods: {
			goback(){
				this.$router.push({name:'housekeeper'})
			},
			dz(){
				this.dz1 = !this.dz1
			},
			jh(){
				this.jh1 = !this.jh1 
 			},
			xs(){
				this.xs1 = !this.xs1 
 			},
			fz(){
				this.fz1 = !this.fz1 
 			},
			zz(){
				this.zz1 = !this.zz1 
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
		             console.log(err);
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
		              			this.userName = '';
		              			this.userMobile = '';
		              			this.dz1 = false;
		              			this.jh1 = false;
		              			this.xs1 = false;
		              			this.fz1 = false;
		              			this.zz1 = false;
		              			this.checkedNames = [];
 							});
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			          },(err)=>{
			             console.log(err)
			          });
		     },
		    edit(index){
		     	this.editdata = this.data[index];
		     	let a = this.editdata;
		     	this.$router.push({name:'EditJobInformation',params:{a}})
		     },
		    del(index){
		    	let obj = {id:this.data[index].id}
		    	console.log(obj)
		      	this.$messagebox.confirm('确定要删除吗?').then(action => {
					this.$http.post(baseUrl+'/deleteUser?id='+this.data[index].id).then((res)=>{
						console.log(res)
		              	if(res.data.retCode === 0){
		              		this.$messagebox.alert('删除成功!').then(action => {
		              			this.data.splice(index,1)
		              		});
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			          },(err)=>{
			             console.log(err)
			          });
 				});
		     	
		     }
		}
	}
</script>
<style lang="scss" src="./jobManagement.scss"></style>