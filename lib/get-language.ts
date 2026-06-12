export function getLanguage(filePath: string) {
    const extension = filePath.split(".").pop()?.toLowerCase()

    switch (extension) {
        case "tsx":
        case "ts":
            return "typescript"

        case "jsx":
        case "js":
            return "javascript"

        case "css":
            return "css"

        case "html":
            return "html"

        case "json":
            return "json"

        default:
            return "text"
    }
}