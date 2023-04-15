function encontrarSigno(dia, mes) {
  if ((dia >= 21 && mes === 3) || (dia <= 19 && mes === 4)) {
    return "Áries";
  } else if ((dia >= 20 && mes === 4) || (dia <= 20 && mes === 5)) {
    return "Touro";
  } else if ((dia >= 21 && mes === 5) || (dia <= 21 && mes === 6)) {
    return "Gêmeos";
  } else if ((dia >= 22 && mes === 6) || (dia <= 22 && mes === 7)) {
    return "Câncer";
  } else if ((dia >= 23 && mes === 7) || (dia <= 22 && mes === 8)) {
    return "Leão";
  } else if ((dia >= 23 && mes === 8) || (dia <= 22 && mes === 9)) {
    return "Virgem";
  } else if ((dia >= 23 && mes === 9) || (dia <= 22 && mes === 10)) {
    return "Libra";
  } else if ((dia >= 23 && mes === 10) || (dia <= 21 && mes === 11)) {
    return "Escorpião";
  } else if ((dia >= 22 && mes === 11) || (dia <= 21 && mes === 12)) {
    return "Sagitário";
  } else if ((dia >= 22 && mes === 12) || (dia <= 19 && mes === 1)) {
    return "Capricórnio";
  } else if ((dia >= 20 && mes === 1) || (dia <= 18 && mes === 2)) {
    return "Aquário";
  } else if ((dia >= 19 && mes === 2) || (dia <= 20 && mes === 3)) {
    return "Peixes";
  }
}

function descobrirSigno() {
  let dia = parseInt(document.getElementById("dia").value.replace(/[-+]/g, ""));
  let mes = parseInt(document.getElementById("mes").value.replace(/[-+]/g, ""));
  let resultado = document.getElementById("resultado");
  if (isNaN(dia) || isNaN(mes)) {
    resultado.innerHTML = "Digite um dia e um mês válidos.";
  } else {
    let signo = encontrarSigno(dia, mes);
    resultado.innerHTML = "Seu signo é " + signo + ".";
    if (signo === "Áries") {
      resultado.innerHTML = '<img src="./imagens/aries.png" alt="aries" />';
      resultado.innerHTML += `<h3>Áries</h3>`
      resultado.innerHTML += `<p>Pessoas nascidas sob o signo de Áries são corajosas, determinadas e enérgicas. Eles gostam de liderar e são frequentemente pioneiros em suas atividades.</p>`;
    }
    else if(signo === "Touro"){
      resultado.innerHTML = '<img src="./imagens/touro.png" alt="aries" />';
      resultado.innerHTML += `<h3>Touro</h3>`
      resultado.innerHTML += `<p>Pessoas nascidas sob o signo de Touro são estáveis, práticas e confiáveis. Eles valorizam a segurança e o conforto e são leais aos seus entes queridos.</p>`;
    }
    else if (signo === "Gêmeos") {
      resultado.innerHTML = `<img src="./imagens/gemeos.png" alt="gemeos"/>`;
      resultado.innerHTML += `<h3>Gêmeos</h3>`
      resultado.innerHTML += `<p>Pessoas nascidas sob o signo de Gêmeos são versáteis, comunicativas e curiosas. Eles gostam de aprender e de se relacionar com os outros.</p>`;
    }
    else if (signo === "Câncer") {
      resultado.innerHTML = `<img src="./imagens/cancer.png" alt="cancer"/>`;
      resultado.innerHTML += `<h3>Câncer</h3>`
      resultado.innerHTML += `<p>Pessoas nascidas sob o signo de Câncer são sensíveis, carinhosas e intuitivas. Eles valorizam a família e a segurança emocional.</p>`;
      
    }
    else if (signo === "Leão") {
      resultado.innerHTML = `<img src="./imagens/leao.png" alt="leão"/>`;
      resultado.innerHTML += `<h3>Leão</h3>`
      resultado.innerHTML += `<p>Pessoas nascidas sob o signo de Leão são corajosas, generosas e criativas. Eles gostam de estar no centro das atenções e de se expressar artisticamente.</p>`;
      
    }
    else if (signo ==="Virgem") {
     resultado.innerHTML = `<img src= "./imagens/virgem.png" alt= "Virgem"/>`;
     resultado.innerHTML += `<h3>Virgem</h3>`
     resultado.innerHTML += `<p>Pessoas nascidas sob o signo de Virgem são organizadas, confiáveis e detalhistas. Eles valorizam a precisão e a perfeição.</p>`;
    }
    else if (signo === "Libra") {
      resultado.innerHTML = `<img src= "./imagens/libra.png" alt ="Libra">`;
      resultado.innerHTML += `<h3>Libra</h3>`
      resultado.innerHTML += `<p>Pessoas nascidas sob o signo de Libra são diplomáticas, charmosas e equilibradas. Eles valorizam a harmonia e a beleza.</p>`;
    }
    else if (signo === "Escorpião") {
      resultado.innerHTML = `<img src= "./imagens/escorpiao.png" alt="Escorpião">`;
      resultado.innerHTML += `<h3>Escorpião</h3>`
      resultado.innerHTML += `<p>Pessoas nascidas sob o signo de Escorpião são intensas, corajosas e apaixonadas. Eles valorizam a profundidade e a transformação.</p>`;
    }
    else if (signo === "Sagitário") {
      resultado.innerHTML = `<img src= "./imagens/sagitario.png" alt= "Sagitario">`;
      resultado.innerHTML += `<h3>Sagitário</h3>`
      resultado.innerHTML +=`<p>Pessoas nascidas sob o signo de Sagitário são aventureiras, otimistas e filosóficas. Eles gostam de viajar e de expandir seus horizontes.</p>`;
    }
    else if (signo === "Capricórnio") {
      resultado.innerHTML = `<img src="./imagens/capricornio.png" alt="Capricórnio"/>`;
      resultado.innerHTML += `<h3>Capricórnio</h3>`
      resultado.innerHTML += `<p>Pessoas nascidas sob o signo de Capricórnio são ambiciosas, disciplinadas e práticas. Eles valorizam a segurança financeira e a realização pessoal. </p>`;
      
      }
    else if (signo === "Aquário") {
        resultado.innerHTML = `<img src="./imagens/aquario.png" alt="Aquário"/>`;
        resultado.innerHTML += `<h3>Aquário</h3>`
        resultado.innerHTML += `<p>Pessoas nascidas sob o signo de Aquário são progressistas, originais e independentes. Eles gostam de quebrar barreiras e de experimentar novas ideias. </p>`;
        
        }
    else if (signo === "Peixes") {
          resultado.innerHTML = `<img src="./imagens/peixes.png" alt="Peixes"/>`;
          resultado.innerHTML += `<h3>Peixes</h3>`
          resultado.innerHTML += `<p>Pessoas nascidas sob o signo de Peixes são sensíveis, intuitivas e imaginativas. Eles valorizam a empatia e a conexão emocional com os outros.</p>`;
          
        }
    
  }
}
 