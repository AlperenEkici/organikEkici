package organikekici.backend.business.abstracts;

import java.util.List;

import org.springframework.data.repository.query.Param;

import organikekici.backend.entities.concretes.Product;

public interface ProductService {
	List<Product> getAll();
	
	Product getByUrunAdi(String name);
	
	Product getByUrunId(Integer id);
	
	List<Product> getByUrunAdiStartsWith(String name);
	
	List<Product> getByUrunAdiContains(String name);
	
	List<Product> getByEnÇokSatanUrunler();
	
	
	List<Product> getByCategory(@Param("urunKategoriId") Integer urunKategoriId);

	Product add(Product product);
	
	Product updateProduct(int id,Product product);
	
	String deleteProduct(int id);
}
