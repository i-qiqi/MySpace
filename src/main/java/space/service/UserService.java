package space.service;

import java.util.List;

import space.entity.User;

public interface UserService {
	User findUser(String userName);
	List<User> findAll();
	void insertUser(User e);
	void deleteUser(User e);
	void updateUser(User e);
}
