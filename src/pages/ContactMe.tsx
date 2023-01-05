import React from 'react'
import { Link } from 'react-router-dom'
import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconFileCode,
	IconArticle,
	IconMail,
	IconDownload,
} from '@tabler/icons'
import Button from '../components/Button'
import Divider from '../components/Divider'
import MainCard from '../components/MainCard'
import ToolTip from '../components/ToolTip'

const ContactMe: React.FC = () => {
	return (
		<div className='mb-4 md:mt-8'>
			<MainCard>
				<h1 className='pb-4'>Contact Me</h1>
				<Divider />
				<div className='flex justify-center text-left m-auto mt-8 w-80 '>
					<ul>
						<li className='mb-8'>
							<ToolTip text='linkedin.com/in/mez32'>
								<a
									href='https://www.linkedin.com/in/mez32'
									target='_blank'
									className='text-3xl hover:text-neutral-100'
								>
									<IconBrandLinkedin size={32} className='inline-block align-middle mb-1' />{' '}
									LinkedIn
								</a>
							</ToolTip>
						</li>
						<li className='mb-8'>
							<ToolTip text='github.com/mez32'>
								<a
									href='https://github.com/mez32'
									target='_blank'
									className='text-3xl hover:text-neutral-100'
								>
									<IconBrandGithub size={30} className='inline-block align-middle mb-1' /> GitHub
								</a>
							</ToolTip>
						</li>
						<li className='mb-8'>
							<ToolTip text='Email me: amesmer32@gmail.com'>
								<a
									href='mailto:amesmer32@gmail.com'
									target='_blank'
									className='text-3xl hover:text-neutral-100'
								>
									<IconMail size={30} className='inline-block align-middle mb-1' /> Email
								</a>
							</ToolTip>
						</li>
						<li className='mb-8'>
							<ToolTip text='View and save my dark themed resume'>
								<a
									href='/resume-dark-theme'
									target='_blank'
									className='text-3xl hover:text-neutral-100'
								>
									<IconDownload size={28} className='inline-block align-middle mb-2' /> Dark Resume
								</a>
							</ToolTip>
						</li>
						<li className='mb-4'>
							<ToolTip text='View and save my Light themed resume'>
								<a
									href='/resume-light-theme'
									target='_blank'
									className='text-3xl hover:text-neutral-100'
								>
									<IconDownload size={30} className='inline-block align-middle mb-2' /> Light Resume
								</a>
							</ToolTip>
						</li>
					</ul>
				</div>
				<Link to={'/'}>
					<Button>&larr; Home</Button>
				</Link>
			</MainCard>
		</div>
	)
}

export default ContactMe
