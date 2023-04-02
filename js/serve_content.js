$(document).ready(function () {
    $('#demo-pie-1').pieChart({
        barColor: '#f14836',
        trackColor: '#eee',
        lineCap: 'round',
        lineWidth: 4,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });

    $('#demo-pie-2').pieChart({
        barColor: '#f14836',
        trackColor: '#eee',
        lineCap: 'butt',
        lineWidth: 4,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });

    $('#demo-pie-3').pieChart({
        barColor: '#f14836',
        trackColor: '#eee',
        lineCap: 'square',
        lineWidth: 4,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });

    $('#demo-pie-4').pieChart({
        barColor: '#f14836',
        trackColor: '#eee',
        lineCap: 'round',
        lineWidth: 4,
        rotate: 90,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });
});