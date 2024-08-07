import type { DragonConfig } from '$lib/dragon/dragon-config';
import type { Condition } from '$lib/conditions';
import type { AppMonster } from '$lib/monsters';

export type SkeletonModalParentType = {
	position: string;
	// ---
	background: string;
	width: string;
	height: string;
	padding: string;
	spacing: string;
	rounded: string;
	shadow: string;
	// ---
	buttonNeutral: string;
	buttonPositive: string;
	buttonTextCancel: string;
	buttonTextConfirm: string;
	buttonTextSubmit: string;
	// ---
	regionBackdrop: string;
	regionHeader: string;
	regionBody: string;
	regionFooter: string;
	// ---
	onClose: () => void;
};

export type BaseModalValue = {
	onDestroyFocusElement?: HTMLElement;
};

export type AbbrModalValue = BaseModalValue & {
	abbreviation: string;
	definition: string;
	omitPrefixes?: boolean;
};

export type AddLocalSpellModalValue = BaseModalValue & {
	name?: string;
	id?: string;
	fromManage?: boolean;
};

export type ConditionModalValue = BaseModalValue & {
	condition: Condition;
};

export type DragonShareModalValue = BaseModalValue & {
	dragon?: DragonConfig;
};

export type ManageLocalSpellsModalValue = BaseModalValue;

export type MonsterModalValue = BaseModalValue & {
	monster: AppMonster;
};

export type SpellModalValue = BaseModalValue & {
	name: string;
	id: string;
};
