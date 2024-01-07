import { FrodoNavItemType } from './types/NavItemType';

const components: { [key: string]: React.FC<unknown> } = {};

/** Register a component to NavItem. */
export function registerComponent<T = unknown>(name: string, Component: React.FC<T>) {
	components[name] = Component as React.FC<unknown>;
}

export type FrodoNavItemComponentProps = {
	type: string;
	item: FrodoNavItemType;
	dense?: boolean;
	nestedLevel?: number;
	onItemClick?: (T: FrodoNavItemType) => void;
	checkPermission?: boolean;
};

export default function FrodoNavItem(props: FrodoNavItemComponentProps) {
	const { type } = props;

	const C = components[type];

	return C ? <C {...(props as object)} /> : null;
}
