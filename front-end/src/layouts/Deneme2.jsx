import axios from 'axios'
import React, { useState } from 'react'

export default function Deneme2() {
  const [product, setProduct] = useState({
    urunAdi: "",
    stokAdedi: "",
    birimFiyati: "",
    satisAdedi: "",
    urunAciklamasi: "",
    urunResmi: "",
  })
  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.post('http://localhost:8080/products/add',  product )
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <h1>Register or Create new account</h1>
      <hr />
      <form onSubmit={handleSubmit}>

        <label >
          Ürün Adı
          <input
            type="text"
            name='urunAdi'
            onChange={handleInput}
          />
        </label>
        <p />
        <label >
          Stok Adedi
          <input
            type="text"
            name='stokAdedi'
            onChange={handleInput}
          />
        </label>
        <p />
        <label >
          birimFiyati
          <input
            type="text"
            name='birimFiyati'
            onChange={handleInput}
          />
        </label>
        <p />
        <label >
          satisAdedi
          <input
            type="text"
            name='satisAdedi'
            onChange={handleInput}
          />
        </label>
        <p />
        <label >
          urunAciklamasi
          <input
            type="text"
            name='urunAciklamasi'
            onChange={handleInput}
          />
        </label>
        <p />
        <label >
          urunResmi
          <input
            type="text"
            name='urunResmi'
            onChange={handleInput}
          />
        </label>
        <p />
        <p />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
