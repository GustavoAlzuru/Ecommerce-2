import { useState } from "react";

function useOn(initialValue = false) {
    const [on, setOn] = useState(initialValue)

    const handleOn = () => {
        setOn(!on)
    }
    return { handleOn, on }
}
export default useOn