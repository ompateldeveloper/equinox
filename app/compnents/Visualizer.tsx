"use client";

import Hint from "./Hint";

export default function Visualizer() {
    return (
        <div className="visualizer w-96 h-64 rounded-xl p-4 mx-auto my-4 bg-zinc-900 relative overflow-hidden no-zoom ">
            <div className=" w-full h-full rounded-lg bg-gradient-to-bl from-blue-700 to-violet-800"></div>
            <Hint value={"Visualizer"}/>
        </div>
    )
}
