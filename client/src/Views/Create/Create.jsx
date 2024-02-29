import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemons, getTypes } from "../../redux/actions";
import { useEffect } from "react";
import Validate from "../../components/Validate/validate";
import { Link } from "react-router-dom";

const Create = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
    // eslint-disable-next-line
  }, []);

  const [errors, setErrors] = useState({});

  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "" || errors[error].length === 0) disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPokemons(input));
    setInput({
      name: "",
      image: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      types: [],
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      Validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
    setErrors(
      Validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleDelete = (e) => {
    setInput({
      ...input,
      types: input.types.filter((t) => t !== e),
    });
  };

  return (
    <div>
      <Link to={"/home"}>
        <button>
          Volver
        </button>
      </Link>
      <div>
        
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
  <h3>Crea un pokemon</h3>
  <div>
    <div>
      <input
        placeholder="Nombre"
        name="name"
        type="text"
        value={input.name}
        onChange={handleChange}
      />
      <div>
        {errors.name && (
          <span>{errors.name}</span>
        )}
      </div>
    </div>
    <div>
      <input
        placeholder="Imagen  .jpg .jpeg .png .gif"
        name="image"
        type="text"
        value={input.image}
        onChange={handleChange}
      />
      <div>
        {errors.image && (
          <span>{errors.image}</span>
        )}
      </div>
    </div>
    <div>
      <input
        placeholder="HP"
        name="hp"
        type="number"
        value={input.hp}
        onChange={handleChange}
      />
      <div>
        {errors.hp && (
          <span>{errors.hp}</span>
        )}
      </div>
    </div>
    <div>
      <input
        placeholder="Ataque"
        name="attack"
        type="number"
        value={input.attack}
        onChange={handleChange}
      />
      <div>
        {errors.attack && (
          <span>{errors.attack}</span>
        )}
      </div>
    </div>
    <div>
      <input
        placeholder="Defensa"
        name="defense"
        type="number"
        value={input.defense}
        onChange={handleChange}
      />
      <div>
        {errors.defense && (
          <span>{errors.defense}</span>
        )}
      </div>
    </div>
    <div>
      <input
        placeholder="Velocidad"
        name="speed"
        type="number"
        value={input.speed}
        onChange={handleChange}
      />
      <div>
        {errors.speed && (
          <span style={{ color: "#e74c3c" }}>{errors.speed}</span>
        )}
      </div>
    </div>
    <div>
      <input
        placeholder="Altura"
        name="height"
        type="number"
        value={input.height}
        onChange={handleChange}
      />
      <div>
        {errors.height && (
          <span style={{ color: "#e74c3c" }}>{errors.height}</span>
        )}
      </div>
    </div>
    <div>
      <input
        placeholder="Peso"
        name="weight"
        type="number"
        value={input.weight}
        onChange={handleChange}
      />
      <div>
        {errors.weight && (
          <span style={{ color: "#e74c3c" }}>{errors.weight}</span>
        )}
      </div>
    </div>
    <div>
      <label>Tipo:</label>
      <select onChange={(e) => handleSelect(e)}>
        {types.map((t, index) => (
          <option key={index} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>
      <div>
        {errors.types && (
          <span>{errors.types}</span>
        )}
      </div>
    </div>
    <div>
      <button type="submit" name="submit" disabled={disable()}>
        <span>Crear!</span>     
      </button>
    </div>
  </div>
</form>
      <div>
        {input.types.map((e, index) => (
          <div key={index}>
            <p>{e}</p>
            <button onClick={() => handleDelete(e)}>X</button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Create;