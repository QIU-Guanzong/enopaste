"use client";
import { useState } from "react";
import { PasteViewer } from "@/components/PasteViewer";
import { PasswordPrompt } from "@/components/PasswordPrompt";
import { CreatePasteForm } from "@/components/CreatePasteForm";
export default function QA() {
 const [view, setView] = useState("viewer");
 const [error, setError] = useState("");
 return <main className="mx-auto max-w-4xl p-6 space-y-6">
 <nav className="flex gap-4">{["viewer", "password", "create"].map(v => <button key={v} onClick={() => setView(v)}>Test {v}</button>)}</nav>
 {view === "viewer" && <PasteViewer paste={{id:"demo",slug:"demo",title:"Synthetic review fixture",content:"Long line: " + "abcdefghij".repeat(25) + "\n第二行 hello world 🌍\nFinal line",language:"text",visibility:"public",burnAfterRead:false,hasPassword:false,views:7,createdAt:"2026-09-11T00:00:00Z",expiresAt:null}}/>}
 {view === "password" && <PasswordPrompt error={error} onSubmit={async () => {setError("Incorrect demo password");}}/>}
 {view === "create" && <CreatePasteForm/>}
 </main>;
}
