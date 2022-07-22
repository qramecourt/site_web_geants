

function showList() {
    document.getElementById('giantList').style.visibility = "visible" 
}
function showDesc(){
    document.getElementById('giantDesc').innerHTML =`
    <div>
    <h4>qu'est-ce qu'un géant</h4>
    <p>
    le géant est une figure processionnaire, sorti lors de fetes (par exemple: les Gayant).
    c'est une tradition remontant au moyen-age. la taille moyenne d'un géant est d'enviton 3 mètres parfois beaucoup plus, et ceux-ci sont traditionnelement portés, meme si beaucoup sont sur roulettes ou tractés.
    à l'origine religieuse, ces figures représentaient des saints. maintenant ceux-ci peuvent
    représenter des métiers, ou bien des figures historiques locales, ou encore des
    personnages fantastiques, voire des supporters de football!!!!
    </p>
    <h4>comment sont-ils faits?</h4>
    <p>
        si on utilise divers matériaux, l'osier en est celui d'origine et le plus adapté.
        matériau souple, léger, mais résistant, ce matériau permet de construire des géants de grande taille tout en pouvant etre portées par un seul porteur (ou plusieurs!), celui-ci donnera vie au géant, pouvant le faire marcher, voire danser (certains de ces grands gaillards ne s'en privent pas)
    </p>
    <img  id="giantScheme" src="/geants/misc/fabrication_geant.jpg" alt="schéma de fabrication d'un géant">
    </div>`
}
function showAboutMe(){
        document.getElementById('icon').innerHTML= 
        `<div>
            <h4>biographie</h4>
         <p>
            né le 17 juin 1991 à Lille, je mesure environ 2.00m. issu à l'origine d'une formation en plasturgie, j'ai pu des l'age de 10 ans m'intéresser aux géants du nord (et de belgique) j'ai d'ailleurs pu porter (une fois!) Anatole de villeneuve d'acsq.d'une nature curieuse, j'ai pu m'intéresser aux métiers du web et ce site personnel (vous pouvez regarder il est pas odé en WordPress!) en est la preuve! 

            vous pourrez me voir notamment aux fetes de Gayant, ou à la braderie de LILLE
        </p>`
}
