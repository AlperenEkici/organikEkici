package organikekici.backend.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import organikekici.backend.business.abstracts.ProductService;
import organikekici.backend.dataAccess.abstracts.ProductDao;
import organikekici.backend.entities.concretes.Product;

@Service
public class ProductManager implements ProductService{
	ProductDao productDao;
	
	@Autowired
	public ProductManager(ProductDao productDao) {
		super();
		this.productDao = productDao;
	}
	

	@Override
	public List<Product> getAll() {
		return this.productDao.findAll();
	}


	@Override
	public Product getByUrunAdi(String name) {
		return productDao.getByUrunAdi(name);
	}


	

	@Override
	public List<Product> getByUrunAdiStartsWith(String name) {
		return productDao.getByUrunAdiStartsWith(name);
	}


	@Override
	public List<Product> getByUrunAdiContains(String name) {
		
		return productDao.getByUrunAdiContains(name);
	}


	@Override
	public Product getByUrunId(Integer id) {
		return productDao.getByUrunId(id);
	}


	@Override
	public List<Product> getByEnÇokSatanUrunler() {
		return productDao.getByEnÇokSatanUrunler();
	}


	@Override
	public List<Product> getByCategory(Integer urunKategoriId) {
		return productDao.getByCategory(urunKategoriId);
	}


	@Override
	public Product add(Product product) {
		return productDao.save(product);
		
	}


	@Override
	public Product updateProduct(int id, Product newProduct) {
		Product product =productDao.findById(id)
				.orElseThrow();
			
		product.setBirimFiyati(newProduct.getBirimFiyati());
		product.setKategoriId(newProduct.getKategoriId());
		product.setSatisAdedi(newProduct.getSatisAdedi());
		product.setStokAdedi(newProduct.getStokAdedi());
		product.setUrunAciklamasi(newProduct.getUrunAciklamasi());
		product.setUrunAdi(newProduct.getUrunAdi());
		product.setUrunResmi(newProduct.getUrunResmi());
		return productDao.save(product);
	}


	@Override
	public String deleteProduct(int id) {
		productDao.deleteById(id);
		return ("silindi"+ id) ;
	}



	





	
	
	

	


	


	


	

}
