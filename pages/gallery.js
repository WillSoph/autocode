import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/BannerGallery.module.css'

export default function Home() {
    return (
        <>
            <section id={styles.banner_about}>
                <div className={styles.inner}>
                    <h1>Geleria de fotos <span><br />
					Confira o ambiente de nossa oficina</span></h1>
                </div>
            </section>
            <Header />
            <section id="main">
                <div className="inner">
                    <h4>Galeria de fotos do ambiente de trabalho na Auto Code</h4>
                    <div className="box alt">
                        <div className="row 50% uniform">
                            <div className="12u$"><span className="image fit"><img src="assets/images/gallery01.jpg" alt="" /></span></div>
                            <div className="4u"><span className="image fit"><img src="assets/images/gallery02.jpg" alt="" /></span></div>
                            <div className="4u"><span className="image fit"><img src="assets/images/gallery03.jpg" alt="" /></span></div>
                            <div className="4u$"><span className="image fit"><img src="assets/images/gallery04.jpg" alt="" /></span></div>
                            <div className="4u"><span className="image fit"><img src="assets/images/gallery05.jpg" alt="" /></span></div>
                            <div className="4u"><span className="image fit"><img src="assets/images/gallery06.jpg" alt="" /></span></div>
                            <div className="4u$"><span className="image fit"><img src="assets/images/gallery07.jpg" alt="" /></span></div>
                            <div className="4u"><span className="image fit"><img src="assets/images/gallery08.jpg" alt="" /></span></div>
                            <div className="4u"><span className="image fit"><img src="assets/images/gallery09.jpg" alt="" /></span></div>
                            <div className="4u$"><span className="image fit"><img src="assets/images/gallery10.jpg" alt="" /></span></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}