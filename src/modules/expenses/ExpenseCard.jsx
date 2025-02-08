import './ExpenseCard.css';

// Mapping expense details keyed by id (without the spent field)
const expenseDetailsMap = {
  'education': { title: "EDUCATION", image: "/icons/education.svg" },
  'food': { title: "FOOD", image: "/icons/food.svg" },
  'healthcare': { title: "HEALTHCARE", image: "/icons/healthcare.svg" },
  'investment': { title: "INVESTMENT", image: "/icons/investment.svg" },
  'personal': { title: "PERSONAL", image: "/icons/personal.svg" },
  'transport': { title: "TRANSPORT", image: "/icons/transport.svg" },
  'utility': { title: "UTILITY", image: "/icons/utility.svg" },
  'other': { title: "OTHER", image: "/icons/other.svg" }
};

const ExpenseCard = ({ id, spent, percentage = 0 }) => {
  // Look up the additional details using the provided id
  const details = expenseDetailsMap[id];
  if (!details) return null;
  console.log("id", id);
  const { title, image } = details;

  return (
    <div className="budget-card">
      <div className="image-container">
        <img src={image} alt={title} className="category-image" />
      </div>

      <div className="content-wrapper">
        <div className="budget-header">
          <h3 className="category-title">{title}</h3>
          <div className="budget-amount">Rs {spent.toLocaleString()}</div>
        </div>

        <div className="progress-bar">
          <div
            className={`progress-fill Rs {percentage > 25 ? 'over-threshold' : ''}`}
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
