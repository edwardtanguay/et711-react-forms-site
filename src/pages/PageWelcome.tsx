import { FormEvent } from "react";

export const PageWelcome = () => {

	const handleFormSubmit = (event : FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.target as HTMLFormElement);
		console.log(data);
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<fieldset className="border border-gray-500 p-4 w-full sm:w-40 rounded">
				<legend>Welcome</legend>

				<div className="mb-4 flex gap-2">
					<label className="w-[5rem]" htmlFor="firstName">
						First Name:
					</label>
					<input type="text" id="firstName" name="firstName" />
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[5rem]" htmlFor="lastName">
						Last Name:
					</label>
					<input type="text" id="lastName" name="lastName" />
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[5rem]" htmlFor="address">
						Address:
					</label>
					<input type="text" id="address" name="address" />
				</div>

				<div className="mt-5 flex justify-end pr-3">
					<button>Submit</button>
				</div>
			</fieldset>
		</form>
	);
};
