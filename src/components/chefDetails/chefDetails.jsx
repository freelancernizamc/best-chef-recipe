import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ChefDetails = () => {
    const { id } = useParams();
    const [chef, setChef] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/chefs/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [id]);


    if (!chef) {
        return <div>Loading...</div>;
    }


    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chef.view_image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="w-50 ml-20">
                        <h1 className="text-7xl font-bold font-mono">Name: {chef.chef_name}</h1>
                        <h2 className="text-5xl font-bold">Years of Experience: {chef.years_of_experience}</h2>
                        <h3 className="text-3xl font-bold">Number of Recipes: {chef.num_recipes}</h3>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-warning">Lets Talk</button>
                    </div>
                </div>
            </div>
            <h2 className="text-5xl text-center my-10">See Our Latest Recipe</h2>
            <div className="grid grid-cols-3">
                {chef.recipes.map((recipe, index) => (
                    <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl m-4 text-center">
                        <img className="w-[200px] ml-5" src={recipe.image} alt="chef" />
                        <div className="card-body text-left">
                            <h2 className="card-title">{recipe.name}</h2>
                            <p>Description: {recipe.description}</p>
                            <p>Number of Recipes: {chef.num_recipes}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ChefDetails;
