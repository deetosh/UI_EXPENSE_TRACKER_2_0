import './ExpenseCard.css';

const ExpenseCard = ({
    category = "BILLS & UTILITIES",
    spent = 600,
    budget = 3200,
    image = "https://example.com/default-image.jpg"
}) => {
    const percentage = Math.min((spent / budget) * 100, 100);
    const overBudget = spent > budget;

    return (
        <div className="budget-card">
            <div className="image-container">
                <img src={image} alt={category} className="category-image" />
            </div>

            <div className="content-wrapper">
                <div className="budget-header">
                    <h3 className="category-title">{category}</h3>
                    <div className="budget-amount">
                        ${spent.toLocaleString()} of ${budget.toLocaleString()}
                    </div>
                </div>

                <div className="progress-bar">
                    <div
                        className={`progress-fill ${overBudget ? 'over-budget' : ''}`}
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ExpenseCard;