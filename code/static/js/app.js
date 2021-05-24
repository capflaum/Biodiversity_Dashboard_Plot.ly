function buildMetadata(sample) {
    d3.json("./samples.json").then((data) => {
      var metadata = data.metadata;

      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      console.log(result);

      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
  
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
  
      buildGauge(result.wfreq);
    });
  }


function buildPlots(sample) {
    d3.json("./samples.json").then((sampleData) => {
        var samples = sampleData.samples;
        var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        
        //console.log(result);

        var otu_ids = result.otu_ids.slice(0, 10);
        var otu_labels = result.otu_labels.slice(0, 10);
        var otu_values = result.sample_values.slice(0, 10);

        // Incorrect
        // for(i=0; i<10; i++){
    
        //     var tenSamples = samples[i];
        //     console.log(tenSamples);

        //     var otuIds = tenSamples.otu_ids[i];
        //     labels.push(otuIds);

        //     var value = samples.sample_values[i];
        //     values.push(value);

        //     var otuLabels = tenSamples.otu_labels[i];
        //     hovertext.push(otuLabels);
        
        // console.log(otu_ids);

    var trace1 = {
        y: otu_ids.map(otuIds => `OTU ${otuIds}`).reverse(),
        x: otu_values.reverse(),
        hovertext: otu_labels.reverse(),

        type: "bar",
        orientation: "h",
        name: "Top 10 OTUs",
    };
    var data = [trace1];

    var layout = {
        autosize: true,
        title: "Top 10 OTUs",
    };

    Plotly.newPlot("bar", data, layout);

    // Build a Bubble Chart
    var bubbleLayout = {
        title: "Bacteria Cultures Per Sample",
        margin: { t: 0 },
        hovermode: "closest",
        xaxis: { title: "OTU ID" },
        margin: { t: 30}
      };
      var bubbleData = [
        {
          x: otu_ids,
          y: otu_values,
          text: otu_labels,
          mode: "markers",
          marker: {
            color: otu_ids,
            size: otu_values,
            
          }
        }
      ];
  
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    });
};
// Event Changing
// d3.select("#selDataset").on("change", nameInput);

// function nameInput() {
//     d3.json(`./samples.json`).then(function(sampleData){
//         var names = sampleData.names;
//         var menu = d3.selectAll("#selDataset");

//         for (i = 0; i < names.length; i++) {
//             menu.append("option").text(names[i]).property("value", names[i]);
//         };
//         const firstOtu = names[0];
//         buildPlots(firstOtu);
//     });
// };
// nameInput();

// d3.select("#selDataset").on("change", updatePlotly);

// function updatePlotly() {

// }

function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((sampleData) => {
      var sampleNames = sampleData.names;
  
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      buildPlots(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildPlots(newSample);
    buildMetadata(newSample);
  }

  init();
  

