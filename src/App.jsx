import { Button } from "./Button";
import IconButton from "./IconButton";
import { NavBar } from "./NavBar";




export function App() {
    return (
        <>
            <NavBar />
            <main>
                <section className="button-container">
                    <h1 className="h1">Buttons</h1>
                    <Button name="btn-def-1" text="Default" />
                    <Button name="btn-def-2" text="Default" />
                    <Button name="btn-def-3" text="Default" />
                    <Button name="btn-def-4" text="Default" />
                    <Button name="btn-def-5" text="Default" />
                    <Button name="btn-def-6" text="Default" />
                    <Button name="btn-disha-def-7" text="Deafult" dis="disableShadow" />
                    <Button name="btn-dis-def-8" text="Deafult" dis="disabled" />
                    <Button name="btn-dis-def-9" text="Deafult" dis="disabled" />
                    
                </section>
            </main>
        </>
    )
}