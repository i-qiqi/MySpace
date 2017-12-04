package space.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 首页控制器
 *
 */
@Controller
public class TemplateController{
    @RequestMapping(value = "/index")
    public String index() {
    	System.out.println("\033[1;92m\033[0;100m\033[31;1m*************templates/main*************\033[0m");
        return "main";
    }
 
    @RequestMapping(value = "/home")
    public String home() {
    	System.out.println("\033[1;92m\033[0;100m\033[31;1m*************templates/home*************\033[0m");
        return "home";
    }  
    @RequestMapping(value = "/login")
    public String toLogin() {
    	System.out.println("\033[1;92m\033[0;100m\033[31;1m*************templates/login*************\033[0m");
        return "login";
    }  
    @RequestMapping(value = "/hello")
    public String hello() {
        return "hello";
    }
    @RequestMapping(value = "/aboutMe")
    public String aboutMe() {
    System.out.println("\033[1;92m\033[0;100m\033[31;1m*************templates/aboutMe*************\033[0m");
        return "aboutMe";
    }
    @RequestMapping(value = "/album")
    public String thoseYears() {
    System.out.println("\033[1;92m\033[0;100m\033[31;1m*************templates/album*************\033[0m");
        return "album";
    }  
}
