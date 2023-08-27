interface IConditionProps {
	if: boolean;
	then: React.ReactNode;
	else: React.ReactNode;
}

export const Condition = ({ if: condition, then, else: differently }: IConditionProps) => {
	if (condition) return <>{then}</>;
	return <>{differently}</>;
};
