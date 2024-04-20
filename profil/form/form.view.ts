namespace $.$$ {
	export class $lc_profil_form extends $.$lc_profil_form {
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

			return uni['universities'].map(u => u.name);
		}
		facultylist(): readonly any[]{
			let faculty: any[] = this.$.$mol_fetch.json('http://лайфкурс.сказочные-ежики.рф/api/university/get_all_faculties/?university_id=1',{'method': 'GET'}) as any;

			return faculty['faculties'].map(f => f.name);
		}
	}
}
