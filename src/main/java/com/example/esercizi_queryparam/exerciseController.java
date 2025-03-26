package com.example.esercizi_queryparam;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class exerciseController {
    //GET /api/hello: Restituisce un messaggio di saluto generico.
    @GetMapping("/hello")
    public String hello(){
        return "Ciao!";
    }

    //GET /api/greet: Accetta un parametro di query name e restituisce un saluto personalizzato.
    @GetMapping("/greet")
    public String greet(@RequestParam String name){

        return "Ciao " + name + "!";
    }

    //GET /api/welcome: Accetta un parametro di query opzionale name e restituisce un messaggio di benvenuto con un valore predefinito se il parametro non è fornito.
    @GetMapping("/welcome")
    public String welcome(@RequestParam(value = "name", defaultValue = "Guest") String name){

        return "Benvenuto " + name + "!";
    }
}
