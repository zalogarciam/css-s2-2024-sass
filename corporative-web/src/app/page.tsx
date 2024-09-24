import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  return (
    <div className="container mx-auto">
      <main>
        <h1 className="primary-title">This is a corp Web</h1>
        <div>
          <Card name="Enrique" description="?"></Card>
          <Card name="Gonzalo" description="..."></Card>
        </div>
        <button className="primary-btn">Aceptar</button>
      </main>
      <footer></footer>
    </div>
  );
}
