import { Outlet } from "react-router-dom"
import MyHeader from "../MyHeader"

export default function DefaultLayout() {
    return (
        <>
            <MyHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
}