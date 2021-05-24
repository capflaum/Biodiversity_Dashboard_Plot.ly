function buildMetadata(sample) {
    d3.json('./samples.json').then(function(sampleData){
        var metadata = sampleData.metadata;

        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        console.log(result);

        var PANEL = d3.select('#sample-metadata');

        PANEL.html("")
        
        Object.entries(result).forEach(([key,value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });

        buildGauge(result.wfreq);
    });
}

function buildPlot(sample) {
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
        console.log(tenSamples);
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

        for (i = 0; i < names.length; i++) {
            menu.append("option").text(names[i]).property("value", names[i]);
        };
        const firstOtu = names[0];
        buildPlot(firstOtu);
    });
};
nameInput();

d3.select("#selDataset").on("change", updatePlotly);

function updatePlotly() {

}

buildPlot();
  

