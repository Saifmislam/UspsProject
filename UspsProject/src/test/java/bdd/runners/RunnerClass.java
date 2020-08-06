package bdd.runners;

import java.io.File;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.annotations.AfterClass;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = { "src/test/resources/featureFiles" }, glue = { "bdd.usps.stepDef",
		"bdd.usps.utilities" }, tags = { "@regression" }, plugin = { "pretty", "html:target/cucumber-htmlreport",
				"json:target/cucumber-report.json",
				"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html" }, monochrome = true)

public class RunnerClass extends AbstractTestNGCucumberTests {

	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File("config/config.xml"));
		Logger log = LogManager.getLogger(RunnerClass.class);
		log.info("This is info");
		log.error("This is error");
		log.warn("This is warn");
		log.fatal("This is fatal");
	}

}

//Tried Ways
//src/test/resource/FeatureFiles
//01.UspsLogin.feature
//02.UspsLookupZipCode.feature
//03.UspsCalculateAPrice.feature
//src/test/resource/FeatureFiles/02.UspsLookupZipCode.feature
//src/test/resource/FeatureFiles/01.UspsLogin.feature