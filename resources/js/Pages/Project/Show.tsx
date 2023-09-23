import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps, Project, Workspace } from "@/types";



export default function Show({ auth, projectList, project }: PageProps<{ project: Project, workspace: Workspace, projectList: Project[] }>) {
    return (
        <Authenticated user={auth.user} projectList={projectList} workspaceList={[]}>
            <div className="p-12 text-gray-400 w-full">
                <section className="flex flex-row">
                    <div>
                        <h1 className="font-semibold text-2xl">
                            {project.name}
                        </h1>
                    </div>
                    <div>
                        Avatar, Share BUtton
                    </div>
                </section>
                <section>
                    Filter Sort Hide
                </section>
                <section>
                    View Content
                </section>
            </div>
        </Authenticated>
    )
}