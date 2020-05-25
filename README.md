# ProtractorFrameworkDemo

## Official Understanding document
 	https://www.protractortest.org/#/
	https://www.protractortest.org/#/api


## Installation Guide

1. Install nvm (Node version Manager) for Windows
	https://github.com/coreybutler/nvm-windows/releases

2. Extract and install the node version required
	$ nvm -version
	$ node -v

3. Install protractor
	$ npm install -g protractor
	$ protractor --version

- Create a project directory
	mkdir testProject
	cd testProject

	// create package.json
    npm init 			
	
	//add the dependencies to the package.json file and run 
	npm install

	###FolderStructure

	-conf  (configuration file)
	-pages (Page objects)
	-specs (test cases)
		

	

### Protractor Locators

1. Angular Specific locators
2. Locators inherited from Webdriver

Global Functions:
element 	- find a single element
element.all 	- find multiple elements



## Angular Specific Locators

1. model : 
ng-model attributes is an angular locator.
It locates the element by model attribute value.

example:
	//HTML Code
	<span ng-modal="person.name"></span>

	// usage of locator
	element(by.model('person.name'));

2. binding :
ng-bind is also an angular locator. 
Binding locator is used to locate the lement using bind attribute value.

- Find an element by test binding.Does a partial match, 
so any elements bound to variables containing the input string will be returned.

example:
	//HTML Code
	<span ng-bind="person.email.id"></span>

	// usage of locator
	element(by.binding('person.email'));

3. exactBinding :
It is also used for locating elements using ng-bind locator, but with exact string/value.

example:
	//HTML Code
	<span ng-bind="person.email.id"></span>
	<span ng-bind="person.email"></span>

	// usage of locator
	element(by.binding('person.email'));

4. buttonText :
It is used to locate an element using the text on button tag.

example:
	//HTML Code
	<button>Save</button>

	// usage of locator
	element(by.buttonText('Save'));

	//HTML Code
	<button>
	<label>Save As</label>
	</button>

	// usage of locator
	element(by.buttonText('Save As'));

5. partialButtonText :
It can locate the element using the partial text present in button.

example:
	//HTML Code
	<button>Save As Text</button>

	// usage of locator
	element(by.buttonText('Save'));

	//HTML Code
	<button>
	<label>Save As File</label>
	</button>

	// usage of locator
	element(by.buttonText('Save As'));

6. repeater :
ng-repeat is angular locator.
Repeater locator is used to locate the element with ng-repeat attribute in it

example:
	//HTML Code
	<tr ng-repeat="product info">
	<td>{{prod.id}}</td>
	<td>{{prod.name}}</td>
	<td>{{prod.quantity}}</td>
	</tr>

	// usage of locator
	let eleID = element(by.repeater('product info').row(0));
	let eleName = element(by.repeater('product info').row(1));

7. exactRepeater :
It locates elemet with ng-repeat attribute with exact string present in it

example:
	//HTML Code
	<li ng-repeat="emp in employee_names"></li>

	// usage of locator
	element(by.exactRepeater('emp in employee_names'));

8. cssContainingText :
It locates elemet with text in it using css selector.

example:
	//HTML Code
	<ul>
	<li class="name">Mike</li>
	<li class="name">Stuart</li>
	</ul>

	// usage of locator
	element(by.cssContainingText('.name', 'Mike'));

9. Options :
It locates elemet with ng-option attribute in it.

example:
	//HTML Code
	<select ng-options="options in list">
	    <option value="0">Option 1</option>
	    <option value="1">Option 2</option>
	    <option value="2">Option 3</option>
	</select>

	// usage of locator
	let allOptions = element.all(by.options('options in list'));
	expect(allOptions.count()).toEquals(3);


## Locators inherited from Webdriver

- id 
- name
- classname
- tagName
- partialLinkText
- linkText
- CSS
- Xpath

example :

element(by.id("firstButton"))
element(by.name("Ban"))
element(by.className("banana"))
element(by.css("#firstButton"))
element(by.xpath("//button[@name="Ban"]"))


## Jasmine

- Jasmine is a unit testing framework to test JavaScript code.

- Jasmine is a BDD framework for testing JavaScript code

Why Unit Testing framework ?
- Jasmine does not depends on any other javaScript frameworks
- Jasmine does not need any DOM
- It is very clean and understandable
- open-source framework
- Can manage/control test scripts 

## Jasmine Test Building Blocks

==> Describe Block 	- Test Suite
==> IT Block 		- Test
==> beforeEach		- Executes multiple times before executing every IT block 
==> afterEach		- Executes multiple times after executing every IT block
==> beforeAll		- Executes one time before executing all IT block
==> afterAll		- Executes one time after executing all IT block

==> FDescribe Block 	- Focused describe block
==> XDescribe Block 	- Disable describe block
==> Flt Block 			- Focused it block
==> Xit Block 			- Disable it block


## expect & Matchers

- Create an expectation for a spec. for this we use matchers.
- toBe()
- toEqual()
- toBeNull()
- toContain()
- toBeGreaterThan()
- toBeGreaterThanOeEqual()
- toBeLessThan()
- toBeLessThanOrEqual()
- toBeNan()
- toBeNull()





























