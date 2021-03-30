var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/BOgrafiek/js/jsonData.json";
xmlhttp.open("GET",url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        var months = data.months_temperature.map(function(elem) {
            return elem.date;
        });
        
        var avg = data.months_temperature.map(function(elem) {
            return elem.avg;
        });
        var your = data.months_temperature.map(function(elem) {
            return elem.your;
        });

        
        var ctx = document.getElementById('canvas').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'Gemiddeld watergebruik',
                    data: avg,
                    backgroundColor: 'transparent',
                    borderColor: 'red',
                    borderWidth: 4
                },
                {
                    label: 'Jouw watergebruik',
                    data: your,
                    backgroundColor: 'transparent',
                    borderColor: 'blue',
                    borderWidth: 4
                }]
            },
            options: {
                elements:{
                    line:{
                        tension:0
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }

}
