namespace $.$$ {
	export class $lc_profil_form extends $.$lc_profil_form {
		fiocontent(){
			return this.pull().last_name + ' ' + this.pull().first_name + ' ' + this.pull().second_name;
		}
		agecontent(next?: string | undefined): string{
			return this.pull().age;
		}
		emailcontent(next?: string | undefined): string {
			return this.pull().email;
		}
		citylist(): readonly any[] {
			let response: any[] = this.$.$mol_fetch.json('http://лайфкурс.сказочные-ежики.рф/api/common/get_all_cities/', {'method': 'GET'}) as {'cities':''};

			return response['cities'];
		}
		departlist(): readonly any[]{
			let depart: any[] = this.$.$mol_fetch.json('http://лайфкурс.сказочные-ежики.рф/api/university/get_all_departments/?faculty_id=1',{'method': 'GET'}) as any;

			return depart['departments'].map(d => d.name);
		}
		unilist(): readonly any[] {
			let uni: any[] = this.$.$mol_fetch.json('http://лайфкурс.сказочные-ежики.рф/api/university/get_all_universities/',{'method': 'GET'}) as any;

			// this.$.$mol_state_local.value(this.state_key('id'), uni.id) || ''
			return uni['universities'].map(u => u.name);
		}
		facultylist(): readonly any[]{
			let faculty: any[] = this.$.$mol_fetch.json('http://лайфкурс.сказочные-ежики.рф/api/university/get_all_faculties/?id',{'method': 'GET'}) as any;

			return faculty['faculties'].map(f => f.name);
		}
		grouplist(): readonly any[]{
			let group: any[] = this.$.$mol_fetch.json('http://лайфкурс.сказочные-ежики.рф/api/university/get_all_groups/?department_id=1', {'method': 'GET'}) as any;

			return group['groups'].map(g => g.name)
		}
		@ $mol_mem
		 pull(){
			let te = this.$.$mol_fetch.json('http://лайфкурс.сказочные-ежики.рф/api/student/get_my_profile/', {'method': 'GET', headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Token ' + this.$.$mol_state_local.value('token') || ""
			  },  }) as any[];
			  console.log(te);
			  return te
		}
		click(next?: any){
			let body = JSON.stringify({
				age: this.agecontent(),
				email: this.emailcontent(),
				group: this.grouplist(),
				university: this.unilist(),
				faculty: this.facultylist(),
				department: this.departlist()
			})
			let btsave = this.$.$mol_fetch.json('http://лайфкурс.сказочные-ежики.рф/api/student/students/1/', {'method': 'PATCH', body: body, headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Token ' + this.$.$mol_state_local.value('token') || ""
			  },  }) as any[];
			console.log(btsave);
			return btsave;
		}

	}
}
