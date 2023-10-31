$(document).ready(function() {
    $('.video-btn').click(function() {
        var videoSrc = $(this).data("src");
        $("#video").attr('src', videoSrc);
        $('#myModal').modal('show');
    });

    // Stop video when modal is closed
    $('#myModal').on('hidden.bs.modal', function (e) {
        $("#video").attr('src', '');
    });
});