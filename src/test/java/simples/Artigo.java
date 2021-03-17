package simples;


//Os imports

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

//declarar os atributos
public class Artigo {
    String url; // Endere�o do site
    WebDriver driver;// Declarar o selenium ... driver - nome


    @Before // Iniciar o test... Antes do test
    public void iniciar(){
       url = "https://pt.wikipedia.org/"; // endere�o do site

        System.setProperty("webdriver.chrome.driver", "drivers/chrome/88/chromedriver.exe");// Onde est� o chrome driver
        driver = new ChromeDriver();// instanciar , chamar o selenium como Chrome driver


        driver. manage().window().maximize();// maximizar a janela do navegador
        driver. manage(). timeouts(). implicitlyWait(60000, TimeUnit.MILLISECONDS); // define uma espera implicita de 1 min, verificando o carregamento a cada milisegundo

    }
    @Test // O test ... Consultar... Durante
    public void consultarArtigo(){
        driver.get(url);//Abrir o site
        driver.findElement(By.id("searchInput")).sendKeys("Ovo de P�scoa"); // pesquisar por "Ovo de P�scoa"
        //driver.findElement(By.id("searchButton")).click();// clica na lupa
        driver.findElement(By.cssSelector("button.wvui-button")).click();

        //assertEquals("Ovo de P�scoa ? Wikip�dia, a enciclop�dia livre", driver.getTitle());//Validar o titulo

        assertTrue(driver.getTitle().contains("Ovo de P�scoa"));

    }
    @After //Depois do test... finalizar
    public void finalizar() {
        driver.quit();

    }

}
