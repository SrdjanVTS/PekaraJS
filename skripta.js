function dan(){//pravim funkciju dan()
    
    var datum=new Date();// pormenjiva datum koja uzima vrednosti datuma pomocu new date() metode
    var dan=datum.getDay();//promenjiva dana uzima vrednost danasnjeg dana
    sadrzaj="";// prazna promenjiva sadrzaj koja se kreira.
    switch(dan)// kontrolna struktura switch koja proverava promenjivu dan
    {
    case 2:// ako je case 2 to znaci dan utorak , promenjiva dobija vrednost elementa <marguee> sa tekstom
    sadrzaj="<marquee >Sacuvajte danasnji racun i dobijate popust na limunadu!</marquee>";
    break;
    case 3:
    sadrzaj="<marquee >Da pregurate dugu sredu spremili smo vam 10% popusta na slatko!</marquee>";
    break;
    case 5:
        sadrzaj="<marquee >Danas je petak dan za metak i time dobija popust od 15% na sve vrste bureka!</marquee>";;
    break;
    case 6:
        sadrzaj="<marquee >Samo subotom od 21:00 vas ocekuje popust na kombinaciju burek + jogurt za samo 199 DIN! </marquee>";
    break;
    default://ako nije naveden ni jedan od ponudjenih dana onda ispisuje ovu poruku
        sadrzaj="<marquee >Danas je lep dan da se pocastite u BISER pekari</marquee>";
    break;
    }
    let polje1 =document.getElementById("polje1").innerHTML= sadrzaj;//promenjiva polje1 dobija element preko id od div id polje1 i preko dinamickog generisanja sajta dobija vrednost sadrzaj.
    }
    
    
    
    
    function tabela(x) {
      var p = document.getElementById("naslov1");
      var p2 = document.getElementById("naslov2");//promenjive p i p2 dobijaju element preko id od a href ='#' sa id naslov1 i naslov2
    
      var proizvodi = [];//jedan prazan niz sa imenon proizvodi
      if (x === 1) {//kontrolna struktura if gde je ulazni parametar ako ima vrednost 1 vrsi radnju ispod
        proizvodi = [
          { ime: "Burek", cena: "190DIN", link: "kontakt.html" },
          { ime: "Sarajevska pita", cena: "160DIN", link: "kontakt.html" },
          { ime: "Hleb", cena: "80DIN", link: "kontakt.html" }//dvodimenzionalni niz koji dobija onaj prazan niz sa ovim vrednostima izmedju [] zagrada
        ];
        p.style.background="#EDCAA1";
        p.style.color="rgb(243, 243, 243)";
        p.style.boxShadow="none";//promenjiva p menja still kada se izvrsi if
        var polje2 = document.getElementById("polje2");//i polje2 promenjiva dobija elementr od div id="polje2";
    
      } else if (x === 2) {//else if sa ulaznim parametrom ako je njego vrednost jednaka 2
        proizvodi = [
          { ime: "Krofna", cena: "100DIN", link: "kontakt.html" },
          { ime: "Kroasan", cena: "120DIN", link: "kontakt.html" },
          { ime: "Baklava", cena: "150DIN", link: "kontakt.html" }// ona globalna promenjiva dobija novi dvodimenzionalni niz  sa drugacijim vrednostima
        ];
        p2.style.background="#EDCAA1";
        p2.style.color="rgb(243, 243, 243)";
        p2.style.boxShadow="none";// p2 menja still kad se pokrene else if kontrola struktura
        var polje2 = document.getElementById("polje3");//polje2 u else if dobija vrednosti div id="polje3"
      }
    
      var sadrzaj = "<table>";//promenjiva sadrzaj ima vrednost pocetak tabele
      for (var i = 0; i < proizvodi.length; i++) {// for petlja sa brojacem koji prolazi kroz niz
        sadrzaj += "<tr><td>" + proizvodi[i].ime + "</td><td>" + proizvodi[i].cena + "</td><td><a href='" + proizvodi[i].link + "'>Kupi</a></td></tr>";
      }// sadrzaj dobija vrednosti polja i redova u tabeli sve dok brojac ne dodje do kraja.
      sadrzaj += "</table>";// tabela se zavrsava
      polje2.innerHTML = sadrzaj;// preko dinamickog generisanja html koda polje2 dobija vrednost tog sadrzaja.
    }
  
    
    function pozdrav(team){//funkcija pozdrav sa ulaznim parametrom
    
    alert("Hvala sto kupujete kod nas, veliki pozdrav od "+team+" pekare!");// ispisuje se alert na stranici posle dogadjaja onclick
    
    }
    function ispisiPodatke() {
      const inputFields = document.querySelectorAll('.input');
      const textareaField = document.querySelector('textarea');
      let tekst = '';
      inputFields.forEach((input) => {
        tekst += `${input.placeholder}: ${input.value}\n`;
      });
      tekst += `Detalji: ${textareaField.value}`;
      
      alert("Podaci vase porudzbine:\n"+tekst);
    }