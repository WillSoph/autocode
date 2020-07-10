import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />

      <section id="banner">
        <div className="inner">
          <h1>Garantia de satisfação! <span>Oferecemos o melhor<br />
					serviço para seu veículo premium</span></h1>
          <ul className="actions">
            <li><a href="#" className="button alt">Saiba mais</a></li>
          </ul>
        </div>
      </section>

      <section id="one">
        <div className="inner">
          <header>
            <h2>Bem-vindo à Auto Code</h2>
          </header>
          <p> A Auto Code é uma empresa de referência em serviços de mecânica de automóveis nacionais e importados. Procurando sempre atender da melhor maneira seus clientes e, para isso, investe nas mais avançadas tecnologias juntamente com profissionais responsáveis, treinados e altamente qualificados.</p>
          <ul className="actions">
            <li><a href="#" className="button alt">Leia Mais</a></li>
          </ul>
        </div>
      </section>

      <section id="two">
        <div className="inner">
          <article>
            <div className="content">
              <header>
                <h3>Performance</h3>
              </header>
              <div className="image fit">
                <img src="images/pic01.jpg" alt="" />
              </div>
              <p>Reprogramação de ECU de forma a obter maior performance, menores emissões poluentes e redução de consumo.</p>
            </div>
          </article>
          <article className="alt">
            <div className="content">
              <header>
                <h3>Diagnóstico</h3>
              </header>
              <div className="image fit">
                <img src="images/pic02.jpg" alt="" />
              </div>
              <p>Dagnostico do sistema de injeção eletrônica, verificação de componentes elétricos e ruídos internos do motor.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="three">
        <div className="inner">
          <article>
            <div className="content">
              <span className="icon fa-map-marker"></span>
              <header>
                <h3>Excelente Localização</h3>
              </header>
              <p>Localizados na zona sul de São Paulo, próximos a ponte do Morumbi, região de fácil acesso para a sua comodidade e tranquilidade na hora de levar o seu carro para a manutenção, revisão, ou preparação.</p>
              <ul className="actions">
                <li><a href="#" className="button alt">Leia Mais</a></li>
              </ul>
            </div>
          </article>
          <article>
            <div className="content">
              <span className="icon fa-star"></span>
              <header>
                <h3>Profissionais treinados e qualificados</h3>
              </header>
              <p>Com os nossos profissionais capacitados atendemos as diferentes demandas de todos os modelos esportivos e superesportivos dos clássicos aos modernos com a mesma qualidade.</p>
              <ul className="actions">
                <li><a href="#" className="button alt">Leia Mais</a></li>
              </ul>
            </div>
          </article>
          <article>
            <div className="content">
              <span className="icon fa-money"></span>
              <header>
                <h3>Preço justo e que cabe no seu bolso</h3>
              </header>
              <p>Atuamos com total transparência nos serviços e nos respectivos custos apresentados.
              Aqui você traz as suas peças importadas ou importamos para você para viabilizarmos
                 a sua revisão, manutenção ou preparação com o que há de melhor em peças sempre.</p>
              <ul className="actions">
                <li><a href="#" className="button alt">Leia Mais</a></li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  )
}
