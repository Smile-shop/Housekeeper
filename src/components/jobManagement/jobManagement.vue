<template>
	<div class="jobManagement_container">
		<p class="jobManagement_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click=goback>
			<span>岗位人管理</span>
		</p>
		<div class="main">
			<div class="jobsearch">
				<input type="text" class="jobx" placeholder="岗位人员姓名" v-model = username>
				<input type="text" class="jobx" placeholder="手机号" v-model = userphone>
				<el-select v-model="gangwei" placeholder="岗位" >
			      <el-option v-for="arr in jod" :label="arr[0]" :value="arr[0]"></el-option>
			    </el-select>
				<mt-button type="primary" class="search" @click=search>搜索</mt-button>
			</div>
				<p>添加岗位</p>
				<input type="text" class="jobx" placeholder="岗位人员姓名">
				<input type="text" class="jobx" placeholder="手机号">
				<mt-button type="primary" class="search" @click=add>提交</mt-button><br>
				<span :class="{'spanActive':dz1}" @click = dz>店长
					<input type="checkbox" class = "a1" v-model="checkedNames" value= "店长">
				</span>
				<span :class="{'spanActive':jh1}" @click = jh>进货岗
					<input type="checkbox" class = "a1" v-model="checkedNames" value= "进货岗">
				</span>
				<span :class="{'spanActive':xs1}" @click = xs>销售岗
					<input type="checkbox" class = "a1" v-model="checkedNames" value= "销售岗">
				</span>
				<span :class="{'spanActive':fz1}" @click = fz>质量安全负责岗
					<input type="checkbox" class = "a1" v-model="checkedNames" value= "质量安全负责岗">
				</span>
				<span :class="{'spanActive':zz1}" @click = zz>质量安全追踪岗
					<input type="checkbox" class = "a1" v-model="checkedNames" value= "质量安全追踪岗">
				</span>
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
		        username:''
			}
		},
		methods: {
			goback(){
				this.$router.go(-1)
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
		    search(){
		    	let obj = {user_name:this.username,mobile:this.userphone,title_name:this.gangwei}
		     	this.$http.post(baseUrl+'/searchUser',obj).then((res)=>{
		              	console.log(res)
		              	if(res.data.retCode === 0){
		              		this.$messagebox.alert('注册成功!').then(action => {
 							});
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			          },function(err){
			              console.log('failed');
			          });
		     },
		     add(){
		     	let obj = {user_name:this.username,mobile:this.userphone,title_name:this.gangwei}
		     	this.$http.post(baseUrl+'/addUser',obj).then((res)=>{
		              	console.log(res)
		              	if(res.data.retCode === 0){
		              		this.$messagebox.alert('注册成功!').then(action => {
		              			this.$router.push({name:'login'})
 							});
		              	}else{
		              		this.$messagebox.alert(res.data.retMessage);
		              	}
			          },function(err){
			              console.log('failed');
			          });
		     }
		}
	}
</script>
<style lang="scss" src="./jobManagement.scss"></style>