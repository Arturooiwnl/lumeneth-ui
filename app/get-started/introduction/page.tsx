import Sidebar from "@/docs/components/sidebar";
import Introduction from "@/docs/introduction";
import DocsLayout from "@/layouts/docs-layout";

export default function IntroductionPage() {
    return (
        <DocsLayout>
            <Sidebar />
            <Introduction />
        </DocsLayout>
    )
}