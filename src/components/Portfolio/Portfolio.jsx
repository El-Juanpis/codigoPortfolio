import { DATA_PORTFOLIO } from "../../db/data";
import "./Portfolio.css";
export const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
     
      <h2>portfolio</h2>

      <div className="portfolio-container">
        {DATA_PORTFOLIO[0].map((data) => (
          <article className="card" key={data.id}>
            <div className="card-image">
              <img src={data.src} alt={data.title} />
            </div>

            <div className="card-info">
              <div >
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <h4>Tecnologias</h4>
              <p>{data.tecnologies}</p>
              </div>
              <div className="buttons">
                <a href={data.github} className="btn btn-1">
                  Github
                </a>
                <a  href={data.see} className="btn btn-2">
                  Web
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
