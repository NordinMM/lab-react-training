import './Greetings.css'
export default function Greetings ({lang, children}){
    let greetings = 'Hola';
    if (lang === 'en'){
        greetings = 'Hello'
    } else if (lang === 'de') {
        greetings = 'Hallo'
    } else if (lang === 'es'){
        greetings = 'Hola'
    } else if (lang === 'fr'){
        greetings = 'Bonjour'
    }
    return(
        <div className="Gree">
            <p >{greetings}{children}</p>
        </div>
    )
}