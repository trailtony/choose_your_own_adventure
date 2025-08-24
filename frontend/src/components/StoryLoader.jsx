import { useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react';
import axios from 'axios';
import LoadingStatus from './LoadingStatus.jsx';


const API_BASE_URL = "/api"

function StoryLoader() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [story, setStory] = useState(null);
    cosnt [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        loadStory(id)
    }, [id])


    const loadStory = async (storyId) => {
        setLoading(true)
        setError(null)

        try {
            const response = await axios.get(`${API_BASE_URL}/stories/${storyId}/complete`)
            setStory(response.data)
            setLoading(false)
        } catch (err) {
            if (err.response?.status === 404) {
                setError("Story not found")
            } else {
                setError("Failed to load story")
            }
        }
    }

    const createNewStory = () => {
        navigate("/")
    }

    if (loading) {
        return <LoadingStatus theme={"story"} />
    }

    if (error) {
        return <div className="story-loader">
            <div classname="error-message">
                <h2>Story Not Found</h2>
                <p>{error}</p>
                <button onClick={createNewStory}>Go to Story Generator</button>
            </div>
        </div>
    }

    if (story) {
        return <div className="story-loader">

        </div>
    }
}

export default StoryLoader;
