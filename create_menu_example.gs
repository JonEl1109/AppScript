/*
  Author: Jonathan Lum
  Date Modified: 2020-03-08
  Script Name: onOpen.gs

  Brief Description: This script created a new menu in the menu bar called 'Get Promos' containing the 'Get Promos' button
    that calls the function, 'manualSlidesTo Trix'.

  Notes:
    <no notes>
*/

// Create menu for easily allow for user to update Promo's
function onOpen() {  // function must be called onOpen() (default function that executes on open of Google Sheet.)

  var ui = SpreadsheetApp.getUi()

  ui.createMenu( 'Get Promos' )
    .addItem( 'Get Promos', 'manualSlidesToTrix' )
    .addToUi();

}  // End getPromos()
