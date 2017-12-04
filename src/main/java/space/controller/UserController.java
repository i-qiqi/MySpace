package space.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import space.entity.User;
import space.service.UserService;

@Controller
public class UserController {

	@Autowired
	private UserService userService;
	@RequestMapping(value="/users" , method = RequestMethod.GET)
	public ResponseEntity<List<User>> findAll(){
		System.out.println("\033[1;92m\033[0;100m\033[31;1m****************/users/******************\033[0m");
		List<User> list = userService.findAll();

		if(list.isEmpty()) {
			return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
		}else {
			return new ResponseEntity<List<User>>(list , HttpStatus.OK);
		}
	}
	@RequestMapping(value="/users/{userName}" , method = RequestMethod.GET)
	public ResponseEntity<User> findUser(@PathVariable("userName") String userName){
		System.out.println("\033[1;92m\033[0;100m\033[31;1m****************/users/{userName}****************** userName : \033[0m"+userName);
		User user = userService.findUser(userName);

		if(user == null) {
			return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
		}else {
			return new ResponseEntity<User>(user , HttpStatus.OK);
		}
	}
	
}
