"use client"

import { HoldToInteract } from "./component"
import { Trash2, ShieldAlert } from "lucide-react"

export default function HoldToInteractDemo() {

    return (
        <div className="w-full space-y-2 flex flex-col items-center">
            <HoldToInteract
                duration={1500}
                label="Hold to Empty Trash"
                successLabel="Trash Emptied"
                onComplete={() => console.log("Trash purged.")}
            />

            <HoldToInteract
                duration={3000}
                fillClassName="bg-primary/10"
                successChildren={
                    <span className="text-destructive font-semibold flex items-center gap-2">
                        <ShieldAlert className="size-4" /> Server Powered Off
                    </span>
                }
            >
                <div className="flex items-center gap-2 text-destructive/80">
                    <Trash2 className="size-4" />
                    <span>Hold to Shutdown Server</span>
                </div>
            </HoldToInteract>

        </div>
    )
}