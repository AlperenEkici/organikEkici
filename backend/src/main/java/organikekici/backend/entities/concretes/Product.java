package organikekici.backend.entities.concretes;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@Table(name = "urunler")
@AllArgsConstructor
@NoArgsConstructor
public class Product {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "urun_id")
	private int urunId;

	@Column(name = "urun_adi")
	private String urunAdi;

	@Column(name = "stok_adedi")
	private int stokAdedi;

	@Column(name = "birim_fiyati")
	private double birimFiyati;

	@Column(name = "satis_adedi")
	private int satisAdedi;
	
	@Column(name = "urun_açiklama")
	private String urunAciklamasi;
	
	@Column(name = "urun_resim")
	private String urunResmi;
	
	@Column(name = "kategori_id")
	private int kategoriId;
	
	






}