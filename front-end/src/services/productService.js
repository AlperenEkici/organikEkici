import axios from "axios"

export default class ProductService {
    getProducts() {
        return axios.get("http://localhost:8080/products/getAll")
    }

    getByUrunId(urunId) {
        return axios.get("http://localhost:8080/products/getByUrunId/" + urunId)
    }

    getByEnÇokSatanlar() {
        return axios.get("http://localhost:8080/products/getByEnÇokSatanUrunler")
    }

    getByKategoryId(kategoriId) {
        return axios.get("http://localhost:8080/products/getByCategory?urunKategoriId=" + kategoriId)
    }
}