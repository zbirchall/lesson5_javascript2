function calculateTax(){
        /***********************************************************************************************  
        *   Purpose of the calculateTax method:  
        *   This method is executed when the 'Calculate Tax' button is clicked.  This method 
        *   gets the values the user enters into the textfield and dropdown menu using the 
        *   document.getElementById().value method, calculates the tax amount and tax rate (bracket)
        *   and displays the calculations in the HTML document using the getElementById() method.
        ***********************************************************************************************/
        
         var tax; //the tax calculated based on the filing status and income
         var taxRate; //the tax rate (bracket) based on the filing status and income
         
         //Retrieve the values the user enters and selects on the form
         var income = document.getElementById("incomeInput").value;
         var status = document.getElementById("filingStatus").value;
         
         
         //Calculate the tax amount and tax rate based on the filing status and income
         //0-Single, 1-Married Jointly, 2-Married Separately, and 3-Head of Household

        if (status == 0) { 
             // Compute tax for single filers
               if (income <= 9275){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 37650) {
                 tax = 9275 * 0.10 + (income - 9275) * 0.15;
                 taxRate = 15;
               }//end of else if
               else if (income <= 91150) {
                 tax = 9275 * 0.10 + (37650 - 9275) * 0.15 + (income - 37650) * 0.25;
                 taxRate = 25;
               } //end of else if
               else if (income <= 190150) {
                 tax = 9275 * 0.10 + (37650 - 9275) * 0.15 +
                       (91150 - 37650) * 0.25 + (income - 91150) * 0.28;
                 taxRate = 28;
               }//end of else if
               else if (income <= 413350) {
                 tax = 9275 * 0.10 + (37650 - 9275) * 0.15 +
                       (91150 - 37650) * 0.25 + (190150 - 91150) * 0.28 +
                       (income - 190150) * 0.33;
                 taxRate = 33;
               }//end of else if
               else if (income <= 415050) {
                  tax = 9275 * 0.10 + (37650 - 9275) * 0.15 +
                        (91150 - 37650) * 0.25 + (190150 - 91150) * 0.28 +
                        (413350 - 190150) * 0.33 + (income - 413350) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                  tax = 9275 * 0.10 + (37650 - 9275) * 0.15 +
                        (91150 - 37650) * 0.25 + (190150 - 91150) * 0.28 +
                        (413350 - 190150) * 0.33 + (415050 - 413350 ) * 0.35 + (income - 415050) * .396;
                  taxRate = 39.6;
               }//end of nested if
          }//end of single filer calculation
          
        
          /*******************************************************************************
             * Task 1:  Compute the tax for users' who file as "Married Jointly".  Also,
             *          set (or initialize) the tax rate for each bracket.  Refer 
             *          to the above example (single filer) and the assignment description
             *          to write the correct equation for this filing status.
             * 
             * HINT:    If the "status" is equivalent to the value '1', the user is filing 
             *          as "Married filing jointly or qualifying widow(er)".  
             * 
             *                       INSERT YOUR CODE BELOW!
          *******************************************************************************/
           
          else if(status == 1) {
                //INSERT YOUR CODE BELOW
                if (income <= 18550){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 75300) {
                 tax = 18550 * 0.10 + (income - 9275) * 0.15;
                 taxRate = 15;
               }//end of else if
               else if (income <= 151900) {
                 tax = 18550 * 0.10 + (75300 - 18550) * 0.15 + (income - 75300) * 0.25;
                 taxRate = 25;
               } //end of else if
               else if (income <= 231450) {
                 tax = 18550 * 0.10 + (75300 - 18550) * 0.15 +
                       (151900 - 75300) * 0.25 + (income - 151900) * 0.28;
                 taxRate = 28;
               }//end of else if
               else if (income <= 413350) {
                 tax = 18550 * 0.10 + (75300 - 18550) * 0.15 +
                       (151900 - 75300) * 0.25 + (231450 - 151900) * 0.28 +
                       (income - 231450) * 0.33;
                 taxRate = 33;
               }//end of else if
               else if (income <= 466950) {
                  tax = 18550 * 0.10 + (75300 - 18550) * 0.15 +
                        (151900 - 75300) * 0.25 + (231450 - 151900) * 0.28 +
                        (413350 - 231450) * 0.33 + (income - 413350) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                  tax = 18550 * 0.10 + (75300 - 18550) * 0.15 +
                        (151900 - 75300) * 0.25 + (231450 - 151900) * 0.28 +
                        (413350 - 231450) * 0.33 + (466950 - 413350 ) * 0.35 + (income - 466950) * .396;
                  taxRate = 39.6;
               }//end of nested if
  
  
  
  
          }//end of married file jointly calculation
          
          
          /*******************************************************************************
            * Task 2:  Compute the tax for users' who file as "Married Separately".  Also,
            *          set (or initialize) the tax rate for each bracket. Refer 
            *          to the above example (single filer) and the assignment description
            *          to write the correct equation for this filing status.
            * 
            * HINT:    If the "status" is equivalent to the value '2', the user is filing 
            *          as "Married filing separately."
            * 
            *                       INSERT YOUR CODE BELOW!
          *******************************************************************************/
                 
          else if(status == 2) {
                //INSERT YOUR CODE BELOW
                if (income <= 9275){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 37650) {
                 tax = 9275 * 0.10 + (income - 9275) * 0.15;
                 taxRate = 15;
               }//end of else if
               else if (income <= 75950) {
                 tax = 9275 * 0.10 + (37650 - 9275) * 0.15 + (income - 37650) * 0.25;
                 taxRate = 25;
               } //end of else if
               else if (income <= 115725) {
                 tax = 9275 * 0.10 + (37650 - 9275) * 0.15 +
                       (75950 - 37650) * 0.25 + (income - 75950) * 0.28;
                 taxRate = 28;
               }//end of else if
               else if (income <= 206675) {
                 tax = 9275 * 0.10 + (37650 - 9275) * 0.15 +
                       (75950 - 37650) * 0.25 + (115725 - 75950) * 0.28 +
                       (income - 115725) * 0.33;
                 taxRate = 33;
               }//end of else if
               else if (income <= 233475) {
                  tax = 9275 * 0.10 + (37650 - 9275) * 0.15 +
                        (75950 - 37650) * 0.25 + (115725 - 75950) * 0.28 +
                        (206675 - 115725) * 0.33 + (income - 206675) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                  tax = 9275 * 0.10 + (37650 - 9275) * 0.15 +
                        (75950 - 37650) * 0.25 + (115725 - 75950) * 0.28 +
                        (206675 - 115725) * 0.33 + (233475 - 206675) * 0.35 + (income - 233475) * .396;
                  taxRate = 39.6;
               }//end of nested if

             
             
             
          }//end of married file separately calculation
        
        
          /*******************************************************************************
            * Task 3:  Compute the tax for users' who file as "Head of Household".  Also,
            *          set (or initialize) the tax rate for each bracket. Refer 
            *          to the above example (single filer) and the assignment description
            *          to write the correct equation for this filing status.
            * 
            * HINT:    If the "status" is equivalent to the value '3', the user is filing 
            *          as "Head of Household."
            * 
            *                       INSERT YOUR CODE BELOW!
          *******************************************************************************/
          
          else if(status == 3) {
                //INSERT YOUR CODE BELOW
                if (income <= 13250){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 50400) {
                 tax = 13250 * 0.10 + (income - 13250) * 0.15;
                 taxRate = 15;
               }//end of else if
               else if (income <= 130150) {
                 tax = 13250 * 0.10 + (50400 - 13250) * 0.15 + (income - 50400) * 0.25;
                 taxRate = 25;
               } //end of else if
               else if (income <= 210800) {
                 tax = 13250 * 0.10 + (50400 - 13250) * 0.15 +
                       (130150 - 50400) * 0.25 + (income - 130150) * 0.28;
                 taxRate = 28;
               }//end of else if
               else if (income <= 413350) {
                 tax = 13250 * 0.10 + (50400 - 13250) * 0.15 +
                       (130150 - 50400) * 0.25 + (210800 - 130150) * 0.28 +
                       (income - 210800) * 0.33;
                 taxRate = 33;
               }//end of else if
               else if (income <= 441000) {
                  tax = 13250 * 0.10 + (50400 - 13250) * 0.15 +
                        (130150 - 50400) * 0.25 + (210800 - 130150) * 0.28 +
                        (413350 - 210800) * 0.33 + (income - 413350) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                  tax = 13250 * 0.10 + (50400 - 13250) * 0.15 +
                        (130150 - 50400) * 0.25 + (210800 - 130150) * 0.28 +
                        (413350 - 210800) * 0.33 + (441000 - 413350 ) * 0.35 + (income - 441000) * .396;
                  taxRate = 39.6;
               }//end of nested if
 
 

             
          }//end of head of household calculation
          
          
          /***************************************************************************************
           * Explanation of Code:
           *                This section of the code displays the result for the taxes calculated
           *                and the tax bracket the user falls in based on their income.
           * 
           *                The document.getElementById() method is used to identify the place in
           *                the HTML document the calculation result and the tax bracket will be 
           *                placed.  It uses the specific ids (taxEstimate, taxBracket), which 
           *                were defined above.  The toFixed() method is used to ensure a specified 
           *                number of digits appear after the decimal place for the value.
           *
           *                The innerHTML property used with the document.getElementById() sets or
           *                returns the HTML content (inner HTML) of an element.
           * ************************************************************************************/
           
           
          document.getElementById("taxEstimate").innerHTML = "Tax:  <b>$" + tax.toFixed(2) + "<b></br><br>";
          
          document.getElementById("taxBracket").innerHTML = "Tax Bracket: <b>" + taxRate + "</b>%";
          
      
}//end of calculateTax function  
      

          
/***********************************************************************************************  
*   Purpose of the clearButton method:  
*   This method is executed when the 'Clear Calculator' button is clicked.  It removes the tax 
*   calculations and the values the user typed in the form.  It also resets the filing status 
*   back to 'Single' filing status.
***********************************************************************************************/             

         
          /*************************************************************************************************************
            * Task 4:  Add the additional code needed to remove the calculation results displayed in the HTML page.
            *          Use the code below and the code from Lesson 4 Assignment for guidance on how to 
            *          complete this section.  
            * 
            * Explanation of Code:  
            *          This section of the code removes the results from the HTML page when the 'Clear Calculator' button
            *          is clicked.  The getElementById() method is used to find the element on the HTML page with 
            *          the specified id and overwrite the existing values with the empty string or a set value.  
            *          This clears out the results.
          *************************************************************************************************************/  
             
function clearButton () {
              //This code removes the taxable income the user entered in the textfield.
              document.getElementById("incomeInput").value = "";
              
              //This code resets the dropdown box to the "Single" filer status.
              document.getElementById("filingStatus").selectedIndex = 0;
              
             //INSERT YOUR CODE BELOW
              document.getElementById("filingStatus").selectedIndex = 1;
              
              document.getElementById("filingStatus").selectedIndex = 2;
              
              document.getElementById("filingStatus").selectedIndex = 3;
              




}//end of clearButton function
      