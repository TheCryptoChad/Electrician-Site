import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { email } from '@/lib/constants';

export default function ContactForm() {
	return (
		<div className='relative flex flex-col gap-5 rounded-3xl border bg-white px-8 pb-16 pt-8 shadow-lg'>
			<h2 className='text-3xl font-extrabold'>Drop us a line</h2>

			<form
				action={`https://formsubmit.co/${email}`}
				className='flex w-full flex-col gap-4'
				method='POST'
			>
				<div className='flex gap-2'>
					<Input
						placeholder='First Name'
						required
						type='text'
					/>

					<Input
						placeholder='Last Name'
						required
						type='text'
					/>
				</div>

				<div className='flex gap-2'>
					<Input
						placeholder='Phone'
						required
						type='phone'
					/>

					<Input
						placeholder='Email'
						required
						type='tel'
					/>
				</div>

				<Textarea
					className='resize-none'
					required
					placeholder='Message'
				/>

				<Button
					className='hover:bg-header-button-gradient-hover bg-header-button-gradient absolute -bottom-6 left-1/2 h-12 w-2/3 -translate-x-[50%] border border-black text-xl font-extrabold text-black'
					type='submit'
				>
					Send Message
				</Button>
			</form>
		</div>
	);
}
