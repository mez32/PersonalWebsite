import React from 'react'

type Props = {
	children: JSX.Element | JSX.Element[] | string
}

const Button: React.FC<Props> = ({ children }) => {
	return (
		<button className='mt-4 border border-neutral-700 border-opacity-60 p-2 bg-neutral-900 rounded-lg hover:bg-neutral-700 hover:border-neutral-900 active:scale-90'>
			{children}
		</button>
	)
}

export default Button
