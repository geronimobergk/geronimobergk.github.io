---
layout: page
permalink: /publications/
title: Publications
description: Peer-reviewed scholarly work
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="publications">

<h2>Journal Articles</h2>

{% bibliography --group_by year --group_order descending --query @article[selected=true]* %}

<h2>Conference Proceedings</h2>

{% bibliography --group_by year --group_order descending --query @inproceedings[selected=true]* %}

<h1>Book Chapters</h1>
<div class="post-description">Invited and professional contributions</div>

{% bibliography --group_by year --group_order descending --query @inbook[selected=true]* %}
</div>
