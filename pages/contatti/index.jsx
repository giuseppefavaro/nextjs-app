import styles from "./styles.module.scss"

import Image from 'next/image'
import mypic from '../../public/contact.jpg'

const Contatti = () => {
    return (
        <div className={styles.Contatti}>
            
            <Image
                src={mypic}
                alt="Picture of the author"
                width="1400px"
                height="576px"
            />

            <div className={styles.Contatti__text}>
                <h1>Contattaci</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>


        </div>
        
    )
}

export default Contatti;