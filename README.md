# Earthquake Data Visualization with Leaflet
## Table of contents

* [Description](#Description)
* [Overview](#Overview)
* [Technologies Used](#Technologies-Used)
* [Image](#Image)
* [Questions](#Questions)
* [References](#References)

## Description

This project uses **Leaflet.js** and **D3.js** to visualize earthquake data provided by the United States Geological Survey (USGS). The goal of the project is to create an interactive map that displays the magnitude, depth, and location of earthquakes over the past 7 days.

The map plots data points dynamically, scaling their size based on earthquake magnitude and coloring them according to depth. A legend is included to help users interpret depth color coding, and tooltips provide additional details for each data point.

## Overview

1. The USGS provides earthquake data in a number of different formats, updated every 5 minutes. For this chellange I used the USGS GeoJSON FeedLinks and choose a dataset All Earthquakes link to visualize the data.

2. Imported and visualized the data by doing the following:

* Using Leaflet, created a map that plots all the earthquakes from my dataset based on their longitude and latitude.

- Data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. 
- Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

* Included popups that provide additional information about the earthquake when its associated marker is clicked.
* Create a legend that will provide context for your map data.

## Technologies Used
* Leaflet.js: For interactive maps and visualizations.
* D3.js: For fetching and handling GeoJSON data.
* HTML/CSS: For structuring and styling the application.

## Image

![App Preview](/Images/earthquake-visualization-map.gif)


## Questions

In case of any additional questions please visit my GitHub link: [Feda](https://github.com/Feda2020)

## References

* D3.js Tutorials (https://www.tutorialsteacher.com/d3js)
* Leaflet Documentation (https://leafletjs.com/reference.html)