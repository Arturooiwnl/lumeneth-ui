import Footer from "@/components/footer";
import Components from "@/docs/components";
import Sidebar from "@/docs/components/sidebar";
import DocsLayout from "@/layouts/docs-layout";

export default function ComponentsPage() {
    return (
        <DocsLayout>
            <Sidebar />
            <Components />
        </DocsLayout>
    )
}