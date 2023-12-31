// Spells from the D&D 5e System Reference Document 5.1
// https://dnd.wizards.com/resources/systems-reference-document
export const SRD_SPELLS = [
	'acid-arrow',
	'acid-splash',
	'aid',
	'alarm',
	'alter-self',
	'animal-friendship',
	'animal-messenger',
	'animal-shapes',
	'animate-dead',
	'animate-objects',
	'antilife-shell',
	'antimagic-field',
	'antipathy-sympathy',
	'arcane-eye',
	'arcane-hand',
	'arcane-lock',
	'arcane-sword',
	'arcanists-magic-aura',
	'astral-projection',
	'augury',
	'awaken',
	'bane',
	'banishment',
	'barkskin',
	'beacon-of-hope',
	'bestow-curse',
	'black-tentacles',
	'blade-barrier',
	'bless',
	'blight',
	'blindness-deafness',
	'blink',
	'blur',
	'branding-smite',
	'burning-hands',
	'call-lightning',
	'calm-emotions',
	'chain-lightning',
	'charm-person',
	'chill-touch',
	'circle-of-death',
	'clairvoyance',
	'clone',
	'cloudkill',
	'color-spray',
	'command',
	'commune',
	'commune-with-nature',
	'comprehend-languages',
	'compulsion',
	'cone-of-cold',
	'confusion',
	'conjure-animals',
	'conjure-celestial',
	'conjure-elemental',
	'conjure-fey',
	'conjure-minor-elementals',
	'conjure-woodland-beings',
	'contact-other-plane',
	'contagion',
	'contingency',
	'continual-flame',
	'control-water',
	'control-weather',
	'counterspell',
	'create-food-and-water',
	'create-or-destroy-water',
	'create-undead',
	'creation',
	'cure-wounds',
	'dancing-lights',
	'darkness',
	'darkvision',
	'daylight',
	'death-ward',
	'delayed-blast-fireball',
	'demiplane',
	'detect-evil-and-good',
	'detect-magic',
	'detect-poison-and-disease',
	'detect-thoughts',
	'dimension-door',
	'disguise-self',
	'disintegrate',
	'dispel-evil-and-good',
	'dispel-magic',
	'divination',
	'divine-favor',
	'divine-word',
	'dominate-beast',
	'dominate-monster',
	'dominate-person',
	'dream',
	'druidcraft',
	'earthquake',
	'eldritch-blast',
	'enhance-ability',
	'enlarge-reduce',
	'entangle',
	'enthrall',
	'etherealness',
	'expeditious-retreat',
	'eyebite',
	'fabricate',
	'faerie-fire',
	'faithful-hound',
	'false-life',
	'fear',
	'feather-fall',
	'feeblemind',
	'find-familiar',
	'find-steed',
	'find-the-path',
	'find-traps',
	'finger-of-death',
	'fireball',
	'fire-bolt',
	'fire-shield',
	'fire-storm',
	'flame-blade',
	'flame-strike',
	'flaming-sphere',
	'flesh-to-stone',
	'floating-disk',
	'fly',
	'fog-cloud',
	'forbiddance',
	'forcecage',
	'foresight',
	'freedom-of-movement',
	'freezing-sphere',
	'gaseous-form',
	'gate',
	'geas',
	'gentle-repose',
	'giant-insect',
	'glibness',
	'globe-of-invulnerability',
	'glyph-of-warding',
	'goodberry',
	'grease',
	'greater-invisibility',
	'greater-restoration',
	'guardian-of-faith',
	'guards-and-wards',
	'guidance',
	'guiding-bolt',
	'gust-of-wind',
	'hallow',
	'hallucinatory-terrain',
	'harm',
	'haste',
	'heal',
	'healing-word',
	'heat-metal',
	'hellish-rebuke',
	'heroes-feast',
	'heroism',
	'hideous-laughter',
	'hold-monster',
	'hold-person',
	'holy-aura',
	'hunters-mark',
	'hypnotic-pattern',
	'ice-storm',
	'identify',
	'illusory-script',
	'imprisonment',
	'incendiary-cloud',
	'inflict-wounds',
	'insect-plague',
	'instant-summons',
	'invisibility',
	'irresistible-dance',
	'jump',
	'knock',
	'legend-lore',
	'lesser-restoration',
	'levitate',
	'light',
	'lightning-bolt',
	'locate-animals-or-plants',
	'locate-creature',
	'locate-object',
	'longstrider',
	'mage-armor',
	'mage-hand',
	'magic-circle',
	'magic-jar',
	'magic-missile',
	'magic-mouth',
	'magic-weapon',
	'magnificent-mansion',
	'major-image',
	'mass-cure-wounds',
	'mass-heal',
	'mass-healing-word',
	'mass-suggestion',
	'maze',
	'meld-into-stone',
	'mending',
	'message',
	'meteor-swarm',
	'mind-blank',
	'minor-illusion',
	'mirage-arcane',
	'mirror-image',
	'mislead',
	'misty-step',
	'modify-memory',
	'moonbeam',
	'move-earth',
	'nondetection',
	'pass-without-trace',
	'passwall',
	'phantasmal-killer',
	'phantom-steed',
	'planar-ally',
	'planar-binding',
	'plane-shift',
	'plant-growth',
	'poison-spray',
	'polymorph',
	'power-word-kill',
	'power-word-stun',
	'prayer-of-healing',
	'prestidigitation',
	'prismatic-spray',
	'prismatic-wall',
	'private-sanctum',
	'produce-flame',
	'programmed-illusion',
	'project-image',
	'protection-from-energy',
	'protection-from-evil-and-good',
	'protection-from-poison',
	'purify-food-and-drink',
	'raise-dead',
	'ray-of-enfeeblement',
	'ray-of-frost',
	'regenerate',
	'reincarnate',
	'remove-curse',
	'resilient-sphere',
	'resistance',
	'resurrection',
	'reverse-gravity',
	'revivify',
	'rope-trick',
	'sacred-flame',
	'sanctuary',
	'scorching-ray',
	'scrying',
	'secret-chest',
	'see-invisibility',
	'seeming',
	'sending',
	'sequester',
	'shapechange',
	'shatter',
	'shield',
	'shield-of-faith',
	'shillelagh',
	'shocking-grasp',
	'silence',
	'silent-image',
	'simulacrum',
	'sleep',
	'sleet-storm',
	'slow',
	'spare-the-dying',
	'speak-with-animals',
	'speak-with-dead',
	'speak-with-plants',
	'spider-climb',
	'spike-growth',
	'spirit-guardians',
	'spiritual-weapon',
	'stinking-cloud',
	'stone-shape',
	'stoneskin',
	'storm-of-vengeance',
	'suggestion',
	'sunbeam',
	'sunburst',
	'symbol',
	'telekinesis',
	'telepathic-bond',
	'teleport',
	'teleportation-circle',
	'thaumaturgy',
	'thunderwave',
	'time-stop',
	'tiny-hut',
	'tongues',
	'transport-via-plants',
	'tree-stride',
	'true-polymorph',
	'true-resurrection',
	'true-seeing',
	'true-strike',
	'unseen-servant',
	'vampiric-touch',
	'vicious-mockery',
	'wall-of-fire',
	'wall-of-force',
	'wall-of-ice',
	'wall-of-stone',
	'wall-of-thorns',
	'warding-bond',
	'water-breathing',
	'water-walk',
	'web',
	'weird',
	'wind-walk',
	'wind-wall',
	'wish',
	'word-of-recall',
	'zone-of-truth'
] as const;

export type SRDSpell = (typeof SRD_SPELLS)[number];

/**
 * Converts input string to SRDSpell if possible, returning undefined if not.
 * @export
 * @param {string} spellString
 * @return {*}  {(SRDSpell | undefined)}
 */
export function stringToSRDSpell(spellString: string): SRDSpell | undefined {
	return SRD_SPELLS.find((spell) => spell === spellString);
}

export const SRD_SPELLS_WITH_ERRATA: readonly SRDSpell[] = [
	'acid-splash',
	'call-lightning',
	'clone',
	'color-spray',
	'contagion',
	'disintegrate',
	'find-familiar',
	'find-steed',
	'glyph-of-warding',
	'heroes-feast',
	'levitate',
	'mass-cure-wounds',
	'mass-heal',
	'moonbeam',
	'magnificent-mansion',
	'phantasmal-killer',
	'polymorph',
	'prismatic-wall',
	'revivify',
	'sanctuary',
	'simulacrum',
	'sleet-storm',
	'slow',
	'storm-of-vengeance',
	'true-polymorph',
	'true-resurrection',
	'unseen-servant',
	'weird'
] as const;

/**
 * Returns true if the given spell ID is in the SRD and has errata.
 * @export
 * @param {string} spellString
 * @return {*}  {boolean}
 */
export function spellHasErrata(spellString: string): boolean {
	const spellInSRD = stringToSRDSpell(spellString);
	if (spellInSRD === undefined) {
		return false;
	} else {
		return SRD_SPELLS_WITH_ERRATA.includes(spellInSRD);
	}
}
