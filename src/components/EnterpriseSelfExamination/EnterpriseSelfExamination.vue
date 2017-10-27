<template>
	<div class="EnterpriseSelfExamination_container">
		<p class="EnterpriseSelfExamination_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>企业自查</span>
		</p>
		<div class="main">
			<div class="Eleft">
				<ul v-for = "(arr,index) in left">
					<router-link :to="arr[1]">
						<li @click="choose(index)" :class="{active: active == index}">{{arr[0]}}</li>
					</router-link>
				</ul>
			</div>
			<div class="Eright">
				<keep-alive><legitimate v-show="isshow"></legitimate></keep-alive>
				<keep-alive><router-view></router-view></keep-alive>
			</div>
		</div>
		<mt-button type="primary" class="qedit" @click="sub">提交</mt-button><br>	
	</div>
</template>

<script type="text/javascript">
	// import './EnterpriseSelfExamination.scss'
	import legitimate from '../legitimate/legitimate.vue'
	export default {
		data(){
			return {
				left:[['化妆品合法性','/legitimate'],
				     ['化妆品标识标签','/Identification'],
				     ['购货验收','/Acceptance'],
				     ['产品保质期','/Term'],
				     ['储藏条件、卫生情况','/StorageCondition'],
				     ['产品宣传、店内宣传','/Propaganda'],
				     ['其他违法行为','/Others']],
				isshow:true,
				active:'',
				xukezheng:'',
				pizhunwenhao:'',
				beianpingzheng:'',
				xukepingjian:'',
				youxiaoqi:'',
				jianyan:'',
				hegebiaozhi:'',
				guiding:'',
				qiyedizhi:'',
				dailidizhi:'',
				shiyongdate:'',
				bianhao:'',
				pzwenhao:'',
				bawenhao:'',
				chayanzhidu:'',
				zhengjiancailiao:'',
				qiyedangan:'',
				jinhuotaizhang:'',
				guoqi:'',
				neiwaizhengjie:'',
				shesi1:'',
				wuranshesi:'',
				huazhuangpin:'',
				xuanchuanliaoxiao:'',
				yiliaoshuyu:'',
				shiyingzheng:'',
				kuada:'',
				weigui:'',
				zizhi:'',
			}
		},
		components: {
			'legitimate': legitimate
		},
		created(){
			this.getRoute();
			sessionStorage.setItem('index',0);
			this.active = sessionStorage.getItem('index');
		},
		methods: {
			goback(){
				this.$router.push({name:'index'});
				sessionStorage.removeItem('leg');
				sessionStorage.removeItem('ide');
				sessionStorage.removeItem('guoqi');
				sessionStorage.removeItem('pro');
				sessionStorage.removeItem('sto');
				sessionStorage.removeItem('zizhi');
				sessionStorage.removeItem('acc');
			},
			choose(index){
				this.active = index;
				sessionStorage.setItem('index',index)
			},
			getRoute(){
				if(this.$route.path!=='/EnterpriseSelfExamination'){
					this.isshow = false;
				}else{
					this.isshow = true;
				}
			},
			sub(){
				let leg = JSON.parse(sessionStorage.getItem('leg'));
				let ide = JSON.parse(sessionStorage.getItem('ide'));
				let guoqi = JSON.parse(sessionStorage.getItem('guoqi'));
				let pro = JSON.parse(sessionStorage.getItem('pro'));
				let sto = JSON.parse(sessionStorage.getItem('sto'));
				let zizhi = JSON.parse(sessionStorage.getItem('zizhi'));
				let acc = JSON.parse(sessionStorage.getItem('acc'));
				console.log(ide,132)
				if(leg != null){
					this.xukezheng = leg.xukezheng;
					this.pizhunwenhao = leg.pizhunwenhao;
					this.beianpingzheng = leg.beianpingzheng;
					this.xukepingjian = leg.xukepingjian;
					this.youxiaoqi = leg.youxiaoqi;
					this.jianyan = leg.jianyan;
				}
				if(ide != null){
					this.hegebiaozhi = ide.hegebiaozhi;
					this.guiding = ide.guiding;
					this.qiyedizhi = ide.qiyedizhi;
					this.dailidizhi = ide.dailidizhi;
					this.shiyongdate = ide.shiyongdate;
					this.bianhao = ide.bianhao;
					this.pzwenhao = ide.pzwenhao;
					this.bawenhao = ide.bawenhao;
				}
				if(acc != null){
					this.chayanzhidu = acc.chayanzhidu;
					this.zhengjiancailiao = acc.zhengjiancailiao;
					this.qiyedangan = acc.qiyedangan;
					this.jinhuotaizhang = acc.jinhuotaizhang;
				}
				if(guoqi != null){
					this.guoqi = guoqi.guoqi;
				}
				if(sto != null){
					this.neiwaizhengjie = sto.neiwaizhengjie;
					this.shesi1 = sto.shesi1;
					this.wuranshesi = sto.wuranshesi;
					this.huazhuangpin = sto.huazhuangpin;
				}
				if(pro != null){
					this.xuanchuanliaoxiao = pro.xuanchuanliaoxiao;
					this.yiliaoshuyu = pro.yiliaoshuyu;
					this.shiyingzheng = pro.shiyingzheng;
					this.kuada = pro.kuada;
					this.weigui = pro.weigui;
				}
				if(zizhi != null){
					this.zizhi = zizhi.zizhi;
				}
				switch (''){
					case this.xukezheng:
						this.$messagebox.alert('化妆品合法性所有选项为必选！');
						return;
					case this.pizhunwenhao:
						this.$messagebox.alert('化妆品合法性所有选项为必选！');
						return;	
					case this.beianpingzheng:
						this.$messagebox.alert('化妆品合法性所有选项为必选！');
						return;
					case this.youxiaoqi:
						this.$messagebox.alert('化妆品合法性所有选项为必选！');
						return;	
					case this.jianyan:
						this.$messagebox.alert('化妆品合法性所有选项为必选！');
						return;	
					case this.xukepingjian:
						this.$messagebox.alert('化妆品合法性所有选项为必选！');
						return;

					case this.zizhi:
						this.$messagebox.alert('其他违法行为选项为必选！');
						return;	

					case this.guoqi:
						this.$messagebox.alert('产品保质期选项为必选！');
						return;

					case this.hegebiaozhi:
						this.$messagebox.alert('化妆品标识标签所有选项为必选！');
						return;
					case this.guiding:
						this.$messagebox.alert('化妆品标识标签所有选项为必选！');
						return;	
					case this.dailidizhi:
						this.$messagebox.alert('化妆品标识标签所有选项为必选！');
						return;
					case this.shiyongdate:
						this.$messagebox.alert('化妆品标识标签所有选项为必选！');
						return;	
					case this.bianhao:
						this.$messagebox.alert('化妆品标识标签所有选项为必选！');
						return;	
					case this.pzwenhao:
						this.$messagebox.alert('化妆品标识标签所有选项为必选！');
						return;
					case this.bawenhao:
						this.$messagebox.alert('化妆品标识标签所有选项为必选！');
						return;	
					case this.qiyedizhi:
						this.$messagebox.alert('化妆品标识标签所有选项为必选！');
						return;	

					case this.chayanzhidu:
						this.$messagebox.alert('购货验收所有选项为必选！');
						return;	
					case this.zhengjiancailiao:
						this.$messagebox.alert('购货验收所有选项为必选！');
						return;
					case this.qiyedangan:
						this.$messagebox.alert('购货验收所有选项为必选！');
						return;	
					case this.jinhuotaizhang:
						this.$messagebox.alert('购货验收所有选项为必选！');
						return;	

					case this.neiwaizhengjie:
						this.$messagebox.alert('储藏条件、卫生情况所有选项为必选！');
						return;	
					case this.shesi1:
						this.$messagebox.alert('储藏条件、卫生情况所有选项为必选！');
						return;
					case this.wuranshesi:
						this.$messagebox.alert('储藏条件、卫生情况所有选项为必选！');
						return;	
					case this.huazhuangpin:
						this.$messagebox.alert('储藏条件、卫生情况所有选项为必选！');
						return;	
						
					case this.xuanchuanliaoxiao:
						this.$messagebox.alert('产品宣传、店内宣传所有选项为必选！');
						return;	
					case this.yiliaoshuyu:
						this.$messagebox.alert('产品宣传、店内宣传所有选项为必选！');
						return;
					case this.shiyingzheng:
						this.$messagebox.alert('产品宣传、店内宣传所有选项为必选！');
						return;	
					case this.kuada:
						this.$messagebox.alert('产品宣传、店内宣传所有选项为必选！');
						return;
					case this.weigui:
						this.$messagebox.alert('产品宣传、店内宣传所有选项为必选！');
						return;												
				}
				let obj = {is_manufacture_ok:this.xukezheng,
					       have_sproduct_apply_sn:this.pizhunwenhao,
					       have_import_app_no:this.beianpingzheng,
					       have_simport_app_no:this.xukepingjian,
					       is_simport_app_no_valid:this.youxiaoqi,
					       is_import_inspected:this.jianyan, 
					       is_qc_mark_ok:this.hegebiaozhi,
					       is_name_regular:this.guiding,
					       is_manu_name_addr_ok:this.qiyedizhi,
					       is_imp_name_addr_ok:this.dailidizhi,
					       is_manu_date_limit_ok:this.shiyongdate,
					       is_health_permit_ok:this.bianhao,
					       is_scosmetic_appno_ok:this.pzwenhao,
					       is_import_app_no_ok:this.bawenhao,
					        have_checked_date:this.guoqi,
					         is_regular_check:this.chayanzhidu,
					       have_get_legal_file:this.zhengjiancailiao,
					       have_supplier_file:this.qiyedangan,
					       have_purchase_file:this.jinhuotaizhang,
					        is_area_clean:this.neiwaizhengjie,
					       is_equipment_ok:this.shesi1,
					       is_anti_pollution_ok:this.wuranshesi,
					       is_storage_ok:this.huazhuangpin,
					        is_medical_effect_ad:this.xuanchuanliaoxiao,
					       is_medical_term:this.yiliaoshuyu,
					       is_indications_marked:this.shiyingzheng,
					       is_false_publicity:this.kuada,
					       have_treatment_ad:this.weigui,
					        have_homemade:this.zizhi}
				console.log(obj);
				this.$http.post(baseUrl+'/addSelfCheck',obj).then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert('操作成功!').then(action =>{
	              			this.active = 0;
	              			// window.location.reload();
	              			this.$router.go(0)
	              		});
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		        },(err)=>{
		             console.log(err)
		        });
			}
		},
		watch: {
          // 如果路由有变化，会再次执行该方法
          "$route": "getRoute"
        },
	}
</script>
<style lang="scss" src="./EnterpriseSelfExamination.scss"></style>