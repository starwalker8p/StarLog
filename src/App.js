import React from 'react';
import './App.css';
import { ReactComponent as StarSVG } from './star.svg';
import { ReactComponent as LinesSVG } from './Readme.svg';
import { ReactComponent as HeartSVG } from './heart.svg';
import { ReactComponent as StarCSVG } from './starc.svg';
import { ReactComponent as LogoSVG } from './logo.svg';
import { ReactComponent as LogoFSVG } from './logof.svg';
import { NavLink } from 'react-router-dom';

const Txtlink = (txt) => {
  return (
    <a id="txtlink" href="src\services\pages\game.js">
      <h5>{txt}</h5>
    </a>
  );
};

const list = (name, user, number, limg) => {
  return (
    <div className='lista'>
      <a href="#"><div className='limg' id={limg}></div></a>
      <a href="#"><p>{name}</p></a> <p>by <a href="#">{user}</a></p><p>{number} games</p>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="searchbar">
      <h5 id="searchtxt">Pesquisar</h5>
      <div id='searchic'></div>
    </div>
  );
};

const Review = (id, user, game, rev, curtidas, rimg) => {
  return (
    <div className={id}>
      <div className={rimg}></div>
      <div className='rinfo1'>
        <p id='title1'>{user} revisou {game}</p>
        <div className="stars">
          <StarSVG /><StarSVG /><StarSVG /><StarSVG /><StarSVG />
        </div>
        <p>{rev}</p>
        <div className="curtidas"><HeartSVG /><p>{curtidas} curtidas</p></div>
      </div>
    </div>
  );
};

const Sec = (id, tt, txts, nimg) => {
  return (
    <div className={id}>
      <h3>{tt}</h3>
      {txts.map((txt, index) => (
        <div className="new" key={index}>
          <div className="nimg" id={nimg[index]}></div>
          <div className="ninfo">
            <h4>{txt}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

const SecS = (id, tt, txts, nimg) => {
  return (
    <div className={id}>
      <h3>{tt}</h3>
      {txts.map((txt, index) => (
        <div className="new" key={index}>
          <div className="nimg" id={nimg[index]}></div>
          <div className="ninfo">
            <h4>{txt}</h4>
            <div className="starsr">
              <StarCSVG />
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
  return (
    <div className='html'>
      <div className="backimg">
        <div className="lines">
          <LinesSVG />
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
            <LogoSVG />
          </div>
          <div className='login'>
            <button id="criarbtn">Crie sua conta.</button>
            <h2>ou {Txtlink(<strong id='entre'>Entre</strong>)} se você já tem uma conta.</h2>
          </div>
          <div className="em_alta">
            <h3>Em alta recentemente</h3>
            <div className="games">
              {[...Array(emaltaph)].map((_, index) => (
                <div key={index} className={`game${index + 1}`}></div>
              ))}
            </div>
          </div>
          <div className='expli'>
            <h2>O que é a StarLog?</h2>
            <h3>StarLog é um lugar para acompanhar virtualmente sua coleção de jogos. Mantenha sua lista atualizada, avalie os jogos que você jogou e adicione os próximos à sua lista de desejos. Compartilhe sua jornada de jogos com seus amigos seguindo uns aos outros para ficar atualizado sobre suas últimas sessões de jogo.</h3>
            <div className="layout1">
              <div className="img1"></div>
              <div className="text1">
                <h2>Acompanhe sua coleção pessoal de jogos</h2>
                <h3>Registre todos os jogos que você já jogou, está jogando atualmente e deseja jogar. Seja detalhado o quanto quiser, com recursos como controle de tempo diário, posse de plataforma e muito mais.</h3>
              </div>
            </div>
            <hr />
            <div className="layout2">
              <div className="text2">
                <h2>Expresse seus pensamentos com avaliações</h2>
                <h3>Veja o que todos estão pensando com as avaliações. Cada jogo tem uma classificação média composta pela avaliação de todos para lhe fornecer uma pontuação de qualidade em um piscar de olhos. E quando estiver pronto, adicione sua avaliação para definir o que o jogo significa para você.</h3>
              </div>
              <div className="img2"></div>
            </div>
            <hr />
            <div className='reviews'>
              <div className='rtop'>
                {Review("review1", "Chiquinha", "Sling Kong", "Jogado no Google Play Pass. É bonitinho, mas meio sem graça a longo prazo, por mais que estar sem microtransações faz a parte de coletar os 'kongs' muito mais legal.", 28, "rimg1")}
                {Review("review2", "Saraprogamer", "Metroid Dead", "9r/10. Truly gorgeous. Absolute Great.", 121, "rimg2")}
              </div>
              <hr />
              <div className='rbottom'>
                {Review("review3", "Farinhagamer", "Dead Space", "Dead Space 1 é, na minha opinião, uma das melhores obras do gênero de sci-fi terror, junto com o primeiro Alien. Tudo neste jogo foi muito bem feito e, principalmente, veio de uma base sólida que era Resident...", 31, "rimg3")}
                {Review("review4", "Zebueiro123", "Just Cause", "This game took a lot of strength to get through as I nearly gave up on it twice throughout my playthrough. To put it in one sentence, this game has aged like milk. The story is so bland and b...", 7, "rimg4")}
              </div>
            </div>
          </div>
          <hr />
          <div className='listas'>
            {list("Particuly Pink Pictures", "whestie", 39, "limg1")}
            {list("Things I dislike about my favourite", "Wollom", 27, "limg2")}
            {list("Hype List", "MrWarm", 15, "limg3")}
          </div>
          <hr />
          <div className='news'>
            {Sec("sec1", "Chegando em Breve", ["Critter Crops - Apr 16", "Dream Tactics - Apr 15", "Harold Halibut - Apr 16", "Europa - Apr 16", "BioGun - Apr 16", "Kingsgrave - Apr 17"], ["nimg1", "nimg2", "nimg3", "nimg4", "nimg5", "nimg6"])}
            {Sec("sec2", "Anunciados Recentemente", ["Shin Megami Tensei V: Vengeance - Jun 14", "Metaphor: ReFantazio - Dec 31", "Hades II - Jun 30", "Elden Ring: Shadow of the Erdtree - Jun 21", "Stellar Blade - Apr 26", "Grand Theft Auto VI - Dec 31, 2025"], ["nimg21", "nimg22", "nimg23", "nimg24", "nimg25", "nimg26"])}
            {SecS("sec3", "Pouco Conhecidos", ["Splatoon 3: Side Order", "Granblue Fantasy Versus: Rising", "Silent Hill 2: Enhanced Edition", "Undertale Yellow 4:0", "Under Night In-Birth II Sys:Celes", "Lunacid"], ["nimg31", "nimg32", "nimg33", "nimg34", "nimg35", "nimg36"])}
          </div>
        </div>
      </div>
      <footer>
        <div className="footer">
          <div className="fcont">
            <div className="ftext">
              <h2>Sobre</h2>
              <h2>Contato</h2>
              <h2>Stars</h2>
              <h2>RoadMap</h2>
              <h2>Termos</h2>
              <h2>Privacidade</h2>
            </div>
            <div className="rights">
              <p>© StarLog 2024 • v0.1 • Powered by IGDB</p>
            </div>
          </div>
          <div className="flogo">
            <LogoFSVG />
          </div>
        </div>
      </footer>
    </div>
  );
}
