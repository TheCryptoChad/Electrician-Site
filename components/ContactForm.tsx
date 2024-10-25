import { email } from "@/lib/constants";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
	return (
		<div className='flex relative flex-col gap-5 rounded-3xl border shadow-lg bg-white px-8 pt-8 pb-16'>
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
					className='w-2/3 absolute left-1/2 -translate-x-[50%] -bottom-6 hover:bg-header-button-gradient-hover bg-header-button-gradient h-12 border border-black text-black'
					type='submit'
				>
					Send Message
				</Button>
			</form>
		</div>
	);
}
