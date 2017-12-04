package space.dao;

import java.util.List;

import space.entity.User;

public interface UserMapper {
	public User findUser(String userName);
	public List<User> findAll();
	public void insertUser(User e);
	public void deleteUser(User e);
	public void updateUser(User e);
}
