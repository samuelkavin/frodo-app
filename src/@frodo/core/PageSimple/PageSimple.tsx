import { styled } from '@mui/material/styles';
import { forwardRef, memo, ReactNode, useRef } from 'react';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';
import { Theme } from '@mui/system';


type FrodoPageSimpleProps = SystemStyleObject<Theme> & {
	className?: string;
	header?: ReactNode;
	content?: ReactNode;
};

const FrodoPageSimple = forwardRef<
	{ toggleLeftSidebar: (T: boolean) => void; toggleRightSidebar: (T: boolean) => void },
	FrodoPageSimpleProps
>((props, ref) => {
	const rootRef = useRef(null);
	const { className, header, content } = props;

	return (
		<div
			className={className}
			ref={rootRef}
		>
			<div className="z-10 flex h-full flex-auto flex-col">
				<div className="FrodoPageSimple-wrapper">
					<div className="FrodoPageSimple-contentWrapper">
						{header}
						{content}
					</div>
				</div>
			</div>
		</div>
	);
});

export default memo(styled(FrodoPageSimple)``);
