import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import igdbService from './services/igdbService';
import { ReactComponent as StarSVG } from './star.svg'; import { ReactComponent as LinesSVG } from './Readme.svg'; import { ReactComponent as HeartSVG } from './heart.svg'; import { ReactComponent as StarCSVG } from './starc.svg'; import { ReactComponent as LogoSVG } from './logo.svg'; import { ReactComponent as LogoFSVG } from './logof.svg';
const Txtlink = (txt) => {
  return (
    <a id="txtlink" href="#">
      <h5>{txt}</h5>
    </a>
  );
};
const list = (name,user,number) => {
  return(
    <div className='lista'>
      <a href="#"><div className='limg'></div></a>
      <a href=""><p>{name}</p></a> <p>by <a href="#">{user}</a></p><p>{number} games</p>
    </div>
  )
}
const SearchBar = () => {
  return (
    <div className="searchbar">
      <h5 id="searchtxt">Pesquisar</h5>
      <div id='searchic'></div>
    </div>
  );
};
const Review = (id,user,game,rev,curtidas) => {
  return(
    <div className={id}>
      <div className='rimg1'></div>
      <div className='rinfo1'>
        <p id='title1'>{user} revisou {game}</p>
        <div class="stars">
        <StarSVG/><StarSVG/><StarSVG/><StarSVG/><StarSVG/>
        </div>
        <p>{rev}</p>
        <div class="curtidas"><HeartSVG/><p>{curtidas} curtidas</p></div>
      </div>
    </div>
  );
}
const Sec = (id, tt, txt) => {
  return (
    <div className={id}>
      <h3>{tt}</h3>
      {[...Array(5)].map((_, index) => (
        <div className="new" key={index}>
          <div className="nimg"></div>
          <div className="ninfo">
            <h4>{txt}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};
const SecS = (id, tt, txt) => {
  return (
    <div className={id}>
      <h3>{tt}</h3>
      {[...Array(5)].map((_, index) => (
        <div className="new" key={index}>
          <div className="nimg"></div>
          <div className="ninfo">
            <h4>{txt}</h4>
            <div className="starsr">
              <StarCSVG/>
              3.5                  
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const emaltaph = 5;
export default function MyApp() {
  const [popularGames, setPopularGames] = useState([]);

  useEffect(() => {
    const fetchPopularGames = async () => {
      try {
        const response = await igdbService.post('/games', {
          fields: 'name,cover.url',
          limit: emaltaph,
          sort: 'popularity desc',
        });
        setPopularGames(response.data);
      } catch (error) {
        console.error('Error fetching popular games:', error);
      }
    };

    fetchPopularGames();
  }, []);

  return (
    <div className='html'>
      <div className="backimg">
        <div className="lines">
          <LinesSVG/>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <nav>
            {Txtlink("Entrar")}
            {Txtlink("Registrar")}
            {Txtlink("Jogos")}
            <SearchBar />
          </nav>
          <div className='logo'>
            <LogoSVG/>
          </div>
          <div className='login'>
            <button id="criarbtn">Crie sua conta.</button>
            <h2>ou{Txtlink(<strong id='entre'>Entre</strong>)} se você já tem uma conta.</h2>
          </div>
          <div className="em_alta">
          <h3>Em alta recentemente</h3>
          <div className="games">
            {popularGames.map((game, index) => (
              <div key={index} className={`game${index + 1}`}>
                <img src={game.cover.url} alt={game.name} />
                <h4>{game.name}</h4>
              </div>
            ))}
          </div>
          </div>
          <div className='expli'>
            <h2>O que é a StarLog?</h2>
            <h3>StarLog é um lugar para acompanhar virtualmente sua coleção de jogos. Mantenha sua lista atualizada, avalie os jogos que você jogou e adicione os próximos à sua lista de desejos. Compartilhe sua jornada de jogos com seus amigos seguindo uns aos outros para ficar atualizado sobre suas últimas sessões de jogo.</h3>
            <div class="layout1">
              <div class="img1"></div>
                <div class="text1">
                  <h2>Acompanhe sua coleção pessoal de jogos</h2>
                  <h3>Registre todos os jogos que você já jogou, está jogando atualmente e deseja jogar. Seja detalhado o quanto quiser, com recursos como controle de tempo diário, posse de plataforma e muito mais.</h3>
                  </div>
                </div>
            <hr/>
            <div class="layout2">
              <div class="text2">
                <h2>Expresse seus pensamentos com avaliações</h2>
                <h3>Veja o que todos estão pensando com as avaliações. Cada jogo tem uma classificação média composta pela avaliação de todos para lhe fornecer uma pontuação de qualidade em um piscar de olhos. E quando estiver pronto, adicione sua avaliação para definir o que o jogo significa para você.</h3>
              </div>
              <div class="img2"></div>
            </div>
            <hr/>
            <div className='reviews'>
              <div className='rtop'>
                  {Review("review1","Chavisquinha","Sling Kong","Jogado no Google Play Pass. É bonitinho, mas meio sem graça a longo prazo, por mais que estar sem microtransações faz a parte de coletar os 'kongs' muito mais legal.",10)}
                  {Review("review2","Chavisquinha","Sling Kong","Jogado no Google Play Pass. É bonitinho, mas meio sem graça a longo prazo, por mais que estar sem microtransações faz a parte de coletar os 'kongs' muito mais legal.",10)}
              </div>
              <hr />
              <div className='rbottom'>
                  {Review("review3","Chavisquinha","Sling Kong","Jogado no Google Play Pass. É bonitinho, mas meio sem graça a longo prazo, por mais que estar sem microtransações faz a parte de coletar os 'kongs' muito mais legal.",10)}
                  {Review("review4","Chavisquinha","Sling Kong","Jogado no Google Play Pass. É bonitinho, mas meio sem graça a longo prazo, por mais que estar sem microtransações faz a parte de coletar os 'kongs' muito mais legal.",10)}
              </div>
            </div>
          </div>
          <hr/>
          <div className='listas'>
            {list("Particuly Pink Pictures","whestie",39)}
            {list("Particuly Pink Pictures","whestie",39)}
            {list("Particuly Pink Pictures","whestie",39)}
          </div>
          <hr />
          <div className='news'>
            {Sec("sec1","Chegando em breve...","blablablabla")}
            {Sec("sec2","Anunciados recentemente","blablablabla")}
            {SecS("sec3","Pouco conhecidos","blablablabla")}
          </div>
        </div>
      </div>
    <footer>
      <div class="footer">
        <div class="fcont">
            <div class="ftext">
                <h2>Sobre</h2>
                <h2>Contato</h2>
                <h2>Stars</h2>
                <h2>RoadMap</h2>
                <h2>Termos</h2>
                <h2>Privacidade</h2>
            </div>
            <div class="rights">
                <p>© StarLog 2024 • v0.1 • Powered by IGDB</p>
            </div>
        </div>
        <div class="flogo">
          <LogoFSVG/>
        </div>
      </div>
    </footer>
    </div>
  );
}