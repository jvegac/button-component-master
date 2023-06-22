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
                    <Button name = "btn-def-1" text = "Default" />
                    <Button name = "btn-def-2" text = "Default" />
                    <Button name = "btn-def-3" text = "Default" />
                    <Button name = "btn-def-4" text = "Default" />
                    <Button name = "btn-def-5" text = "Default" />
                    <Button name = "btn-def-6" text = "Default" />
                    

                </section>
            </main>
        </>
    )
}