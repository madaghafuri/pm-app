import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { router, useForm } from "@inertiajs/react";
import { ChangeEvent, ChangeEventHandler, FormEvent } from "react";

export default function CreateProjectForm() {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({ name: '' });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        post(route('workspace.project.store', 1));
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData('name', event.target.value);
    }

    return (
        <section className="w-1/3">
            <header>
                <h1 className="font-semibold text-3xl">New Project</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <div className="mt-6">
                    <InputLabel htmlFor="name" value="Project Name" />
                    <TextInput id="name" className="mt-1 block w-full" required isFocused autoComplete="name" onChange={handleChange} />
                </div>

                <div className="mt-6">
                    <InputLabel htmlFor="view" value="Default View" />
                    <div className="grid grid-cols-2 grid-flow-row gap-2">
                        <SecondaryButton spacing="xl">List</SecondaryButton>
                        <SecondaryButton spacing="xl">Timeline</SecondaryButton>
                        <SecondaryButton spacing="xl">Board</SecondaryButton>
                        <SecondaryButton spacing="xl">Calendar</SecondaryButton>
                    </div>
                </div>

                <div className="mt-6">
                    <PrimaryButton disabled={processing} type="submit">Continue</PrimaryButton>
                </div>
            </form>
        </section>
    )
}