# Biodiversity - Plot.ly

![Bacteria by filterforge.com](Images/bacteria.jpg)

Build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Bar Chart

Using the D3 library to read in `samples.json`, a horizontal bar chart with a dropdown menu is created to display the top 10 OTUs found in that individual.

![image](https://user-images.githubusercontent.com/69134400/119413564-b312a700-bca2-11eb-8518-1b98b3fd23f4.png)

Each sample is also displayed with a bubble chart.

![image](https://user-images.githubusercontent.com/69134400/119413641-e35a4580-bca2-11eb-8abc-a32cc42fe0fc.png)
