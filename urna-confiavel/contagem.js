function votar(){
    var b = document.getElementById('c1');
    var l = document.querySelector('#c2');
    var res = document.querySelector('#res');

    var cand1 = Number(b.value);
    var cand2 = Number(l.value);

    

if(cand1 > cand2){
    res.innerHTML = `O <strong>CANDIDATO 1</strong> obteve ${cand1} votos, enquanto o <strong>CANDIDATO 2</strong> obteve ${cand2} votos. <br>`;
    res.innerHTML += `Neste caso, o <strong>CANDIDATO 1</strong> VENCEU as eleições com ${cand1} votos.!!!`
}else if(cand1 < cand2) {
    res.innerHTML = `Enquanto o <strong>CANDIDATO 1</strong> obteve ${cand1} votos, o candidato <strong>CANDIDATO 2</strong> obteve ${cand2} votos.!!! <br>`;
    res.innerHTML += `Neste caso, o CANDIDATO 2 VENCEU as eleições com ${cand2} votos.!!!`;
} else if(cand1 === cand2) {
    res.innerHTML = `Enquanto o <strong>CANDIDATO 1</strong> obteve ${cand1} votos, o candidato <strong>CANDIDATO 2</strong> obteve ${cand2} votos. <br>`;
    res.innerHTML += `Neste caso, a eleição está EMPATADA.`;
}   else {
    window.alert('[OPS]Coloque algum número para iniciar a votação!!!')
}
}

