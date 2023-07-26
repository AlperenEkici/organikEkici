package organikekici.backend.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import organikekici.backend.entities.concretes.RegisteredUsers;

public interface ReqisteredUserDao extends JpaRepository<RegisteredUsers,Integer>{

}
