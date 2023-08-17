'use client'
import { useRouter } from "next/navigation"
export default function Facebook() {

    const router = useRouter()
    const handleBtn = () => {
        router.push('/')
    }
    return (
        <div>
            facebook nè
            <div>
                <button onClick={() => handleBtn()}>back home</button>
            </div>
        </div>
    )
}