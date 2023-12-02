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
