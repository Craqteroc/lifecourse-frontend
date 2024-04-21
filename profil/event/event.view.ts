namespace $.$${
	export class $lc_profil_event extends $.$lc_profil_event{
		ret(next?: string | undefined){
			return 0;
		}
		pullevent(){
			let event = this.$.$mol_fetch.json(`http://лайфкурс.сказочные-ежики.рф/api/event/get_all_events/?name=${this.serchpull()}`,{'method': 'GET', headers: {
				'Content-Type': 'application/json'
			  },  }) as {'events': []};
			
			console.log(event);
			return event;
		}
		event1(){
			console.log(this.pullevent()['events'].map(e => e['date']));
			return this.pullevent()['events'].map(e => this.Events(e['id']));
		}
		eventt(id: number): string {
			console.log(this.pullevent()['events'][id - 1]);
			const event = this.pullevent()['events'][id - 1];
			return `### ${event.name}\n\n${event.description}\n\n**Скиллы**: ${event.skills}`;
		}
		@ $mol_mem
		serchpull(next?: string){
			return next ?? ''
		}
		
	}
}
