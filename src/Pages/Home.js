import "../components/Home.css"

export default function Home() {
  return (
    <div className="Home">
      <p>We will show you new products and promotions. Or just let you know about drones.</p>
      <div className="drone-video">
        <div className="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/_mgf2hjX7jg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <img className="avata" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuYgucHSpah0sgOA3edN6X_SNOKgq78nSFw&usqp=CAU" alt="avata"/>
        <div className="video2"><iframe width="560" height="315" src="https://www.youtube.com/embed/C6cgcpfKt3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div>
        <div className="video3"><iframe width="560" height="315" src="https://www.youtube.com/embed/jEh0XyGhIxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    </div>
  );
}