namespace $.$$ {
	export class $lc_login_form extends $.$xac_login_form{
		username_bid() {

			const value = this.username()
	  
			if( !value ) return this.message().required
			if( value.indexOf( ' ' ) !== -1 ) return this.message().no_spaces
	  
			return ''
		  }
		username( next? : string ) {
			return $mol_state_local.value( this.state_key( 'username' ) , next ) || ''
		}
		password_bid(){
			const value = this.password()

			if( !value ) return this.message().required
			
			return ''
		}
		password( next? : string ){
			return $mol_state_local.value(this.state_key( 'password' ), next) || ''
		}
		click(){
			let body = JSON.stringify({
				username: this.username(),
				password: this.password()
			})
			let tr: any[] = this.$.$mol_fetch.json('http://лайфкурс.сказочные-ежики.рф/token/', { 'method': 'POST', body: body, headers: {
				'Content-Type': 'application/json'
			  },  }) as any[];
	  		
	  		if('token' in tr){
				window.location.replace('/lc/profil/-/test.html')
			};
		}
		
	}
}
