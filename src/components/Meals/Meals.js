import React from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummery'

const Meals = () => {
    return (
        <React.Fragment>
            <MealsSummary />
            <AvailableMeals/>
        </React.Fragment>
    )
}
export default Meals;
