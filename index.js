$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
          input.val(currentVal - 1).change();
        } else if(type == 'plus') {
          input.val(currentVal + 1).change();
        }
    } else {
        input.val(0);
    }
});

$('.dropdown-toggle').dropdown();

$('#addWeaponAcceptBtn').click(function(e){
  e.preventDefault();
  //TODO: Save the values and add them to the weapons list
  $('#addWeaponModal').modal('hide');
});