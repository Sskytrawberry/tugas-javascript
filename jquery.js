// $('.dropdown-menu').click(function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     $(this).toggleClass('expan');
//     $("#" + $(e.target).attr('for')).prop('checked', true);
//   })

//   $(document).click(function(){
//     $('.dropdown-menu').removeClass('expan');
//   })

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
//       menu.addEventListener('click', function(e) {
//         e.preventDefault();
//         e.stopPropagation();
//         menu.classList.toggle('expan');
//         // let jurusan = ["APHP-1", "APHP-2", "APHP-3", "ATPH-1", "ATPH-2", "ATPH-3", "DKV-1", "DKV-2", "MKT-1", "MKT-2", "RPL", "TBKR", "TKR-1", "TKR-2", "TL-1", "TL-2", "TPM-1", ]
//         let targetInput = document.getElementById(e.target.getAttribute('for'));
//         if (targetInput) {
//           targetInput.checked = true;
//         }
//       });
//     });
  
//     document.addEventListener('click', function() {
//       document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
//         menu.classList.remove('expan');
//       });
//     });
//   });

// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
//     menu.addEventListener('click', function(e) {
//       e.preventDefault();
//       e.stopPropagation();
//       menu.classList.toggle('expan');
//       let targetInput = document.getElementById(e.target.getAttribute('for'));
//       console.log('Clicked label for: ', e.target.getAttribute('for')); 
//       if (targetInput) {
//         targetInput.checked = true;
//         console.log('Checked input id: ', targetInput.id); 
//       }
//     });
//   });

//   document.addEventListener('click', function() {
//     document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
//       menu.classList.remove('expan');
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
    menu.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      menu.classList.toggle('expan');
      let targetLabel = e.target.closest('label');
      if (targetLabel) {
        let targetInput = document.getElementById(targetLabel.getAttribute('for'));
        if (targetInput) {
          targetInput.checked = true;
        }
      }
    });
  });

  document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
      menu.classList.remove('expan');
    });
  });
});

  