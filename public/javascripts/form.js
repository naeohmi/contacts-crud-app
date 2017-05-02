console.log('form.js is working')

$('.delete').on('click', function() {
    let id = $(this).parent().attr('data-id');
    axios.delete("http://localhost:3000/" + id);
    $(this).parent().remove();
});

//see updateContact comments in queries.js
$('.edit').on('click', function() {
    let id = $(this).parent().attr('data-id');
    axios.put("http://localhost:3000/" + id);
});