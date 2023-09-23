import SecondaryButton from "@/Components/SecondaryButton";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import CreateProjectForm from "./CreateProjectForm";
import { PageProps } from "@/types";

export default function Create({ auth }: PageProps) {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 space-y-6 px-6 py-6">
            <div>
                <SecondaryButton>
                    <Link href={route('dashboard')}>
                        <ArrowLeft />
                    </Link>
                </SecondaryButton>
            </div>
            <div className="min-h-screen w-full px-32 flex flex-row gap-10">
                <CreateProjectForm />
                <section className="grow">Preview View</section>
            </div>
        </div>
    )
}