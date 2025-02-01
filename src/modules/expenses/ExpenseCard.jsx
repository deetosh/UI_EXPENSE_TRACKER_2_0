import './ExpenseCard.css';

// Mapping expense details keyed by id (without the spent field)
const expenseDetailsMap = {
  1: { title: "EDUCATION", image: "/icons/education.svg" },
  2: { title: "FOOD", image: "/icons/food.svg" },
  3: { title: "HEALTHCARE", image: "/icons/healthcare.svg" },
  4: { title: "INVESTMENT", image: "/icons/investment.svg" },
  5: { title: "PERSONAL", image: "/icons/personal.svg" },
  6: { title: "TRANSPORT", image: "/icons/transport.svg" },
  7: { title: "UTILITY", image: "/icons/utility.svg" },
  8: { title: "OTHER", image: "/icons/other.svg" }
};

const ExpenseCard = ({ id, spent, percentage = 0 }) => {
  // Look up the additional details using the provided id
  const details = expenseDetailsMap[id];
  if (!details) return null;

  const { title, image } = details;

  return (
    <div className="budget-card">
      <div className="image-container">
        <img src={image} alt={title} className="category-image" />
      </div>

      <div className="content-wrapper">
        <div className="budget-header">
          <h3 className="category-title">{title}</h3>
          <div className="budget-amount">${spent.toLocaleString()}</div>
        </div>

        <div className="progress-bar">
          <div
            className={`progress-fill ${percentage > 25 ? 'over-threshold' : ''}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="percentage-text">
          {percentage.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
