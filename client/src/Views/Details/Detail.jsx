import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, clearDetail } from "../../redux/actions";

const Detail = () => {
  let { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => dispatch(clearDetail());
    // eslint-disable-next-line
  }, []);

  const detailPokemons = useSelector((state) => state.detail);


  return (
    <div>
      <Link to={"/home"}>
        <button>
          <span>Volver</span>
        </button>
      </Link>
      {detailPokemons.length > 0 ? (
        <div>
          <div
            
          >
            <div>
              <img
                src={detailPokemons[0]?.image}
                alt={detailPokemons[0].name}
              />
            </div>
            <div>
              <h1>{detailPokemons[0].name}</h1>
              <h3
                
              >
                <p>Tipo: </p>
                {detailPokemons[0]?.types.join(" ")}
              </h3>
              <div className="pokemon-stats">
              <p>
                  <span>HP: </span>
                  {detailPokemons[0]?.hp}
              </p>
              <p>
                  <span>Ataque: </span>
                  {detailPokemons[0]?.attack}
              </p>
              <p>
                  <span>Defensa: </span>
                  {detailPokemons[0]?.defense}
              </p>
              <p>
                  <span>Velocidad: </span>
                  {detailPokemons[0]?.speed}
              </p>
              <p>
                  <span>Altura: </span>
                  {detailPokemons[0]?.height}
              </p>
              <p>
                  <span>Peso: </span>
                  {detailPokemons[0]?.weight}
              </p>
              <p>
                <span>ID: </span>
                {detailPokemons[0]?.id}
              </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>cargando...</p>
        </div>
      )}
    </div>
  );
};

export default Detail;