# Final Integrated Project (FIP)
This is the FIP of MMED-1055-(01)-25W - Multimedia Authoring 2 and MMED-1056-(01)-25W - Web Development 1 of 25W.

## **Paper Plan**

**Variables :**   
- container [Get the element with ID posterInfoContainer, using to add buttons and paragraphs dynamically]  
- posterInfo [ An array of objects which contain "label" and "content" ]  
- closeMobileNav [ Using to closes the hamburger tab for mobile version ]  
- mobileMenu [ The whole hamburger tab of mobile version that will be shown or hidden ]  
- hamburgerBtn [Creating to opens the mobile menu]  
- button [ Creating dynamically  for each posterInfo item ]  
- paragraph [ Creating to show or hide content when the button is clicked. ]  
- isDisplay [ Using to track whether the content is currently shown or hidden ]

**Functions:**   
- toggleHamburgerMenu  
	Toggles the visibility of the mobile hamburger tab. If the menu is hidden, it is going to show up but if it’s visible, it is going to hide it.  
- arrow function inside forEach  
    Creating dynamically buttons and paragraphs from the posterInfo data.Both the button and the paragraph are added to the #posterInfoContainer element which is the area to display buttons and paragraphs.
	
**Event Listeners**  
- button (button was created in the loop) → "click" [ if a button is clicked, it toggles the related paragraph to show or hide the content ]
- closeMobileNav → "click" [ Calls toggleHamburgerMenu function to “hide” the hamburger tab for mobile version ] 
- hamburgerBtn → "click" [ Calls toggleHamburgerMenu function to “show” the hamburger tab for mobile version ]

## **Contributing**
1. Fork it
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request 

## **History**
Created on 2025/4/16

## **Credits**
Chanya Chumdee  
Liu Qihong

## **License**
MIT