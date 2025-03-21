import { useCallback, useMemo, useState } from "react"
import { getBodyPart } from "./bodyParts"
import style from "./BodyMap.module.css"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { createPortal } from 'react-dom';

// eslint-disable-next-line
const BodyContainer = ({ children }) => (
    <div style={{
        width: "180px", // Reduced width
        height: "450px", // Reduced height
        margin: "20px auto" // Adjusted margin
    }}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 375.42 832.97"
        >
            <g>
                {children}
            </g>
        </svg>
    </div>
)

// eslint-disable-next-line
const BodyPart = ({ id, d, name, fill, onClick, onMouseEnter, onMouseLeave }) => {
    const handleClick = () => {
        onClick(id);
    };

    const handleMouseEnter = () => {
        onMouseEnter(id);
    };

    const handleMouseLeave = () => {
        onMouseLeave(id);
    };

    const probableConditions = [
        "Inflammation",
        "Muscle strain",
        "Nerve compression",
        "Injury",
    ]; // Example conditions, replace with actual data if available.

    return (
        <Popover>
            <PopoverTrigger asChild>
                <path
                    d={d}
                    id={id}
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={style.path} // Use the local class
                    style={Object.assign({}, {
                        WebkitTapHighlightColor: "transparent",
                        cursor: "pointer"
                    }, { fill })}
                />
            </PopoverTrigger>
            {createPortal(
                <PopoverContent>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <ul className="list-disc pl-5">
                        {probableConditions.map((condition, index) => (
                            <li key={index}>{condition}</li>
                        ))}
                    </ul>
                </PopoverContent>,
                document.body
            )}
        </Popover>
    );
}

export const BodyMap = ({ onPartClick }) => {
    const [lang, setLang] = useState("en")
    const [clicked, setClicked] = useState(null)
    const [hovered, setHovered] = useState(null)
    const [view, setView] = useState("ant"); // State to track the current view

    const bodyParts = useMemo(() => {
        return getBodyPart(lang).filter(({ face }) => face === view);
    }, [lang, view]);

    const clickedName = useMemo(() => {
        if (!clicked) return ""
        return getBodyPart(lang).find(d => clicked === d.id)?.name || ""
    }, [lang, clicked])

    const getFill = useCallback((bodyPartId) => {
        if (hovered === bodyPartId) return "rgba(5, 195, 8, 0.997)"; // Darker gray when hovered
        return "rgb(137, 241, 151)"; // Default gray
    }, [hovered])

    const handleChangeLang = (e) => {
        setLang(e.target.value)
    }

    const handleClick = (id) => {
        setClicked(id);
        const part = getBodyPart(lang).find((d) => d.id === id);
        if (part) {
            onPartClick({
                id: part.id,
                name: part.name,
                conditions: ["Condition 1", "Condition 2"],
                position: {
                    top: `${Math.random() * 100}px`, // Replace with actual logic
                    left: `${Math.random() * 100}px`, // Replace with actual logic
                },
            });
        }
    }

    const handleMouseEnter = (id) => {
        if ("ontouchstart" in window) return
        setHovered(id)
    }

    const handleMouseLeave = () => {
        if ("ontouchstart" in window) return
        setHovered(null)
    }

    return (
        <>
            <div className={style.bodies}>
                <Tabs defaultValue="ant" onValueChange={setView}>
                    <TabsList>
                        <TabsTrigger value="ant">{txt[lang][1]}</TabsTrigger>
                        <TabsTrigger value="post">{txt[lang][2]}</TabsTrigger>
                    </TabsList>
                    <TabsContent value="ant">
                        <BodyContainer>
                            {bodyParts.map((bodyPart, index) => (
                                <BodyPart
                                    key={index}
                                    id={bodyPart.id}
                                    d={bodyPart.d}
                                    name={bodyPart.name}
                                    fill={getFill(bodyPart.id)}
                                    onClick={handleClick}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                            ))}
                        </BodyContainer>
                    </TabsContent>
                    <TabsContent value="post">
                        <BodyContainer>
                            {bodyParts.map((bodyPart, index) => (
                                <BodyPart
                                    key={index}
                                    id={bodyPart.id}
                                    d={bodyPart.d}
                                    fill={getFill(bodyPart.id)}
                                    onClick={handleClick}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                            ))}
                        </BodyContainer>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}

const txt = {
    fr: {
        0: "Cliquez sur une partie du corps",
        1: "Face antérieure",
        2: "Face postérieure",
    },
    en: {
        0: "Click on the body!",
        1: "Anterior side",
        2: "Posterior side"
    }
}