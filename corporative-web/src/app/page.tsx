import Card from "./components/card";
import styles from "@/app/styles/layout.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="primary-title">MACROSOFT</h1>
      <div className="primary-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imper Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imper Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem
        at nibh elementum imper
      </div>{" "}
      <h1 className="primary-subtitle">Our Culture</h1>
      <div className={styles.card}>
        <Card name={"Mission"}></Card>
        <Card name="Vision"></Card>
        <Card name="Values"></Card>
      </div>
      <div className="primary-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imper Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imper Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem
        at nibh elementum imper Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imper Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem
        at nibh elementum imper Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imper Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem
        at nibh elementum imper Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imper Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem
        at nibh elementum imper
      </div>{" "}
    </div>
  );
}
