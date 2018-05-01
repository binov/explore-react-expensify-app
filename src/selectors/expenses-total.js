
export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((prevVal, value) => prevVal + value, 0);   
};