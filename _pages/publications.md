---
layout: page
permalink: /publications/
title: Publications
description: Listed chronologically
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="publications">

<h2>Journal Articles</h2>

{% bibliography --group_by year --group_order descending --query @article[selected=true]* %}

<h2>Conference Proceedings</h2>

{% bibliography --group_by year --group_order descending --query @inproceedings[selected=true]* %}

<h2>Book Chapters</h2>

{% bibliography --group_by year --group_order descending --query @inbook[selected=true]* %}
</div>
