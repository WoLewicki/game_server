$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();  // it won't submit with a form
        var name = $('#name');
        var pesel = $('#pesel');
        var items = {name: name.val(), pesel: pesel.val()};

        $.ajax({
            url: 'rejestracja/create_patient',
            method: 'POST',
            data: items,
            success: window.location.href = 'http://127.0.0.1:5000/eskulap/rejestracja'
        })
    })
});