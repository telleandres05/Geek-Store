import './hero-style.css'
import { HeroButton } from '../HeroButton'

export function Hero(){
    return(
        <div className="hero">
        <h2>
            Demasiado Poder Para Una Tienda Normal 
        </h2>
        <div className="prodB">
        <HeroButton/>
        </div>
        </div>
    )
}