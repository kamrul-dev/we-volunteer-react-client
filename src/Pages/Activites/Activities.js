import React from 'react';
import useActivities from '../../Hooks/useActivities';
import Activity from '../Activity/Activity';
import './Activites.css';

const Activities = () => {
    const [activities, setActivities] = useActivities();
    return (
        <div className='row container mx-auto g-4'>
            {
                activities.map(activity => <Activity
                    key={activity._id}
                    activity={activity}
                ></Activity>)
            }
        </div>
    );
};

export default Activities;