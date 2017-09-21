<template>
	<table class="listtable">
	    <tbody>
	        <tr>
	          <td>抽查化妆品是否过期。</td>
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
				guoqi:'',
			}
		},
		created(){
			let acc = JSON.stringify({guoqi:this.guoqi})
			sessionStorage.setItem('guoqi',acc)
		},
		methods: {
			choose1(){
				this.c1 = true;
				this.c1s = false;
				this.guoqi = 1;
				let acc = JSON.stringify({guoqi:this.guoqi})
				sessionStorage.setItem('guoqi',acc)
			},
			choose2(){
				this.c1 = false;
				this.c1s = true;
				this.guoqi = 0;
				let acc = JSON.stringify({guoqi:this.guoqi})
				sessionStorage.setItem('guoqi',acc)
			},
		},
	}
</script>
