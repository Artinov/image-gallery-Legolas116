$('#uploadForm').submit(function(e) {
    e.preventDefault();

$(this).ajaxSubmit({
    success: function(response) {
         console.log('image uploaded and form submitted');
    }
});
 

    $.ajax({
        url: "/upload",
        method: "POST",
        cache: false,
        contentType: false,
        processData: false,
        data: new FormData(jQuery('#uploadForm')[0])
    }).then(function(res) {
        console.log(res);
    })

    return false;
});