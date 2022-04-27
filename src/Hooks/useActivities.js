import { useEffect, useState } from "react"

const useActivities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const url = ``;
        fetch(url)
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return [activities, setActivities];

}
export default useActivities;