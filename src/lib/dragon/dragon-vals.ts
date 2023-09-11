import type { Color, Age } from '.';

export const dragonVals: {
	[key in Color]: {
		[key in Age]: {
			alignment: string;
		};
	};
} = {
	red: {
		wyrmling: {
			alignment: 'Typically Chaotic'
		},
		young: {
			alignment: 'Typically Chaotic'
		},
		adult: {
			alignment: 'Typically Chaotic'
		},
		ancient: {
			alignment: 'Typically Chaotic'
		}
	},
	orange: {
		wyrmling: {
			alignment: 'Typically Lawful'
		},
		young: {
			alignment: 'Typically Lawful'
		},
		adult: {
			alignment: 'Typically Lawful'
		},
		ancient: {
			alignment: 'Typically Lawful'
		}
	},
	yellow: {
		wyrmling: {
			alignment: 'Typically Lawful'
		},
		young: {
			alignment: 'Typically Lawful'
		},
		adult: {
			alignment: 'Typically Lawful'
		},
		ancient: {
			alignment: 'Typically Lawful'
		}
	},
	green: {
		wyrmling: {
			alignment: 'Typically Neutral'
		},
		young: {
			alignment: 'Typically Neutral'
		},
		adult: {
			alignment: 'Typically Neutral'
		},
		ancient: {
			alignment: 'Typically Neutral'
		}
	},
	blue: {
		wyrmling: {
			alignment: 'Typically Chaotic'
		},
		young: {
			alignment: 'Typically Chaotic'
		},
		adult: {
			alignment: 'Typically Chaotic'
		},
		ancient: {
			alignment: 'Typically Chaotic'
		}
	},
	indigo: {
		wyrmling: {
			alignment: 'Typically Chaotic'
		},
		young: {
			alignment: 'Typically Chaotic'
		},
		adult: {
			alignment: 'Typically Chaotic'
		},
		ancient: {
			alignment: 'Typically Chaotic'
		}
	},
	violet: {
		wyrmling: {
			alignment: 'Typically Lawful'
		},
		young: {
			alignment: 'Typically Lawful'
		},
		adult: {
			alignment: 'Typically Lawful'
		},
		ancient: {
			alignment: 'Typically Lawful'
		}
	}
} as const;
