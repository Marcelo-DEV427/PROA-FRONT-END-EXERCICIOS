import styles from "../css/Home.module.css"

function Home(){

    return(
        <section className={styles.corpo_home}>
            <div className={styles.imagem_lado}> 
                <img src="" alt="" />
            </div>
            <div className={styles.texto_lado}>
                <h1>Encontre aqui a Viagem dos seus sonhos!</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi excepturi, perspiciatis ea veniam molestiae tempore eos, necessitatibus facilis in ratione veritatis modi ad ipsum dolorem nulla autem sit cum non.</p>
            </div>

        </section>

    )
}
export default Home