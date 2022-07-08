const url = "http://localhost:8000/api/endereços/";
const api = "https://viacep.com.br/ws/";
var dataid;
var logradouro = document.querySelector('#logradouro');
var complemento = document.querySelector('#complemento');
var bairro = document.querySelector('#bairro');
var localidade = document.querySelector('#localidade');
var uf = document.querySelector('#uf');
var ibge = document.querySelector('#ibge');
var gia = document.querySelector('#gia');
var ddd = document.querySelector('#ddd');
var siafi = document.querySelector('#siafi');
var submitDoc = document.querySelector('#submit');
var cepWebPage = document.querySelector('#cep');



function searchapi(){
    let dados = get();
    cepWebPage.value = cepWebPage.value.replace('-', '');
    async function get() {
        let response = await fetch(api + cepWebPage.value + '/json/', {
          method: "get",
          mode: "cors",
          headers: {
                'content-type': 'application/json;charset=utf-8',
                },
            }
        );
  
    let obj = await response.json();
    let cep = obj.cep.replace('-', '');
    if (cep == cepWebPage.value){
                logradouro.value = obj.logradouro;
                complemento.value = obj.complemento;
                bairro.value = obj.bairro;
                localidade.value = obj.localidade;
                uf.value = obj.uf;
                ibge.value = obj.ibge;
                gia.value = obj.gia;
                ddd.value = obj.ddd;
                siafi.value = obj.siafi;
            }
        }
    }

function search(){
    let dados = get();
    async function get() {
            let response = await fetch(url, {
                method: "get",
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                      },
                  }
              )
          
          let request = await response.json();

          for(let data in request){
                  let obj = request[data];
                  let cep = obj.cep;
                  cepWebPage.value = cepWebPage.value.replace('-', '');
                  if (cep == cepWebPage.value){
                      dataid = obj.id;
                      logradouro.value = obj.logradouro;
                      complemento.value = obj.complemento;
                      bairro.value = obj.bairro;
                      localidade.value = obj.localidade;
                      uf.value = obj.uf;
                      ibge.value = obj.ibge;
                      gia.value = obj.gia;
                      ddd.value = obj.ddd;
                      siafi.value = obj.siafi;
                      return true;  // Caso exista simplesmente retornar e não pesquisar pela API
                  }
            }
        searchapi();     
    }
} 

function put(dataid){
    let bodyJson = {
        "id": dataid,
        "cep": cepWebPage.value,
        "logradouro": logradouro.value,
        "bairro": bairro.value,
        "complemento": complemento.value,
        "localidade": localidade.value,
        "uf":  uf.value,
        "ibge": ibge.value,
        "gia": gia.value,
        "ddd": ddd.value,
        "siafi": siafi.value
    };

    let dados = put();
    async function put() {
        let response = await fetch(url + dataid + '/', {
          method: "put",
          headers: {
              'Accept': '*/*',
              'Content-Type': 'application/json',
            },
    
          body: JSON.stringify(bodyJson)
            }
        )
  
      let data = await response.json();
      location.href="/";
      }

}

function post(){   
    let bodyJson = {
        "id": dataid,
        "cep": cepWebPage.value,
        "logradouro": logradouro.value,
        "bairro": bairro.value,
        "complemento": complemento.value,
        "localidade": localidade.value,
        "uf":  uf.value,
        "ibge": ibge.value,
        "gia": gia.value,
        "ddd": ddd.value,
        "siafi": siafi.value
    };
    let dados = post();
    

  async function post() {
      let response = await fetch(url, {
        method: "post",
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
  
        body: JSON.stringify(bodyJson)
        }
    );

    let data = await response.json();
    location.href="/";
    }
}	


function submit(){
    cepWebPage.value = cepWebPage.value.replace('-', '');
    if (dataid){
        put(dataid);
    }
    else{
        post();
    }
}
