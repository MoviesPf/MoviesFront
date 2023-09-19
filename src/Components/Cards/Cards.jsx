import css from './Cards.module.css';
import { Card } from '../Card/Card.jsx';

export const Cards = ({ programs, limit, type, filters }) => {
  return (
    <div className={css.all}>
      <div className={css.cards}>
        {programs?.map((program) => {
          if (program.id) return <Card key={program.id} program={program} />;
          return <h1>{program}</h1>;
        })}
      </div>
    </div>
  );
};
