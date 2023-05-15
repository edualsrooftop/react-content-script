import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function Portal({ children }: { children: React.ReactNode }) {
    const [el, setEl] = useState<any>(null);

    useEffect(() => {
        if (window.document) {
            const portal = document.getElementById("__next");
            const el = document.createElement("div");
            portal?.appendChild(el);
            setEl(el);
            return () => {
                portal?.removeChild(el);
            };
        }
    }, []);

    return el ? createPortal(children, el) : null;
}


