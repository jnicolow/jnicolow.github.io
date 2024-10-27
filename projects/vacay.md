---
layout: project
type: project
image: img/vacay/vacay-square.png
title: "CoastVision"
date: 2024
published: true
labels:
  -Python
  - Machine Learning
  - Image Segmentation
  - Satellite Derived Shorelines
  - GitHub
summary: "CoastVision is an open-source Python framework geared towards generating satellite-derived shorelines (SDS) in PlanetScope imagery. Given a time window and an area of interest (AOI) CoastVision will download applicable PlanetScope satellite imagery, extract shorelines, and compute transect intersections."
---

CoastVision is inspired by <a href="https://github.com/kvos/CoastSat">CoastSat</a> and <a href="https://github.com/ydoherty/CoastSat.PlanetScope">CoastSat.PlanetScope</a> with the key differences being CoastVision's inclusion of an API to download PlanetScope imagery and how shoreline contours are extracted. CoastSat.PlanetScope classifies each pixel as white-water, water, sand, or other land; then using a thresholding algorithm such as peak fraction on the normalized difference water index. CoastVision classifies pixels as either land or water and then uses the marching squares algorithm to delineate a shoreline between the land and water classes.


<img class="img-fluid" src="../img/vacay/vacay-home-page.png">
 
Source: <a href="https://github.com/Climate-Resilience-Collaborative/CoastVision">https://github.com/Climate-Resilience-Collaborative/CoastVision</a>
