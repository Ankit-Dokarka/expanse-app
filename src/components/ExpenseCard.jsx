import ExpenseForm from "./ExpenseForm";

const ExpenseCard = ({ expense, Edit, Delete }) => {

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="card-title mb-0">{expense.title}</h3>
          <div className="d-flex gap-2">
            <button
              className="btn btn-warning btn-sm"
              onClick={() => Edit(expense)}
            >
              Edit
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => Delete(expense.id)}
            >
              Delete
            </button>
          </div>
        </div>
       
        <hr />
          
        <div className="mb-3">
          <small className="text-muted">Name</small>
          <div className="fw-semibold">{expense.name}</div>
        </div>

        <div className="mb-3">
          <small className="text-muted">Gender</small>
          <div className="fw-semibold">{expense.gender}</div>
        </div>

        <div className="mb-3">
          <small className="text-muted">Title</small>
          <div className="fw-semibold">{expense.title}</div>
        </div>

        <div className="mb-3">
          <small className="text-muted">Description</small>
          <div className="fw-semibold">{expense.description}</div>
        </div>

        <div className="mb-3">
          <small className="text-muted">Amount</small>

          <div className="fs-5 fw-bold text-success">₹{expense.amount}</div>
        </div>

        <div className="mb-3">
          <small className="text-muted">Paid By</small>

          <div className="fw-semibold">{expense.paidBy}</div>
        </div>

        <div>
          <small className="text-muted">Split Rule</small>

          <div>
            <span
              className={`badge ${
                expense.splitRule === "Equal"
                  ? "text-bg-primary"
                  : "text-bg-success"
              }`}
            >
              {expense.splitRule}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
