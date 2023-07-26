package organikekici.backend.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import organikekici.backend.entities.concretes.Product;

public interface ProductDao extends JpaRepository<Product, Integer>{
	Product getByUrunAdi(String name);
	Product getByUrunId(Integer id);
	
	//ile başlayan
	List<Product> getByUrunAdiStartsWith(String name);
	// içeren
	List<Product> getByUrunAdiContains(String name);
	
	@Query(value = "Select * From Urunler order by satis_adedi desc limit 5",nativeQuery = true)
	List<Product> getByEnÇokSatanUrunler();
	 
	@Query(value = "Select * From Urunler u where u.kategori_id= :urunKategoriId",nativeQuery = true)
	List<Product> getByCategory(@Param("urunKategoriId") Integer urunKategoriId);
	
	
	
	/*
	List<Product> getByCategorysIn(List<Integer> categories);
	
	//select * from urunler where urun_category_id in(1,2,3,4)
	
	
	@Query("From Product where urunAdi=:urunAdi and urunKategoriId=:urunKategoriId")
	List<Product> getByNameAndCategory(String urunAdi,int urunKategoriId);
	
	*/
}
