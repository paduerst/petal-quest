import type { SRDSpell } from '.';
import type { SpellVals } from '..';

export const SRD_SPELL_VALS: {
	[key in SRDSpell]: SpellVals;
} = {
	'acid-arrow': {
		name: 'Acid Arrow',
		level: 2,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '90 feet',
		components: 'V, S, M (powdered rhubarb leaf and an adder\u2019s stomach)',
		duration: 'Instantaneous'
	},
	'acid-splash': {
		name: 'Acid Splash',
		level: 0,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	aid: {
		name: 'Aid',
		level: 2,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (a tiny strip of white cloth)',
		duration: '8 hours'
	},
	alarm: {
		name: 'Alarm',
		level: 1,
		school: 'Abjuration',
		castingTime: '1 minute',
		ritual: true,
		range: '30 feet',
		components: 'V, S, M (a tiny bell and a piece of fine silver wire)',
		duration: '8 hours'
	},
	'alter-self': {
		name: 'Alter Self',
		level: 2,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S',
		duration: 'Concentration, up to 1 hour'
	},
	'animal-friendship': {
		name: 'Animal Friendship',
		level: 1,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (a morsel of food)',
		duration: '24 hours'
	},
	'animal-messenger': {
		name: 'Animal Messenger',
		level: 2,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: true,
		range: '30 feet',
		components: 'V, S, M (a morsel of food)',
		duration: '24 hours'
	},
	'animal-shapes': {
		name: 'Animal Shapes',
		level: 8,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S',
		duration: 'Concentration, up to 24 hours'
	},
	'animate-dead': {
		name: 'Animate Dead',
		level: 3,
		school: 'Necromancy',
		castingTime: '1 minute',
		ritual: false,
		range: '10 feet',
		components: 'V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust)',
		duration: 'Instantaneous'
	},
	'animate-objects': {
		name: 'Animate Objects',
		level: 5,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'antilife-shell': {
		name: 'Antilife Shell',
		level: 5,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Self (10-foot radius)',
		components: 'V, S',
		duration: 'Concentration, up to 1 hour'
	},
	'antimagic-field': {
		name: 'Antimagic Field',
		level: 8,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Self (10-foot-radius sphere)',
		components: 'V, S, M (a pinch of powdered iron or iron filings)',
		duration: 'Concentration, up to 1 hour'
	},
	'antipathy-sympathy': {
		name: 'Antipathy/Sympathy',
		level: 8,
		school: 'Enchantment',
		castingTime: '1 hour',
		ritual: false,
		range: '60 feet',
		components:
			'V, S, M (either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect)',
		duration: '10 days'
	},
	'arcane-eye': {
		name: 'Arcane Eye',
		level: 4,
		school: 'Divination',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (a bit of bat fur)',
		duration: 'Concentration, up to 1 hour'
	},
	'arcane-hand': {
		name: 'Arcane Hand',
		level: 5,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S, M (an eggshell and a snakeskin glove)',
		duration: 'Concentration, up to 1 minute'
	},
	'arcane-lock': {
		name: 'Arcane Lock',
		level: 2,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (gold dust worth at least 25 gp, which the spell consumes)',
		duration: 'Until dispelled'
	},
	'arcane-sword': {
		name: 'Arcane Sword',
		level: 7,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components:
			'V, S, M (a miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp)',
		duration: 'Concentration, up to 1 minute'
	},
	'arcanists-magic-aura': {
		name: 'Arcanist\u2019s Magic Aura',
		level: 2,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a small square of silk)',
		duration: '24 hours'
	},
	'astral-projection': {
		name: 'Astral Projection',
		level: 9,
		school: 'Necromancy',
		castingTime: '1 hour',
		ritual: false,
		range: '10 feet',
		components:
			'V, S, M (for each creature you affect with this spell, you must provide one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes)',
		duration: 'Special'
	},
	augury: {
		name: 'Augury',
		level: 2,
		school: 'Divination',
		castingTime: '1 minute',
		ritual: true,
		range: 'Self',
		components: 'V, S, M (specially marked sticks, bones, or similar tokens worth at least 25 gp)',
		duration: 'Instantaneous'
	},
	awaken: {
		name: 'Awaken',
		level: 5,
		school: 'Transmutation',
		castingTime: '8 hours',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (an agate worth at least 1,000 gp, which the spell consumes)',
		duration: 'Instantaneous'
	},
	bane: {
		name: 'Bane',
		level: 1,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (a drop of blood)',
		duration: 'Concentration, up to 1 minute'
	},
	banishment: {
		name: 'Banishment',
		level: 4,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (an item distasteful to the target)',
		duration: 'Concentration, up to 1 minute'
	},
	barkskin: {
		name: 'Barkskin',
		level: 2,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a handful of oak bark)',
		duration: 'Concentration, up to 1 hour'
	},
	'beacon-of-hope': {
		name: 'Beacon of Hope',
		level: 3,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'bestow-curse': {
		name: 'Bestow Curse',
		level: 3,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'black-tentacles': {
		name: 'Black Tentacles',
		level: 4,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '90 feet',
		components: 'V, S, M (a piece of tentacle from a giant octopus or a giant squid)',
		duration: 'Concentration, up to 1 minute'
	},
	'blade-barrier': {
		name: 'Blade Barrier',
		level: 6,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '90 feet',
		components: 'V, S',
		duration: 'Concentration, up to 10 minutes'
	},
	bless: {
		name: 'Bless',
		level: 1,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (a sprinkling of holy water)',
		duration: 'Concentration, up to 1 minute'
	},
	blight: {
		name: 'Blight',
		level: 4,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'blindness-deafness': {
		name: 'Blindness/Deafness',
		level: 2,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V',
		duration: '1 minute'
	},
	blink: {
		name: 'Blink',
		level: 3,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S',
		duration: '1 minute'
	},
	blur: {
		name: 'Blur',
		level: 2,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V',
		duration: 'Concentration, up to 1 minute'
	},
	'branding-smite': {
		name: 'Branding Smite',
		level: 2,
		school: 'Evocation',
		castingTime: '1 bonus action',
		ritual: false,
		range: 'Self',
		components: 'V',
		duration: 'Concentration, up to 1 minute'
	},
	'burning-hands': {
		name: 'Burning Hands',
		level: 1,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self (15-foot cone)',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'call-lightning': {
		name: 'Call Lightning',
		level: 3,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: 'Concentration, up to 10 minutes'
	},
	'calm-emotions': {
		name: 'Calm Emotions',
		level: 2,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'chain-lightning': {
		name: 'Chain Lightning',
		level: 6,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '150 feet',
		components:
			'V, S, M (a bit of fur; a piece of amber, glass, or a crystal rod; and three silver pins)',
		duration: 'Instantaneous'
	},
	'charm-person': {
		name: 'Charm Person',
		level: 1,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S',
		duration: '1 hour'
	},
	'chill-touch': {
		name: 'Chill Touch',
		level: 0,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: '1 round'
	},
	'circle-of-death': {
		name: 'Circle of Death',
		level: 6,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: '150 feet',
		components: 'V, S, M (the powder of a crushed black pearl worth at least 500 gp)',
		duration: 'Instantaneous'
	},
	clairvoyance: {
		name: 'Clairvoyance',
		level: 3,
		school: 'Divination',
		castingTime: '10 minutes',
		ritual: false,
		range: '1 mile',
		components:
			'V, S, M (a focus worth at least 100 gp, either a jeweled horn for hearing or a glass eye for seeing)',
		duration: 'Concentration, up to 10 minutes'
	},
	clone: {
		name: 'Clone',
		level: 8,
		school: 'Necromancy',
		castingTime: '1 hour',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (a diamond worth at least 1,000 gp and at least 1 cubic inch of flesh of the creature that is to be cloned, which the spell consumes, and a vessel worth at least 2,000 gp that has a sealable lid and is large enough to hold a Medium creature, such as a huge urn, coffin, mud-filled cyst in the ground, or crystal container filled with salt water)',
		duration: 'Instantaneous'
	},
	cloudkill: {
		name: 'Cloudkill',
		level: 5,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: 'Concentration, up to 10 minutes'
	},
	'color-spray': {
		name: 'Color Spray',
		level: 1,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: 'Self (15-foot cone)',
		components: 'V, S, M (a pinch of powder or sand that is colored red, yellow, and blue)',
		duration: '1 round'
	},
	command: {
		name: 'Command',
		level: 1,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V',
		duration: '1 round'
	},
	commune: {
		name: 'Commune',
		level: 5,
		school: 'Divination',
		castingTime: '1 minute',
		ritual: true,
		range: 'Self',
		components: 'V, S, M (incense and a vial of holy or unholy water)',
		duration: '1 minute'
	},
	'commune-with-nature': {
		name: 'Commune with Nature',
		level: 5,
		school: 'Divination',
		castingTime: '1 minute',
		ritual: true,
		range: 'Self',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'comprehend-languages': {
		name: 'Comprehend Languages',
		level: 1,
		school: 'Divination',
		castingTime: '1 action',
		ritual: true,
		range: 'Self',
		components: 'V, S, M (a pinch of soot and salt)',
		duration: '1 hour'
	},
	compulsion: {
		name: 'Compulsion',
		level: 4,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'cone-of-cold': {
		name: 'Cone of Cold',
		level: 5,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self (60-foot cone)',
		components: 'V, S, M (a small crystal or glass cone)',
		duration: 'Instantaneous'
	},
	confusion: {
		name: 'Confusion',
		level: 4,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '90 feet',
		components: 'V, S, M (three nut shells)',
		duration: 'Concentration, up to 1 minute'
	},
	'conjure-animals': {
		name: 'Conjure Animals',
		level: 3,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 hour'
	},
	'conjure-celestial': {
		name: 'Conjure Celestial',
		level: 7,
		school: 'Conjuration',
		castingTime: '1 minute',
		ritual: false,
		range: '90 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 hour'
	},
	'conjure-elemental': {
		name: 'Conjure Elemental',
		level: 5,
		school: 'Conjuration',
		castingTime: '1 minute',
		ritual: false,
		range: '90 feet',
		components:
			'V, S, M (burning incense for air, soft clay for earth, sulfur and phosphorus for fire, or water and sand for water)',
		duration: 'Concentration, up to 1 hour'
	},
	'conjure-fey': {
		name: 'Conjure Fey',
		level: 6,
		school: 'Conjuration',
		castingTime: '1 minute',
		ritual: false,
		range: '90 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 hour'
	},
	'conjure-minor-elementals': {
		name: 'Conjure Minor Elementals',
		level: 4,
		school: 'Conjuration',
		castingTime: '1 minute',
		ritual: false,
		range: '90 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 hour'
	},
	'conjure-woodland-beings': {
		name: 'Conjure Woodland Beings',
		level: 4,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (one holly berry per creature summoned)',
		duration: 'Concentration, up to 1 hour'
	},
	'contact-other-plane': {
		name: 'Contact Other Plane',
		level: 5,
		school: 'Divination',
		castingTime: '1 minute',
		ritual: true,
		range: 'Self',
		components: 'V',
		duration: '1 minute'
	},
	contagion: {
		name: 'Contagion',
		level: 5,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: '7 days'
	},
	contingency: {
		name: 'Contingency',
		level: 6,
		school: 'Evocation',
		castingTime: '10 minutes',
		ritual: false,
		range: 'Self',
		components:
			'V, S, M (a statuette of yourself carved from ivory and decorated with gems worth at least 1,500 gp)',
		duration: '10 days'
	},
	'continual-flame': {
		name: 'Continual Flame',
		level: 2,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (ruby dust worth 50 gp, which the spell consumes)',
		duration: 'Until dispelled'
	},
	'control-water': {
		name: 'Control Water',
		level: 4,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '300 feet',
		components: 'V, S, M (a drop of water and a pinch of dust)',
		duration: 'Concentration, up to 10 minutes'
	},
	'control-weather': {
		name: 'Control Weather',
		level: 8,
		school: 'Transmutation',
		castingTime: '10 minutes',
		ritual: false,
		range: 'Self (5-mile radius)',
		components: 'V, S, M (burning incense and bits of earth and wood mixed in water)',
		duration: 'Concentration, up to 8 hours'
	},
	counterspell: {
		name: 'Counterspell',
		level: 3,
		school: 'Abjuration',
		castingTime:
			'1 reaction, which you take when you see a creature within 60 feet of you casting a spell',
		ritual: false,
		range: '60 feet',
		components: 'S',
		duration: 'Instantaneous'
	},
	'create-food-and-water': {
		name: 'Create Food and Water',
		level: 3,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'create-or-destroy-water': {
		name: 'Create or Destroy Water',
		level: 1,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components:
			'V, S, M (a drop of water if creating water or a few grains of sand if destroying it)',
		duration: 'Instantaneous'
	},
	'create-undead': {
		name: 'Create Undead',
		level: 6,
		school: 'Necromancy',
		castingTime: '1 minute',
		ritual: false,
		range: '10 feet',
		components:
			'V, S, M (one clay pot filled with grave dirt, one clay pot filled with brackish water, and one 150 gp black onyx stone for each corpse)',
		duration: 'Instantaneous'
	},
	creation: {
		name: 'Creation',
		level: 5,
		school: 'Illusion',
		castingTime: '1 minute',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (a tiny piece of matter of the same type of the item you plan to create)',
		duration: 'Special'
	},
	'cure-wounds': {
		name: 'Cure Wounds',
		level: 1,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'dancing-lights': {
		name: 'Dancing Lights',
		level: 0,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S, M (a bit of phosphorus or wychwood, or a glowworm)',
		duration: 'Concentration, up to 1 minute'
	},
	darkness: {
		name: 'Darkness',
		level: 2,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, M (bat fur and a drop of pitch or piece of coal)',
		duration: 'Concentration, up to 10 minutes'
	},
	darkvision: {
		name: 'Darkvision',
		level: 2,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (either a pinch of dried carrot or an agate)',
		duration: '8 hours'
	},
	daylight: {
		name: 'Daylight',
		level: 3,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: '1 hour'
	},
	'death-ward': {
		name: 'Death Ward',
		level: 4,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: '8 hours'
	},
	'delayed-blast-fireball': {
		name: 'Delayed Blast Fireball',
		level: 7,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '150 feet',
		components: 'V, S, M (a tiny ball of bat guano and sulfur)',
		duration: 'Concentration, up to 1 minute'
	},
	demiplane: {
		name: 'Demiplane',
		level: 8,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'S',
		duration: '1 hour'
	},
	'detect-evil-and-good': {
		name: 'Detect Evil and Good',
		level: 1,
		school: 'Divination',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S',
		duration: 'Concentration, up to 10 minutes'
	},
	'detect-magic': {
		name: 'Detect Magic',
		level: 1,
		school: 'Divination',
		castingTime: '1 action',
		ritual: true,
		range: 'Self',
		components: 'V, S',
		duration: 'Concentration, up to 10 minutes'
	},
	'detect-poison-and-disease': {
		name: 'Detect Poison and Disease',
		level: 1,
		school: 'Divination',
		castingTime: '1 action',
		ritual: true,
		range: 'Self',
		components: 'V, S, M (a yew leaf)',
		duration: 'Concentration, up to 10 minutes'
	},
	'detect-thoughts': {
		name: 'Detect Thoughts',
		level: 2,
		school: 'Divination',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S, M (a copper piece)',
		duration: 'Concentration, up to 1 minute'
	},
	'dimension-door': {
		name: 'Dimension Door',
		level: 4,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '500 feet',
		components: 'V',
		duration: 'Instantaneous'
	},
	'disguise-self': {
		name: 'Disguise Self',
		level: 1,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S',
		duration: '1 hour'
	},
	disintegrate: {
		name: 'Disintegrate',
		level: 6,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (a lodestone and a pinch of dust)',
		duration: 'Instantaneous'
	},
	'dispel-evil-and-good': {
		name: 'Dispel Evil and Good',
		level: 5,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S, M (holy water or powdered silver and iron)',
		duration: 'Concentration, up to 1 minute'
	},
	'dispel-magic': {
		name: 'Dispel Magic',
		level: 3,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	divination: {
		name: 'Divination',
		level: 4,
		school: 'Divination',
		castingTime: '1 action',
		ritual: true,
		range: 'Self',
		components:
			'V, S, M (incense and a sacrificial offering appropriate to your religion, together worth at least 25 gp, which the spell consumes)',
		duration: 'Instantaneous'
	},
	'divine-favor': {
		name: 'Divine Favor',
		level: 1,
		school: 'Evocation',
		castingTime: '1 bonus action',
		ritual: false,
		range: 'Self',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'divine-word': {
		name: 'Divine Word',
		level: 7,
		school: 'Evocation',
		castingTime: '1 bonus action',
		ritual: false,
		range: '30 feet',
		components: 'V',
		duration: 'Instantaneous'
	},
	'dominate-beast': {
		name: 'Dominate Beast',
		level: 4,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'dominate-monster': {
		name: 'Dominate Monster',
		level: 8,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 hour'
	},
	'dominate-person': {
		name: 'Dominate Person',
		level: 5,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	dream: {
		name: 'Dream',
		level: 5,
		school: 'Illusion',
		castingTime: '1 minute',
		ritual: false,
		range: 'Special',
		components:
			'V, S, M (a handful of sand, a dab of ink, and a writing quill plucked from a sleeping bird)',
		duration: '8 hours'
	},
	druidcraft: {
		name: 'Druidcraft',
		level: 0,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	earthquake: {
		name: 'Earthquake',
		level: 8,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '500 feet',
		components: 'V, S, M (a pinch of dirt, a piece of rock, and a lump of clay)',
		duration: 'Concentration, up to 1 minute'
	},
	'eldritch-blast': {
		name: 'Eldritch Blast',
		level: 0,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'enhance-ability': {
		name: 'Enhance Ability',
		level: 2,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (fur or a feather from a beast)',
		duration: 'Concentration, up to 1 hour'
	},
	'enlarge-reduce': {
		name: 'Enlarge/Reduce',
		level: 2,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (a pinch of powdered iron)',
		duration: 'Concentration, up to 1 minute'
	},
	entangle: {
		name: 'Entangle',
		level: 1,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '90 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	enthrall: {
		name: 'Enthrall',
		level: 2,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: '1 minute'
	},
	etherealness: {
		name: 'Etherealness',
		level: 7,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S',
		duration: 'Up to 8 hours'
	},
	'expeditious-retreat': {
		name: 'Expeditious Retreat',
		level: 1,
		school: 'Transmutation',
		castingTime: '1 bonus action',
		ritual: false,
		range: 'Self',
		components: 'V, S',
		duration: 'Concentration, up to 10 minutes'
	},
	eyebite: {
		name: 'Eyebite',
		level: 6,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	fabricate: {
		name: 'Fabricate',
		level: 4,
		school: 'Transmutation',
		castingTime: '10 minutes',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'faerie-fire': {
		name: 'Faerie Fire',
		level: 1,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V',
		duration: 'Concentration, up to 1 minute'
	},
	'faithful-hound': {
		name: 'Faithful Hound',
		level: 4,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (a tiny silver whistle, a piece of bone, and a thread)',
		duration: '8 hours'
	},
	'false-life': {
		name: 'False Life',
		level: 1,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S, M (a small amount of alcohol or distilled spirits)',
		duration: '1 hour'
	},
	fear: {
		name: 'Fear',
		level: 3,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: 'Self (30-foot cone)',
		components: 'V, S, M (a white feather or the heart of a hen)',
		duration: 'Concentration, up to 1 minute'
	},
	'feather-fall': {
		name: 'Feather Fall',
		level: 1,
		school: 'Transmutation',
		castingTime: '1 reaction, which you take when you or a creature within 60 feet of you falls',
		ritual: false,
		range: '60 feet',
		components: 'V, M (a small feather or piece of down)',
		duration: '1 minute'
	},
	feeblemind: {
		name: 'Feeblemind',
		level: 8,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '150 feet',
		components: 'V, S, M (a handful of clay, crystal, glass, or mineral spheres)',
		duration: 'Instantaneous'
	},
	'find-familiar': {
		name: 'Find Familiar',
		level: 1,
		school: 'Conjuration',
		castingTime: '1 hour',
		ritual: true,
		range: '10 feet',
		components:
			'V, S, M (10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier)',
		duration: 'Instantaneous'
	},
	'find-steed': {
		name: 'Find Steed',
		level: 2,
		school: 'Conjuration',
		castingTime: '10 minutes',
		ritual: false,
		range: '30 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'find-the-path': {
		name: 'Find the Path',
		level: 6,
		school: 'Divination',
		castingTime: '1 minute',
		ritual: false,
		range: 'Self',
		components:
			'V, S, M (a set of divinatory tools\u2014such as bones, ivory sticks, cards, teeth, or carved runes\u2014worth 100 gp and an object from the location you wish to find)',
		duration: 'Concentration, up to 1 day'
	},
	'find-traps': {
		name: 'Find Traps',
		level: 2,
		school: 'Divination',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'finger-of-death': {
		name: 'Finger of Death',
		level: 7,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	fireball: {
		name: 'Fireball',
		level: 3,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '150 feet',
		components: 'V, S, M (a tiny ball of bat guano and sulfur)',
		duration: 'Instantaneous'
	},
	'fire-bolt': {
		name: 'Fire Bolt',
		level: 0,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'fire-shield': {
		name: 'Fire Shield',
		level: 4,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S, M (a bit of phosphorus or a firefly)',
		duration: '10 minutes'
	},
	'fire-storm': {
		name: 'Fire Storm',
		level: 7,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '150 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'flame-blade': {
		name: 'Flame Blade',
		level: 2,
		school: 'Evocation',
		castingTime: '1 bonus action',
		ritual: false,
		range: 'Self',
		components: 'V, S, M (leaf of sumac)',
		duration: 'Concentration, up to 10 minutes'
	},
	'flame-strike': {
		name: 'Flame Strike',
		level: 5,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (pinch of sulfur)',
		duration: 'Instantaneous'
	},
	'flaming-sphere': {
		name: 'Flaming Sphere',
		level: 2,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (a bit of tallow, a pinch of brimstone, and a dusting of powdered iron)',
		duration: 'Concentration, up to 1 minute'
	},
	'flesh-to-stone': {
		name: 'Flesh to Stone',
		level: 6,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (a pinch of lime, water, and earth)',
		duration: 'Concentration, up to 1 minute'
	},
	'floating-disk': {
		name: 'Floating Disk',
		level: 1,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: true,
		range: '30 feet',
		components: 'V, S, M (a drop of mercury)',
		duration: '1 hour'
	},
	fly: {
		name: 'Fly',
		level: 3,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a wing feather from any bird)',
		duration: 'Concentration, up to 10 minutes'
	},
	'fog-cloud': {
		name: 'Fog Cloud',
		level: 1,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 hour'
	},
	forbiddance: {
		name: 'Forbiddance',
		level: 6,
		school: 'Abjuration',
		castingTime: '10 minutes',
		ritual: true,
		range: 'Touch',
		components:
			'V, S, M (a sprinkling of holy water, rare incense, and powdered ruby worth at least 1,000 gp)',
		duration: '1 day'
	},
	forcecage: {
		name: 'Forcecage',
		level: 7,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '100 feet',
		components: 'V, S, M (ruby dust worth 1,500 gp)',
		duration: '1 hour'
	},
	foresight: {
		name: 'Foresight',
		level: 9,
		school: 'Divination',
		castingTime: '1 minute',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a hummingbird feather)',
		duration: '8 hours'
	},
	'freedom-of-movement': {
		name: 'Freedom of Movement',
		level: 4,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a leather strap, bound around the arm or a similar appendage)',
		duration: '1 hour'
	},
	'freezing-sphere': {
		name: 'Freezing Sphere',
		level: 6,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '300 feet',
		components: 'V, S, M (a small crystal sphere)',
		duration: 'Instantaneous'
	},
	'gaseous-form': {
		name: 'Gaseous Form',
		level: 3,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a bit of gauze and a wisp of smoke)',
		duration: 'Concentration, up to 1 hour'
	},
	gate: {
		name: 'Gate',
		level: 9,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (a diamond worth at least 5,000 gp)',
		duration: 'Concentration, up to 1 minute'
	},
	geas: {
		name: 'Geas',
		level: 5,
		school: 'Enchantment',
		castingTime: '1 minute',
		ritual: false,
		range: '60 feet',
		components: 'V',
		duration: '30 days'
	},
	'gentle-repose': {
		name: 'Gentle Repose',
		level: 2,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: true,
		range: 'Touch',
		components:
			'V, S, M (a pinch of salt and one copper piece placed on each of the corpse\u2019s eyes, which must remain there for the duration)',
		duration: '10 days'
	},
	'giant-insect': {
		name: 'Giant Insect',
		level: 4,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S',
		duration: 'Concentration, up to 10 minutes'
	},
	glibness: {
		name: 'Glibness',
		level: 8,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V',
		duration: '1 hour'
	},
	'globe-of-invulnerability': {
		name: 'Globe of Invulnerability',
		level: 6,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Self (10-foot radius)',
		components: 'V, S, M (a glass or crystal bead that shatters when the spell ends)',
		duration: 'Concentration, up to 1 minute'
	},
	'glyph-of-warding': {
		name: 'Glyph of Warding',
		level: 3,
		school: 'Abjuration',
		castingTime: '1 hour',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (incense and powdered diamond worth at least 200 gp, which the spell consumes)',
		duration: 'Until dispelled or triggered'
	},
	goodberry: {
		name: 'Goodberry',
		level: 1,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a sprig of mistletoe)',
		duration: 'Instantaneous'
	},
	grease: {
		name: 'Grease',
		level: 1,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (a bit of pork rind or butter)',
		duration: '1 minute'
	},
	'greater-invisibility': {
		name: 'Greater Invisibility',
		level: 4,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'greater-restoration': {
		name: 'Greater Restoration',
		level: 5,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (diamond dust worth at least 100 gp, which the spell consumes)',
		duration: 'Instantaneous'
	},
	'guardian-of-faith': {
		name: 'Guardian of Faith',
		level: 4,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V',
		duration: '8 hours'
	},
	'guards-and-wards': {
		name: 'Guards and Wards',
		level: 6,
		school: 'Abjuration',
		castingTime: '10 minutes',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (burning incense, a small measure of brimstone and oil, a knotted string, a small amount of umber hulk blood, and a small silver rod worth at least 10 gp)',
		duration: '24 hours'
	},
	guidance: {
		name: 'Guidance',
		level: 0,
		school: 'Divination',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'guiding-bolt': {
		name: 'Guiding Bolt',
		level: 1,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: '1 round'
	},
	'gust-of-wind': {
		name: 'Gust of Wind',
		level: 2,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self (60-foot line)',
		components: 'V, S, M (a legume seed)',
		duration: 'Concentration, up to 1 minute'
	},
	hallow: {
		name: 'Hallow',
		level: 5,
		school: 'Evocation',
		castingTime: '24 hours',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (herbs, oils, and incense worth at least 1,000 gp, which the spell consumes)',
		duration: 'Until dispelled'
	},
	'hallucinatory-terrain': {
		name: 'Hallucinatory Terrain',
		level: 4,
		school: 'Illusion',
		castingTime: '10 minutes',
		ritual: false,
		range: '300 feet',
		components: 'V, S, M (a stone, a twig, and a bit of green plant)',
		duration: '24 hours'
	},
	harm: {
		name: 'Harm',
		level: 6,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	haste: {
		name: 'Haste',
		level: 3,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (a shaving of licorice root)',
		duration: 'Concentration, up to 1 minute'
	},
	heal: {
		name: 'Heal',
		level: 6,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'healing-word': {
		name: 'Healing Word',
		level: 1,
		school: 'Evocation',
		castingTime: '1 bonus action',
		ritual: false,
		range: '60 feet',
		components: 'V',
		duration: 'Instantaneous'
	},
	'heat-metal': {
		name: 'Heat Metal',
		level: 2,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (a piece of iron and a flame)',
		duration: 'Concentration, up to 1 minute'
	},
	'hellish-rebuke': {
		name: 'Hellish Rebuke',
		level: 1,
		school: 'Evocation',
		castingTime:
			'1 reaction, which you take in response to being damaged by a creature within 60 feet of you that you can see',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'heroes-feast': {
		name: 'Heroes\u2019 Feast',
		level: 6,
		school: 'Conjuration',
		castingTime: '10 minutes',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (a gem-encrusted bowl worth at least 1,000 gp, which the spell consumes)',
		duration: 'Instantaneous'
	},
	heroism: {
		name: 'Heroism',
		level: 1,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'hideous-laughter': {
		name: 'Hideous Laughter',
		level: 1,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (tiny tarts and a feather that is waved in the air)',
		duration: 'Concentration, up to 1 minute'
	},
	'hold-monster': {
		name: 'Hold Monster',
		level: 5,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '90 feet',
		components: 'V, S, M (a small, straight piece of iron)',
		duration: 'Concentration, up to 1 minute'
	},
	'hold-person': {
		name: 'Hold Person',
		level: 2,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (a small, straight piece of iron)',
		duration: 'Concentration, up to 1 minute'
	},
	'holy-aura': {
		name: 'Holy Aura',
		level: 8,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components:
			'V, S, M (a tiny reliquary worth at least 1,000 gp containing a sacred relic, such as a scrap of cloth from a saint\u2019s robe or a piece of parchment from a religious text)',
		duration: 'Concentration, up to 1 minute'
	},
	'hunters-mark': {
		name: 'Hunter\u2019s Mark',
		level: 1,
		school: 'Divination',
		castingTime: '1 bonus action',
		ritual: false,
		range: '90 feet',
		components: 'V',
		duration: 'Concentration, up to 1 hour'
	},
	'hypnotic-pattern': {
		name: 'Hypnotic Pattern',
		level: 3,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components:
			'S, M (a glowing stick of incense or a crystal vial filled with phosphorescent material)',
		duration: 'Concentration, up to 1 minute'
	},
	'ice-storm': {
		name: 'Ice Storm',
		level: 4,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '300 feet',
		components: 'V, S, M (a pinch of dust and a few drops of water)',
		duration: 'Instantaneous'
	},
	identify: {
		name: 'Identify',
		level: 1,
		school: 'Divination',
		castingTime: '1 minute',
		ritual: true,
		range: 'Touch',
		components: 'V, S, M (a pearl worth at least 100 gp and an owl feather)',
		duration: 'Instantaneous'
	},
	'illusory-script': {
		name: 'Illusory Script',
		level: 1,
		school: 'Illusion',
		castingTime: '1 minute',
		ritual: true,
		range: 'Touch',
		components: 'S, M (a lead-based ink worth at least 10 gp, which the spell consumes)',
		duration: '10 days'
	},
	imprisonment: {
		name: 'Imprisonment',
		level: 9,
		school: 'Abjuration',
		castingTime: '1 minute',
		ritual: false,
		range: '30 feet',
		components:
			'V, S, M (a vellum depiction or a carved statuette in the likeness of the target, and a special component that varies according to the version of the spell you choose, worth at least 500 gp per Hit Die of the target)',
		duration: 'Until dispelled'
	},
	'incendiary-cloud': {
		name: 'Incendiary Cloud',
		level: 8,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '150 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'inflict-wounds': {
		name: 'Inflict Wounds',
		level: 1,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'insect-plague': {
		name: 'Insect Plague',
		level: 5,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '300 feet',
		components: 'V, S, M (a few grains of sugar, some kernels of grain, and a smear of fat)',
		duration: 'Concentration, up to 10 minutes'
	},
	'instant-summons': {
		name: 'Instant Summons',
		level: 6,
		school: 'Conjuration',
		castingTime: '1 minute',
		ritual: true,
		range: 'Touch',
		components: 'V, S, M (a sapphire worth 1,000 gp)',
		duration: 'Until dispelled'
	},
	invisibility: {
		name: 'Invisibility',
		level: 2,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (an eyelash encased in gum arabic)',
		duration: 'Concentration, up to 1 hour'
	},
	'irresistible-dance': {
		name: 'Irresistible Dance',
		level: 6,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V',
		duration: 'Concentration, up to 1 minute'
	},
	jump: {
		name: 'Jump',
		level: 1,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a grasshopper\u2019s hind leg)',
		duration: '1 minute'
	},
	knock: {
		name: 'Knock',
		level: 2,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V',
		duration: 'Instantaneous'
	},
	'legend-lore': {
		name: 'Legend Lore',
		level: 5,
		school: 'Divination',
		castingTime: '10 minutes',
		ritual: false,
		range: 'Self',
		components:
			'V, S, M (incense worth at least 250 gp, which the spell consumes, and four ivory strips worth at least 50 gp each)',
		duration: 'Instantaneous'
	},
	'lesser-restoration': {
		name: 'Lesser Restoration',
		level: 2,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	levitate: {
		name: 'Levitate',
		level: 2,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components:
			'V, S, M (either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end)',
		duration: 'Concentration, up to 10 minutes'
	},
	light: {
		name: 'Light',
		level: 0,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, M (a firefly or phosphorescent moss)',
		duration: '1 hour'
	},
	'lightning-bolt': {
		name: 'Lightning Bolt',
		level: 3,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self (100-foot line)',
		components: 'V, S, M (a bit of fur and a rod of amber, crystal, or glass)',
		duration: 'Instantaneous'
	},
	'locate-animals-or-plants': {
		name: 'Locate Animals or Plants',
		level: 2,
		school: 'Divination',
		castingTime: '1 action',
		ritual: true,
		range: 'Self',
		components: 'V, S, M (a bit of fur from a bloodhound)',
		duration: 'Instantaneous'
	},
	'locate-creature': {
		name: 'Locate Creature',
		level: 4,
		school: 'Divination',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S, M (a bit of fur from a bloodhound)',
		duration: 'Concentration, up to 1 hour'
	},
	'locate-object': {
		name: 'Locate Object',
		level: 2,
		school: 'Divination',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S, M (a forked twig)',
		duration: 'Concentration, up to 10 minutes'
	},
	longstrider: {
		name: 'Longstrider',
		level: 1,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a pinch of dirt)',
		duration: '1 hour'
	},
	'mage-armor': {
		name: 'Mage Armor',
		level: 1,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a piece of cured leather)',
		duration: '8 hours'
	},
	'mage-hand': {
		name: 'Mage Hand',
		level: 0,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S',
		duration: '1 minute'
	},
	'magic-circle': {
		name: 'Magic Circle',
		level: 3,
		school: 'Abjuration',
		castingTime: '1 minute',
		ritual: false,
		range: '10 feet',
		components:
			'V, S, M (holy water or powdered silver and iron worth at least 100 gp, which the spell consumes)',
		duration: '1 hour'
	},
	'magic-jar': {
		name: 'Magic Jar',
		level: 6,
		school: 'Necromancy',
		castingTime: '1 minute',
		ritual: false,
		range: 'Self',
		components:
			'V, S, M (a gem, crystal, reliquary, or some other ornamental container worth at least 500 gp)',
		duration: 'Until dispelled'
	},
	'magic-missile': {
		name: 'Magic Missile',
		level: 1,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'magic-mouth': {
		name: 'Magic Mouth',
		level: 2,
		school: 'Illusion',
		castingTime: '1 minute',
		ritual: true,
		range: '30 feet',
		components:
			'V, S, M (a small bit of honeycomb and jade dust worth at least 10 gp, which the spell consumes)',
		duration: 'Until dispelled'
	},
	'magic-weapon': {
		name: 'Magic Weapon',
		level: 2,
		school: 'Transmutation',
		castingTime: '1 bonus action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: 'Concentration, up to 1 hour'
	},
	'magnificent-mansion': {
		name: 'Magnificent Mansion',
		level: 7,
		school: 'Conjuration',
		castingTime: '1 minute',
		ritual: false,
		range: '300 feet',
		components:
			'V, S, M (a miniature portal carved from ivory, a small piece of polished marble, and a tiny silver spoon, each item worth at least 5 gp)',
		duration: '24 hours'
	},
	'major-image': {
		name: 'Major Image',
		level: 3,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S, M (a bit of fleece)',
		duration: 'Concentration, up to 10 minutes'
	},
	'mass-cure-wounds': {
		name: 'Mass Cure Wounds',
		level: 5,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'mass-heal': {
		name: 'Mass Heal',
		level: 9,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'mass-healing-word': {
		name: 'Mass Healing Word',
		level: 3,
		school: 'Evocation',
		castingTime: '1 bonus action',
		ritual: false,
		range: '60 feet',
		components: 'V',
		duration: 'Instantaneous'
	},
	'mass-suggestion': {
		name: 'Mass Suggestion',
		level: 6,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, M (a snake\u2019s tongue and either a bit of honeycomb or a drop of sweet oil)',
		duration: '24 hours'
	},
	maze: {
		name: 'Maze',
		level: 8,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Concentration, up to 10 minutes'
	},
	'meld-into-stone': {
		name: 'Meld into Stone',
		level: 3,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: true,
		range: 'Touch',
		components: 'V, S',
		duration: '8 hours'
	},
	mending: {
		name: 'Mending',
		level: 0,
		school: 'Transmutation',
		castingTime: '1 minute',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (two lodestones)',
		duration: 'Instantaneous'
	},
	message: {
		name: 'Message',
		level: 0,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S, M (a short piece of copper wire)',
		duration: '1 round'
	},
	'meteor-swarm': {
		name: 'Meteor Swarm',
		level: 9,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '1 mile',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'mind-blank': {
		name: 'Mind Blank',
		level: 8,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: '24 hours'
	},
	'minor-illusion': {
		name: 'Minor Illusion',
		level: 0,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'S, M (a bit of fleece)',
		duration: '1 minute'
	},
	'mirage-arcane': {
		name: 'Mirage Arcane',
		level: 7,
		school: 'Illusion',
		castingTime: '10 minutes',
		ritual: false,
		range: 'Sight',
		components: 'V, S',
		duration: '10 days'
	},
	'mirror-image': {
		name: 'Mirror Image',
		level: 2,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S',
		duration: '1 minute'
	},
	mislead: {
		name: 'Mislead',
		level: 5,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'S',
		duration: 'Concentration, up to 1 hour'
	},
	'misty-step': {
		name: 'Misty Step',
		level: 2,
		school: 'Conjuration',
		castingTime: '1 bonus action',
		ritual: false,
		range: 'Self',
		components: 'V',
		duration: 'Instantaneous'
	},
	'modify-memory': {
		name: 'Modify Memory',
		level: 5,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	moonbeam: {
		name: 'Moonbeam',
		level: 2,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S, M (several seeds of any moonseed plant and a piece of opalescent feldspar)',
		duration: 'Concentration, up to 1 minute'
	},
	'move-earth': {
		name: 'Move Earth',
		level: 6,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components:
			'V, S, M (an iron blade and a small bag containing a mixture of soils\u2014clay, loam, and sand)',
		duration: 'Concentration, up to 2 hours'
	},
	nondetection: {
		name: 'Nondetection',
		level: 3,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (a pinch of diamond dust worth 25 gp sprinkled over the target, which the spell consumes)',
		duration: '8 hours'
	},
	'pass-without-trace': {
		name: 'Pass without Trace',
		level: 2,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S, M (ashes from a burned leaf of mistletoe and a sprig of spruce)',
		duration: 'Concentration, up to 1 hour'
	},
	passwall: {
		name: 'Passwall',
		level: 5,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (a pinch of sesame seeds)',
		duration: '1 hour'
	},
	'phantasmal-killer': {
		name: 'Phantasmal Killer',
		level: 4,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'phantom-steed': {
		name: 'Phantom Steed',
		level: 3,
		school: 'Illusion',
		castingTime: '1 minute',
		ritual: true,
		range: '30 feet',
		components: 'V, S',
		duration: '1 hour'
	},
	'planar-ally': {
		name: 'Planar Ally',
		level: 6,
		school: 'Conjuration',
		castingTime: '10 minutes',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'planar-binding': {
		name: 'Planar Binding',
		level: 5,
		school: 'Abjuration',
		castingTime: '1 hour',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (a jewel worth at least 1,000 gp, which the spell consumes)',
		duration: '24 hours'
	},
	'plane-shift': {
		name: 'Plane Shift',
		level: 7,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (a forked, metal rod worth at least 250 gp, attuned to a particular plane of existence)',
		duration: 'Instantaneous'
	},
	'plant-growth': {
		name: 'Plant Growth',
		level: 3,
		school: 'Transmutation',
		castingTime: '1 action or 8 hours',
		ritual: false,
		range: '150 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'poison-spray': {
		name: 'Poison Spray',
		level: 0,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '10 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	polymorph: {
		name: 'Polymorph',
		level: 4,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (a caterpillar cocoon)',
		duration: 'Concentration, up to 1 hour'
	},
	'power-word-kill': {
		name: 'Power Word Kill',
		level: 9,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V',
		duration: 'Instantaneous'
	},
	'power-word-stun': {
		name: 'Power Word Stun',
		level: 8,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V',
		duration: 'Instantaneous'
	},
	'prayer-of-healing': {
		name: 'Prayer of Healing',
		level: 2,
		school: 'Evocation',
		castingTime: '10 minutes',
		ritual: false,
		range: '30 feet',
		components: 'V',
		duration: 'Instantaneous'
	},
	prestidigitation: {
		name: 'Prestidigitation',
		level: 0,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '10 feet',
		components: 'V, S',
		duration: 'Up to 1 hour'
	},
	'prismatic-spray': {
		name: 'Prismatic Spray',
		level: 7,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self (60-foot cone)',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'prismatic-wall': {
		name: 'Prismatic Wall',
		level: 9,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: '10 minutes'
	},
	'private-sanctum': {
		name: 'Private Sanctum',
		level: 4,
		school: 'Abjuration',
		castingTime: '10 minutes',
		ritual: false,
		range: '120 feet',
		components:
			'V, S, M (a thin sheet of lead, a piece of opaque glass, a wad of cotton or cloth, and powdered chrysolite)',
		duration: '24 hours'
	},
	'produce-flame': {
		name: 'Produce Flame',
		level: 0,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S',
		duration: '10 minutes'
	},
	'programmed-illusion': {
		name: 'Programmed Illusion',
		level: 6,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S, M (a bit of fleece and jade dust worth at least 25 gp)',
		duration: 'Until dispelled'
	},
	'project-image': {
		name: 'Project Image',
		level: 7,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: '500 miles',
		components: 'V, S, M (a small replica of you made from materials worth at least 5 gp)',
		duration: 'Concentration, up to 1 day'
	},
	'protection-from-energy': {
		name: 'Protection from Energy',
		level: 3,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: 'Concentration, up to 1 hour'
	},
	'protection-from-evil-and-good': {
		name: 'Protection from Evil and Good',
		level: 1,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (holy water or powdered silver and iron, which the spell consumes)',
		duration: 'Concentration, up to 10 minutes'
	},
	'protection-from-poison': {
		name: 'Protection from Poison',
		level: 2,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: '1 hour'
	},
	'purify-food-and-drink': {
		name: 'Purify Food and Drink',
		level: 1,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: true,
		range: '10 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'raise-dead': {
		name: 'Raise Dead',
		level: 5,
		school: 'Necromancy',
		castingTime: '1 hour',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a diamond worth at least 500 gp, which the spell consumes)',
		duration: 'Instantaneous'
	},
	'ray-of-enfeeblement': {
		name: 'Ray of Enfeeblement',
		level: 2,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'ray-of-frost': {
		name: 'Ray of Frost',
		level: 0,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	regenerate: {
		name: 'Regenerate',
		level: 7,
		school: 'Transmutation',
		castingTime: '1 minute',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a prayer wheel and holy water)',
		duration: '1 hour'
	},
	reincarnate: {
		name: 'Reincarnate',
		level: 5,
		school: 'Transmutation',
		castingTime: '1 hour',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (rare oils and unguents worth at least 1,000 gp, which the spell consumes)',
		duration: 'Instantaneous'
	},
	'remove-curse': {
		name: 'Remove Curse',
		level: 3,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'resilient-sphere': {
		name: 'Resilient Sphere',
		level: 4,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components:
			'V, S, M (a hemispherical piece of clear crystal and a matching hemispherical piece of gum arabic)',
		duration: 'Concentration, up to 1 minute'
	},
	resistance: {
		name: 'Resistance',
		level: 0,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a miniature cloak)',
		duration: 'Concentration, up to 1 minute'
	},
	resurrection: {
		name: 'Resurrection',
		level: 7,
		school: 'Necromancy',
		castingTime: '1 hour',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a diamond worth at least 1,000 gp, which the spell consumes)',
		duration: 'Instantaneous'
	},
	'reverse-gravity': {
		name: 'Reverse Gravity',
		level: 7,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '100 feet',
		components: 'V, S, M (a lodestone and iron filings)',
		duration: 'Concentration, up to 1 minute'
	},
	revivify: {
		name: 'Revivify',
		level: 3,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (diamonds worth 300 gp, which the spell consumes)',
		duration: 'Instantaneous'
	},
	'rope-trick': {
		name: 'Rope Trick',
		level: 2,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (powdered corn extract and a twisted loop of parchment)',
		duration: '1 hour'
	},
	'sacred-flame': {
		name: 'Sacred Flame',
		level: 0,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	sanctuary: {
		name: 'Sanctuary',
		level: 1,
		school: 'Abjuration',
		castingTime: '1 bonus action',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (a small silver mirror)',
		duration: '1 minute'
	},
	'scorching-ray': {
		name: 'Scorching Ray',
		level: 2,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	scrying: {
		name: 'Scrying',
		level: 5,
		school: 'Divination',
		castingTime: '10 minutes',
		ritual: false,
		range: 'Self',
		components:
			'V, S, M (a focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water)',
		duration: 'Concentration, up to 10 minutes'
	},
	'secret-chest': {
		name: 'Secret Chest',
		level: 4,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (an exquisite chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth at least 5,000 gp, and a Tiny replica made from the same materials worth at least 50 gp)',
		duration: 'Instantaneous'
	},
	'see-invisibility': {
		name: 'See Invisibility',
		level: 2,
		school: 'Divination',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S, M (a pinch of talc and a small sprinkling of powdered silver)',
		duration: '1 hour'
	},
	seeming: {
		name: 'Seeming',
		level: 5,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S',
		duration: '8 hours'
	},
	sending: {
		name: 'Sending',
		level: 3,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: 'Unlimited',
		components: 'V, S, M (a short piece of fine copper wire)',
		duration: '1 round'
	},
	sequester: {
		name: 'Sequester',
		level: 7,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (a powder composed of diamond, emerald, ruby, and sapphire dust worth at least 5,000 gp, which the spell consumes)',
		duration: 'Until dispelled'
	},
	shapechange: {
		name: 'Shapechange',
		level: 9,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components:
			'V, S, M (a jade circlet worth at least 1,500 gp, which you must place on your head before you cast the spell)',
		duration: 'Concentration, up to 1 hour'
	},
	shatter: {
		name: 'Shatter',
		level: 2,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (a chip of mica)',
		duration: 'Instantaneous'
	},
	shield: {
		name: 'Shield',
		level: 1,
		school: 'Abjuration',
		castingTime:
			'1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell',
		ritual: false,
		range: 'Self',
		components: 'V, S',
		duration: '1 round'
	},
	'shield-of-faith': {
		name: 'Shield of Faith',
		level: 1,
		school: 'Abjuration',
		castingTime: '1 bonus action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (a small parchment with a bit of holy text written on it)',
		duration: 'Concentration, up to 10 minutes'
	},
	shillelagh: {
		name: 'Shillelagh',
		level: 0,
		school: 'Transmutation',
		castingTime: '1 bonus action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (mistletoe, a shamrock leaf, and a club or quarterstaff)',
		duration: '1 minute'
	},
	'shocking-grasp': {
		name: 'Shocking Grasp',
		level: 0,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	silence: {
		name: 'Silence',
		level: 2,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: true,
		range: '120 feet',
		components: 'V, S',
		duration: 'Concentration, up to 10 minutes'
	},
	'silent-image': {
		name: 'Silent Image',
		level: 1,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (a bit of fleece)',
		duration: 'Concentration, up to 10 minutes'
	},
	simulacrum: {
		name: 'Simulacrum',
		level: 7,
		school: 'Illusion',
		castingTime: '12 hours',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (snow or ice in quantities sufficient to made a life-size copy of the duplicated creature; some hair, fingernail clippings, or other piece of that creature\u2019s body placed inside the snow or ice; and powdered ruby worth 1,500 gp, sprinkled over the duplicate and consumed by the spell)',
		duration: 'Until dispelled'
	},
	sleep: {
		name: 'Sleep',
		level: 1,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '90 feet',
		components: 'V, S, M (a pinch of fine sand, rose petals, or a cricket)',
		duration: '1 minute'
	},
	'sleet-storm': {
		name: 'Sleet Storm',
		level: 3,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '150 feet',
		components: 'V, S, M (a pinch of dust and a few drops of water)',
		duration: 'Concentration, up to 1 minute'
	},
	slow: {
		name: 'Slow',
		level: 3,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S, M (a drop of molasses)',
		duration: 'Concentration, up to 1 minute'
	},
	'spare-the-dying': {
		name: 'Spare the Dying',
		level: 0,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'speak-with-animals': {
		name: 'Speak with Animals',
		level: 1,
		school: 'Divination',
		castingTime: '1 action',
		ritual: true,
		range: 'Self',
		components: 'V, S',
		duration: '10 minutes'
	},
	'speak-with-dead': {
		name: 'Speak with Dead',
		level: 3,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: '10 feet',
		components: 'V, S, M (burning incense)',
		duration: '10 minutes'
	},
	'speak-with-plants': {
		name: 'Speak with Plants',
		level: 3,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self (30-foot radius)',
		components: 'V, S',
		duration: '10 minutes'
	},
	'spider-climb': {
		name: 'Spider Climb',
		level: 2,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (a drop of bitumen and a spider)',
		duration: 'Concentration, up to 1 hour'
	},
	'spike-growth': {
		name: 'Spike Growth',
		level: 2,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '150 feet',
		components: 'V, S, M (seven sharp thorns or seven small twigs, each sharpened to a point)',
		duration: 'Concentration, up to 10 minutes'
	},
	'spirit-guardians': {
		name: 'Spirit Guardians',
		level: 3,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Self (15-foot radius)',
		components: 'V, S, M (a holy symbol)',
		duration: 'Concentration, up to 10 minutes'
	},
	'spiritual-weapon': {
		name: 'Spiritual Weapon',
		level: 2,
		school: 'Evocation',
		castingTime: '1 bonus action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: '1 minute'
	},
	'stinking-cloud': {
		name: 'Stinking Cloud',
		level: 3,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '90 feet',
		components: 'V, S, M (a rotten egg or several skunk cabbage leaves)',
		duration: 'Concentration, up to 1 minute'
	},
	'stone-shape': {
		name: 'Stone Shape',
		level: 4,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (soft clay, which must be worked into roughly the desired shape of the stone object)',
		duration: 'Instantaneous'
	},
	stoneskin: {
		name: 'Stoneskin',
		level: 4,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, S, M (diamond dust worth 100 gp, which the spell consumes)',
		duration: 'Concentration, up to 1 hour'
	},
	'storm-of-vengeance': {
		name: 'Storm of Vengeance',
		level: 9,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Sight',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	suggestion: {
		name: 'Suggestion',
		level: 2,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, M (a snake\u2019s tongue and either a bit of honeycomb or a drop of sweet oil)',
		duration: 'Concentration, up to 8 hours'
	},
	sunbeam: {
		name: 'Sunbeam',
		level: 6,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self (60-foot line)',
		components: 'V, S, M (a magnifying glass)',
		duration: 'Concentration, up to 1 minute'
	},
	sunburst: {
		name: 'Sunburst',
		level: 8,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '150 feet',
		components: 'V, S, M (fire and a piece of sunstone)',
		duration: 'Instantaneous'
	},
	symbol: {
		name: 'Symbol',
		level: 7,
		school: 'Abjuration',
		castingTime: '1 minute',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (mercury, phosphorus, and powdered diamond and opal with a total value of at least 1,000 gp, which the spell consumes)',
		duration: 'Until dispelled or triggered'
	},
	telekinesis: {
		name: 'Telekinesis',
		level: 5,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: 'Concentration, up to 10 minutes'
	},
	'telepathic-bond': {
		name: 'Telepathic Bond',
		level: 5,
		school: 'Divination',
		castingTime: '1 action',
		ritual: true,
		range: '30 feet',
		components: 'V, S, M (pieces of eggshell from two different kinds of creatures)',
		duration: '1 hour'
	},
	teleport: {
		name: 'Teleport',
		level: 7,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '10 feet',
		components: 'V',
		duration: 'Instantaneous'
	},
	'teleportation-circle': {
		name: 'Teleportation Circle',
		level: 5,
		school: 'Conjuration',
		castingTime: '1 minute',
		ritual: false,
		range: '10 feet',
		components:
			'V, M (rare chalks and inks infused with precious gems with 50 gp, which the spell consumes)',
		duration: '1 round'
	},
	thaumaturgy: {
		name: 'Thaumaturgy',
		level: 0,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V',
		duration: 'Up to 1 minute'
	},
	thunderwave: {
		name: 'Thunderwave',
		level: 1,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self (15-foot cube)',
		components: 'V, S',
		duration: 'Instantaneous'
	},
	'time-stop': {
		name: 'Time Stop',
		level: 9,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V',
		duration: 'Instantaneous'
	},
	'tiny-hut': {
		name: 'Tiny Hut',
		level: 3,
		school: 'Evocation',
		castingTime: '1 minute',
		ritual: true,
		range: 'Self (10-foot-radius hemisphere)',
		components: 'V, S, M (a small crystal bead)',
		duration: '8 hours'
	},
	tongues: {
		name: 'Tongues',
		level: 3,
		school: 'Divination',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components: 'V, M (a small clay model of a ziggurat)',
		duration: '1 hour'
	},
	'transport-via-plants': {
		name: 'Transport via Plants',
		level: 6,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '10 feet',
		components: 'V, S',
		duration: '1 round'
	},
	'tree-stride': {
		name: 'Tree Stride',
		level: 5,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'true-polymorph': {
		name: 'True Polymorph',
		level: 9,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (a drop of mercury, a dollop of gum arabic, and a wisp of smoke)',
		duration: 'Concentration, up to 1 hour'
	},
	'true-resurrection': {
		name: 'True Resurrection',
		level: 9,
		school: 'Necromancy',
		castingTime: '1 hour',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (a sprinkle of holy water and diamonds worth at least 25,000 gp, which the spell consumes)',
		duration: 'Instantaneous'
	},
	'true-seeing': {
		name: 'True Seeing',
		level: 6,
		school: 'Divination',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (an ointment for the eyes that costs 25 gp; is made from mushroom powder, saffron, and fat; and is consumed by the spell)',
		duration: '1 hour'
	},
	'true-strike': {
		name: 'True Strike',
		level: 0,
		school: 'Divination',
		castingTime: '1 action',
		ritual: false,
		range: '30 feet',
		components: 'S',
		duration: 'Concentration, up to 1 round'
	},
	'unseen-servant': {
		name: 'Unseen Servant',
		level: 1,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: true,
		range: '60 feet',
		components: 'V, S, M (a piece of string and a bit of wood)',
		duration: '1 hour'
	},
	'vampiric-touch': {
		name: 'Vampiric Touch',
		level: 3,
		school: 'Necromancy',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'vicious-mockery': {
		name: 'Vicious Mockery',
		level: 0,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V',
		duration: 'Instantaneous'
	},
	'wall-of-fire': {
		name: 'Wall of Fire',
		level: 4,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S, M (a small piece of phosphorus)',
		duration: 'Concentration, up to 1 minute'
	},
	'wall-of-force': {
		name: 'Wall of Force',
		level: 5,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S, M (a pinch of powder made by crushing a clear gemstone)',
		duration: 'Concentration, up to 10 minutes'
	},
	'wall-of-ice': {
		name: 'Wall of Ice',
		level: 6,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S, M (a small piece of quartz)',
		duration: 'Concentration, up to 10 minutes'
	},
	'wall-of-stone': {
		name: 'Wall of Stone',
		level: 5,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S, M (a small block of granite)',
		duration: 'Concentration, up to 10 minutes'
	},
	'wall-of-thorns': {
		name: 'Wall of Thorns',
		level: 6,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S, M (a handful of thorns)',
		duration: 'Concentration, up to 10 minutes'
	},
	'warding-bond': {
		name: 'Warding Bond',
		level: 2,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Touch',
		components:
			'V, S, M (a pair of platinum rings worth at least 50 gp each, which you and the target must wear for the duration)',
		duration: '1 hour'
	},
	'water-breathing': {
		name: 'Water Breathing',
		level: 3,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: true,
		range: '30 feet',
		components: 'V, S, M (a short reed or piece of straw)',
		duration: '24 hours'
	},
	'water-walk': {
		name: 'Water Walk',
		level: 3,
		school: 'Transmutation',
		castingTime: '1 action',
		ritual: true,
		range: '30 feet',
		components: 'V, S, M (a piece of cork)',
		duration: '1 hour'
	},
	web: {
		name: 'Web',
		level: 2,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S, M (a bit of spiderweb)',
		duration: 'Concentration, up to 1 hour'
	},
	weird: {
		name: 'Weird',
		level: 9,
		school: 'Illusion',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S',
		duration: 'Concentration, up to 1 minute'
	},
	'wind-walk': {
		name: 'Wind Walk',
		level: 6,
		school: 'Transmutation',
		castingTime: '1 minute',
		ritual: false,
		range: '30 feet',
		components: 'V, S, M (fire and holy water)',
		duration: '8 hours'
	},
	'wind-wall': {
		name: 'Wind Wall',
		level: 3,
		school: 'Evocation',
		castingTime: '1 action',
		ritual: false,
		range: '120 feet',
		components: 'V, S, M (a tiny fan and a feather of exotic origin)',
		duration: 'Concentration, up to 1 minute'
	},
	wish: {
		name: 'Wish',
		level: 9,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: 'Self',
		components: 'V',
		duration: 'Instantaneous'
	},
	'word-of-recall': {
		name: 'Word of Recall',
		level: 6,
		school: 'Conjuration',
		castingTime: '1 action',
		ritual: false,
		range: '5 feet',
		components: 'V',
		duration: 'Instantaneous'
	},
	'zone-of-truth': {
		name: 'Zone of Truth',
		level: 2,
		school: 'Enchantment',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: '10 minutes'
	}
} as const;
