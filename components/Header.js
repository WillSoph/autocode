import LinkItem from './LinkItem'
import Link from 'next/link'

export default function Header() {

    const LinkMenu = (itens) => (

        <Link href={itens.link}>
            <a title={itens.label}>{itens.label}</a>
        </Link>

    )

    return (
        <>
            <header id="header">
                <div className="inner">
                    <a href="index" className="logo"><img src="assets/images/logo.png" /></a>
                    <nav id="nav">
                        {LinkItem.map(item => (
                            <LinkMenu key={item.id} link={item.link} label={item.label} />
                        ))

                        }
                    </nav>
                </div>
            </header>
            <a href="#menu" className="navPanelToggle"><span className="fa fa-bars"></span></a>

        </>
    )
}
