import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/BannerAbout.module.css'

export default function About() {
    return (
        <>
            <section id={styles.banner_about}>
                <div className={styles.inner}>
                    <h1>Nossa História <span><br />
					Conheça um pouco sobre a Auto Code</span></h1>
                </div>
            </section>
            <Header />
            <section id="main">
                <div className="inner">
                    <h4>"SOMENTE A PAIXÃO PELO QUE SE FAZ PODE TRANSFORMAR TANTO TEMPO EM UM CONSTANTE APRENDIZADO E DISPOSIÇÃO PARA FAZER MAIS E MELHOR"</h4>
                    <p><span className="image left"><img src="assets/images/pic06.jpg" alt="" /></span>A frase acima, sempre repetida por seu fundador e proprietário, retrata toda a filosofia da empresa no que diz respeito à vocação, empenho, disciplina e determinação de oferecer um atendimento eficiente e diferenciado no segmento de reparações e manutenção preventiva de todos os carros nacionais e importados.<br></br><br></br>A Auto Code vem desde a Década de 70 , com sede própria e sempre no mesmo local, ocupando uma área de 600m², totalmente equipada, com ferramental atualizado e equipe treinada nos mais diversos cursos de atualização, apresenta-se hoje como referência do setor, especialmente na eficiência e no atendimento.<br></br><br></br>Ressalta-se aqui, o pioneirismo da Empresa na Manutenção Preventiva, o que deu à Auto Code toda excelência dos serviços prestados.</p>
                    <p><span className="image right"><img src="assets/images/pic07.jpg" alt="" /></span>A Auto Code, oficina autorizada Bosch de São Paulo possui um conceito inovador, oferecendo diversas vantagens para você e seu carro. Você conta com o melhor atendimento, conforto e conveniência com a qualidade de serviços executados por profissionais treinados pela Bosch.<br></br><br></br> A Auto Code de São Paulo conta com serviços e diagnósticos rápidos e precisos, equipamentos de última geração, profissionais treinados e a garantia de peças originais. A Auto Code faz parte do programa Bosch Excelence, um programa que garante a entrega da melhor qualidade em serviços do mercado, resultando no melhor atendimento ao cliente. Conheça mais sobre nossos serviços e agende sua visita.</p>

                </div>
            </section>
            <Footer />
        </>
    )
}