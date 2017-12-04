package space;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("space.dao")
@SpringBootApplication
public class MySpaceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MySpaceApplication.class, args);
	}
}
