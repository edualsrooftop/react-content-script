import { PlayIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { classNames } from "../utils";
import { Portal } from "./Portal";

const defCoords = {
    left: -10000,
    right: 0,
    middle: 0,
    center: 0,
    top: -10000,
    bottom: 0,
};

function Tooltip({ content, position = "bottom", children }) {
    const [coords, setCoords] = useState(defCoords);
    const [showTooltip, setShowTooltip] = useState(false);
    const contentRef = useRef<any>();

    const mouseEnter = (e) => {
        const rect = e.target.getBoundingClientRect();
        if (showTooltip) return;
        setShowTooltip(true);
        setTimeout(() => {
            if (contentRef.current) {
                const rect2 = contentRef.current.getBoundingClientRect();
                setCoords({
                    left: rect.left - rect2.width - 10,
                    middle: rect.left + rect.width / 2 - rect2.width / 2,
                    right: rect.left + rect.width + 10,
                    center: rect.top - rect.height / 2,
                    top: rect.top + rect.height + 2,
                    bottom: rect.top - rect.height / 2 - rect2.height - 2,
                });
            }
        });
    };

    const mouseLeave = () => {
        if (!showTooltip) return;
        setShowTooltip(false);
        setCoords(defCoords);
    };

    let triangleIconClass = "-rotate-90";
    let style: { left?: number; right?: number; bottom?: number; top?: number } =
        { left: coords.middle, top: coords.top };
    if (position === "top") {
        style = { left: coords.middle, top: coords.bottom };
        triangleIconClass = "absolute -bottom-[6px] rotate-90";
    }
    if (position === "right") {
        style = { left: coords.right, top: coords.center };
        triangleIconClass = "absolute -left-[6px] rotate-180";
    }
    if (position === "left") {
        style = { left: coords.left, top: coords.center };
        triangleIconClass = "absolute -right-[6px]";
    }
    return (
        <div
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="inline-block"
        >
            {children}
            {showTooltip && (
                <Portal>
                    <div
                        style={style}
                        className={classNames(
                            "fixed flex justify-center items-center z-50",
                            ["top", "bottom"].includes(position) ? "flex-col" : ""
                        )}
                    >
                        <PlayIcon
                            className={classNames(
                                "w-3 h-3 flex -m-[4px] text-gray-600 fill-gray-600",
                                triangleIconClass
                            )}
                        />
                        <div
                            className="bg-gray-600 rounded-md text-xs py-1 px-2 max-w-sm"
                            ref={contentRef}
                        >
                            {content}
                        </div>
                    </div>
                </Portal>
            )}
        </div>
    );
}

export default Tooltip;
