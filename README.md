# Biodiversity Interactive Visualizations and Dashboard with Plot.ly

An interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

![image](https://user-images.githubusercontent.com/69134400/119420318-11df1d00-bcb1-11eb-9dc7-3ac55ebdf718.png)


## Metadata

The demographic data on test subjects is read and featured in a panel along with their corresponding key-value data pairs. The data for a particular subject can be viewed by selecting the desired Test Subject ID from the dropdown menu. This event change will provide the correct data in the panel as well as change the other visualizations to represent the selected data. 

![image](https://user-images.githubusercontent.com/69134400/119420245-de03f780-bcb0-11eb-82e7-69778456727a.png) ![image](https://user-images.githubusercontent.com/69134400/119420248-e3614200-bcb0-11eb-9a0f-36dba1b4962f.png)

## Bar Chart

Using the D3 library to read in "samples.json", a horizontal bar chart is created to display the top 10 OTUs found in that individual. In this image, the demographic data and visualization is provided for the selected ID: 945.

![image](https://user-images.githubusercontent.com/69134400/119420559-9fbb0800-bcb1-11eb-8648-09254764587c.png)

## Bubble Chart

Each selected sample is also displayed with a bubble chart.

![image](https://user-images.githubusercontent.com/69134400/119420426-54a0f500-bcb1-11eb-9106-f17960c7e9bd.png)
