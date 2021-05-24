# Biodiversity Interactive Visualizations and Dashboard with Plot.ly

An interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Metadata

The demographic data on test subjects is read and featured in a panel along with their corresponding key-value data pairs. The data for a particular subject can be viewed by selecting the desired Test Subject ID from the dropdown menu. This event change will provide the correct data in the panel as well as change the other visualizations to represent the selected data. 

![image](https://user-images.githubusercontent.com/69134400/119420245-de03f780-bcb0-11eb-82e7-69778456727a.png) ![image](https://user-images.githubusercontent.com/69134400/119420248-e3614200-bcb0-11eb-9a0f-36dba1b4962f.png)


## Bar Chart

Using the D3 library to read in "samples.json", a horizontal bar chart is created to display the top 10 OTUs found in that individual.

![image](https://user-images.githubusercontent.com/69134400/119413564-b312a700-bca2-11eb-8518-1b98b3fd23f4.png)


## Bubble Chart

Each sample is also displayed with a bubble chart.

![image](https://user-images.githubusercontent.com/69134400/119415141-e145b600-bca5-11eb-85ec-c5dcabdee35b.png)
