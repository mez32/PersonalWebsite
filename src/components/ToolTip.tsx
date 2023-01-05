import React from 'react'

type Props = {
	children: JSX.Element | JSX.Element[]
	text: string
}

const ToolTip: React.FC<Props> = ({ children, text }) => {
	return (
		<span className='group relative'>
			<span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-900 px-2 py-1 text-sm text-neutral-200 opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
				{text}
			</span>

			{children}
		</span>
	)
}

export default ToolTip
