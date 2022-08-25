import s from './ExpensesChartBySpecificCategory.module.css';

export function ExpensesChartBySpecificCategory() {
  return (
    <section className={s.canvas}>
      <canvas className={s.canvas} id="canvas" />
    </section>
  );
}
