function copyToClipboard(text) {
  $("#input").val(text);
  $("#input").focus();
  $("#input").select();
  document.execCommand("copy");
}

function gera_random(n) {
  var ranNum = Math.round(Math.random()*n);
  return ranNum;
}

function mod(dividendo,divisor) {
  return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

function cpf(with_mask) {
  var n = 9;
  var n1 = gera_random(n);
  var n2 = gera_random(n);
  var n3 = gera_random(n);
  var n4 = gera_random(n);
  var n5 = gera_random(n);
  var n6 = gera_random(n);
  var n7 = gera_random(n);
  var n8 = gera_random(n);
  var n9 = gera_random(n);
  var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
  d1 = 11 - ( mod(d1,11) );
  if (d1>=10) d1 = 0;
  var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11; d2 = 11 - ( mod(d2,11) );
  if (d2>=10) d2 = 0;
  if (with_mask) {
    return ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
  } else {
    return ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;
  }
}

function cnpj(with_mask) {
  var n = 9;
  var n1 = gera_random(n);
  var n2 = gera_random(n);
  var n3 = gera_random(n);
  var n4 = gera_random(n);
  var n5 = gera_random(n);
  var n6 = gera_random(n);
  var n7 = gera_random(n);
  var n8 = gera_random(n);
  var n9 = 0;  //gera_random(n);
  var n10 = 0; //gera_random(n);
  var n11 = 0; //gera_random(n);
  var n12 = 1; //gera_random(n);
  var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
  d1 = 11 - ( mod(d1,11) );
  if (d1>=10) d1 = 0;
  var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6; d2 = 11 - ( mod(d2,11) );
  if (d2>=10) d2 = 0;
  if (with_mask) {
    return ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2;
  } else {
    return ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+d1+d2;
  }
}

function lorem() {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

$(document).ready(function() {
  $("body").keypress(function(event) {
    switch (event.which) {
      case 49: // 1
        document.execCommand("copy")
        copyToClipboard(cpf(false));
        break;
      case 50: // 2
        copyToClipboard(cpf(true));
        break;
      case 51: // 3
        copyToClipboard(cnpj(false));
        break;
      case 52: // 4
        copyToClipboard(cnpj(true));
        break;
      case 53: // 5
        copyToClipboard(lorem());
        break;
      case 54: // 6
        copyToClipboard(cc_gen('visa'));
        break;
      case 55: // 7
        copyToClipboard(cc_gen('master'));
        break;
      case 56: // 8
        copyToClipboard(cc_gen('amex'));
        break;
    }
    window.close();
  });
});

