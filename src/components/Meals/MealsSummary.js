// * Meals summary to render text above the list of meals

import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food delivered to you</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All course meals are cooked with high-quality ingredientes, just-in-time
        and of course experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
