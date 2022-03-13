
describe('Cross Browser Testing', () =>{
        it('Test1', () => {

        //1.&2	Click on “Text Box” and enter valid details. And Click on SUBMIT button & Verify added details.
                
            cy.visit('https://demoqa.com/elements ')            
            cy.contains('Text Box').click()
            cy.get('input[id="userName"]').type('Sharmina Krishnananthan')
            cy.get('input[id="userEmail"]').type('sharmikrish4@gmail.com')
            cy.get('textarea[id="currentAddress"]').type('No 74-2/1, W.A.Silva Mawatha Colombo-06')
            cy.get('textarea[id="permanentAddress"]').type('No 74-2/1, W.A.Silva Mawatha Colombo-06')
            cy.get('button[id="submit"]').click();


            cy.get('p[id="name"]').should('have.text', 'Name:Sharmina Krishnananthan')
            cy.get('p[id="email"]').should('have.text','Email:sharmikrish4@gmail.com')
            cy.get('p[id="currentAddress"]').should('have.text','Current Address :No 74-2/1, W.A.Silva Mawatha Colombo-06 ')
            cy.get('p[id="permanentAddress"]').should('have.text','Permananet Address :No 74-2/1, W.A.Silva Mawatha Colombo-06');


        //5.	Click on “Radio Button” and click on “Impressive”. And verify selected item.
                cy.contains('Radio Button').click()
                cy.contains('Impressive').click()
                cy.get('p[class="mt-3"]').should('have.text', 'You have selected Impressive')

        //6.	Click on “Buttons” and click “Double click me”. And verify that button is clicked.
                cy.contains('Buttons').click()
                cy.contains('Double Click Me').dblclick()
                cy.get('p[id="doubleClickMessage"]').should('have.text', 'You have done a double click')

//7.	Click on “Buttons” and click “Right click me”. And verify that button is clicked.
                cy.contains('Buttons').click()
                cy.contains('Right Click Me').rightclick()
                cy.get('p[id="rightClickMessage"]').should('have.text', 'You have done a right click')


                //3. Click on “Check Box” and click on “Home” check box. And verify selected items.
            //4.	Click on “Check Box” and checked only “Desktop” and “Downloads”. And verify selected items.
                cy.contains('Check Box').click()
                cy.get('span[class="rct-checkbox"]').click()
                cy.get('svg[class="rct-icon rct-icon-expand-all"]').click()
                cy.contains('Desktop').click()
                cy.contains('Downloads').click()
                cy.get('div[id="result"]').should('have.text', 'You have selected :desktopnotescommandsdownloadswordFileexcelFile')
                


        //8.	Click on “Buttons” and click “Click me”. And verify that button is clicked.
                cy.contains('Buttons').click()
                cy.contains('Click Me').dblclick()
                
        
        }
            )


    })

    
   
