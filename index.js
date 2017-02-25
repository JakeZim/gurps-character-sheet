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