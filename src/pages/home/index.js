import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import FooterBase from '../../components/Footer';


function Home() {
  return (
    <div>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
<<<<<<< HEAD:src/pages/home/index.js
        videoDescription={"O que é front-end? trabalhando na área os termos HTML, CSS e JavaScript fazem partte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa! "}
=======
        videoDescription={"O que faz uma desenvolvedora front-end?"}
>>>>>>> master:src/App.js
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel 
        category={dadosIniciais.categorias[1]}
      />
      <Carousel 
        category={dadosIniciais.categorias[2]}
      />
      <Carousel 
        category={dadosIniciais.categorias[3]}
      />
      <Carousel 
        category={dadosIniciais.categorias[4]}
      />
      <Carousel 
        category={dadosIniciais.categorias[5]}
      />

      <FooterBase />
    </div>
  );
}

export default Home;
