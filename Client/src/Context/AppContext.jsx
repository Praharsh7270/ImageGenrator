import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext ();

const AppContextProvider = (props) =>{

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));

    const [credits, setCredits] = useState(0);

    const backendUrl = import.meta.env.VITE_BACKENDURL;

    // Function to get user credits from backend
    const getUserCredits = async () => {
        try {
            const response = await axios.post(backendUrl + "/api/user/credits", {}, {
                headers: {
                    token: token
                }
            });
            
            if (response.data.success) {
                setCredits(response.data.credits);
                setUser(prev => ({ ...prev, name: response.data.user }));
            }
        } catch (error) {
            console.error("Error fetching user credits:", error);
            toast.error("Failed to fetch user data");
        }
    };

    const genrateImage = async (prompt) => {
        try{
            // Check if user has credits before making API call
            if (credits <= 0) {
                toast.error("Insufficient credits! Please buy more credits.");
                navigate("/buycredit");
                return;
            }

            const {data} = await axios.post(backendUrl + "/api/image/generateImage", {
                prompt
            }, {
                headers: {
                    token: token
                }
            })

            if(data.success){
                setCredits(prev => prev - 1); // Decrease credits by 1
                toast.success("Image generated successfully");
                return data.resultImage; // Return the generated image URL
            }
            else {
                toast.error(data.message || "Failed to generate image");
                if (data.message && data.message.includes("credits")) {
                    navigate("/buycredit"); // Redirect to buy credit page if server says no credits
                }
            }
        }
        catch(err){
            console.error("Error generating image:", err);
            toast.error("Failed to generate image");
            
            // Check if error is related to insufficient credits
            if (err.response?.data?.message?.includes("credits") || err.response?.status === 400) {
                navigate("/buycredit");
            }
        }
    }

    const logout = () =>{
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);

    }

    // Load user data when token exists
    useEffect(() => {
        if (token && backendUrl) {
            getUserCredits();
        }
    }, [token, backendUrl]);

    const value = {

        user,
        setUser,
        showLogin,
        setShowLogin,
        backendUrl,
        token,
        setToken,
        credits,
        setCredits,
        getUserCredits,
        logout,
        genrateImage,

    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}



export default AppContextProvider;