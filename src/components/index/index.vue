<template>
	<div class="index_container">
		<div class="mmm" v-show="show" @click="isshow"></div>
		<img src="../../assets/imgs/person.png" alt="" class="person" @click="isshow">
		<transition name="el-zoom-in-top">
			<div class="all" v-show="show">
				<div class="jian"></div>
				<div class="menu">
					<ul>
						<li @click = "EditPsw"><a href="javascript:;"><i class="el-icon-edit edit"></i>密码修改</a></li>
						<li @click = "exit"><a href="javascript:;"><i class="el-icon-upload2 exit"></i>退出</a></li>
					</ul>
				</div>
			</div>
		</transition>
		<i class="el-icon-message" v-show = "news" @click = "gonews">
			<span class="num" v-show = "num">{{count}}</span>
		</i>
		<p class="index_text">
			<span>主页</span>
		</p>
		<div class="main">
			<ul class="mchli">
	    		<router-link to="housekeeper">
		    		<li><img src="../../assets/imgs/housekeeper (3).png" alt="" class="indeximg1"><br>激活管家</li>
		    	</router-link>
		    	<router-link to="MonitoringManagement">
		    		<li><img src="../../assets/imgs/Supervision (3).png" height="91" width="68" alt="" class="indeximg2"><br>监管记录</li>
		    	</router-link>
		    	<router-link to="EnterpriseSelfExamination">	
		    		<li><img src="../../assets/imgs/Self-examination (3).png" height="91" width="68" alt="" class="indeximg3"><br>企业自查</li>
		    	</router-link>
		    	<router-link to="AuditsManagement">	
		    		<li><img src="../../assets/imgs/Auditmanagement (3).png" height="91" width="68" alt="" class="indeximg4"><br>审核管理</li>
		    	</router-link>
		    	<router-link to="JobMonitoring">	
		    		<li><img src="../../assets/imgs/monitor (3).png" height="91" width="68" alt="" class="indeximg5"><br>工作监控</li>
		    	</router-link>
		    	<router-link to="FileManagementType">	
		    		<li><img src="../../assets/imgs/file (3).png" height="91" width="68" alt="" class="indeximg6"><br>档案管理</li>
		    	</router-link>
		    	<router-link to="PurchaseLie">	
		    		<li><img src="../../assets/imgs/Purchasemanagement (3).png" height="91" width="68" alt="" class="indeximg7"><br>进货管理</li>
		    	</router-link>
		    	<router-link to="FirstSelf">	
		    		<li><img src="../../assets/imgs/Inspection (3).png" height="91" width="68" alt="" class="indeximg8"><br>首营企业与产品自检</li>
		    	</router-link>
		    	<router-link to="Sale">	
		    		<li><img src="../../assets/imgs/Salesmanagement (3).png" height="91" width="68" alt="" class="indeximg9"><br>销售管理</li>
		    	</router-link>
		    	<router-link to="QualityTracking">
		    		<li><img src="../../assets/imgs/Qualitytracking (3).png" height="91" width="68" alt="" class="indeximg10"><br>质量追踪</li>
		    	</router-link>
		    	<!-- <router-link to="TraceabilityFile"> -->
		    		<li><img src="../../assets/imgs/file-19@3x.png" height="91" width="68" alt="" class="indeximg14"><br>追溯档案</li>
		    	<!-- </router-link> -->
		    	<router-link to="">	
		    		<li class="bott"><img src="../../assets/imgs/Cheats (3).png" height="91" width="68" alt="" class="indeximg11"><br>秘籍</li>
		    	</router-link>
		    	<router-link to="">	
		    		<li class="bott"><img src="../../assets/imgs/Auditorium (3).png" height="91" width="68" alt="" class="indeximg12"><br>大讲堂</li>
		    	</router-link>
		    	<router-link to="">	
		    		<li class="bott"><img src="../../assets/imgs/Messagetree (3).png" height="91" width="68" alt="" class="indeximg13"><br>消息树</li>
		    	</router-link>	
	    	</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './index.scss'
	export default {
		data(){
			return {
				show:false,
				id:'',
				count:'',
				news:false,
				num:false
			}
		},
		created(){
			this.news = !this.news;
			this.$indicator.close('加载中...'); 
			this.id = this.$route.params.id;
			if(sessionStorage.getItem('num') == null){
				this.$http.get(baseUrl+'/getAlarmCount').then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
	          			this.count = res.data.data[0].count;
	          			if(this.count > 0){
	          				this.num = true;
	          				sessionStorage.setItem("num",this.num)
	          			}
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		          	console.log(err)
		          });
			}
		},
		methods:{
			isshow(){
				this.show = !this.show;
				console.log(this.show)
			},
			exit(){
				this.$messagebox.confirm('确定退出该账号?').then(action => {
					sessionStorage.removeItem('user')
					this.$router.push({name:'login'})
				});
			},
			EditPsw(){
				this.$router.push({name:'EditPsw'})
			},
			gonews(){
				this.$router.push({name:'newsdetail'})
				this.num = false;
			}
		},
	
	}
</script>
<style lang="scss" src="./index.scss"></style>