import './Dashboard.css'

function Dashboard() {
  const summaryCards = [
    {
      title: 'Ocorrências',
      value: '--',
    },
    {
      title: 'Em análise',
      value: '--',
    },
    {
      title: 'Em andamento',
      value: '--',
    },
    {
      title: 'Resolvidas',
      value: '--',
    },
  ]

  return (
    <section className="dashboard">
      <div className="dashboard__header">
        <div>
          <h2>Dashboard</h2>
          <p>
            Visão geral das ocorrências urbanas.
          </p>
        </div>
      </div>

      <div className="dashboard__cards">
        {summaryCards.map((card) => (
          <article
            key={card.title}
            className="dashboard-card"
          >
            <span className="dashboard-card__title">
              {card.title}
            </span>

            <strong className="dashboard-card__value">
              {card.value}
            </strong>
          </article>
        ))}
      </div>

      <div className="dashboard__content">
        <section className="dashboard-panel">
          <h3>Ocorrências por status</h3>

          <div className="dashboard-panel__placeholder">
            <span>Gráfico será conectado aos dados reais.</span>
          </div>
        </section>

        <section className="dashboard-panel">
          <h3>Ocorrências por categoria</h3>

          <div className="dashboard-panel__placeholder">
            <span>Gráfico será conectado aos dados reais.</span>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Dashboard