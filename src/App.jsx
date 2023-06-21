import { Button } from "./Button";
import { NavBar } from "./NavBar";

export function App() {
    return (
        <>
                <NavBar />
            <main>
                <section className="button-container">
                    <h1 className="h1">Buttons</h1>
                    
                    <Button name="btn-def-1" text = "default"/>
                    <Button name="btn-def-2" text = "default"/>
                    <Button name="btn-def-3" text = "default"/>
                    <Button name="btn-def-4" text = "default"/>
                </section>
            </main>
        </>
    )
}