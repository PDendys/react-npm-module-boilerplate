import React, { useState } from 'react';

export const SuperCoolComponent = () => {
	const [count, setCount] = useState<number>(0);
	const updateCount = () => {
		setCount(count + 1)
	}
	return (
		<div onClick={updateCount}>
		 	<div>The count is: {count}</div>
		</div>
	)
}
