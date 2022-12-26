import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
export default function Home() {
  return (
    <div className="container">
      <h1>Vertical Button Group</h1>
      <div class="btn-group">
        <button>Sofa</button>
        <button>Bed</button>
        <button>Wedding Furniture Set</button>
        <button>Mattress</button>
      </div>
      <p> For More Information Contact : neernpatel@gmail.com </p>
    </div>
  )
}
