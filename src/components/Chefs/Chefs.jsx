import { useEffect, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { Link } from "react-router-dom";



const Chefs = () => {
    const [chefs, setChefs] = useState([]);


    useEffect(() => {
        fetch("https://assignment-10-server-freelancernizamc.vercel.app/chefs")
            .then((res) => res.json())
            .then((data) => setChefs(data))
            .catch((error) => console.error(error));
    }, []);




    return (
        <div>
            <h2 className="md:text-5xl sm:text-3xl font-bold text-center mt-10">Our Best Chef</h2>
            <div className="flex flex-wrap justify-center">
                {chefs.map((chef) => (
                    <div
                        className="card card-compact w-96 bg-base-100 shadow-xl m-4 text-center"
                        key={chef.id}
                    >
                        <img className="w-[200px] ml-5" src={chef.view_image} alt="chef" />
                        <div className="card-body text-left">
                            <h2 className="card-title font-bold">{chef.chef_name}</h2>
                            <p>Years of Experience: {chef.years_of_experience}</p>
                            <p>Number of Recipes: {chef.num_recipes}</p>
                            <HiOutlineHeart /> {chef.likes}
                            <div className="card-actions justify-center">
                                <Link to={`/chefs/${chef.id}`} className="text-indigo-500 btn btn-warning hover:btn-success">View Details</Link>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Chefs;
