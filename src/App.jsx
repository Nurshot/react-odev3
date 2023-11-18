import "./App.css";
import React from "react";

function Arama({aramaMetni,onSearch}) {
  
  const handleChange=(event) =>{

      onSearch(event);
    }

  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={handleChange} 
      value={aramaMetni}/>

      
      
    </div>
  );
}

function Yazi({id,url,baslik,yazar,puan,yorum_sayisi}) {
  return (
    <li key={id}>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}


function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function (yazi) {
        return <Yazi key={yazi.id} {...yazi}/>;
      })}{" "}
    </ul>
  );
}

function App() {
  const [aramaMetni, setAramaMetni] = React.useState(localStorage.getItem("aranan") || "React");
  

  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "C++ Çalışıyorum",
      url: "wwww.google.com.tr",
      yazar: "Nurşat Bülbül",
      yorum_sayisi: 2,
      puan: 5,
      id: 2,
    },
    {
      baslik: "Python Çalışıyorum",
      url: "wwww.google.com.tr",
      yazar: "Emre Kara",
      yorum_sayisi: 2,
      puan: 5,
      id: 3,
    },
    {
      baslik: "Dön Diyemem",
      url: "https://www.youtube.com/watch?v=vjH3hjr3RVY&pp=ygUaZMO2biBkaXllbWVtIGVyZW4ga296YWtsxLE%3D",
      yazar: "Eren Kozaklı",
      yorum_sayisi: 2,
      puan: 5,
      id: 4,
    },
  ];

  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);

  },[aramaMetni]);


  const arananYazilar=yaziListesi.filter(
    function(yazi){
      let baslikarama = yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
      let yazararama = yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase());

      return baslikarama || yazararama;
    }

  );


  function handleSearch(event){
      console.log(event.target.value);
      setAramaMetni(event.target.value);
  }

  return (
    <div>
      <h1>Merhaba !</h1>
      <Arama aramaMetni ={aramaMetni} onSearch={handleSearch}/>
      <p>
        <strong>{aramaMetni == "" ? "" : aramaMetni + " aranıyor.." }</strong>
      </p>
      <hr />
      <Liste yazilar={arananYazilar} />
    </div>
  );
}
export default App;
