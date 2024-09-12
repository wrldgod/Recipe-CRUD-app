import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    });
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                name="cuisine"
                placeholder="Cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
              />
            </td>
            <td>
              <input
                name="photo"
                placeholder="URL"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="Preparation"
                value={preparation}
                onChange={(e) => setPreparation(e.target.value)}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
