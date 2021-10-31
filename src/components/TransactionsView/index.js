import React from 'react';
import './style.css';
import ActionSheet from '../ActionSheet/index.js';
import TransactionsTag from '../ActionSheet/TransactionsTag/index';

export default function CardView({ transactionList }) {

  const transactions = Object.values(transactionList.reduce((a, { date, ...props }) => {
    if (!a[date])
      a[date] = Object.assign({}, { date, items: [props] });
    else
      a[date].items.push(props);
    return a;
  }, {}));

  function formatDate(date) {
    date = new Date(date.replaceAll('-', '/'));

    const options = { month: 'long', day: 'numeric' };
    const actualDate = new Date().toLocaleDateString('pt-BR', options);
    const formatedDate = date.toLocaleDateString('pt-BR', options);

    return actualDate == formatedDate ? 'Hoje' : formatedDate;
  };

  function formatAmount(amount, type) {
    return `${type === 'moneyOut' ? '-' : '+'} R$ ${amount.toFixed(2)}`;
  };

  return (
    <div className="cardview-container">
      <ActionSheet>
        <div className="cardview-date">
          {transactions.map((transaction) => (
            <>
              <span className="cardview-date-span">{formatDate(transaction.date)}</span>
              {transaction.items.map((item) => (
                <TransactionsTag
                  value={formatAmount(item.amount, item.type)}
                  typeTransaction={item.message}
                  transactionFrom={item.target}
                  typeMoney={item.type}
                />
              ))}
            </>
          ))}
        </div>
      </ActionSheet>
    </div>
  )
}
