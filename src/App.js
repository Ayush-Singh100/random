import "./App.css";
import Data from "./Data"
import Card from "./Card";

function App() {
  console.log(Data[1])
  return (
    <>
    <div className="whole-body">
      <h1 id="heading">Most Watched Web Series</h1>
      <div className="contain">
        <Card sname={Data[0].sname} imgsrc={Data[0].imgsrc} title={Data[0].title} link={Data[0].link}/>
        <Card sname={Data[1].sname} imgsrc={Data[1].imgsrc} title={Data[1].title} link={Data[1].link}/>
        <Card sname={Data[2].sname} imgsrc={Data[2].imgsrc} title={Data[2].title} link={Data[2].link}/>
        <Card sname={Data[3].sname} imgsrc={Data[3].imgsrc} title={Data[3].title} link={Data[3].link}/>
        <Card sname={Data[4].sname} imgsrc={Data[4].imgsrc} title={Data[4].title} link={Data[4].link}/>
        <Card sname={Data[5].sname} imgsrc={Data[5].imgsrc} title={Data[5].title} link={Data[5].link}/>
        <Card sname={Data[6].sname} imgsrc={Data[6].imgsrc} title={Data[6].title} link={Data[6].link}/>
        <Card sname={Data[7].sname} imgsrc={Data[7].imgsrc} title={Data[7].title} link={Data[7].link}/>
        <Card sname={Data[8].sname} imgsrc={Data[8].imgsrc} title={Data[8].title} link={Data[8].link}/>
        <Card sname={Data[9].sname} imgsrc={Data[9].imgsrc} title={Data[9].title} link={Data[9].link}/>
        <Card sname={Data[10].sname} imgsrc={Data[10].imgsrc} title={Data[10].title} link={Data[10].link}/>
      </div>
      <p className="disclaimer">NOTE :- Above list is based on internet ratings.</p>
      </div>
    </>
  );
}

export default App;
