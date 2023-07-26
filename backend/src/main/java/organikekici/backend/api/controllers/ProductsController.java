package organikekici.backend.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import organikekici.backend.business.abstracts.ProductService;
import organikekici.backend.entities.concretes.Product;


@RestController
@RequestMapping(value ="/products" )
@CrossOrigin
public class ProductsController {

	ProductService productService;
	
	@Autowired
	public ProductsController(ProductService productService) {
		super();
		this.productService = productService;
	}
	
	@GetMapping("/getAll")
	public List<Product> getAll(){
		return productService.getAll();
	}
	
	
	@GetMapping("/getByUrunAdi")
	public Product getByUrunAdi(String name) {
		return productService.getByUrunAdi(name);
	}
	
	@GetMapping("/urunAdiStartsWith")
	public List<Product> getByUrunAdiStartsWith(String name) {
		return productService.getByUrunAdiStartsWith(name);
	}
	
	@GetMapping("/urunAdiContains")
	public List<Product> getByUrunAdiContains(String name) {
		return productService.getByUrunAdiContains(name);
	}
	
	@GetMapping("/getByUrunId/{id}")
	public Product getByUrunId(@PathVariable Integer id) {
		return productService.getByUrunId(id) ;
	}
	
	
	@GetMapping("/getByEnÇokSatanUrunler")
	public List<Product> getByEnÇokSatanUrunler() {
		return productService.getByEnÇokSatanUrunler();
	}
	
	
	@GetMapping("/getByCategory")
	public List<Product> getByCategory(Integer urunKategoriId) {
		return productService.getByCategory(urunKategoriId);
	}
	
	@PostMapping("/add")
	public Product add(@RequestBody Product product) {
		return productService.add(product);
	}
	
	@PutMapping("/{id}")
	public Product updateProduct(@PathVariable int id,@RequestBody Product newProduct) {
		return productService.updateProduct(id, newProduct);	
	}
	@DeleteMapping("/{id}")
	public String deleteProduct(int id) {
		
		return  productService.deleteProduct(id);
	}
}
