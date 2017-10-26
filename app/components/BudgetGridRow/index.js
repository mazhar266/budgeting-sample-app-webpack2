// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import formatAmount from 'utils/formatAmount';
import type { Transaction } from 'modules/transactions';
import type { Categories } from 'modules/categories';
import styles from './style.scss';

type BudgetGridRowProps = {
  transaction: Transaction,
  categories: Categories,
};

const BudgetGridRow = ({ transaction, categories }: BudgetGridRowProps) => {
  const amount = formatAmount(transaction.value);
  const amountCls = amount.isNegative ? styles.neg : styles.pos;
  const { id, categoryId, description } = transaction;
  const category = categories[categoryId];

  return (
    <tr key={id}>
      <td>
        <div className={styles.cellLabel}>Category</div>
        <div className={styles.cellContent}>
          <Link to={'item/'+transaction.id}>{category}</Link>
        </div>
      </td>
      <td>
        <div className={styles.cellLabel}>Description</div>
        <div className={styles.cellContent}>
          <Link to={'item/'+transaction.id}>{description}</Link>
        </div>
      </td>
      <td className={amountCls}>
        <div className={styles.cellLabel}>Amount</div>
        <div className={styles.cellContent}>
          <Link to={'item/'+transaction.id}>{amount.text}</Link>
        </div>
      </td>
    </tr>
  );
};

export default BudgetGridRow;