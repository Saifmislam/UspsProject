package bdd.usps.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class UspsLocators {
	
	@FindBy(xpath = "//a[@id='login-register-header']")
	public WebElement lnkLogin;
	
	
	@FindBy(xpath = "//input[@id='username']")
	public WebElement userNameLoc;
	
	
	@FindBy(xpath = "//input[@id='password']")
	public WebElement passLoc;
	
	@FindBy(xpath = "//button[@id='btn-submit']")
	public WebElement submitLoc;
	
	@FindBy(xpath = "//a[contains(text(),'Find Cities by ZIP')]")
	public WebElement findCity;
	
	
	@FindBy(xpath = "//a[@id='mail-ship-width']")
	public WebElement moveonmenu;
	

	@FindBy(xpath = "//a[contains(text(),'Look Up a ZIP Code')]")
	public WebElement Stamps;
	
	
	@FindBy(xpath = "//input[@id='tZip']")
	public WebElement txtZip;
	
	@FindBy(xpath = "//a[@id='cities-by-zip-code']")
	public WebElement submitZip;

	@FindBy(xpath = "//p[@class='row-detail-wrapper']")
	public WebElement txtCityName;
	
	@FindBy(xpath = "//li[@class='tool-calc']//a[contains(text(),'Calculate a Price')]")
	public WebElement txtCalculate;
	
	@FindBy(xpath = "//input[@id='option_1']")
	public WebElement txtPostcard;
	
	@FindBy(xpath = "//input[@id='quantity-0']")
	public WebElement smallQuant;
	
	@FindBy(xpath = "//input[@id='quantity-1']")
	public WebElement largeQuant;
	
	@FindBy(xpath = "//input[@class='btn btn-pcalc btn-default']")
	public WebElement clickCalc;
	
	@FindBy(xpath = "//div[@id='total']")
	public WebElement txtTotal;
	
	
	
}
