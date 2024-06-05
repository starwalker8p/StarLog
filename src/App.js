import './App.css';
const Txtlink = (txt) =>{
  return <a id="txtlink" href="#"><h5>{txt}</h5></a>
}
function SearchBar(gameN){
  return <div className="searchbar">
    <h5 id="searchtxt">Pesquisar</h5>
    <img src="" alt="ic"/>
  </div>
}
export default function MyApp(){
  return(
    <div className='container'>
    <nav>
      {Txtlink("Entrar")}
      {Txtlink("Entrar")}
      {Txtlink("Jogos")}
      {SearchBar()}
    </nav>
  </div>
  );
}