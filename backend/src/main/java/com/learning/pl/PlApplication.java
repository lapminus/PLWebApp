package com.learning.pl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class PlApplication {

    public static void main(String[] args) {
        SpringApplication.run(PlApplication.class, args);
    }

}
