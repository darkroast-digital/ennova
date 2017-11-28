// *********************************************************************
// *********************************************************************
// *********************************************************************

import grid from './components/Grid.vue';
import column from './components/Column.vue';
import box from './components/Box.vue';
import mediaobject from './components/MediaObject.vue';
import card from './components/Card.vue';
import notification from './components/Notification.vue';
import navbar from './components/Navbar.vue';
import btn from './components/Button.vue';
import modal from './components/Modal.vue';
import modaltrigger from './components/ModalTrigger.vue';
import field from './components/Field.vue';
import textfield from './components/Textfield.vue';

new Vue({
    el: '#app',
    delimiters: ['@{', '}'],
    components: {
        grid,    
        column, 
        box, 
        mediaobject, 
        card, 
        notification, 
        navbar, 
        btn, 
        modal,
        modaltrigger,
        field,
        textfield,
    }
});

// *********************************************************************
// *********************************************************************
// *********************************************************************

// var form = $('.form');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     var formData = new FormData($(this)[0]);

//     $.ajax({
//         url: $(form).attr('action'),
//         type: 'POST',
//         data: formData, 
//         async: false, 
//         cache: false,
//         contentType: false,
//         processData: false,
//         success: function (returndata) {
//             alert('success');
//         },
//         error: function () {
//             alert('error');
//         }
//     });
// });






