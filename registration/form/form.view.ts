namespace $.$$ {
	export class $lc_registration_form extends $.$lc_registration_form{
		username_bid() {

			const value = this.username()
	  
			if( !value ) return this.message().required
			
	  
			return ''
		  }
		username( next? : string ) {
			return $mol_state_local.value( this.state_key( 'username' ) , next ) || ''
		}
		age_bid(){
			const value = this.age()
	  
			if( this.age() < 18 ) return this.message().adult
	  
			return ''
		}
		age(next? : number){
			return $mol_state_local.value(this.state_key('age'), next) || 0
		}
		password_bid(){
			const value = this.password()

			if( !value ) return this.message().required
			
			return ''
		}
		replaypassword_bid(){
			const value = this.password()

			if( !value ) return this.message().required
			if(this.password()!=this.replaypassword()) {
				return this.message().passwords_not_matching
			}
			
			return ''
		}
		password( next? : string ){
			return $mol_state_local.value(this.state_key( 'password' ), next) || ''
		}
		replaypassword(next? : string){
			return $mol_state_local.value(this.state_key( 'replaypassword' ), next) || ''

		}
		email(next?: string | undefined): string {
			return $mol_state_local.value(this.state_key('email'), next) || ''
		}
		email_bid(){
			const value = this.email()
	  
			if( !value ) return this.message().required
			if( value.indexOf( ' ' ) !== -1 ) return this.message().no_spaces
	  
			return ''
		}
		click(next?: any) {
			let body = JSON.stringify({
				fullname: this.username(),
				email: this.email(),
				password: this.password(),
				avatar: 'https://pichold.ru/wp-content/uploads/2023/09/z_c702990c3d.jpg'
			})
			console.log(body);
			let tr: any[] = this.$.$mol_fetch.json('http://лайфкурс.сказочные-ежики.рф/api/student/students/', { 'method': 'POST', body: body, headers: {
				'Content-Type': 'application/json'
			  },  }) as any[];
	  		
	  		if('id' in tr){
				window.location.replace('/lc/login/-/test.html')
			};
		}
		
	}
}
