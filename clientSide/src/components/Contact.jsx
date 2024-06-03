import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Contact = (listing) => {
    
    const [landlord,setLandlord]=useState(null);
    const [message,setMessage]=useState('');
    const onChange=(e)=>{
        setMessage(e.target.value)
    };
    useEffect(()=>{
        const fetchLandlord=async()=>{
            try {
                const res=await fetch(`/api/users/${listing.listing.userRef}`);
                const data=await res.json();
                setLandlord(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchLandlord();
    },[listing.listing.userRef]);

    return (  
        <div className="flex flex-col gap-2">
            <p>Conatct <span className="font-semi-bold">{landlord?.username}</span > for <span className="font-semi-bold">{listing.listing.name.toLowerCase()}</span></p>
            <textarea className="w-full border p-3 rounded-lg" placeholder="Enter your message" name="message" id="message" rows="2" value={message} onChange={onChange}></textarea>
            <Link to={`mailto:${landlord?.email}?subject=Regarding ${listing.listing.name}&body=${message}`} 
                className="bg-slate-700 text-white text-center p-3 rounded-lg hover:opacity-95">
                    Send message</Link>
        </div> 
    );
}

export default Contact;