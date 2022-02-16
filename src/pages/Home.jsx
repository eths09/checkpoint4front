import '../style/home.css'
import logo from '../img/coffeeLogo.png'
import seed from '../img/coffeeSeed.png'
import grinder from '../img/coffeeGrinder.png'
import coffeeCode from '../img/coffeeCode.png'
import Mail from '../components/Mail'
import Article from '../components/Article'
import image1 from '../img/article1.jpg'
import image2 from '../img/cappuccino.jpg'
const Home = () => {
  return (
    <div className="allhome">
      <div className="logocontainer">
        <img className="logo" src={logo} />
        <h1>Bienvenue</h1>
      </div>
      <div className="seedcontainer">
        <p className="pHome">
          {' '}
          Récolte : <br />
          <br />
          Un Arabica produit environ 2,5 kg de cerises fraîches par an et par
          arbre. La récolte se fait sur une période d’environ 2 à 3 mois, au
          printemps ou à l’automne suivant sa localisation par rapport à
          l’équateur. Il existe plusieurs méthodes de récolte : le picking, le
          stripping et la mécanique. La mécanique est la moins propre pour
          l’arbre, mais la plus rapide. Il suffit de mettre un filet sous
          l’arbre et de le secouer afin d’en faire tomber les cerises. Avec
          cette méthode, la qualité n’est pas assurée : immatures, abîmées,
          pourries ou belles, toutes les cerises tombent. Le stripping consiste
          à racler les branches avec un peigne pour arracher les cerises. Les
          feuilles se retrouvent elles aussi arrachées et l’écorce des branche
          est abîmée. En bref, on se retrouve avec un mauvaise qualité de
          récolte et un arbre amoché. Enfin, le picking est la méthode la plus
          appropriée pour obtenir le meilleur de l’arbre. La récolte se fait
          manuellement en sélectionnant uniquement les cerises mûres. Mais cela
          demande beaucoup plus de temps, de main d’œuvre et requiert plusieurs
          passages sur l’arbre. Mais, qui dit plus de main d’oeuvre et de temps
          dit coût de production plus élevé. Mais choisir cette méthode de
          récolte, c’est faire preuve de responsabilité et d’engagement sur les
          plans social et environnemental.
        </p>
        <img className="imgc" src={seed} />
      </div>
      <div className="grindercontainer">
        <img className="imgc" src={grinder} />
        <p className="pHome">
          Mouture : <br />
          <br />A l’inverse du vin, le café moulu ne se bonifie pas avec le
          temps. Après ouverture, le café déjà moulu se consomme généralement
          dans les deux semaines car il s’oxyde et perd très rapidement ses
          arômes. Les grains de café torréfiés quant à eux, ont l’avantage de se
          conserver beaucoup plus longtemps. Après torréfaction, il est
          conseillé de consommer son café dans les 3 mois car le CO2 s’échappe
          des grains, dissout les composants organiques de la fibre et le grain
          perd les arômes qui le composent et ainsi toute sa complexité et son
          intensité. Il est possible de moudre à l’avance mais une fois moulu et
          gardé au sec, il est conseillé de le consommer dans les 3 jours après
          car il devient rapidement rance et insipide. Plus il s’oxyde et plus
          il gagne en amertume. Pour bénéficier de tous les arômes, il est donc
          primordial de moudre son café au dernier moment.
        </p>
      </div>
      <div className="coffeecodecontainer">
        <p className="pHome">
          Méthode : <br />
          <br /> Il existe de nombreuses manières de préparer la boisson. Le
          café instantané est l'une d'elles ; les autres méthodes sont plus
          traditionnelles, recourant aux grains fraîchement moulus,
          commercialisés moulus sous vide, au café en dosette (variante récente
          du café filtre et de l'expresso) ou encore au sachet de caféN 5,
          développé pour offrir la commodité du café instantané et en même temps
          maintenir la saveur du café filtre. On dénombre six modes de
          préparation du café, chacun conférant à la boisson obtenue des
          propriétés organoleptiques et compositions bien distinctes. La boisson
          finale peut être plus ou moins concentrée, à côté de l'espresso
          italien très concentré, il existe des dilutions plus ou moins grandes
          aboutissant au café de type « américain », encore connu sous le nom de
          café de « bonne sœur », qui ressemble à une tisane.
        </p>
        <img className="imgc" src={coffeeCode} />
      </div>
      <div className="articleContainer">
        <Article img={image1} />
        <Article img={image2} />
      </div>

      <div className="h2container">
        <h2>si vous avez besoin de plus d'information inscrivez-vous ici </h2>
      </div>
      <Mail />
    </div>
  )
}

export default Home
