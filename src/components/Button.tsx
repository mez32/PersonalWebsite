import React from 'react'

type Props = {
	children: JSX.Element | JSX.Element[] | string
}

const Button: React.FC<Props> = ({ children }) => {
	return (
		<button className='mt-4 border p-2 bg-neutral-900 rounded-lg border-neutral-600 hover:bg-neutral-700'>
			{children}
		</button>
	)
}

export default Button
