<template>
	<table class="listtable">
	    <tbody>
	        <tr>
	          <td>是否有自制化妆品行为。</td>
	          <td>
	          	<mt-button type="primary" @click="choose1()" class="yes" :class="{'yesActive':c1}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose2()" class="yes" :class="{'yesActive1':c1s}">否</mt-button><br>
	          </td>
	        </tr>
	    </tbody>
	</table>
</template>

<script type="text/javascript">
	// import './legitimate.scss'
	export default {
		data(){
			return {
				c1:'',
				c1s:'',
				zizhi:'',
			}
		},
		created(){

		},
		methods: {
			choose1(){
				this.c1 = true;
				this.c1s = false;
				this.zizhi = 1;
				let acc = JSON.stringify({zizhi:this.zizhi})
				sessionStorage.setItem('zizhi',acc)
				console.log(JSON.parse(sessionStorage.getItem('acc')))
			},
			choose2(){
				this.c1 = false;
				this.c1s = true;
				this.zizhi = 0;
				let acc = JSON.stringify({zizhi:this.zizhi})
				sessionStorage.setItem('zizhi',acc)
				console.log(JSON.parse(sessionStorage.getItem('acc')))
			},
		},
	}
</script>
