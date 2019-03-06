function parseVals(btn) {
        $(this).click((e) => {
            e.preventDefault();
            $.ajax({
                  url: 'ajtt/ajax_send_values',
                  method: 'POST',
                  data: { my_data: btn },
                  success: location.reload()
            })
        })
}

function restart() {
    $(this).click((e) =>{
        $.ajax({
            url: 'ajtt/restart',
            method: 'GET',
            success: location.reload()
        })
    })
}