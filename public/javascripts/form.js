console.log('form.js is working')

$('.delete').on('click', function() {
    let id = $(this).parent().attr('data-id');
    axios.delete("http://localhost:3000/" + id);
    $(this).parent().remove();
});

//see updateContact comments in queries.js
$('.edit').on('click', function() {
    // let id = $(this).parent().attr('data-id');
    // axios.put("http://localhost:3000/" + id);

    //in class example:
    $(this).prev().removeAttr('readonly');
    $(this).prev().focus();
})

$('.input_item').on('change', function() {
    let id = parseInt($(this).parent().attr('data_id'));
    let val = $(this).val();
    $(this).attr('readonly', true);

    axios.patch("http://localhost:3000/" + id, {
        name: val,
        id: id
    })
});