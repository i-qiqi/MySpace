package space.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import space.dao.UserMapper;
import space.entity.User;

@Service("userService")
public class UserServiceImpl implements UserService {
	
	@Autowired
	 private UserMapper userMapper;

	@Override
	public User findUser(String userName) {
		// TODO Auto-generated method stub
		return userMapper.findUser(userName);
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return userMapper.findAll();
	}

	@Override
	public void insertUser(User e) {
		// TODO Auto-generated method stub
		userMapper.insertUser(e);
	}

	@Override
	public void deleteUser(User e) {
		// TODO Auto-generated method stub
		userMapper.deleteUser(e);
	}

	@Override
	public void updateUser(User e) {
		// TODO Auto-generated method stub
		userMapper.updateUser(e);
	}

}
