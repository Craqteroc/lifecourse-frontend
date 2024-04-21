namespace $.$${
	export class $lc_profil_rank extends $.$lc_profil_rank{
		@ $mol_mem
		pullrank(){

			let tr = this.$.$mol_fetch.json('http://лайфкурс.сказочные-ежики.рф/api/rating/ratings/?group_by=students',{'method': 'GET', headers: {
				'Content-Type': 'application/json'
			  },  }) as {'students': []};

			  return tr;
		}
		rank(){
			return this.pullrank()['students'].map(r => this.Rank1(r['id']));
		}
		rank1(id: number): string{
			const students = this.pullrank()['students'];
			if (students && id > 0 && id <= students.length) {
				const rank = students[id - 1];
				console.log(rank);
				// return JSON.stringify(rank);
				return `### ${rank.name}\n**Звезд**: ${rank.stars}`; 
			} else {
				return 'Rank not found';
			}
		}
		
	}
}

