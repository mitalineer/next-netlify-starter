import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
export default function Home() {
  return (
    <div className="container">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />
      </head>
      <h1>Pari Home Decore Furniture</h1>
      <div class="btn-group">
        <button>Sofa</button>
        <button>Bed</button>
        <button>Wedding Furniture Set</button>
        <button>Mattress</button>
      </div>
      <p> For More Information Contact : neernpatel@gmail.com </p>
      <img src="public/netliheart.svg"> </img>
      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    </div>
  )
}
