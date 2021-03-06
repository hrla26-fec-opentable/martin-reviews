# Technical Stack
- Development: MySQL | Express | React | Node.js
- Deployment: Docker Compose | EC2 | S3

# Description
TableIt is a full-stack application that I built with three other engineers. Our goal was to replicate OpenTable's product page, matching its front-end look and functionality as closely as possible. We each tackled different sections of the page, employing a microservice architecture in order to develop independently in vertical slices. My role in particular was to recreate the restaurant reviews sections, which included the reviews summary and reviews list components. Once our respective components were complete, we each deployed our own microservice and reverse-proxy server integrating everything in one single page application.

Notes:
- Since this microservice shares some CSS with its parent component, some styles may be off when run in isolation.
- Proxy server repo: https://github.com/hrla26-fec-table-it/martin-proxy-server

# Demos
I've listed a few links below showing both our overall end product and some features I built for my specific microservice.
- <a href="https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/gifs/tableit_overview.gif">Overview of our final product</a>
- <a href="https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/gifs/tableit_reviews_sort.gif">Sort reviews from dropdown</a>
- <a href="https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/gifs/tableit_reviews_graph_filters.gif">Filter reviews by clicking on bar graph</a>
- <a href="https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/gifs/tableit_reviews_filters.gif">Filter reviews by keyword</a>
- <a href="https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-fec-tableit/gifs/tableit_reviews_pagination.gif">Reviews pagination</a>
