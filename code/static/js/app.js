// d3.json("samples.json").then(function(sampleData){
//     var samples = sampleData.samples;
//         Object.entries(samples).forEach(([d, i]) => {
//             var topIds = i.id;
//             var topOtus = i.otu_ids;
//             console.log(topOtus);
//             });
//         });

function buildPlot () {
    d3.json(`./samples.json`).then(function(sampleData){
        var samples = sampleData.samples;
        for(i=0; i<10; i++){
            var tenSamples = samples[i];
            var otuIds = tenSamples.otu_ids[i];
            var values = tenSamples.sample_values[i];
            
            // console.log(tenSamples);
            // console.log(otuIds);
            // console.log(values);
            
            
        };

    var trace1 = {
        values: values,
        labels: otuIds,
        hovertext: tenSamples.otu_labels,
        
        orientation: "h",
        type: "bar",
        name: "Top 10 OTUs",
    };

    var data = [trace1];

    var layout = {
        autosize: true,
        title: "Top 10 OTUs",
        xaxis: {title: `UTO ${otuIds}`},
        yaxis: {title: `Sample Values`}
    };

    Plotly.newPlot("bar", data, layout);
    
    });
};

buildPlot ();

// Event Changing

function nameInput() {
    d3.json(`./samples.json`).then(function(sampleData){
        var names = sampleData.names;
        var menu = d3.selectAll("#selDataset");
        var nameChoice = menu.append("option");

        //names.map(function(option){
        for (i = 0; i < names.length; i++) {
            option = menu.append("option");
            option.append("option").text(names[i]);
        };
    });
};
nameInput();

d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly() {

};
