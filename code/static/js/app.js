
// d3.json("samples.json").then(function(sampleData){
//     var samples = sampleData.samples;
//         Object.entries(samples).forEach(([d, i]) => {
//             var topIds = i.id;
//             var topOtus = i.otu_ids;
//             console.log(topOtus);
//             });
//         });

function buildPlot() {
    d3.json(`./samples.json`).then(function(sampleData){
        var samples = sampleData.samples;
        values = [];
        labels = [];
        hovertext = [];
        for(i=0; i<10; i++){
            var tenSamples = samples[i];
            var otuIds = tenSamples.otu_ids[i];
            labels.push(otuIds);
            var value = tenSamples.sample_values[i];
            values.push(value);
            var otuLabels = tenSamples.otu_labels[i];
            hovertext.push(otuLabels);
            // console.log(tenSamples);
            // console.log(otuIds);
            // console.log(labels);
        };

    var trace1 = {
        values: values,
        labels: labels,
        hovertext: hovertext,
        
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
// Event Changing
d3.select("#selDataset").on("change", nameInput);

function nameInput() {
    d3.json(`./samples.json`).then(function(sampleData){
        var names = sampleData.names;
        var menu = d3.selectAll("#selDataset");
        //names.map(function(option){
        for (i = 0; i < names.length; i++) {
            menu.append("option").text(names[i]).property("value", names[i]);
        };
        const firstUto = names[0];
        buildPlot(firstUto);
    });
};
nameInput();

d3.select("#selDataset").on("change", updatePlotly);

function updatePlotly() {

}

buildPlot();
  

