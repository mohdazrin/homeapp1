/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Back */
    
    
        /* button  .uib_w_1 */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_page */
         activate_page("#info"); 
         return false;
    });
    
        /* button  .uib_w_15 */
    $(document).on("click", ".uib_w_15", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_13"));  
         return false;
    });
    
        /* button  .uib_w_14 */
    $(document).on("click", ".uib_w_14", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_13"));  
         return false;
    });
    
        /* button  .uib_w_8 */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_9 */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_10"));  
         return false;
    });
    
        /* button  Pokemon Gallery */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#gallery"); 
         return false;
    });
    
        /* button  About Us */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_page */
         activate_page("#aboutus"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
